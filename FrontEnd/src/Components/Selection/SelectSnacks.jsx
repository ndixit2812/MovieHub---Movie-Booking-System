import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import snacks from "./SnacksData";

const SelectSnacks = () => {
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [snackQuantities, setSnackQuantities] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const { showId, selectedSeats, seatTotal } = location.state || {};

  // selct snacks functionality
  // const handleSnackClick = (snack) => {
  //   setSelectedSnacks((prevSnacks) => {
  //     const exists = prevSnacks.find((item) => item.id === snack.id);

  //     if (exists) {
  //       return prevSnacks.filter((item) => item.id !== snack.id);
  //     }

  //     return [...prevSnacks, snack];
  //   });
  // };

  const handleSnackClick = (snack) => {
    setSelectedSnacks((prevSnacks) => {
      const exists = prevSnacks.find((item) => item.id === snack.id);

      if (exists) {
        return prevSnacks.filter((item) => item.id !== snack.id);
      }

      return [...prevSnacks, snack];
    });

    setSnackQuantities((prev) => ({
      ...prev,
      [snack.id]: prev[snack.id] || 1,
    }));
  };

  // Calculating snacks price which are added
  const snackTotal = selectedSnacks.reduce(
    (total, snack) => total + snack.price * (snackQuantities[snack.id] || 0),
    0,
  );

  // Calculating amount seat price & snack price
  const grandTotal = seatTotal + snackTotal;

  // Continue button functionality
  const handleContinue = () => {
    // booking - summary;
    navigate("/selectPayment", {
      state: {
        showId,
        selectedSeats,
        seatTotal,
        selectedSnacks,
        snackTotal,
      },
    });
  };

  // functionality to increase snack quantity
  const handleIncrease = (snackId) => {
    setSnackQuantities((prev) => ({
      ...prev,
      [snackId]: (prev[snackId] || 0) + 1,
    }));
  };

  // functionality to decease snack quantity
  const handleDecrease = (snackId) => {
    setSnackQuantities((prev) => {
      const currentQuantity = prev[snackId] || 0;
      const newQuantity = Math.max(currentQuantity - 1, 0);

      if (newQuantity === 0) {
        setSelectedSnacks((prevSnacks) =>
          prevSnacks.filter((snack) => snack.id !== snackId),
        );
      }

      return {
        ...prev,
        [snackId]: newQuantity,
      };
    });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid selectSnacks_board">
        <div className="header mt-5">
          <span className="span1">Add Some Snacks in your Show</span>
          <span className="span2">
            Do not Want
            <Link
              to="/selectPayment"
              state={{
                showId,
                selectedSeats,
                seatTotal,
                selectedSnacks: [],
                snackTotal: 0,
              }}
            >
              Skip
            </Link>
          </span>
        </div>
        <div className="container my-5 snack_board">
          <h4>Snack Total: ₹{snackTotal}</h4>
          <h4>Grand Total: ₹{grandTotal}</h4>
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
                  <span
                    className="snack_quantity_minus"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </span>
                  <span className="snack_quantity_count">
                    {snackQuantities[item.id] || 0}
                  </span>
                  <span
                    className="snack_quantity_plus"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </span>
                </div>
                <div className="snack_add_btn">
                  <button key={item.id} onClick={() => handleSnackClick(item)}>
                    Add Snacks
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="snack_boards_btn">
            {/* <button onClick={() => navigate("/selectPayment")}>Next</button> */}
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
        {/* <h4>Selected Snacks</h4>

        {selectedSnacks.map((snack) => (
          <p key={snack.id}>
            {snack.name} - ₹{snack.price}
          </p>
        ))} */}
      </div>
    </>
  );
};

export default SelectSnacks;
