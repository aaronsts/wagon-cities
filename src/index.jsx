// external modules
// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";
import CitiesReducer from "./reducers/cities_reducer";
import ActiveCityReducer from "./reducers/active_city_reducer";

// State and reducers
const reducers = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
