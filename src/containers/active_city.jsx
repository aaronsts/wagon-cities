/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return <div>Select a city..</div>;
    }

    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    return (
      <div className="col-sm-8">
        <h2>{this.props.activeCity.name}</h2>
        <p>{this.props.activeCity.address}</p>
        <img src={src} alt="" />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity,
  };
}

export default connect(mapStateToProps)(ActiveCity);
