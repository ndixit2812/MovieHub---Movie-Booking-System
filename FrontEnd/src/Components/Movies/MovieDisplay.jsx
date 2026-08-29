import React from "react";
import Navbar from "./../../Utilities/Navbar";
import MovieCard from "./MovieCard";
// import items from "./MovieData";
import movie from "./MovieData";

const MovieDisplay = () => {
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
