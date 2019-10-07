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
      <div>
        <h1>The Portfolio of</h1>
        <Link to="/portfolio/dashboard">Edit Projects</Link>
        <Projects projects={this.state.projects} />
        {/* <AddProject getData={this.getData} /> */}
        {/* <ProjectList projects={this.state.projects} /> */}
      </div>
    );
  }
}
