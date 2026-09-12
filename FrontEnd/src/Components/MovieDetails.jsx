import React, { useEffect, useState } from "react";
import items from "./Movies/MovieData";
import Navbar from "../Utilities/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const fetchMovieData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/user/getMovies/${id}`,
      );
      setMovieItem(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch movie data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [id]);

  if (loading) return <div>Loading details...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  console.log(movieItem);
  return (
    <>
      <Navbar />
      <div className="container-fluid movieDetails_main_frame">
        <div className="container my-3 movies_details_board">
          <p className="text-center my-4">Movie Details</p>
          {movieItem ? (
            <div className="row text-center my-4 p-4 movieDetails_features">
              <div className="col-md-4 md_details_board">
                <div className="my-2">
                  <span className="heading">Movie : </span>
                  <span className="content"> {movieItem.title}</span>
                </div>

                <div className="my-2">
                  <span className="heading">Language : </span>
                  <span className="content">
                    {movieItem.language.join(" | ")}
                  </span>
                </div>
                <div className="my-2">
                  <span className="heading">Genre : </span>
                  <span className="content">{movieItem.genre.join(" | ")}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Director : </span>
                  <span className="content">{movieItem.director}</span>
                </div>
              </div>
              <div className="col-md-4 md_img_board">
                <img
                  src={`http://localhost:5000/${movieItem.imagePath.replace(/\\/g, "/")}`}
                  alt="image"
                  width={300}
                  height={360}
                />
              </div>
              <div className="col-md-4 md_details_board">
                <div className="my-2">
                  <span className="heading">Duration : </span>
                  <span className="content">{movieItem.duration}</span>
                </div>

                <div className="my-2">
                  <span className="heading">Rating : </span>
                  <span className="content">{movieItem.rating}</span>
                </div>
                <div className="my-2">
                  <span className="heading">Status : </span>
                  <span className="content">{movieItem.status}</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-2">
                  <span className="heading">Description : </span>
                  <span className="content">{movieItem.description}</span>
                </div>
                <div className="my-3">
                  <button
                    type="button"
                    className="btn btn-danger w-25"
                    onClick={() => navigate(`/selectShow/${movieItem.id}`)}
                  >
                    Book A Movie
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>No data found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
