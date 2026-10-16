const express = require("express");
const createUpload = require("../Middleware/Upload");
const authMiddleware = require("../Middleware/authMiddleware");
const {
  addScreen,
  getScreensByTheatre,
  getScreensByMovieAndTheatre,
} = require("../Controllers/ScreenController");

const router = express.Router();

router.post("/addScreen", createUpload("screen").single("image"), addScreen);

router.get("/getScreensByTheatre/:theatreId", getScreensByTheatre);

router.get(
  "/getScreensByMovieAndTheatre/:movieId/:theatreId",
  getScreensByMovieAndTheatre,
);

module.exports = router;
