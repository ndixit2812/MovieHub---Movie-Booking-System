const Movie = require("../Modals/MovieModal");
const Show = require("../Modals/ShowModal");

const addMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      genre,
      language,
      duration,
      releaseDate,
      director,
      movieType,
      rating,
      status,
    } = req.body;

    const parsedGenre = JSON.parse(genre);
    const parsedLanguage = JSON.parse(language);
    const parsedMovieType = JSON.parse(movieType);

    const imagePath = req.file ? req.file.path : "";

    // const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : "";

    const newMovie = new Movie({
      title,
      description,
      genre: parsedGenre,
      language: parsedLanguage,
      duration,
      releaseDate,
      director,
      movieType: parsedMovieType,
      rating,
      status,
      imagePath,
    });
    await newMovie.save();
    res.status(201).json({ message: "New Movie Is Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res
      .status(201)
      .json({ message: "All movies fetched successfully", movies: allMovies });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to fetched movies", error: error.message });
  }
};

const getShowMovies = async (req, res) => {
  try {
    // Get movies from shows that are upcoming or ongoing
    const shows = await Show.find({
      status: { $in: ["upcoming", "ongoing"] },
    });

    // Get unique movie IDs
    const movieIds = [...new Set(shows.map((show) => show.movie.toString()))];

    // Get movie details
    const allMovies = await Movie.find({
      _id: { $in: movieIds },
    });

    return res.status(200).json({
      message: "Movies with available shows fetched successfully",
      movies: allMovies,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch movies",
      error: error.message,
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const itemId = req.params.id;

    const movieData = await Movie.findById(itemId);

    if (!movieData) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movieData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { addMovie, getAllMovies, getMovieById, getShowMovies };
