const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

server.get('/', (req, res) => {
  res.send('It works!');
});

server.listen (port, () => {
  console.log(`Now listening on port ${port}`);
});
