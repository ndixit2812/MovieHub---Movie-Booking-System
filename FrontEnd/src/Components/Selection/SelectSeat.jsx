import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Utilities/Navbar";

const SelectSeat = () => {
  const { showId } = useParams();
  console.log("showId :" + showId);

  const [showSeats, setShowSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatDetails, setSelectedSeatDetails] = useState([]);

  const navigate = useNavigate();

  const seatTotal = showSeats
    .filter((seat) => selectedSeats.includes(seat.seatNumber))
    .reduce((total, seat) => total + seat.price, 0);

  useEffect(() => {
    const fetchShowSeats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getShowSeats/${showId}`,
        );

        console.log("Show Seats:", response.data);

        setShowSeats(response.data.showSeats);
      } catch (error) {
        console.error("Error fetching show seats:", error);
      }
    };

    fetchShowSeats();
  }, [showId]);

  const handleSeatClick = (seat) => {
    if (seat.status !== "Available") {
      return;
    }

    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat.seatNumber)) {
        return prevSeats.filter((seatNumber) => seatNumber !== seat.seatNumber);
      }

      return [...prevSeats, seat.seatNumber];
    });

    setSelectedSeatDetails((prevSeats) => {
      const exists = prevSeats.find(
        (item) => item.seatNumber === seat.seatNumber,
      );

      if (exists) {
        return prevSeats.filter((item) => item.seatNumber !== seat.seatNumber);
      }

      return [...prevSeats, seat];
    });
  };

  // Continue button functionality
  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/selectSnacks", {
      state: {
        showId,
        selectedSeats,
        selectedSeatDetails,
        seatTotal,
      },
    });
  };

  const diamondSeats = showSeats.filter(
    (seat) => seat.seatCategory === "Diamond",
  );

  const goldenSeats = showSeats.filter(
    (seat) => seat.seatCategory === "Golden",
  );

  const silverSeats = showSeats.filter(
    (seat) => seat.seatCategory === "Silver",
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid selectSeat_board">
        <div className="container select_seat_main_frame">
          <div className="seat_home_content">
            <div>
              <h2>Select Your Seat</h2>
              <p>
                {selectedSeats.length > 0
                  ? selectedSeats.join(", ")
                  : "No seat selected"}
              </p>
            </div>
          </div>
          <div className="seat_category_list">
            <div className="row my-4 p-2 seat_outer_body">
              <div className="col-md-12 seat_inner_body">
                <div className="row seat_row">
                  <div className="seat_feature">
                    <p className="category">Diamond - ₹350</p>
                  </div>
                  <div className="col-md-12">
                    <div className="seat_type_number">
                      {diamondSeats.map((seat) => (
                        <button
                          key={seat._id}
                          className={
                            selectedSeats.includes(seat.seatNumber)
                              ? "seat selected"
                              : `seat ${seat.status.toLowerCase()}`
                          }
                          onClick={() => handleSeatClick(seat)}
                          disabled={seat.status !== "Available"}
                        >
                          {seat.seatNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row seat_row">
                  <div className="seat_feature">
                    <p className="category">Golden - ₹250</p>
                  </div>
                  <div className="col-md-12">
                    <div className="seat_type_number">
                      {goldenSeats.map((seat) => (
                        <button
                          key={seat._id}
                          className={
                            selectedSeats.includes(seat.seatNumber)
                              ? "seat selected"
                              : `seat ${seat.status.toLowerCase()}`
                          }
                          onClick={() => handleSeatClick(seat)}
                          disabled={seat.status !== "Available"}
                        >
                          {seat.seatNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row seat_row">
                  <div className="seat_feature">
                    <p className="category">Silver - ₹150</p>
                  </div>
                  <div className="col-md-12">
                    <div className="seat_type_number">
                      {silverSeats.map((seat) => (
                        <button
                          key={seat._id}
                          className={
                            selectedSeats.includes(seat.seatNumber)
                              ? "seat selected"
                              : `seat ${seat.status.toLowerCase()}`
                          }
                          onClick={() => handleSeatClick(seat)}
                          disabled={seat.status !== "Available"}
                        >
                          {seat.seatNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_slot">
                <button className="continue_btn" onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSeat;
