import * as constant from '../constants';

const API_TOKEN = constant.API_TOKEN;
const ENDPOINT = constant.ENDPOINT_MOVIES;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

const movieService = () => {
  return {
    getMovies: () => fetch(ENDPOINT, requestHeader).then((movie) => movie.json()),
  };
};

export default movieService();
