const express = require("express");
const router = express.Router();

// Import the authentication and admin-verification middlewares
const authMiddleware = require("../Middleware/authMiddleware"); // your general login check
const verifyAdmin = require("../Middleware/verifyAdmin"); // the admin check we just made

// Apply both middlewares to all routes defined in this file
// (Or you can apply them individually per route if needed)
router.use(authMiddleware, verifyAdmin);

// 1. Admin Dashboard Route
router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Admin Dashboard",
    adminUser: req.user.email,
  });
});

// 2. All Bookings Route (Reusing the same protection)
router.get("/getAllBookings", (req, res) => {
  // Logic to fetch all bookings from the database
  res.status(200).json({
    message: "Here are all the system bookings",
    bookings: [
      { id: 101, user: "John Doe", service: "Consultation" },
      { id: 102, user: "Jane Smith", service: "Support" },
    ],
  });
});

module.exports = router;
