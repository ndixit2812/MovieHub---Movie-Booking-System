import React from "react";
import items from "./Movies/MovieData";
import Navbar from "../Utilities/Navbar";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid movieDetails_main_frame">
        <div className="container my-3 movies_details_board">
          <p className="text-center">Movie Details</p>
          {items.map((item) => (
            <div className="row text-center my-4 p-3  movieDetails_features">
              <div className="col-md-4">
                <img src={item.image} alt="image" width={210} height={260} />
              </div>
              <div className="col-md-4">
                <div className="my-2">
                  <span className="heading">Movie Name :</span>
                  <span className="content"> {item.name}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Description :</span>
                  <span className="content">{item.title}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Language :</span>
                  <span className="content"> {item.language}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Genre : </span>
                  <span className="content">{item.genre}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Duration : </span>
                  <span className="content">{item.duration}</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="my-2">
                  <span className="heading">Certificate : </span>
                  <span className="content">{item.certificate}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Director : </span>
                  <span className="content">{item.directed_by}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Rating : </span>
                  <span className="content">{item.rating}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Status : </span>
                  <span className="content">{item.status}</span>
                </div>
                <div className="my-3">
                  <button
                    type="button"
                    className="btn btn-danger w-50"
                    onClick={() => navigate(`/selectShow/${item.id}`)}
                  >
                    Book A Movie
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
