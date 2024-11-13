import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import Pagination from "./components/Pagination";
import "./App.css";

const API_KEY = "c754525c72e94b575c0d34013e3eedaa";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [inputQuery, setInputQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const endpoint = inputQuery ? "search/movie" : "movie/popular";
        const response = await axios.get(
          `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${inputQuery}&page=${page}`
        );

        if (response.data.results.length === 0) {
          setNotification("No movies found. Please try a different title.");
          setMovies([]);
        } else {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
          setNotification("");
        }
      } catch (error) {
        if (!error.response) {
          setNotification(
            "Network error. Please check your internet connection."
          );
        } else if (error.response.status === 429) {
          setNotification(
            "Too many requests. Please wait a moment and try again."
          );
        } else {
          setNotification(
            "An unexpected error occurred. Please try again later."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, inputQuery]);

  useEffect(() => {
    setPage(1);
  }, [inputQuery]);

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      setSelectedMovie(response.data);
      setIsModalOpen(true);
    } catch (error) {
      setNotification("Failed to load movie details. Please try again.");
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="App">
      <div className="header-container">
        <h1>Movie Explorer</h1>
      </div>

      <div className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
      </div>

      {notification && <p className="notification-message">{notification}</p>}

      <h2 className="movie-list-title">Popular Movies:</h2>

      {loading ? (
        <div className="loading-spinner">Loading movies...</div>
      ) : (
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => fetchMovieDetails(movie.id)}
              />
            ))
          ) : (
            <p className="no-results-message">
              No movies found. Please try a different title.
            </p>
          )}
        </div>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <MovieModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        movie={selectedMovie}
      />
    </div>
  );
}

export default App;
