const ShowSeat = require("../Modals/ShowSeatModal");
const Show = require("../Modals/ShowModal");
const Screen = require("../Modals/ScreenModal");

const generateShowSeats = async (req, res) => {
  try {
    const { showId } = req.body;

    // Find the show
    const show = await Show.findById(showId);

    if (!show) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    // Check whether seats are already generated
    const existingSeats = await ShowSeat.find({
      show: showId,
    });

    if (existingSeats.length > 0) {
      return res.status(400).json({
        message: "Seats are already generated for this show",
      });
    }

    // Find the screen used by this show
    const screen = await Screen.findById(show.screen);

    if (!screen) {
      return res.status(404).json({
        message: "Screen not found",
      });
    }

    const totalSeats = screen.totalSeats;

    // Divide seats equally among 3 categories
    const seatsPerCategory = Math.floor(totalSeats / 3);

    const seats = [];

    // Diamond seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: showId,
        seatNumber: `A${i}`,
        seatCategory: "Diamond",
        price: 350,
        status: "Available",
      });
    }

    // Golden seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: showId,
        seatNumber: `B${i}`,
        seatCategory: "Golden",
        price: 250,
        status: "Available",
      });
    }

    // Silver seats
    for (let i = 1; i <= seatsPerCategory; i++) {
      seats.push({
        show: showId,
        seatNumber: `C${i}`,
        seatCategory: "Silver",
        price: 150,
        status: "Available",
      });
    }

    await ShowSeat.insertMany(seats);

    return res.status(201).json({
      message: "Show seats generated successfully",
      totalSeats: seats.length,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to generate show seats",
      error: error.message,
    });
  }
};

module.exports = {
  generateShowSeats,
};
