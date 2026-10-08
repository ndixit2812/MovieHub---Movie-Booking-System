const razorpay = require("../Configuration/razorpay");
const crypto = require("crypto");

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        message: "Amount is required",
      });
    }

    const options = {
      amount: amount * 100, // Razorpay accepts amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      message: "Razorpay order created successfully",
      order,
    });
  } catch (error) {
    console.log("Razorpay Order Error:", error);

    res.status(500).json({
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        message: "Payment details are required",
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return res.status(200).json({
        message: "Payment verified successfully",
        success: true,
      });
    }

    return res.status(400).json({
      message: "Payment verification failed",
      success: false,
    });
  } catch (error) {
    console.log("Payment Verification Error:", error);

    res.status(500).json({
      message: "Something went wrong during payment verification",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
};
