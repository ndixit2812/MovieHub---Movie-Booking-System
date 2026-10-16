const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");
const {
  generateShowSeats,
  getShowSeats,
} = require("../Controllers/ShowSeatController");

const router = express.Router();

router.post("/generateSeats", generateShowSeats);

router.get("/getShowSeats/:showId", getShowSeats);

module.exports = router;
