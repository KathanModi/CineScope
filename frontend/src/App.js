import React from 'react';
import MoviesList from './pages/MoviesList';
import SearchMovies from './components/SearchMovies';
import Watchlist from './components/WatchList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CineScope - Movie Recommendation System</h1>
      </header>

      <div className="search-section">
        <SearchMovies />
      </div>

      <div className="movies-section">
        <MoviesList />
      </div>
      <div className="watchlist-section">
        <Watchlist/>
      </div>

      <footer className="app-footer">
        <p>&copy; 2024 CineScope. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
