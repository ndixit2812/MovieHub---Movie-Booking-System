const express = require("express");
const createUpload = require("../Middleware/Upload");
const {
  addTheatre,
  getAllTheatres,
} = require("../Controllers/TheatreController");

const router = express.Router();

router.post("/addTheatre", createUpload("theatre").single("image"), addTheatre);

router.get("/getAllTheatres", getAllTheatres);

module.exports = router;
