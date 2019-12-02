import * as constants from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case constants.FILTER: return action.payload;
    case constants.ADD: return action.payload + 1;
    default: return state;
  }
}
