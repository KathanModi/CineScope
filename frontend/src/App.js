import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import WatchlistPage from './pages/WatchListpage';
import SearchMovies from './components/SearchMovies';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/popular" element={<MoviesList />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/" element={<MoviesList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
