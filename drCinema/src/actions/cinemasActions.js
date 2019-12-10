// TODO: put something here
import cinemaService from '../services/cinemaService';
import * as constants from '../constants';


export const getAllCinemas = () => {
  console.log('cinemaAction: getAllCinemas: start');
  return async dispatch => {
    try {
      console.log( 'cinemaAction: getAllCinemas: Try: enter');
      const theaters = await cinemaService.getAllCinemas();
     // console.log( 'cinemaAction: getAllCinemas: Try: theaters: ', theaters);
      dispatch(fetchCinemaSucess(theaters));
    } catch (error) {
      // console.log( 'cinemaAction: catch: Error: ', error );
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
