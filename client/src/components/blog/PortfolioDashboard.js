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
        <div className="portfolioEdit">
          <div className="portfolioHead">
            <h3 className="sectionHead">Portfolio Edit</h3>
          </div>
          <Link to="/portfolio/dashboard/create-new" className="btn">
            Create New
          </Link>
          <ProjectDashboard projects={this.state.projects} />
        </div>
      </div>
    );
  }
}
