const express = require("express");

const { generateShowSeats } = require("../Controllers/ShowSeatController");

const router = express.Router();

router.post("/generateSeats", generateShowSeats);

module.exports = router;
