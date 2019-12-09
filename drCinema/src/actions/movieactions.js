import * as constants from '../constants';
import MovieService from '../services/movieService';

const getCurrentMoviesSucess = (movie) => ({
  type: constants.FETCH_MOVIES,
  payload: movie,
});

const getCurrentMoviesFail = (error) => ({
  type: constants.FETCH_MOVIES_FAIL,
  error,
});

// eslint-disable-next-line import/prefer-default-export
export const getAllMovies = () =>{
  return async (dispatch) => {
  try {
    const movies = await MovieService.getMovies();
    console.log("SUCESS movies: ", movies);
   // dispatch(getCurrentMoviesSucess(movies));
  } catch (err) {
    console.log("I got an error ", err);
   // dispatch(getCurrentMoviesFail(err));
  }
}
};
