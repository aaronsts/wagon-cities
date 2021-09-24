import { SET_CITIES } from "../actions";

const CitiesReducer = (state, action) => {
  // On initial page load
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default CitiesReducer;
