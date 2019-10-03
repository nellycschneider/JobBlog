import React, { Component } from "react";

export default class Success extends Component {
  render() {
    console.log("SUCCESS DATA: ", this.props.values);

    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
          <i className="fas fa-check-circle fa-7x text-success"></i>
          <h2>{this.props.values.name}</h2>
          <br />
        </div>
      </div>
    );
  }
}
