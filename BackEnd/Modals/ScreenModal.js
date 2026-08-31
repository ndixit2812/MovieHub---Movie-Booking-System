const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
  {
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theatre",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    screenType: {
      type: String,
      enum: ["2D", "3D", "IMAX", "4DX"],
      default: "2D",
    },

    totalSeats: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Screen", screenSchema);
