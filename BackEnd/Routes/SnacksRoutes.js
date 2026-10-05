const express = require("express");
const createUpload = require("../Middleware/Upload");
const { addSnacks, getAllSnacks } = require("../Controllers/SnacksController");

const router = express.Router();

router.post("/addSnack", createUpload("snack").single("image"), addSnacks);

router.get("/getSnacks", getAllSnacks);

module.exports = router;
