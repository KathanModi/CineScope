import React, { useEffect, useState } from 'react';
import api from '../api';

function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await api.get('/watchlist/USER_ID');  // replace USER_ID
      setWatchlist(response.data);
    };
    fetchWatchlist();
  }, []);

  return (
    <div>
      {watchlist.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </div>
  );
}

export default WatchlistPage;
