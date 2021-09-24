// React
import React from "react";

// Components
import CityList from "../containers/city_list";
import ActiveCity from "../containers/active_city";

const App = () => {
  return (
    <div className="row">
      <CityList className="col-sm-4" />
      <ActiveCity className="col-sm-8" />
    </div>
  );
};

export default App;
