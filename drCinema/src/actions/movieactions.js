export { FETCH_MOVIES_ERROR, FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCESS } from '../constants'
function fetchMoivesPending() {
  return {
    type: FETCH_MOVIES_PENDING
  };
}

function fetchMoviesSucess(movies) {
    return {
        type: FETCH_MOVIES_SUCESS,
        movies: movies
    }
}
function fetchMoviesError(error) {
    return {
        type: FETCH_MOVIES_ERROR
        error: error
    }
}