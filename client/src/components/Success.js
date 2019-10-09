import React, { Component } from "react";
import { Link } from "react-router-dom";
import FinishedCV from "./FinishedCV";

export default class Success extends Component {
  render() {
    console.log("SUCCESS DATA: ", this.props.values);

    return (
      <div>
        <FinishedCV />
        <Link className="btn" to="/cv/all">
          go to CVs
        </Link>
      </div>
    );
  }
}
