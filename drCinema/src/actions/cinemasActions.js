// TODO: put something here
import cinemaService from '../services/cinemaService';
import * as constants from '../constants';


export const getAllCinemas = () => {
  console.log('cinemaAction: getAllCinemas: start');
  return async dispatch => {
    try {
      console.log( 'cinemaAction: getAllCinemas: Try: enter');
      const theaters = await cinemaService.getAllCinemas();
      console.log( 'cinemaAction: getAllCinemas: Try: theaters: ', theaters);
    } catch (error) {
      console.log( 'cinemaAction: catch: Error: ', error );
    }
  }
  console.log('cinemaAction: getAllCinemas: end');
}
