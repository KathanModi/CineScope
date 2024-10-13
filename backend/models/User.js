// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  watchedMovies: [{ movieId: String, rating: Number }],
});

module.exports = mongoose.model('User', UserSchema);
