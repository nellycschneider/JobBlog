import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectDashboard from "./ProjectDashboard";
import JobDashboard from "./JobDashboard";
import axios from "axios";
// import JobEdit from "./JobEdit";
import AllCVsDashboard from "../AllCVsDashboard";

export default class Portfolio extends Component {
  state = {
    projects: []
  };

  componentDidMount = () => {
    // console.log("THIS IS DASHBOARD");
    this.getData();
  };

  getData = () => {
    axios
      .get(`/portfolio/user/${this.props.user._id}`)
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
    console.log(this.state.jobs);
    return (
      <div>
        <div className="newJob">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">New Jobs</h3>
          </div>
          <div className="jobList">
            <JobDashboard />
          </div>
        </div>

        <div className="portfolioEdit">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">Portfolio Edit</h3>
          </div>
          <div className="portfolioButton">
            <Link to="/portfolio/dashboard/create-new" className="btn my-3">
              Add Artwork
            </Link>
          </div>
          <ProjectDashboard projects={this.state.projects} />
        </div>

        <div className="jobEdit">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">Create Jobs</h3>
          </div>
          <div className="portfolioButton btn-center">
            <Link to="/job/create-new" className="btn my-3">
              Add Job
            </Link>
            {/* <JobEdit /> */}
          </div>
        </div>

        <div className="cvEdit">
          <div className="sectionLine my-3">
            <h3 className="sectionHead">All CVs</h3>
          </div>
          <div className="portfolioButton btn-center">
            <Link to="/cv/form" className="btn my-3">
              Add CV
            </Link>
          </div>
          <AllCVsDashboard user={this.props.user} />
        </div>
      </div>
    );
  }
}
