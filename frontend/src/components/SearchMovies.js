import React, { useState } from 'react';
import axios from 'axios';

function SearchMovies() {
  const [feel, setFeel] = useState('');
  const [genre, setGenre] = useState('');
  const [type, setType] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/movies/search', {
        params: { feel, genre, type },
      });
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Feel"
          value={feel}
          onChange={(e) => setFeel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Search Results</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchMovies;
