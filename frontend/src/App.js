import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import SearchMovies from './components/SearchMovies';
import Watchlist from './components/WatchList';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        {/* Header remains the same across pages */}
        <Header />

        {/* Main content will change based on the route */}
        <div className="content">
          <Routes>
            <Route path="/popular" element={<MoviesList />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/search" element={<SearchMovies />} />
            <Route path="/" element={<MoviesList />} exact /> {/* Default route */}
          </Routes>
        </div>

        {/* Footer remains the same across pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
