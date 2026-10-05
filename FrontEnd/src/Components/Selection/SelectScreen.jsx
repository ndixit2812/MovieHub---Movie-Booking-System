import React, { useEffect, useState } from "react";
// import screen from "./ScreenData";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import axios from "axios";

const SelectScreen = () => {
  const [Screens, setScreens] = useState([]);
  const { movieId, theatreId } = useParams();

  console.log("Movie ID:", movieId);
  console.log("Theatre ID:", theatreId);

  const navigate = useNavigate();

  const handleGetScreensByShow = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/getScreensByMovieAndTheatre/${movieId}/${theatreId}`,
      );
      setScreens(response.data.screens);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetScreensByShow();
  }, []);

  return (
    <>
      <Navbar />
      <div className="selectScreen_board">
        <p className="heading">
          Select the <strong>Screen</strong> for Your <strong>Movie</strong>
        </p>
        <div className="card_frame">
          {Screens.map((item) => (
            <div className="card_frame_layout">
              <div className="screen_card_layout">
                <div className="screen_image">
                  <img
                    src={`http://localhost:5000/${item.image.replace(/\\/g, "/")}`}
                    alt="image"
                    width={380}
                    height={250}
                  />
                </div>
                <div className="screen_details">
                  <div className="screen_detail">
                    <span className="sreeen_heading">Screen Name : </span>
                    <span className="screen_content">{item.screenName}</span>
                  </div>
                  <div className="screen_detail">
                    <span className="sreeen_heading">Screen Type : </span>
                    <span className="screen_content">{item.screenType}</span>
                  </div>
                  <div className="screen_detail">
                    <span className="sreeen_heading">Total Seats : </span>
                    <span className="screen_content">{item.totalSeats}</span>
                  </div>

                  <div className="screen_btn">
                    <button
                      type="button"
                      // onClick={() => navigate(`/selectSeat/${item.name}`)}
                      onClick={() =>
                        navigate(
                          `/selectShow/${movieId}/${theatreId}/${item._id}`,
                        )
                      }
                    >
                      Select Screen
                    </button>
                  </div>
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
