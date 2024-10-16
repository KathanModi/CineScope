const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const moviesRoute = require('./routes/movies');
app.use('/api/movies', moviesRoute);

// MongoDB connection
const mongoURI = process.env.MONGO_URI; // Use Mongo URI from .env
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000; // Use port from .env or default to 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
