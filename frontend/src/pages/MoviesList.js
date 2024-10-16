import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);  // Separate state for movies
  const [watchlist, setWatchlist] = useState([]);  // Separate state for watchlist

  // Fetch popular movies from the backend or TMDb API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies/popular');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };

    fetchMovies();
  }, []);

  // Function to add movie to watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]); // Update local state with new movie
  };

  return (
    <div className="movies-list">
      <h2>Popular Movies</h2>
      
      {/* Display Movies */}
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <MovieCard movie={movie} />
          <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
        </div>
      ))}

      <h2>Watchlist</h2>
      <div className="watchlist">
        {watchlist.map((movie, index) => (
          <div key={index} className="movie-item">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
