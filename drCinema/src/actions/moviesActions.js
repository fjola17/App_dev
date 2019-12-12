/* eslint-disable arrow-body-style */
import * as constants from '../constants';
import MovieService from '../services/movieService';

const getCurrentMoviesSucess = (movies) => ({
  type: constants.FETCH_MOVIES,
  payload: movies,
});

const getCurrentMoviesFail = (error) => ({
  type: constants.FETCH_MOVIES_FAIL,
  error,
});

// get all the movies from movie service and dispatch actions if sucessful
// eslint-disable-next-line import/prefer-default-export
export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await MovieService.getMovies();
      dispatch(getCurrentMoviesSucess(movies));
    } catch (err) {
      dispatch(getCurrentMoviesFail(err));
    }
  };
};
