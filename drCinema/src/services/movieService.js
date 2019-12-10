import * as constant from '../constants';

const API_TOKEN = constant.API_TOKEN;
const ENDPOINT = constant.ENDPOINT_THEATERS;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

const movieService = () => {
  console.log("aabb");
  return {
    getMovies: () => fetch(ENDPOINT, requestHeader).then((movie) => movie.json()),
    getMovieDetails: () => {
      console.log("Hello");
    }
  };
};

export default movieService();
