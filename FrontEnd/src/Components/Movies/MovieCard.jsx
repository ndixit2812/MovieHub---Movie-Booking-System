import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ itemValue, i }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="movie_card_board">
        <div className="card" key={i} style={{ width: "13rem" }}>
          <img
            // src={itemValue.imagePath}
            src={`http://localhost:5000/${itemValue.imagePath.replace(/\\/g, "/")}`}
            className="card-img-top"
            alt="movie-image"
            width={210}
            height={240}
          />
          <div className="card-body movie_card_body">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => navigate(`/movieDetails/${itemValue._id}`)}
              >
                More Details...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
