import React from "react";
import screen from "./ScreenData";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";

const SelectScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid selectScreen_board">
        <p className="heading">Select the Screen for Your Movie</p>
        <div className="container">
          {screen.map((item) => (
            <div className="row select_screen_main_frame">
              <div className="col-md-5">
                <div className="screen_image">
                  <img src={item.image} alt="image" width={380} height={250} />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center align-items-center ">
                <div className="screen_detail">
                  <span className="sreeen_heading">Name: </span>
                  <span className="screen_content">{item.name}</span>
                </div>
                <div className="screen_detail">
                  <span className="sreeen_heading">Type: </span>
                  <span className="screen_content">{item.type}</span>
                </div>
                <div className="screen_detail">
                  <span className="sreeen_heading">Seats: </span>
                  <span className="screen_content">{item.totalSeats}</span>
                </div>

                <div className="screen_btn">
                  <button
                    type="button"
                    onClick={() => navigate(`/selectSeat/${item.name}`)}
                  >
                    Select Screen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectScreen;
