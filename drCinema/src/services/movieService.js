import * as constant from '../constants';

const { API_TOKEN, ENDPOINT } = constant;

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
