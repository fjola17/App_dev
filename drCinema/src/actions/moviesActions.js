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

// eslint-disable-next-line import/prefer-default-export
export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      console.log("ENtered movies")
      const movies = await MovieService.getMovies();
      console.log("SUCESS movies: ");
      dispatch(getCurrentMoviesSucess(movies));
    } catch (err) {
      // console.log("I got an error ", err);
      dispatch(getCurrentMoviesFail(err));
    }
  };
};
