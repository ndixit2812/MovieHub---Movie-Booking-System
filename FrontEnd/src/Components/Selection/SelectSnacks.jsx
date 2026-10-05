import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Utilities/Navbar";
import axios from "axios";
// import snacks from "./SnacksData";

const SelectSnacks = () => {
  const [snacks, setSnacks] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [snackQuantities, setSnackQuantities] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const { showId, selectedSeats, selectedSeatDetails, seatTotal } =
    location.state || {};

  // fetching data from MongoDb
  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/getSnacks",
        );

        setSnacks(response.data.snacks);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching snacks:", error);
      }
    };

    fetchSnacks();
  }, []);

  // selct snacks functionality
  const handleSnackClick = (snack) => {
    setSelectedSnacks((prevSnacks) => {
      const exists = prevSnacks.find((item) => item._id === snack._id);

      if (exists) {
        return prevSnacks.filter((item) => item._id !== snack._id);
      }

      return [...prevSnacks, snack];
    });

    setSnackQuantities((prev) => ({
      ...prev,
      [snack._id]: prev[snack._id] || 1,
    }));
  };

  // Calculating snacks price which are added
  const snackTotal = selectedSnacks.reduce(
    (total, snack) => total + snack.price * (snackQuantities[snack._id] || 0),
    0,
  );

  // Calculating amount seat price & snack price
  const grandTotal = seatTotal + snackTotal;

  // Continue button functionality
  const handleContinue = () => {
    // booking - summary;
    navigate("/bookingSummary", {
      state: {
        showId,
        selectedSeats,
        seatTotal,
        selectedSnacks,
        selectedSeatDetails,
        snackQuantities,
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
          prevSnacks.filter((snack) => snack._id !== snackId),
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
      <div className="container-fluid selectSnacks_board ">
        <div className="header ">
          <span className="span1">
            Add Some <strong>Snacks</strong> in your <strong>Show</strong>
          </span>
          <span className="span3">Snack Total: ₹{snackTotal}</span>
          <span className="span3">Grand Total: ₹{grandTotal}</span>
          <span className="span2">
            Do not Want?
            <Link
              to="/bookingSummary"
              state={{
                showId,
                selectedSeats,
                selectedSeatDetails,
                seatTotal,
                selectedSnacks: [],
                snackQuantities: {},
                snackTotal: 0,
              }}
            >
              Skip
            </Link>
          </span>
        </div>
        <div className="container my-5 snack_board">
          <div className="snacks_box">
            <div className="row select_snack_main_frame ">
              {snacks.map((item) => (
                <div className="col-md-6 snack_box_layout" key={item._id}>
                  <div className="row snack_inner_box">
                    <div className="col-md-4">
                      <div className="snack_image">
                        <img
                          src={`http://localhost:5000/${item.image.replace(/\\/g, "/")}`}
                          alt="image"
                          width={125}
                          height={125}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="snack_content">
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="snack_quantity">
                        <span
                          className="snack_quantity_minus"
                          onClick={() => handleDecrease(item._id)}
                        >
                          -
                        </span>
                        <span className="snack_quantity_count">
                          {snackQuantities[item._id] || 0}
                        </span>
                        <span
                          className="snack_quantity_plus"
                          onClick={() => handleIncrease(item._id)}
                        >
                          +
                        </span>
                      </div>
                      <div className="snack_add_btn">
                        <button
                          key={item._id}
                          onClick={() => handleSnackClick(item)}
                        >
                          Add Snacks
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="snack_boards_btn">
                <button onClick={handleContinue}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSnacks;
