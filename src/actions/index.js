import cities from "../cities";

// export constants
export const SET_CITIES = "SET_CITIES";
export const SET_ACTIVE = "SET_ACTIVE";

// export functions
export function setCities() {
  // place for API call

  return {
    type: SET_CITIES,
    payload: cities,
  };
}

export function setActiveCity(city) {
  return {
    type: SET_ACTIVE,
    payload: city,
  };
}
