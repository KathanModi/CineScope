// Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  poster_path: String,
  rating: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);
