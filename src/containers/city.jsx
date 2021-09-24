/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Redux + Actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <div className="city" onClick={this.handleClick}>
        <h2>{this.props.city.name}</h2>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity: setActiveCity }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    setActiveCity: reduxState.setActiveCity,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
