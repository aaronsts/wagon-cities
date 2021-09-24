import { SET_ACTIVE } from "../actions";

const ActiveCityReducer = (state, action) => {
  // On initial page load
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case SET_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export default ActiveCityReducer;
