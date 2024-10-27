const express = require('express');
const { getPopularMovies, searchMovies } = require('../controllers/movieController');
const router = express.Router();

router.get('/popular', getPopularMovies);
router.get('/search', searchMovies);

module.exports = router;
