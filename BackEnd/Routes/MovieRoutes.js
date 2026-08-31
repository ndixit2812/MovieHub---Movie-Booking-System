const express = require("express");
const { addMovie } = require("../Controllers/MovieController");
// const upload = require("../Middleware/Upload");
const createUpload = require("../Middleware/Upload");

const router = express.Router();

// router.post("/addMovie", upload.single("image"), addMovie);

router.post("/addMovie", createUpload("movies").single("image"), addMovie);

module.exports = router;
