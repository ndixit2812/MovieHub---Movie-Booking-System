const Show = require("../Modals/ShowModal");
const ShowSeat = require("../Modals/ShowSeatModal");
const Movie = require("../Modals/MovieModal");
const Theatre = require("../Modals/TheatreModal");
const Screen = require("../Modals/ScreenModal");

// const addShow = async (req, res) => {
//   try {
//     const { movie, theatre, screen, showDate, startTime, endTime } = req.body;

//     // Check Movie
//     const movieExists = await Movie.findById(movie);

//     if (!movieExists) {
//       return res.status(404).json({
//         message: "Movie not found",
//       });
//     }

//     // Check Theatre
//     const theatreExists = await Theatre.findById(theatre);

//     if (!theatreExists) {
//       return res.status(404).json({
//         message: "Theatre not found",
//       });
//     }

//     // Check Screen
//     const screenExists = await Screen.findById(screen);

//     if (!screenExists) {
//       return res.status(404).json({
//         message: "Screen not found",
//       });
//     }

//     // Check whether Screen belongs to selected Theatre
//     if (screenExists.theatre.toString() !== theatre.toString()) {
//       return res.status(400).json({
//         message: "Selected screen does not belong to selected theatre",
//       });
//     }

//     // Create Show
//     const newShow = new Show({
//       movie,
//       theatre,
//       screen,
//       showDate,
//       startTime,
//       endTime,
//     });

//     await newShow.save();

//     res.status(201).json({ message: "Show Added Successfully", show: newShow });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ error: error.message });
//   }
// };

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

module.exports = { addShow };
