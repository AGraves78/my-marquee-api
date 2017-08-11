const express = require('express');
const router = express.Router();
const themoviedb = require('../credentials').themoviedb;
const baseUrl = `https://api.themoviedb.org/3/`
const apikey = `?api_key=${themoviedb}`;
const axios = require('axios');

router.get('/movies', (request, response) => {
  const url = `${baseUrl}movie/603${apikey}`;
  axios.get(url)
       .then(movie => {
         response.json(movie.data);
       })
       .catch(err => {
         console.error(err);
       });
});

router.get('/movies/:movie_id', (request, response) => {
  const movie_id = request.params.movie_id;
  const url = `${baseUrl}movie/${movie_id}${apikey}`;
  axios.get(url)
       .then(movie => {
         response.json(movie.data);
       })
       .catch(err => {
         console.error(err);
       });
});

router.get('/search/:movie', (request, response) => {
  const movie = request.params.movie;
  const query = `&query=${movie}`;
  const url = `${baseUrl}search/movie${apikey}${query}`;
  axios.get(url)
       .then(movie => {
         response.json(movie.data);
       })
       .catch(err => {
         console.error(err);
       });

});
router.get('/browse/:genres', (request, response) => {
  const genres = request.params.genres;
  const url = `${baseUrl}genre/movie/list${apikey}`;
  axios.get(url)
       .then(movie => {
         response.json(movie.data);
       })
       .catch(err => {
         console.error(err);
       });

});

module.exports = router;
