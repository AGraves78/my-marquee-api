const express = require('express');
const router = express.Router();
const themoviedb = require('../credentials').themoviedb;
const baseUrl = `https://api.themoviedb.org/3/movie/`
const apikey = `?api_key=${themoviedb}`;
const axios = require('axios');

router.get('/movies', (request, response) => {
  const url = `${baseUrl}603${apikey}`
  axios.get(url)
       .then(movie => {
         response.json(movie.data);
       })
       .catch(err => {
         console.error(err);
       });
});

router.get('/movies/:movie_id', (request, response) => {
  response.send('Here are the details for a specific movie');
});

module.exports = router;
