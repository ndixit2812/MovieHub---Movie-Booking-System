const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    language: {
      type: [String],
      required: true,
    },

    genre: {
      type: [String],
      required: true,
    },

    duration: {
      type: Number,
      required: true,
      min: 1,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },

    movieType: {
      type: [String],
      required: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    status: {
      type: String,
      enum: ["upcoming", "now_showing", "completed"],
      default: "upcoming",
    },

    imagePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Movie", movieSchema);
