import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectDashboard from "./ProjectDashboard";
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
        <h1>Dashboard</h1>
        <Link to="/portfolio/dashboard/create-new">Create New</Link>
        {/* <AddProject getData={this.getData} /> */}
        <ProjectDashboard projects={this.state.projects} />
      </div>
    );
  }
}
