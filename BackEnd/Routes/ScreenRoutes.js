const express = require("express");
const createUpload = require("../Middleware/Upload");
const {
  addScreen,
  getScreensByTheatre,
} = require("../Controllers/ScreenController");

const router = express.Router();

router.post("/addScreen", createUpload("screen").single("image"), addScreen);

router.get("/getScreensByTheatre/:theatreId", getScreensByTheatre);

module.exports = router;
