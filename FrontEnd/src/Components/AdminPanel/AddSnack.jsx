import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddSnack = () => {
  const [snackData, setSnackData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    status: "",
    image: "",
  });
  const [snackImage, setSnackImage] = useState(null);

  const imageInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSnackData({
      ...snackData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSnackImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!snackImage) {
        alert("Please select a snacks image");
        return;
      }

      const formData = new FormData();

      formData.append("name", snackData.name);
      formData.append("price", snackData.price);
      formData.append("description", snackData.description);
      formData.append("category", snackData.category);
      formData.append("status", snackData.status);
      formData.append("image", snackImage);

      const response = await axios.post(
        "http://localhost:5000/api/admin/addSnack",
        formData,
      );

      console.log(response.data);
      toast.success("Snacks item is added successfully!");
      handleReset();
      // setSnackData({
      //   name: "",
      //   price: "",
      //   description: "",
      //   category: "",
      //   status: "",
      // });
      // setSnackImage(null);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add item");
    }
  };

  const handleReset = () => {
    setSnackData({
      name: "",
      price: "",
      description: "",
      category: "",
      status: "",
    });
    setSnackImage(null);

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <div className="container-fluid add_movie_board">
      <div className="add_theatre_header">
        <h2>Add Snacks</h2>
        <p>Add a new Snacks items to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* theatre name */}
          <div className="col-md-6 mb-3">
            <label>Snacks Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={snackData.name}
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
              placeholder="Enter price"
              value={snackData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Category *</label>
            <select
              name="category"
              className="form-select"
              value={snackData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Popcorn">Pop Corn</option>
              <option value="Beverage">Beverages</option>
              <option value="Combo">Combo</option>
              <option value="Snacks">Snacks</option>
              <option value="Other">Others</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Status *</label>
            <select
              name="status"
              className="form-select"
              value={snackData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">InActive</option>
            </select>
          </div>

          {/* theatre Image */}
          <div className="col-md-12 mb-3">
            <label>Snacks Image *</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
              required
            />
            <small className="text-muted">Select the snacks Image.</small>
          </div>

          {/* Description */}
          <div className="col-md-12 mb-3">
            <label>Description *</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              placeholder="Enter snacks description"
              value={snackData.description}
              onChange={handleChange}
              required
            ></textarea>
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
              + Add Snacks
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSnack;
