// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../../Utilities/Navbar";
// import items from "./SeatData";

// const SelectSeat = () => {
//   const { name } = useParams();
//   console.log(name);

//   const navigate = useNavigate();
//   return (
//     <>
//       <Navbar />
//       <div className="container-fluid selectSeat_board">
//         <p>Book Available Seats from {name} </p>
//         <div className="container select_seat_main_frame">
//           <div className="seat_home_image">
//             <img src="/Seat/Seat1.png" alt="image" width={620} height={340} />
//           </div>
//           <div className="seat_category_list">
//             <div className="row my-4 p-2 seat_outer_body">
//               <p className="seat_slot">Seats Slot</p>
//               <div className="col-md-12 seat_inner_body">
//                 {items.map((item) => (
//                   <div className="row seat_row">
//                     <div className="col-md-2">
//                       <div className="seat_feature">
//                         <p className="category">{item.category}</p>
//                       </div>
//                     </div>

//                     <div className="col-md-2">
//                       <div className="seat_feature">
//                         <p className="price">Price: {item.price}</p>
//                       </div>
//                     </div>

//                     <div className="col-md-2">
//                       <div className="seat_feature">
//                         <p className="rows">Row: {item.row}</p>
//                       </div>
//                     </div>

//                     <div className="col-md-6">
//                       <div className="seat_type_number">
//                         {item.seatNumber.map((seat) => (
//                           <button className="seat_btn" key={seat}>
//                             {seat}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="bottom_slot">
//                 <button
//                   className="nextPage_btn"
//                   onClick={() => navigate("/selectSnacks")}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SelectSeat;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SelectSeat = () => {
  const [showSeats, setShowSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const navigate = useNavigate();

  const seatTotal = showSeats
    .filter((seat) => selectedSeats.includes(seat.seatNumber))
    .reduce((total, seat) => total + seat.price, 0);

  const showId = "6aae82968dfd55712c592a28";

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
  }, []);

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
    <div>
      <h2>Select Your Seat</h2>
      <p>
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "No seat selected"}
      </p>
      <div className="seat-container">
        <h4>Diamond - ₹350</h4>

        <div className="seat-row">
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

        <h4>Golden - ₹250</h4>

        <div className="seat-row">
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

        <h4>Silver - ₹150</h4>

        <div className="seat-row">
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
        <button onClick={handleContinue}>Continue</button>
      </div>
      {/* -----------------------------------------------------------------------------------------------
      <h4>Diamond - ₹350</h4>

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

      <h4>Golden - ₹250</h4>

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

      <h4>Silver - ₹150</h4>

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
      ))}*/}
    </div>
  );
};

export default SelectSeat;
