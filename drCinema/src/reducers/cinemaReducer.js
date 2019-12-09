import * as constants from "../constants";

// displays the movie theater
const init = {
    theaters: [],
}

export default function (state = init, action) {
  switch (action.type){
    case constants.FETCH_CINEMAS: 
    console.log(action.payload);
    return action.payload;
    default: return state;
  }
}