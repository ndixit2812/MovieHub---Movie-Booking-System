const Show = require("../Modals/ShowModal");
const ShowSeat = require("../Modals/ShowSeatModal");
const Movie = require("../Modals/MovieModal");
const Theatre = require("../Modals/TheatreModal");
const Screen = require("../Modals/ScreenModal");

const addShow = async (req, res) => {
  try {
    const { movie, theatre, screen, showDate, startTime, endTime } = req.body;

    // Check Movie
    const movieExists = await Movie.findById(movie);

    if (!movieExists) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    // Check Theatre
    const theatreExists = await Theatre.findById(theatre);

    if (!theatreExists) {
      return res.status(404).json({
        message: "Theatre not found",
      });
    }

    // Check Screen
    const screenExists = await Screen.findById(screen);

    if (!screenExists) {
      return res.status(404).json({
        message: "Screen not found",
      });
    }

    // Check whether Screen belongs to selected Theatre
    if (screenExists.theatre.toString() !== theatre.toString()) {
      return res.status(400).json({
        message: "Selected screen does not belong to selected theatre",
      });
    }

    // Create Show
    const newShow = new Show({
      movie,
      theatre,
      screen,
      showDate,
      startTime,
      endTime,
    });

    await newShow.save();

    // Generate ShowSeats
    const totalSeats = screenExists.totalSeats;

    const seatsPerCategory = Math.floor(totalSeats / 3);

    const seats = [];

    // Diamond Seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: newShow._id,
        seatNumber: `A${i}`,
        seatCategory: "Diamond",
        price: 350,
        status: "Available",
      });
    }

    // Golden Seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: newShow._id,
        seatNumber: `B${i}`,
        seatCategory: "Golden",
        price: 250,
        status: "Available",
      });
    }

    // Silver Seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: newShow._id,
        seatNumber: `C${i}`,
        seatCategory: "Silver",
        price: 150,
        status: "Available",
      });
    }

    await ShowSeat.insertMany(seats);

    res.status(201).json({
      message: "Show Added Successfully",
      show: newShow,
      totalSeats: seats.length,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

const getShowById = async (req, res) => {
  try {
    const { showId } = req.params;

    const show = await Show.findById(showId)
      .populate("movie")
      .populate("theatre")
      .populate("screen");

    if (!show) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    res.status(200).json({
      message: "Show fetched successfully",
      show,
    });
  } catch (error) {
    console.log("Error fetching show:", error);

    res.status(500).json({
      message: "Error fetching show",
      error: error.message,
    });
  }
};

const getShowsByMovieTheatreScreen = async (req, res) => {
  try {
    const { movieId, theatreId, screenId } = req.params;

    const shows = await Show.find({
      movie: movieId,
      theatre: theatreId,
      screen: screenId,
    }).sort({
      showDate: 1,
      startTime: 1,
    });

    if (!shows || shows.length === 0) {
      return res.status(404).json({
        message: "No shows found",
      });
    }

    res.status(200).json({
      message: "Shows fetched successfully",
      shows,
    });
  } catch (error) {
    console.log("Error fetching shows:", error);

    res.status(500).json({
      message: "Error fetching shows",
      error: error.message,
    });
  }
};

module.exports = { addShow, getShowById, getShowsByMovieTheatreScreen };
