import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddScreen = () => {
  const [screenData, setScreenData] = useState({
    theatre: "",
    screenName: "",
    screenType: "",
    totalSeats: "",
    status: "",
    image: "",
  });
  const [screenImage, setScreenImage] = useState(null);
  const [theatres, setTheatres] = useState([]);

  const imageInputRef = useRef(null);

  const getAllTheatres = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/getTheatres",
      );

      setTheatres(response.data.theatres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTheatres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setScreenData({
      ...screenData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setScreenImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!screenImage) {
        alert("Please select a screen image");
        return;
      }

      const formData = new FormData();

      formData.append("theatre", screenData.theatre);
      formData.append("screenName", screenData.screenName);
      formData.append("screenType", screenData.screenType);
      formData.append("totalSeats", screenData.totalSeats);
      formData.append("status", screenData.status);
      formData.append("image", screenImage);

      const response = await axios.post(
        "http://localhost:5000/api/admin/addScreen",
        formData,
      );

      console.log(response.data);
      toast.success("Screen added successfully!");
      handleReset();
      // setScreenData({
      //   theatre: "",
      //   screenName: "",
      //   screenType: "",
      //   totalSeats: "",
      //   status: "",
      // });
      // setScreenImage(null);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add screen");
    }
  };

  const handleReset = () => {
    setScreenData({
      theatre: "",
      screenName: "",
      screenType: "",
      totalSeats: "",
      status: "",
    });

    setScreenImage(null);

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <div className="container-fluid add_movie_board">
      <div className="add_theatre_header">
        <h2>Add Screen</h2>
        <p>Add a new Screen to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Theatre *</label>
            <select
              name="theatre"
              className="form-select"
              value={screenData.theatre}
              onChange={handleChange}
              required
            >
              <option value="">Select Theatre</option>
              {theatres.map((theatre) => (
                <option key={theatre._id} value={theatre._id}>
                  {theatre.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Screen Name *</label>
            <input
              type="text"
              name="screenName"
              className="form-control"
              placeholder="Enter name"
              value={screenData.screenName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Total Seats *</label>
            <input
              type="number"
              name="totalSeats"
              className="form-control"
              placeholder="Enter totalSeats"
              value={screenData.totalSeats}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>ScreenType *</label>
            <select
              name="screenType"
              className="form-select"
              value={screenData.screenType}
              onChange={handleChange}
              required
            >
              <option value="">Select ScreenType</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="IMAX">IMAX</option>
              <option value="4DX">4DX</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Status *</label>
            <select
              name="status"
              className="form-select"
              value={screenData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">InActive</option>
            </select>
          </div>

          <div className="col-md-12 mb-3">
            <label>Screen Image *</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              ref={imageInputRef}
              onChange={handleImageChange}
              required
            />
            <small className="text-muted">Select the screen Image.</small>
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
              + Add Screen
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddScreen;
