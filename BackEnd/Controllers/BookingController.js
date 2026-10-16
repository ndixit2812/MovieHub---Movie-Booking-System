const Booking = require("../Modals/BookingModal");
const ShowSeat = require("../Modals/ShowSeatModal");
const Snack = require("../Modals/SnacksModal");
const crypto = require("crypto");
const razorpay = require("../Configuration/razorpay");

const createBooking = async (req, res) => {
  // Keep this outside try so catch can access it.
  const claimedSeatIds = [];

  try {
    const {
      showId,
      seats,
      snacks = [],
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const userId = req.user.userId;

    // 1. Validate required booking and payment details.
    if (
      !userId ||
      !showId ||
      !Array.isArray(seats) ||
      seats.length === 0 ||
      !Array.isArray(snacks) ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Required booking or payment details are missing",
      });
    }

    // 2. Validate seat numbers and reject duplicates.
    const seatNumbers = seats.map((seat) => seat?.seatNumber);

    if (
      seatNumbers.some(
        (number) => typeof number !== "string" || !number.trim(),
      ) ||
      new Set(seatNumbers).size !== seatNumbers.length
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or duplicate seats selected",
      });
    }

    // 3. Verify Razorpay signature.
    if (
      !process.env.RAZORPAY_KEY_SECRET ||
      !/^[a-f0-9]{64}$/i.test(razorpay_signature)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const signaturesMatch = crypto.timingSafeEqual(
      Buffer.from(generatedSignature, "hex"),
      Buffer.from(razorpay_signature, "hex"),
    );

    if (!signaturesMatch) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // 4. Prevent duplicate bookings for the same payment.
    const existingBooking = await Booking.findOne({
      razorpayPaymentId: razorpay_payment_id,
    });

    if (existingBooking) {
      return res.status(200).json({
        success: true,
        message: "Booking already exists for this payment",
        booking: existingBooking,
      });
    }

    // 5. Fetch payment details from Razorpay.
    const payment = await razorpay.payments.fetch(razorpay_payment_id);

    if (
      payment.order_id !== razorpay_order_id ||
      payment.status !== "captured" ||
      payment.currency !== "INR"
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment is not successfully captured",
      });
    }

    // 6. Read the actual available seats for this show.
    const availableSeats = await ShowSeat.find({
      show: showId,
      seatNumber: { $in: seatNumbers },
      status: "Available",
    });

    if (availableSeats.length !== seatNumbers.length) {
      return res.status(409).json({
        success: false,
        message: "One or more selected seats are unavailable",
      });
    }

    // Calculate seat amount using database prices.
    const seatAmount = availableSeats.reduce(
      (total, seat) => total + seat.price,
      0,
    );

    // 7. Validate snacks and use database prices.
    const requestedSnacks = snacks.map((item) => ({
      snackId: item?.snack,
      quantity: item?.quantity,
    }));

    if (
      requestedSnacks.some(
        (item) =>
          !item.snackId ||
          !Number.isInteger(item.quantity) ||
          item.quantity < 1,
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid snack selection",
      });
    }

    const snackIds = requestedSnacks.map((item) => item.snackId);

    if (new Set(snackIds.map(String)).size !== snackIds.length) {
      return res.status(400).json({
        success: false,
        message: "Duplicate snack entries are not allowed",
      });
    }

    const snackDocuments = requestedSnacks.length
      ? await Snack.find({
          _id: { $in: snackIds },
          status: "Active",
        })
      : [];

    if (snackDocuments.length !== requestedSnacks.length) {
      return res.status(400).json({
        success: false,
        message: "One or more selected snacks are unavailable",
      });
    }

    const bookingSnacks = requestedSnacks.map((item) => {
      const snack = snackDocuments.find(
        (document) => document._id.toString() === String(item.snackId),
      );

      return {
        snack: snack._id,
        name: snack.name,
        quantity: item.quantity,
        price: snack.price,
      };
    });

    const snackAmount = bookingSnacks.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const convenienceFee = 30;
    const totalAmount = seatAmount + snackAmount + convenienceFee;

    // Razorpay amounts are in paise; booking amounts are in rupees.
    if (payment.amount !== Math.round(totalAmount * 100)) {
      return res.status(400).json({
        success: false,
        message: "Payment amount does not match booking total",
      });
    }

    // 8. Atomically claim each seat.
    // Another request may claim a seat after the availability check.
    for (const seatNumber of seatNumbers) {
      const claimedSeat = await ShowSeat.findOneAndUpdate(
        {
          show: showId,
          seatNumber,
          status: "Available",
        },
        {
          $set: { status: "Booked" },
        },
        { returnDocument: "after" },
      );

      if (!claimedSeat) {
        await ShowSeat.updateMany(
          {
            _id: { $in: claimedSeatIds },
            status: "Booked",
          },
          { $set: { status: "Available" } },
        );

        claimedSeatIds.length = 0;

        return res.status(409).json({
          success: false,
          message: `Seat ${seatNumber} is no longer available`,
        });
      }

      claimedSeatIds.push(claimedSeat._id);
    }

    // 9. Retrieve the claimed seat details from the database.
    const claimedSeats = await ShowSeat.find({
      _id: { $in: claimedSeatIds },
    });

    const claimedSeatDetails = seatNumbers.map((seatNumber) => {
      const seat = claimedSeats.find((item) => item.seatNumber === seatNumber);

      if (!seat) {
        throw new Error("Unable to retrieve claimed seat details");
      }

      return {
        seatNumber: seat.seatNumber,
        seatCategory: seat.seatCategory,
        price: seat.price,
      };
    });

    // Recalculate using the seats actually claimed.
    const claimedSeatAmount = claimedSeatDetails.reduce(
      (total, seat) => total + seat.price,
      0,
    );

    if (
      claimedSeatAmount !== seatAmount ||
      payment.amount !==
        Math.round((claimedSeatAmount + snackAmount + convenienceFee) * 100)
    ) {
      await ShowSeat.updateMany(
        {
          _id: { $in: claimedSeatIds },
          status: "Booked",
        },
        { $set: { status: "Available" } },
      );

      claimedSeatIds.length = 0;

      return res.status(409).json({
        success: false,
        message: "Seat prices changed. Please try again",
      });
    }

    // 10. Create the confirmed booking.
    const booking = await Booking.create({
      user: userId,
      show: showId,
      seats: claimedSeatDetails,
      snacks: bookingSnacks,
      seatAmount: claimedSeatAmount,
      snackAmount,
      convenienceFee,
      totalAmount: claimedSeatAmount + snackAmount + convenienceFee,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      paymentStatus: "Paid",
      bookingStatus: "Confirmed",
    });

    // Booking saved successfully; do not roll back these seats.
    claimedSeatIds.length = 0;

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);

    // Best-effort rollback if booking creation failed.
    if (claimedSeatIds.length > 0) {
      try {
        await ShowSeat.updateMany(
          {
            _id: { $in: claimedSeatIds },
            status: "Booked",
          },
          { $set: { status: "Available" } },
        );
      } catch (rollbackError) {
        console.error("Seat Rollback Error:", rollbackError);
      }
    }

    return res.status(500).json({
      success: false,
      message: "Unable to create booking",
    });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const userId = req.user.userId;

    const bookings = await Booking.find({ user: userId })
      .populate({
        path: "show",
        populate: [{ path: "movie" }, { path: "theatre" }, { path: "screen" }],
      })
      .populate("snacks.snack")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Get My Bookings Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch your bookings",
    });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "userName email")
      .populate({
        path: "show",
        populate: [{ path: "movie" }, { path: "theatre" }, { path: "screen" }],
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Get All Bookings Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch all bookings",
    });
  }
};

module.exports = { createBooking, getMyBookings, getAllBookings };
