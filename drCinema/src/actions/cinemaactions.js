// TODO: put something here
import CinemaService from '../services/cinemaService';
import * as constants from '../constants';
export const getAllCinemas = () => {
  return async (dispatch) => {
    try {
        console.log("HYE")
      const theaters = await CinemaService.getAllCinemas();
     // console.log(theaters)
        dispatch(getCurrentCinemasSucess(theaters));
    } catch (err) {
        console.log("I fail :(")
      console.log(err);
    }
  };
};

const getCurrentCinemasSucess = (cinema) => {
    console.log(cinema);
    return{
    type: constants.FETCH_CINEMAS,
    payload: cinema,
    }
};