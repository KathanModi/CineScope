const express = require('express');
const axios = require('axios');
const router = express.Router();

// TMDb API key
const API_KEY = process.env.TMDB_API_KEY;

// Fetch popular movies
router.get('/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching popular movies' });
  }
});

module.exports = router;
