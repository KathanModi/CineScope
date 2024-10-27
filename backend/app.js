const express = require('express');
const cors = require('cors');
const moviesRoute = require('./routes/movies');
const watchlistRoute = require('./routes/watchlist');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', moviesRoute);
app.use('/api/watchlist', watchlistRoute);

module.exports = app;
