const express = require("express");
const { createOrder } = require("../Controllers/PaymentController");

const router = express.Router();

router.post("/create-order", createOrder);

module.exports = router;
