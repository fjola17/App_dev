/* eslint-disable import/prefer-default-export */
// TODO: put something here
import cinemaService from '../services/cinemaService';
import * as constants from '../constants';

const fetchCinemaSucess = (theaters) => ({
  type: constants.FETCH_CINEMAS,
  payload: theaters,
});

const fetchCinemaError = (error) => ({
  type: constants.FETCH_CINEMAS_FAIL,
  error,
});

// eslint-disable-next-line arrow-body-style
export const getAllCinemas = () => {
  return async (dispatch) => {
    try {
      const theaters = await cinemaService.getAllCinemas();
      dispatch(fetchCinemaSucess(theaters));
    } catch (error) {
      dispatch(fetchCinemaError(error));
    }
  };
};
