const API_KEY = TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const GET_MOVIE_URL =
  BASE_URL +
  "/search/movie?&page=1&include_adult=false&api_key=" +
  API_KEY +
  "&query=";
const GET_TV_URL =
  BASE_URL +
  "/search/tv?&page=1&include_adult=false&api_key=" +
  API_KEY +
  "&query=";

export function getMovies(query) {
  fetch(GET_MOVIE_URL + query)
    .then((res) => res.json())
    .then((data) => data);
}

export function getTV(query) {
  fetch(GET_TV_URL + query)
    .then((res) => res.json())
    .then((data) => data);
}
