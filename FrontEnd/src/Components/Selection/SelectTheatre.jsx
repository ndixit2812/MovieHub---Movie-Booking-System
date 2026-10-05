import React, { useEffect, useState } from "react";
import Navbar from "../../Utilities/Navbar";
// import theatre from "./TheatreData";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SelectTheatre = () => {
  const [theatre, setTheatre] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleGetAllTheatre = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/user/getTheatresByMovie/${id}`,
      );
      setTheatre(response.data.theatres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllTheatre();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid selectShow_board">
        <p className="heading">Book The Theatre</p>
        <div className="container">
          {theatre.map((item) => (
            <div className="row select_show_main_frame">
              <div className="col-md-5">
                <img
                  src={`http://localhost:5000/${item.image.replace(/\\/g, "/")}`}
                  alt="image"
                  width={240}
                  height={200}
                />
              </div>
              <div className="col-md-7">
                <div className="show_details">
                  <div className="show_detail_content">
                    <span className="heading">Name:</span>
                    <span className="content">{item.name}</span>
                  </div>

                  <div className="show_detail_content">
                    <span className="heading">Address:</span>
                    <span className="content">{item.address}</span>
                  </div>

                  <div className="show_detail_content">
                    <span className="heading">City:</span>
                    <span className="content">{item.city}</span>
                  </div>

                  <div className="show_detail_content">
                    <span className="heading">State:</span>
                    <span className="content">{item.state}</span>
                  </div>

                  <div className="show_detail_content">
                    <span className="heading">PinCode:</span>
                    <span className="content">{item.pincode}</span>
                  </div>
                  <div className="show_details_btn">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/selectScreen/${id}/${item._id}`)
                      }
                    >
                      Select Theatre
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

export default SelectTheatre;
