const express = require("express");
const createUpload = require("../Middleware/Upload");
const authMiddleware = require("../Middleware/authMiddleware");
const {
  addTheatre,
  getAllTheatres,
  getTheatresByMovie,
} = require("../Controllers/TheatreController");

const router = express.Router();

router.post("/addTheatre", createUpload("theatre").single("image"), addTheatre);

router.get("/getAllTheatres", getAllTheatres);

router.get("/getTheatresByMovie/:movieId", getTheatresByMovie);

module.exports = router;
