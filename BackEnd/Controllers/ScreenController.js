const Screen = require("../Modals/ScreenModal");
const Show = require("../Modals/ShowModal");

const addScreen = async (req, res) => {
  try {
    const { theatre, screenName, screenType, totalSeats, status } = req.body;
    const imagePath = req.file ? req.file.path : null;

    // const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

    const newScreen = new Screen({
      theatre,
      screenName,
      screenType,
      totalSeats,
      status,
      image: imagePath,
    });
    await newScreen.save();
    res.status(201).json({ message: "New Screen Added", screen: newScreen });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to add Screen", error: error.message });
  }
};

const getScreensByTheatre = async (req, res) => {
  try {
    const { theatreId } = req.params;

    const screens = await Screen.find({
      theatre: theatreId,
    });

    res.status(200).json({
      message: "Screens fetched successfully",
      screens,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

const getScreensByMovieAndTheatre = async (req, res) => {
  try {
    const { movieId, theatreId } = req.params;

    const shows = await Show.find({
      movie: movieId,
      theatre: theatreId,
    });

    const screenIds = [...new Set(shows.map((show) => show.screen.toString()))];

    const screens = await Screen.find({
      _id: { $in: screenIds },
    });

    return res.status(200).json({
      message: "Screens fetched successfully for this movie and theatre",
      screens,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch screens",
      error: error.message,
    });
  }
};

module.exports = {
  addScreen,
  getScreensByTheatre,
  getScreensByMovieAndTheatre,
};
