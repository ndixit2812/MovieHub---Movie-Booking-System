const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const verifyAdmin = require("../Middleware/verifyAdmin");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
} = require("../Controllers/BookingController");

// Create a booking after payment verification
router.post("/createBooking", authMiddleware, createBooking);

// Get bookings for the logged-in user
router.get("/myBookings", authMiddleware, getMyBookings);

// Get all bookings for the Admin Panel
router.get("/allBookings", authMiddleware, verifyAdmin, getAllBookings);

module.exports = router;
