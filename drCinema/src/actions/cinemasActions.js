// TODO: put something here
import cinemaService from '../services/cinemaService';
import * as constants from '../constants';


export const getAllCinemas = () => {
  return async dispatch => {
    try {
      const theaters = await cinemaService.getAllCinemas();
      dispatch(fetchCinemaSucess(theaters));
    } catch (error) {
      dispatch(fetchCinemaError(error));
    }
  }
}

const fetchCinemaSucess = (theaters) => ({
  type: constants.FETCH_CINEMAS,
  payload: theaters,
});

const fetchCinemaError = (error) => ({
  type: constants.FETCH_CINEMAS_FAIL,
  error,
})
