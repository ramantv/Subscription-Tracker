const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
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
const GET_MOVIE_PROVIDER1 = BASE_URL + "/movie/";
const GET_MOVIE_PROVIDER2 =
  "/watch/providers?language=en-US&api_key=" + API_KEY;
const GET_TV_PROVIDER1 = BASE_URL + "/tv/";
const GET_TV_PROVIDER2 = "/watch/providers?language=en-US&api_key=" + API_KEY;

export async function getMovies(query) {
  return await fetch(GET_MOVIE_URL + query)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getTV(query) {
  return await fetch(GET_TV_URL + query)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getMovieProvider(id) {
  return await fetch(GET_MOVIE_PROVIDER1 + id + GET_MOVIE_PROVIDER2)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getTVProvider(id) {
  return await fetch(GET_TV_PROVIDER1 + id + GET_TV_PROVIDER2)
    .then((res) => res.json())
    .then((data) => data);
}
