import React, { useEffect, useState } from "react";
import Navbar from "../../Utilities/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingSummary = () => {
  const [showDetails, setShowDetails] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    showId,
    selectedSeats,
    seatTotal,
    selectedSnacks,
    selectedSeatDetails,
    snackQuantities,
    snackTotal,
  } = location.state || {};

  const grandTotal = (seatTotal || 0) + (snackTotal || 0);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin/getShow/${showId}`,
        );

        console.log("Show Details:", response.data.show);

        setShowDetails(response.data.show);
      } catch (error) {
        console.log("Error fetching show details:", error);
      }
    };

    if (showId) {
      fetchShowDetails();
    }
  }, [showId]);

  const handleProceedToPayment = () => {
    navigate("/payment", {
      state: {
        showId,
        selectedSeats,
        selectedSeatDetails,
        selectedSnacks,
        snackQuantities,
        seatTotal,
        snackTotal,
        grandTotal,
        showDetails,
      },
    });
  };

  // console.log("----- TOTAL VERIFICATION -----");
  // console.log("Seat Total:", seatTotal);
  // console.log("Snack Total:", snackTotal);
  // console.log("Grand Total:", grandTotal);

  // console.log("Show ID:", showId);
  // console.log("Selected Seats:", selectedSeats);
  // console.log("Selected Seats Details:", selectedSeatDetails);
  // console.log("Seat Total:", seatTotal);
  // console.log("Selected Snacks:", selectedSnacks);
  // console.log("Selected Snacks Quantity:", snackQuantities);
  // console.log("Snack Total:", snackTotal);

  return (
    <>
      <Navbar />
      <div className="container-fluid selectPayment_outer_board">
        <p>Your Movie Booking details</p>
        <div className="container mt-5 p-2 selectPayment_inner_board">
          <div className="row">
            <div className="col-md-4">
              {showDetails ? (
                <div className="selectPayment_image_box">
                  <p>Movie Poster</p>
                  <img
                    src={`http://localhost:5000/${showDetails.movie.imagePath.replace(
                      /\\/g,
                      "/",
                    )}`}
                    alt={showDetails.movie.title}
                    width={280}
                    height={300}
                  />
                </div>
              ) : (
                <p>No image found</p>
              )}
            </div>

            <div className="col-md-4">
              <div className="selectPayment_user_booking_details">
                <p>Booking Details</p>

                {showDetails ? (
                  <>
                    <div className="booking_details">
                      <span className="heading">Movie :</span>
                      <span className="content">
                        {showDetails.movie?.title}
                      </span>
                    </div>

                    <div className="booking_details">
                      <span className="heading">Theatre :</span>
                      <span className="content">
                        {showDetails.theatre?.name}
                      </span>
                    </div>

                    <div className="booking_details">
                      <span className="heading">Screen :</span>
                      <span className="content">
                        {showDetails.screen?.screenName}
                      </span>
                    </div>

                    <div className="booking_details">
                      <span className="heading">Screen type :</span>
                      <span className="content">
                        {showDetails.screen?.screenType}
                      </span>
                    </div>

                    <div className="booking_details">
                      <span className="heading">Show date :</span>
                      <span className="content">
                        {new Date(showDetails.showDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="booking_details">
                      <span className="heading">Show Time :</span>
                      <span className="content">
                        {showDetails.startTime} - {showDetails.endTime}
                      </span>
                    </div>
                  </>
                ) : (
                  <p>Loading booking details...</p>
                )}
              </div>
            </div>

            <div className="col-md-4">
              <div className="selectpayment_user_payment_details">
                <p>Payment Details</p>
                <div className="payment_details">
                  <span className="heading">Seat Total : </span>
                  <span className="content1">
                    x {selectedSeatDetails.length || 0}
                  </span>
                  <span className="content2">&#8377;{seatTotal}</span>
                </div>
                <div className="payment_details">
                  <span className="heading">Snack Total : </span>
                  <span className="content1">
                    x {selectedSnacks.length || 0}
                  </span>
                  <span className="content2">&#8377;{snackTotal}</span>
                </div>
                <div className="payment_details">
                  <span className="heading">Grand Total : </span>
                  <span className="content1"></span>
                  <span className="content2">&#8377;{grandTotal}</span>
                </div>
              </div>
              <div className="user_payment_btn">
                <button className="cancel_btn">Payment Cancel</button>
                <button
                  className="payment_btn"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="selectPayment_user_booking_details">
                <p>Selected Seats</p>
                {selectedSeatDetails && selectedSeatDetails.length > 0 ? (
                  selectedSeatDetails.map((seat) => (
                    <div key={seat._id}>
                      <div className="booking_details">
                        <span className="heading">SeatNumber :</span>
                        <span className="content">{seat.seatNumber}</span>
                      </div>
                      <div className="booking_details">
                        <span className="heading">Category :</span>
                        <span className="content">{seat.seatCategory}</span>
                      </div>
                      <div className="booking_details">
                        <span className="heading">Status :</span>
                        <span className="content">{seat.status}</span>
                      </div>
                      <div className="booking_details">
                        <span className="heading">Price :</span>
                        <span className="content"> ₹{seat.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No seat selected</p>
                )}
              </div>
            </div>

            <div className="col-md-4">
              <div className="selectPayment_user_booking_details">
                <p>Selected Snacks</p>
                {selectedSnacks?.length > 0 ? (
                  selectedSnacks.map((snack) => {
                    const quantity = snackQuantities?.[snack._id] || 0;
                    const itemTotal = snack.price * quantity;

                    return (
                      <div key={snack._id}>
                        <div className="booking_details">
                          <span className="heading">Name :</span>
                          <span className="content">{snack.name}</span>
                        </div>
                        <div className="booking_details">
                          <span className="heading">Price :</span>
                          <span className="content">₹{snack.price}</span>
                        </div>
                        <div className="booking_details">
                          <span className="heading">Quantity :</span>
                          <span className="content">{quantity}</span>
                        </div>
                        <div className="booking_details">
                          <span className="heading">Total :</span>
                          <span className="content"> ₹{itemTotal}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No snacks selected</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;
