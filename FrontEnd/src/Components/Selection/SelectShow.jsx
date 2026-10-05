import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import axios from "axios";

const SelectShow = () => {
  const { movieId, theatreId, screenId } = useParams();

  const navigate = useNavigate();

  const [shows, setShows] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const fetchShows = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/getShows/${movieId}/${theatreId}/${screenId}`,
      );

      setShows(response.data.shows);

      // console.log("Shows:", response.data.shows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, [movieId, theatreId, screenId]);

  // Get unique dates
  const uniqueDates = [
    ...new Set(
      shows.map((show) => new Date(show.showDate).toISOString().split("T")[0]),
    ),
  ];

  // Shows for selected date
  const filteredShows = shows.filter(
    (show) =>
      new Date(show.showDate).toISOString().split("T")[0] === selectedDate,
  );

  const formatDate = (date) => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedShow(null);
  };

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  const handleContinue = () => {
    if (!selectedShow) {
      return;
    }

    navigate(`/selectSeat/${selectedShow._id}`);
  };

  return (
    <>
      <Navbar />

      <div className="selectShow_board mt-5">
        <div className="selectShow_header">
          <p>Select your preferred date and show timing</p>
        </div>

        {shows.length === 0 && (
          <p className="text-center mt-4">
            No shows available for this screen.
          </p>
        )}

        <div className="container date_section">
          <h4>Select Date</h4>

          <div className="date_buttons">
            {uniqueDates.map((date) => (
              <button
                key={date}
                type="button"
                className={`date_btn ${
                  selectedDate === date ? "selected" : ""
                }`}
                onClick={() => handleDateSelect(date)}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="container time_section">
            <h4>Select Show Timing</h4>

            <div className="time_buttons">
              {filteredShows.map((show) => (
                <button
                  key={show._id}
                  type="button"
                  className={`time_btn ${
                    selectedShow?._id === show._id ? "selected" : ""
                  }`}
                  onClick={() => handleShowSelect(show)}
                >
                  {show.startTime}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="selectShow_continue">
          <button
            type="button"
            disabled={!selectedShow}
            onClick={handleContinue}
          >
            Continue to Select Seats
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectShow;
