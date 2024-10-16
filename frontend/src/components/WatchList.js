import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('/api/movies/watchlist');
        setWatchlist(response.data);
      } catch (error) {
        console.error('Error fetching watchlist', error);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.map(movie => (
        <div key={movie._id} className="movie-item">
          <h3>{movie.title}</h3>
          <img src={movie.poster_path} alt={movie.title} />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
