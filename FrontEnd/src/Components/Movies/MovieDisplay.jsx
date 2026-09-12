import React, { useEffect, useState } from "react";
import Navbar from "./../../Utilities/Navbar";
import MovieCard from "./MovieCard";
// import items from "./MovieData";
// import movie from "./MovieData";
import axios from "axios";

const MovieDisplay = () => {
  const [movie, setMovie] = useState([]);

  const handleGetAllMovies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/user/getMovies",
      );
      setMovie(response.data.movies);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid movie_display_board">
        <div className="container py-3 my-5 movie_board">
          {movie.map((item) => (
            <MovieCard key={item.id} itemValue={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDisplay;
