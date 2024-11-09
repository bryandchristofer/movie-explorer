import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
