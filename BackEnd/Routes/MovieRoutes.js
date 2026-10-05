const express = require("express");
const {
  addMovie,
  getAllMovies,
  getMovieById,
  getShowMovies,
} = require("../Controllers/MovieController");
// const upload = require("../Middleware/Upload");
const createUpload = require("../Middleware/Upload");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

// router.post("/addMovie", upload.single("image"), addMovie);

// authMiddleware used for protected routes
router.post("/addMovie", createUpload("movies").single("image"), addMovie);

router.get("/getMovies", getAllMovies);

router.get("/getShowMovies", getShowMovies);

router.get("/getMovies/:id", getMovieById);

module.exports = router;
