import { combineReducers } from 'redux';
import theaters from './cinemaReducer';
import movieReducer from './movieReducer';
import upcomingReducer from './upcomingReducer';

export default combineReducers({
  theaters,
  movieReducer,
  upcomingReducer,
});
