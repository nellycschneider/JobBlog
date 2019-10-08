import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectDashboard from "./ProjectDashboard";
import JobDashboard from "./JobDashboard";
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
        <div className="newJob">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">New Jobs</h3>
          </div>
          <JobDashboard projects={this.state.projects} />
        </div>

        <div className="portfolioEdit">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">Portfolio Edit</h3>
          </div>
          <div className="portfolioButton">
            <Link to="/portfolio/dashboard/create-new" className="btn my-3">
              Create assign
            </Link>
            <Link to="/portfolio/dashboard/create-new" className="btn my-3">
              Create Artwork
            </Link>
          </div>
          <ProjectDashboard projects={this.state.projects} />
        </div>
      </div>
    );
  }
}
