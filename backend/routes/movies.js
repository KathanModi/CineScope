const express = require('express');
const axios = require('axios');
const Movie = require('../models/Movie'); // MongoDB movie model
const router = express.Router();

// TMDb API key from environment variables
const API_KEY = process.env.TMDB_API_KEY;

// Route to fetch popular movies from TMDb
router.get('/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching popular movies' });
  }
});

// Route to search movies in MongoDB by feel, genre, and type
router.get('/search', async (req, res) => {
  try {
    const { feel, genre, type } = req.query;

    // Build query based on search criteria
    const query = {};
    if (feel) query.feel = { $regex: new RegExp(feel, 'i') };  // Case-insensitive
    if (genre) query.genre = { $regex: new RegExp(genre, 'i') };
    if (type) query.type = { $regex: new RegExp(type, 'i') };

    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies from database' });
  }
});

// Route to fetch movie details by TMDb ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: `Error fetching movie with ID: ${id}` });
  }
});

module.exports = router;
// Add movie to watchlist
router.post('/watchlist/add', async (req, res) => {
  try {
    const { movieId } = req.body; // Movie ID from request body
    const movie = await Movie.findById(movieId);
    
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    
    movie.watchlist.push(movieId); // Add to watchlist array
    await movie.save();

    res.json({ message: 'Movie added to watchlist', movie });
  } catch (error) {
    res.status(500).json({ error: 'Error adding movie to watchlist' });
  }
});

// Get watchlist
router.get('/watchlist', async (req, res) => {
  try {
    const movies = await Movie.find({ _id: { $in: req.body.watchlist } });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching watchlist' });
  }
});
