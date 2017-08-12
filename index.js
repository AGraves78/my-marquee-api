const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

// middleware imports
const morgan = require('morgan');

// router imports
const movieRouter = require('./routers/movie.router');

// wire up the middleware
server.use(morgan('dev'));

// wire up the routers
server.use(movieRouter);

// dummy route for testing
server.get('/', (req, res) => {
  res.send('It works!');
});

server.listen (port, () => {
  console.log(`Now listening on port ${port}`);
});
