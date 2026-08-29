import React, { useState } from "react";

const AddSeats = () => {
  const [seatData, setSeatData] = useState({
    category: "",
    price: "",
    rows: "",
    seatNumber: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSeatData({
      ...seatData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Seat Data:", seatData);

    // Later we will connect this with your backend API
    // Example:
    // axios.post("http://localhost:5000/api/movies", movieData);

    alert("Seat added successfully!");

    setSeatData({
      category: "",
      price: "",
      rows: "",
      seatNumber: [],
    });
  };

  const handleReset = () => {
    setSeatData({
      category: "",
      price: "",
      rows: "",
      seatNumber: [],
    });
  };

  return (
    <div className="container-fluid add_seat_board">
      <div className="add_seat_header">
        <h2>Add New Seats</h2>
        <p>Add a new Seats to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* seat Category */}
          <div className="col-md-6 mb-3">
            <label>Category *</label>
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Enter category"
              value={seatData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Price *</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Enter Price"
              value={seatData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Rows *</label>
            <input
              type="text"
              name="rows"
              className="form-control"
              placeholder="Enter row"
              value={seatData.rows}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>SeatNumber *</label>
            <input
              type="text"
              name="seatNumber"
              className="form-control"
              placeholder="Enter seat number"
              value={seatData.seatNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="col-md-12 add_seat_buttons">
            <button
              type="button"
              className="btn reset_seat_btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button type="submit" className="btn add_seat_btn">
              + Add Screen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSeats;
