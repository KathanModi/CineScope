// Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  poster_path: String,
  rating: Number,
  genre: [String],      // Array of genres for the movie
  type: String,         // Type of movie (e.g., feature, short)
  feel: String, 
  watchlist: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Movie'
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
