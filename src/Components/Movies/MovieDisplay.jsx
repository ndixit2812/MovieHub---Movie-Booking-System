import React from "react";
import Navbar from "./../../Utilities/Navbar";
import MovieCard from "./MovieCard";
import items from "./MovieData";

const MovieDisplay = () => {
  return (
    <>
      <Navbar />
      <div className="container py-3 movie_board">
        {items.map((item) => (
          <MovieCard key={item.id} itemValue={item} />
        ))}
      </div>
    </>
  );
};

export default MovieDisplay;
