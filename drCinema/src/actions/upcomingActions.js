import * as constants from '../constants';
import upcomingService from '../services/upcomingService';

const getUpcomingSuccess = (upcoming) => ({
  type: constants.FETCH_UPCOMING,
  payload: upcoming,
});

const getUpcomingFail = (error) => ({
  type: constants.FETCH_UPCOMING_FAIL,
  error,
});

export const getAllUpcoming = () => {
  return async (dispatch) => {
    try {
      const upcoming = await upcomingService.getUpcoming();
      // console.log("Success: Upcoming: ", upcoming);
      dispatch(getUpcomingSuccess(upcoming));
    } catch (err) {
      console.log("Fail: Upcoming: ", err);
      dispatch(getUpcomingFail(err));
    }
  }
};