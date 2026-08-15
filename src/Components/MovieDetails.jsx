import React from "react";
import items from "./Movies/MovieData";
import Navbar from "../Utilities/Navbar";

const MovieDetails = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 movies_details_board">
        <h2 className="text-center">Movie Details</h2>
        {items.map((item) => (
          <div className="row text-center my-4 p-3 border border-warning">
            <div className="col-md-4">
              <img src={item.image} alt="image" width={200} height={220} />
            </div>
            <div className="col-md-4">
              <div className="my-2">
                <span className="heading">Title :</span>
                <span className="content"> {item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Description :</span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Language :</span>
                <span className="content"> {item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Genre : </span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Duration : </span>
                <span className="content">{item.title}</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="my-2">
                <span className="heading">Certificate : </span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Director : </span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Rating : </span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-2">
                <span className="heading">Status : </span>
                <span className="content">{item.title}</span>
              </div>
              <div className="my-3">
                <button
                  type="button"
                  className="btn btn-warning w-75"
                  onClick={() => navigate("/movieDetails")}
                >
                  Book A Movie
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieDetails;
