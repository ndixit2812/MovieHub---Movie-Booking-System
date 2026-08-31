const express = require("express");
const createUpload = require("../Middleware/Upload");
const { addTheatre } = require("../Controllers/TheatreController");

const router = express.Router();

router.post("/addTheatre", createUpload("theatre").single("image"), addTheatre);

module.exports = router;
