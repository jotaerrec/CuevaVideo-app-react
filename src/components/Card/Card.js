import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movie }) => {
  return (
    <div className="card-movie inline-block text-center" key={movie.imdbID}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="img-movie overflow-hidden"
      />
      <div className="movie-details text-white ">
        <FontAwesomeIcon
          icon={faPlayCircle}
          class="justify-center items-center w-12 h-12 mx-auto my-auto text-center "
        />
        <h4 className="font-bold text-sm">
          {movie.Title} {movie.Year}{" "}
        </h4>
        <p className="font-medium ">{movie.Genre}</p>
      </div>
    </div>
  );
};

export default Card;
