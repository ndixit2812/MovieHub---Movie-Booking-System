const Theatre = require("../Modals/TheatreModal");
const Show = require("../Modals/ShowModal");

const addTheatre = async (req, res) => {
  try {
    const { name, address, city, state, pinCode, rating } = req.body;

    const imagePath = req.file ? req.file.path : null;

    // const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

    const newTheatre = new Theatre({
      name,
      address,
      city,
      state,
      pinCode,
      rating,
      image: imagePath,
    });

    await newTheatre.save();
    res.status(201).json({ message: "New Theatre Is Added", newTheatre });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to add theatre", error: error.message });
  }
};

const getAllTheatres = async (req, res) => {
  try {
    const allTheatres = await Theatre.find();
    return res.status(200).json({
      message: "All theatres fetched successfully",
      theatres: allTheatres,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetched all Theatres",
      error: error.message,
    });
  }
};

const getTheatresByMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    const shows = await Show.find({ movie: movieId });

    const theatreIds = [
      ...new Set(shows.map((show) => show.theatre.toString())),
    ];

    const theatres = await Theatre.find({
      _id: { $in: theatreIds },
    });

    return res.status(200).json({
      message: "Theatres fetched successfully for this movie",
      theatres,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch theatres for this movie",
      error: error.message,
    });
  }
};

module.exports = { addTheatre, getAllTheatres, getTheatresByMovie };
