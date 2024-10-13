const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const moviesRoute = require('./routes/movies');
app.use('/api/movies', moviesRoute);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => console.log(err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
