import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>
          <strong>Tagline:</strong> {movie.tagline}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {movie.production_companies.map((p) => p.name).join(", ")}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} mins
        </p>
        <p>
          <strong>Box Office:</strong> ${movie.revenue?.toLocaleString()}
        </p>
        <p>
          <strong>Vote Average:</strong> {movie.vote_average} / 10
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
