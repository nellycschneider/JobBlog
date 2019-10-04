import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  dashboard = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className={this.dashboard}>
          <h2>Portfolio</h2>
          <Link to="/portfolio">View Portfolio</Link>

          <h2>CV</h2>
          <Link to="/cv/all">View CVs</Link>
        </div>
      </div>
    );
  }
}
