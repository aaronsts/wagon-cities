import cities from "../cities";

// export constants
export const SET_CITIES = "SET_CITIES";

// export functions
export default function setCities() {
  // place for API call

  return {
    type: SET_CITIES,
    payload: cities,
  };
}
