import React from "react";
import Navbar from "../../Utilities/Navbar";
import { useNavigate } from "react-router-dom";

const SelectPayment = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid selectPayment_outer_board">
        <div className="container my-3 p-2 selectPayment_inner_board">
          <p>Your Movie Booking details</p>
          <div className="row">
            <div className="col-md-4">
              <div className="selectPayment_image_box">
                <img
                  src="/Movies/m0.jpg"
                  alt="image"
                  width={280}
                  height={400}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="selectPayment_user_booking_details">
                <p>Booking Details</p>
                <div className="booking_details">
                  <span className="heading">Movie :</span>
                  <span className="content"> The Dark Knight</span>
                </div>
                <div className="booking_details">
                  <span className="heading">Theatre :</span>
                  <span className="content"> PVR Cinemax</span>
                </div>
                <div className="booking_details">
                  <span className="heading">Screen :</span>
                  <span className="content"> Screen 2</span>
                </div>
                <div className="booking_details">
                  <span className="heading">Seats :</span>
                  <span className="content"> A1, A2</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="selectpayment_user_payment_details">
                <p>Payment Details</p>
                <div className="payment_details">
                  <span className="heading">Ticket Price : </span>
                  <span className="content1"> x 2 </span>
                  <span className="content2">&#8377;700</span>
                </div>
                <div className="payment_details">
                  <span className="heading">L. pop corn : </span>
                  <span className="content1">x 1 </span>
                  <span className="content2">&#8377;250</span>
                </div>
                <div className="payment_details">
                  <span className="heading">Cold Coffee : </span>
                  <span className="content1"> x 1 </span>
                  <span className="content2">&#8377;180</span>
                </div>
                <div className="payment_details">
                  <span className="heading">Total : </span>
                  <span className="content1"></span>
                  <span className="content2">&#8377;1130</span>
                </div>
              </div>
              <div className="user_payment_btn">
                <button className="cancel_btn">Payment Cancel</button>
                <button
                  className="payment_btn"
                  onClick={() => navigate("/makePayment")}
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPayment;
