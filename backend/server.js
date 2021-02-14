const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// const indexRouter = require('../routes/index');
// const usersRouter = require('../routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Connecting to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Main server endpoint
app.get("/", (req, res) => {
  res.json("Welcome to Spotify Playlists Printer and Creator!");
});

// routes
const authorizeRouter = require('./routes/authorize');
const playlistsRouter = require('./routes/playlists');
const usersRouter = require('./routes/users')

app.use('/authorize', authorizeRouter);
app.use('/playlists', playlistsRouter);
app.use('/users', usersRouter);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

