import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <div className="home-small">
            <h1>JobBlog</h1>
          </div>
          <div className="home-small">
            <p>
              A nice website where you can create a CV, display your works and
              find jobs.
            </p>
          </div>
          <div className="home-small">
            <Link className="btn btn-color" to="/login">
              Login
            </Link>
            <Link className="btn btn-color" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
