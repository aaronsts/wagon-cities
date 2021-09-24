/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class City extends Component {
  render() {
    return (
      <div className="city">
        <h2>{this.props.city.name}</h2>
        <p>{this.props.city.address}</p>
      </div>
    );
  }
}

export default City;
