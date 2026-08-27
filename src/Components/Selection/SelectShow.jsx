import React from "react";
import Navbar from "../../Utilities/Navbar";
import theatre from "./TheatreData";
import { useNavigate, useParams } from "react-router-dom";

const SelectShow = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid selectShow_board">
        <p className="heading">Book The Theatre</p>
        <div className="container">
          {theatre.map((item) => (
            <div className="row select_show_main_frame">
              <div className="col-md-5">
                <img src={item.image} alt="image" width={300} height={250} />
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
                      onClick={() => navigate(`/selectScreen/${item.id}`)}
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

export default SelectShow;
