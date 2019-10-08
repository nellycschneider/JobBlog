import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <h2>Portfolio</h2>
          <Link className="btn" to="/portfolio">
            View Portfolio
          </Link>

          <h2>CV</h2>
          <Link className="btn" to="/cv/all">
            View CVs
          </Link>
        </div>
      </div>
    );
  }
}
