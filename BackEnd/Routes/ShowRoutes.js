const express = require("express");
const { addShow } = require("../Controllers/ShowController");
// const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/addShow", addShow);

module.exports = router;
