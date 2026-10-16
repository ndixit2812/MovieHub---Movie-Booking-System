import React from "react";
import Navbar from "../../Utilities/Navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const {
    showId,
    selectedSeats,
    selectedSeatDetails,
    selectedSnacks,
    snackQuantities,
    seatTotal,
    snackTotal,
    grandTotal,
    showDetails,
  } = location.state || {};

  const convenienceFee = 30;

  const totalAmount = seatTotal + snackTotal + convenienceFee;

  console.log("Payment Data:", {
    showId,
    selectedSeats,
    selectedSeatDetails,
    selectedSnacks,
    snackQuantities,
    seatTotal,
    snackTotal,
    grandTotal,
    showDetails,
    convenienceFee,
    totalAmount,
  });

  const handlePayment = async () => {
    try {
      // 1. Create Razorpay order from backend
      const response = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: totalAmount,
        },
      );

      const { order } = response.data;

      console.log("Razorpay Order:", order);

      // 2. Razorpay Checkout options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,
        name: "MovieHub",
        description: "Movie Ticket Booking",
        order_id: order.id,

        handler: async function (response) {
          console.log("Payment Successful:", response);

          try {
            // 1. Verify Razorpay payment
            const verifyResponse = await axios.post(
              "http://localhost:5000/api/payment/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
            );

            if (!verifyResponse.data.success) {
              throw new Error("Payment verification failed");
            }

            console.log("Payment verified successfully");

            // 2. Get the logged-in user's ID
            const userId = localStorage.getItem("userId");

            if (!userId) {
              throw new Error("User ID not found. Please log in again.");
            }

            // 3. Prepare the selected seats
            const seats = selectedSeatDetails.map((seat) => ({
              seatNumber: seat.seatNumber,
              seatCategory: seat.seatCategory,
              price: seat.price,
            }));

            // 4. Prepare selected snacks
            const snacks = selectedSnacks
              .filter((snack) => (snackQuantities[snack._id] || 0) > 0)
              .map((snack) => ({
                snack: snack._id,
                quantity: snackQuantities[snack._id],
              }));

            // 5. Create booking after payment verification

            const bookingResponse = await axios.post(
              "http://localhost:5000/api/booking/createBooking",
              {
                showId,
                seats,
                snacks,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            );

            if (bookingResponse.data.success) {
              console.log("Booking Created:", bookingResponse.data.booking);

              navigate("/myBooking", { replace: true });
            }
          } catch (error) {
            console.error(
              "Payment or Booking Error:",
              error.response?.data || error.message,
            );

            alert(
              "Payment may have succeeded, but booking confirmation failed. Please check your booking before retrying payment.",
            );
          }
        },

        prefill: {
          name: "MovieHub User",
          email: "test@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#3399cc",
        },
      };

      // 3. Open Razorpay popup
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Payment Error:", error);

      alert("Something went wrong while creating payment.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="payment_page p-3">
        <p className="payment_heading">Make The Payment</p>
        <section>
          <div className="container my-3 payment_hero">
            <div className="payment_layout">
              <div className="payment_layout_frame">
                <div className="payment_frame1">
                  <p className="payment_title">Moviehub</p>

                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Seats Amount</div>
                    <div className="payment_box_value">₹{seatTotal}</div>
                  </div>
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Snacks Amount</div>
                    <div className="payment_box_value">₹{snackTotal}</div>
                  </div>
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Convenience Fee</div>
                    <div className="payment_box_value">₹{convenienceFee}</div>
                  </div>
                  <hr />
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Total Amount</div>
                    <div className="payment_box_value">₹{totalAmount}</div>
                  </div>
                </div>

                {/* second column */}
                <div className="payment_frame2">
                  <p className="payment_title">Payment Amount</p>

                  <div className="payment_of_movieDetail">
                    <div className="payment_final_amount">
                      <p className="final_amount">₹{totalAmount}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="final_payment_btn">
                    <button onClick={handlePayment}>Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Payment;
