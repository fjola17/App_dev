import { combineReducers } from 'redux';
import theaters from './cinemaReducer';
import movies from './movieReducer';
import upcoming from './upcomingReducer';

export default combineReducers({
  theaters,
  movies,
  upcoming,
});
