import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AVAILABLE_GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const AVAILABLE_LANGUAGES = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "Japanese",
  "Korean",
  "Tamil",
  "Telugu",
  "Malayalam",
];

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    image: "",
    genre: [],
    language: [],
    duration: "",
    releaseDate: "",
    rating: "",
    director: "",
    movieType: "",
    status: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  // Handle addition for multi-choice arrays (Genre & Language)
  const handleMultiSelectChange = (fieldName, value) => {
    if (!value) return;

    setMovieData((prev) => {
      // Prevent duplicates
      if (prev[fieldName].includes(value)) return prev;

      return {
        ...prev,
        [fieldName]: [...prev[fieldName], value],
      };
    });
  };

  // Remove a selected tag/chip
  const removeMultiSelectItem = (fieldName, itemToRemove) => {
    setMovieData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((item) => item !== itemToRemove),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!selectedImage) {
        alert("Please select a movie image");
        return;
      }

      const formData = new FormData();

      formData.append("title", movieData.title);
      formData.append("description", movieData.description);

      formData.append("image", selectedImage);
      formData.append("genre", JSON.stringify(movieData.genre));
      formData.append("language", JSON.stringify(movieData.language));

      formData.append("duration", movieData.duration);
      formData.append("releaseDate", movieData.releaseDate);
      formData.append("director", movieData.director);
      formData.append("movieType", JSON.stringify([movieData.movieType]));
      formData.append("rating", movieData.rating);
      formData.append("status", movieData.status);

      const response = await axios.post(
        "http://localhost:5000/api/admin/addMovie",
        formData,
      );

      console.log(response.data);
      toast.success("Movie added successfully!");

      setMovieData({
        title: "",
        description: "",
        image: "",
        genre: [],
        language: [],
        duration: "",
        releaseDate: "",
        rating: "",
        director: "",
        movieType: "",
        status: "",
      });

      setSelectedImage(null);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add movie");
    }
  };

  const handleReset = () => {
    setMovieData({
      title: "",
      description: "",
      image: "",
      genre: [],
      language: [],
      duration: "",
      releaseDate: "",
      rating: "",
      director: "",
      movieType: "",
      status: "",
    });
    setSelectedImage(null);
  };

  return (
    <div className="container-fluid add_movie_board">
      <div className="add_movie_header">
        <h2>Add New Movie</h2>
        <p>Add a new movie to MovieHub</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Movie Title */}
          <div className="col-md-6 mb-3">
            <label>Movie Name *</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter movie name"
              value={movieData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Duration */}
          <div className="col-md-6 mb-3">
            <label>Duration *</label>
            <div className="input-group">
              <input
                type="number"
                name="duration"
                className="form-control"
                placeholder="Enter duration"
                value={movieData.duration}
                onChange={handleChange}
                min="1"
                required
              />
              <span className="input-group-text">Minutes</span>
            </div>
          </div>

          {/* Genre */}
          <div className="col-md-6 mb-3">
            {/* 1. GENRE MULTI-SELECT FIELD */}
            <div>
              <label>Genre:</label>

              <select
                onChange={(e) => {
                  handleMultiSelectChange("genre", e.target.value);
                  e.target.value = ""; // Reset dropdown after selection
                }}
                defaultValue=""
                className="form-control"
              >
                <option value="" disabled>
                  -- Select Genres --
                </option>
                {AVAILABLE_GENRES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>

              {/* Visual Chips/Tags for selected items */}
              <div className="tip_card">
                {movieData.genre.map((g) => (
                  <span key={g} className="chip_style">
                    {g}
                    <button
                      type="button"
                      onClick={() => removeMultiSelectItem("genre", g)}
                      className="clear_tool_tip_style"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="col-md-6 mb-3">
            {/* 2. LANGUAGE MULTI-SELECT FIELD */}
            <div>
              <label>Language*</label>

              {/* Dropdown to add options */}
              <select
                onChange={(e) => {
                  handleMultiSelectChange("language", e.target.value);
                  e.target.value = ""; // Reset dropdown after selection
                }}
                defaultValue=""
                className="form-control"
              >
                <option value="" disabled>
                  -- Select Languages --
                </option>
                {AVAILABLE_LANGUAGES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>

              {/* Visual Chips/Tags for selected items */}
              <div className="tip_card">
                {movieData.language.map((l) => (
                  <span key={l} className="chip_style">
                    {l}
                    <button
                      type="button"
                      onClick={() => removeMultiSelectItem("language", l)}
                      className="clear_tool_tip_style"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Release Date */}
          <div className="col-md-6 mb-3">
            <label>Release Date *</label>
            <input
              type="date"
              name="releaseDate"
              className="form-control"
              value={movieData.releaseDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Director */}
          <div className="col-md-6 mb-3">
            <label>Director</label>
            <input
              type="text"
              name="director"
              className="form-control"
              placeholder="Enter director name"
              value={movieData.director}
              onChange={handleChange}
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
              value={movieData.rating}
              onChange={handleChange}
            />
          </div>

          {/* Movie Type */}
          <div className="col-md-6 mb-3">
            <label>Movie Type *</label>
            <select
              name="movieType"
              className="form-select"
              value={movieData.movieType}
              onChange={handleChange}
              required
            >
              <option value="">Select Movie Type</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="IMAX">IMAX</option>
            </select>
          </div>

          {/* Status */}
          <div className="col-md-6 mb-3">
            <label>Status *</label>
            <select
              name="status"
              className="form-select"
              value={movieData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="now_showing">Now Showing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Movie Image */}
          <div className="col-md-12 mb-3">
            <label>Movie Image *</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <small className="text-muted">Select an image of the movie.</small>
          </div>

          {/* Description */}
          <div className="col-md-12 mb-3">
            <label>Movie Description *</label>
            <textarea
              name="description"
              className="form-control"
              rows="5"
              placeholder="Enter movie description"
              value={movieData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="col-md-12 add_movie_buttons">
            <button
              type="button"
              className="btn reset_movie_btn"
              onClick={handleReset}
            >
              Reset
            </button>

            <button type="submit" className="btn add_movie_btn">
              + Add Movie
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
