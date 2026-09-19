const mongoose = require("mongoose");

const showSeatSchema = new mongoose.Schema(
  {
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Show",
      required: true,
    },

    seatNumber: {
      type: String,
      required: true,
    },

    seatCategory: {
      type: String,
      enum: ["Diamond", "Golden", "Silver"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "Locked", "Booked"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("ShowSeat", showSeatSchema);
