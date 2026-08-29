import React, { useState } from "react";

const AddTheatre = () => {
  const [theatreData, setTheatreData] = useState({
    name: "",
    image: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTheatreData({
      ...theatreData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Theatre Data:", theatreData);

    // Later we will connect this with your backend API
    // Example:
    // axios.post("http://localhost:5000/api/movies", movieData);

    alert("Theatre added successfully!");

    setTheatreData({
      name: "",
      image: "",
      address: "",
      city: "",
      pinCode: "",
      state: "",
      rating: "",
    });
  };

  const handleReset = () => {
    setTheatreData({
      name: "",
      image: "",
      address: "",
      city: "",
      pinCode: "",
      state: "",
      rating: "",
    });
  };

  return (
    <div className="container-fluid add_movie_board">
      <div className="add_theatre_header">
        <h2>Add New Theatre</h2>
        <p>Add a new theatre to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* theatre name */}
          <div className="col-md-6 mb-3">
            <label>Theatre Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter theatre name"
              value={theatreData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Address"
              value={theatreData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>City *</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter City"
              value={theatreData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>PinCode *</label>
            <input
              type="text"
              name="pinCode"
              inputmode="numeric"
              pattern="[0-9]*"
              maxlength="6"
              placeholder="000000"
              className="form-control"
              value={theatreData.pinCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>State *</label>
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="Enter State"
              value={theatreData.state}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rating */}
          <div className="col-md-6 mb-3">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              className="form-control"
              placeholder="Enter rating (0 - 10)"
              min="0"
              max="10"
              step="0.1"
              value={theatreData.rating}
              onChange={handleChange}
            />
          </div>

          {/* Movie Image */}
          <div className="col-md-12 mb-3">
            <label>Theatre Image *</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Enter theatre image URL"
              value={theatreData.image}
              onChange={handleChange}
              required
            />
            <small className="text-muted">
              Enter the URL of the theatre image.
            </small>
          </div>

          {/* Buttons */}
          <div className="col-md-12 add_theatre_buttons">
            <button
              type="button"
              className="btn reset_theatre_btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button type="submit" className="btn add_theatre_btn">
              + Add Theatre
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTheatre;
