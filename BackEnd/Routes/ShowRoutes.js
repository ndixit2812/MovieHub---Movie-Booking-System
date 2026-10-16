const express = require("express");
const {
  addShow,
  getShowById,
  getShowsByMovieTheatreScreen,
} = require("../Controllers/ShowController");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/addShow", addShow);

router.get("/getShow/:showId", getShowById);

router.get(
  "/getShows/:movieId/:theatreId/:screenId",
  getShowsByMovieTheatreScreen,
);

module.exports = router;
