import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class JobDashboard extends Component {
  state = {
    jobs: []
  };

  componentDidMount = () => {
    this.getJobs();
  };

  getJobs = () => {
    axios
      .get("/job")
      .then(response => {
        this.setState({
          jobs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.jobs);
    const jobList = this.state.jobs.map(el => {
      return (
        <div className="jobs">
          <div className="imgBgDark center" style={{ background: "#000", height: "200px", width: "200px" }}>
            <p className="type">UI/UX</p>
          </div>
          <div className="contentJob">
            <p className="date">01-03-2019</p>
            <h4 className="title">{el.title}</h4>
          </div>
        </div>
      );
    });

    return <>{jobList}</>;
  }
}
