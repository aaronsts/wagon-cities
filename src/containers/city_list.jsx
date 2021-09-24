/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Redux + Actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import setCities from "../actions";

// Components
import City from "../containers/city";

class CityList extends Component {
  componentWillMount() {
    // On first load
    this.props.setCities();
  }

  render() {
    return (
      <div className="list">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities: setCities }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
