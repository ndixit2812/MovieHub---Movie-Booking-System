import React from "react";
import Navbar from "./../../Utilities/Navbar";

const MakePayment = () => {
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
                    <div className="payment_box_title">Ticket Amount</div>
                    <div className="payment_box_value">₹700</div>
                  </div>
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Snacks Amount</div>
                    <div className="payment_box_value">₹550</div>
                  </div>
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Convenience Fee</div>
                    <div className="payment_box_value">₹30</div>
                  </div>
                  <hr />
                  <div className="payment_of_movieDetail">
                    <div className="payment_box_title">Total Amount</div>
                    <div className="payment_box_value">₹1280</div>
                  </div>
                </div>

                {/* second column */}
                <div className="payment_frame2">
                  <p className="payment_title">Payment Amount</p>

                  <div className="payment_of_movieDetail">
                    <div className="payment_final_amount">
                      <p className="final_amount">₹1280</p>
                    </div>
                  </div>
                  <hr />
                  <div className="final_payment_btn">
                    <button type="submit">Pay Now</button>
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

export default MakePayment;
