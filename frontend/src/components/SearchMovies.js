import React, { useState } from 'react';
import axios from 'axios';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/movies/search?query=${query}`);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div className="search-movies">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {movies.map((movie) => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
