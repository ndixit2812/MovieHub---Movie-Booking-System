import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import items from "./SeatData";

const SelectSeat = () => {
  const { name } = useParams();
  console.log(name);

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container-fluid selectSeat_board">
        <p>Book Available Seats from {name} </p>
        <div className="container select_seat_main_frame">
          <div className="seat_home_image">
            <img src="/Seat/Seat1.png" alt="image" width={620} height={340} />
          </div>
          <div className="seat_category_list">
            <div className="row my-4 p-2 seat_outer_body">
              <p className="seat_slot">Seats Slot</p>
              <div className="col-md-12 seat_inner_body">
                {items.map((item) => (
                  <div className="row seat_row">
                    <div className="col-md-2">
                      <div className="seat_feature">
                        <p className="category">{item.category}</p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="seat_feature">
                        <p className="price">Price: {item.price}</p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="seat_feature">
                        <p className="rows">Row: {item.row}</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="seat_type_number">
                        {item.seatNumber.map((seat) => (
                          <button className="seat_btn" key={seat}>
                            {seat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bottom_slot">
                <button
                  className="nextPage_btn"
                  onClick={() => navigate("/selectSnacks")}
                >
                  Next
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
