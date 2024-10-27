const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genres: {
    type: [String], // Array of genre names, e.g., ["Action", "Comedy"]
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  posterPath: {
    type: String,
    required: true,
  },
  backdropPath: {
    type: String,
  },
  director: {
    type: String,
  },
  cast: [
    {
      name: { type: String },
      role: { type: String },
    },
  ],
  runtime: {
    type: Number, // in minutes
  },
  language: {
    type: String,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
