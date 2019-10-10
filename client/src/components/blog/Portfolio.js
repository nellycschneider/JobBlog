import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
    const userInUrl = this.props.match.params.username;
    if (!userInUrl) {
      axios
        .get(`/portfolio/user/${this.props.user._id}`)
        // .get(`/portfolio/user/${userInUrl}`)
        .then(response => {
          this.setState({
            projects: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      const username = userInUrl;
      axios
        .get(`/portfolio/username/${username}`)
        .then(response => {
          console.log("DATA FROM AXIOS", response);
          this.setState({
            projects: response.data
          });
        })
        .catch(err => console.log(err));
      // }
    }
  };

  render() {
    return (
      <div className="portfolio">
        <h1 className="head">Portfolio</h1>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
