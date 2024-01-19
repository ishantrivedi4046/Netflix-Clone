import { ContentTitles } from 'enums/enum';
import { ENV_VAR } from './envConfig';

/* The line `const CONTENT_TITLES = Object.values(ContentTitles);` is creating a constant variable
`CONTENT_TITLES` and assigning it the result of calling the `Object.values()` method on the
`ContentTitles` enum. */
export const CONTENT_TITLES = Object.values(ContentTitles);

export const API_REQUEST = {
  fetchTrending: `/trending/all/week?api_key=${ENV_VAR.apiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${ENV_VAR.apiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ENV_VAR.apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ENV_VAR.apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ENV_VAR.apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${ENV_VAR.apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${ENV_VAR.apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${ENV_VAR.apiKey}&with_genres=99`
};
