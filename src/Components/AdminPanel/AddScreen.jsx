import React, { useState } from "react";

const AddScreen = () => {
  const [screenData, setScreenData] = useState({
    name: "",
    type: "",
    seats: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setScreenData({
      ...screenData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Screen Data:", screenData);

    // Later we will connect this with your backend API
    // Example:
    // axios.post("http://localhost:5000/api/movies", movieData);

    alert("Screen added successfully!");

    setScreenData({
      name: "",
      type: "",
      seats: "",
    });
  };

  const handleReset = () => {
    setScreenData({
      name: "",
      type: "",
      seats: "",
    });
  };

  return (
    <div className="container-fluid add_screen_board">
      <div className="add_screen_header">
        <h2>Add New Screen</h2>
        <p>Add a new Screen to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* theatre name */}
          <div className="col-md-6 mb-3">
            <label>Screen Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Screen name"
              value={screenData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Screen Type *</label>
            <input
              type="text"
              name="type"
              className="form-control"
              placeholder="Enter screen type"
              value={screenData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Screen seats *</label>
            <input
              type="text"
              name="seats"
              className="form-control"
              placeholder="Enter seats"
              value={screenData.seats}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="col-md-12 add_screen_buttons">
            <button
              type="button"
              className="btn reset_screen_btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button type="submit" className="btn add_screen_btn">
              + Add Screen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddScreen;
