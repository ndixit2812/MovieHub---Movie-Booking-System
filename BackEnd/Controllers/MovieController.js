const Movie = require("../Modals/MovieModal");

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

module.exports = { addMovie };
