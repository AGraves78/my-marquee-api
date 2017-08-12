const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

// middleware imports
const morgan = require('morgan');
const cors = require('cors');

// router imports
const movieRouter = require('./routers/movie.router');

// middleware use (wire up the middleware)
server.use(cors());
server.use(morgan('dev'));

// router use (wire up the routers)
server.use(movieRouter);

// dummy route for testing
server.get('/', (req, res) => {
  res.send('It works!');
});

server.listen (port, () => {
  console.log(`Now listening on port ${port}`);
});
