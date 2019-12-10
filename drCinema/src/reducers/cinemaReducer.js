import * as constants from "../constants";

// displays the movie theater

export default function (state = [], action) {
  switch (action.type){
    case constants.FETCH_CINEMAS: 
    console.log(action.payload);
    return action.payload;
    default: return state;
  }
}