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

/*
const getCurrentCinemasSucess = (cinema) => {
  console.log(cinema);
  return {
    type: constants.FETCH_CINEMAS,
    payload: cinema,
  }
};

export const getAllCinemas = () => {
  return async dispatch => {
    try {
      console.log('cinemaAction: Entered Try')
      const theaters = await CinemaService.getAllCinemas();
      console.log('cinemaAction: Entered Try: after getAllCinemas()')
      // console.log(theaters)
      // dispatch(getCurrentCinemasSucess(theaters));
    } catch (err) {
      console.log("I fail :(")
      console.log(err);
    }
  };
} */


// export default getAllCinemas;
