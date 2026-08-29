import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import snacks from "./SnacksData";

const SelectSnacks = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid selectSnacks_board">
        <div className="header">
          <span className="span1">Add Some Snacks in your Show</span>
          <span className="span2">
            Do not Want<Link to="/selectPayment">Skip</Link>
          </span>
        </div>
        <div className="container my-5 snack_board">
          {snacks.map((item) => (
            <div className="row select_snack_main_frame ">
              <div className="col-md-4">
                <div className="snack_image">
                  <img src={item.image} alt="image" width={200} height={200} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="snack_content">
                  <p>Name: {item.name}</p>
                  <p>Price: {item.price}</p>
                  <p>isAvailable {item.isAvailable}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="snack_quantity">
                  <span className="snack_quantity_minus">-</span>
                  <span className="snack_quantity_count">0</span>
                  <span className="snack_quantity_plus">+</span>
                </div>
                <div className="snack_add_btn">
                  <button type="submit">Add Snacks</button>
                </div>
              </div>
            </div>
          ))}

          <div className="snack_boards_btn">
            <button onClick={() => navigate("/selectPayment")}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSnacks;
