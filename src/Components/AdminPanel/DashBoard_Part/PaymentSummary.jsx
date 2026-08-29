import React from "react";

const PaymentSummary = () => {
  return (
    <div className="paymentSummary_main_frame p-2">
      <p>Payment Summary</p>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <div className="payment_status_summary">
            <p>Succesful Payments</p>
          </div>
          <hr />
          <div className="payment_status_summary">
            <p>Pending Payments</p>
          </div>
          <hr />
          <div className="payment_status_summary">
            <p>Failed Payments</p>
          </div>
          <hr />
          <div className="payment_status_summary">
            <p>Refunded Payments</p>
          </div>
          <hr />
        </div>
        <div className="col-md-5">
          <div className="payment_amount1">
            <p>&#8377;7,42,400</p>
          </div>
          <div className="payment_amount2">
            <p>&#8377;7,42,800</p>
          </div>
          <div className="payment_amount3">
            <p>&#8377;12,700</p>
          </div>
          <div className="payment_amount4">
            <p>&#8377;5,500</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="payment_summary_total">
            <p>Total Collection</p>
            <p>&#8377;8,45,800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
