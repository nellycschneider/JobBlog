import React, { Component } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import axios from "axios";

export default class Portfolio extends Component {
  state = {
    projects: []
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/portfolio")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="portfolio">
        <h1 className="head">Portfolio</h1>
        <Link to="/portfolio/dashboard" className="btn">
          Dashboard
        </Link>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
