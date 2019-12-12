import * as constant from '../constants';

const { API_TOKEN, ENDPOINT_MOVIES } = constant;
const ENDPOINT = ENDPOINT_MOVIES;

const requestHeader = {
  method: 'get',
  headers: {
    'x-access-token': API_TOKEN,
  },
};

// eslint-disable-next-line arrow-body-style
const movieService = () => {
  return {
    getMovies: () => this.fetch(ENDPOINT, requestHeader).then((movie) => movie.json()),
  };
};

export default movieService();
