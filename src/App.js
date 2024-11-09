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
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, [page, searchQuery]);

  const fetchMovies = async () => {
    try {
      const endpoint = searchQuery ? "search/movie" : "movie/popular";
      const response = await axios.get(
        `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      setSelectedMovie(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);
    fetchMovies();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <div className="header-container">
        <h1>Movie Explorer</h1>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h2 className="movie-list-title">Popular Movies:</h2>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.id)}
          />
        ))}
      </div>

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
