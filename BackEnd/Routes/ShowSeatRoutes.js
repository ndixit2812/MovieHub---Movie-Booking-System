const express = require("express");

const {
  generateShowSeats,
  getShowSeats,
} = require("../Controllers/ShowSeatController");

const router = express.Router();

router.post("/generateSeats", generateShowSeats);

router.get("/getShowSeats/:showId", getShowSeats);

module.exports = router;
