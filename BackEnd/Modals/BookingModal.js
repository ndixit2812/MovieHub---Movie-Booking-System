const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Show",
      required: true,
    },

    seats: [
      {
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
      },
    ],

    snacks: [
      {
        snack: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Snack",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },

        price: {
          type: Number,
          required: true,
        },
      },
    ],

    seatAmount: {
      type: Number,
      required: true,
    },

    snackAmount: {
      type: Number,
      required: true,
    },

    convenienceFee: {
      type: Number,
      default: 30,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    razorpayOrderId: {
      type: String,
      required: true,
    },

    razorpayPaymentId: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Refunded"],
      default: "Pending",
    },

    bookingStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
