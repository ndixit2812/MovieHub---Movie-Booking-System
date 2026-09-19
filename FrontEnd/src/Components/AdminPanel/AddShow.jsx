import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddShow = () => {
  const [formData, setFormData] = useState({
    movie: "",
    theatre: "",
    screen: "",
    showDate: "",
    startTime: "",
    endTime: "",
  });

  const [movies, setMovies] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [screens, setScreens] = useState([]);

  const fetchScreensByTheatre = async (theatreId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/getScreensByTheatre/${theatreId}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );

      setScreens(response.data.screens);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getMovies",
        );

        setMovies(response.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchTheatres = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/getAllTheatres",
        );

        setTheatres(response.data.theatres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTheatres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "theatre") {
      setScreens([]);

      setFormData({
        ...formData,
        theatre: value,
        screen: "",
      });

      if (value) {
        fetchScreensByTheatre(value);
      }

      return;
    }

    if (name === "startTime") {
      const endTimes = {
        "10:30 AM": "01:30 PM",
        "01:30 PM": "04:30 PM",
        "04:30 PM": "07:30 PM",
        "07:30 PM": "10:30 PM",
      };

      setFormData({
        ...formData,
        startTime: value,
        endTime: endTimes[value],
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/addShow",
        formData,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );

      console.log(response.data);
      toast.success(response.data.message);
      handleReset();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to add show");
    }
  };

  const handleReset = () => {
    setFormData({
      movie: "",
      theatre: "",
      screen: "",
      showDate: "",
      startTime: "",
      endTime: "",
    });
    setScreens([]);
  };

  return (
    <div className="container-fluid add_movie_board">
      <div className="add_theatre_header">
        <h2>Add Show</h2>
        <p>Add a new show to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Movie *</label>
            <select
              name="movie"
              className="form-select"
              value={formData.movie}
              onChange={handleChange}
              required
            >
              <option value="">Select Movie</option>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Theatre *</label>
            <select
              name="theatre"
              className="form-select"
              value={formData.theatre}
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
            <label>Screen *</label>
            <select
              name="screen"
              className="form-select"
              value={formData.screen}
              onChange={handleChange}
              disabled={!formData.theatre}
            >
              <option value="">Select Screen</option>
              {screens.map((screen) => (
                <option key={screen._id} value={screen._id}>
                  {screen.screenName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Show Date *</label>
            <input
              type="date"
              name="showDate"
              className="form-control"
              value={formData.showDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Start Time *</label>
            <select
              name="startTime"
              className="form-select"
              value={formData.startTime}
              onChange={handleChange}
              required
            >
              <option value="">Select Start Time</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="01:30 PM">01:30 PM</option>
              <option value="04:30 PM">04:30 PM</option>
              <option value="07:30 PM">07:30 PM</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>End Time *</label>
            <input
              type="text"
              name="endTime"
              className="form-control"
              value={formData.endTime}
              readOnly
            />
          </div>

          <div className="col-md-12 add_theatre_buttons">
            <button
              type="button"
              className="btn reset_theatre_btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button type="submit" className="btn add_theatre_btn">
              + Add Show
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddShow;
