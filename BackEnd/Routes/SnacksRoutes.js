const express = require("express");
const createUpload = require("../Middleware/Upload");
const { addSnacks } = require("../Controllers/SnacksController");

const router = express.Router();

router.post("/addSnack", createUpload("snack").single("image"), addSnacks);

module.exports = router;
