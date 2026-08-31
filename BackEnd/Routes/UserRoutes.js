const express = require("express");
const { createUser, loginUser } = require("../Controllers/UserController");
// const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUser);
// middleware is left to apply in route API

module.exports = router;
