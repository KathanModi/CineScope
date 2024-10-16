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
