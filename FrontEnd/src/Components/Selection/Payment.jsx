import React from "react";
import Navbar from "../../Utilities/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();

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

        handler: function (response) {
          console.log("Payment Successful:", response);

          alert("Payment Successful!");
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
        <section>
          <div className="container my-3 payment_hero">
            <div className="payment_layout">
              <p className="payment_heading">Make The Payment</p>
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
