const express = require("express");
const createUpload = require("../Middleware/Upload");
const { addScreen } = require("../Controllers/ScreenController");

const router = express.Router();

router.post("/addScreen", createUpload("screen").single("image"), addScreen);

module.exports = router;
