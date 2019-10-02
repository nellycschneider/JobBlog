import React, { Component } from "react";
// import ProjectList from "./ProjectList";
// import AddProject from "./AddProject";
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
      .get("/projects")
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
      <div className="projects-container">
        <h1>Hi ich bin das Portfolio</h1>
        {/* <AddProject getData={this.getData} />
        <ProjectList projects={this.state.projects} /> */}
      </div>
    );
  }
}
