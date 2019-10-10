import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
    const jobList = this.state.jobs
      .sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      .map(el => {
        const date = el.createdAt.slice(0, 10);
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        const titleDate = `${day}-${month}-${year}`;

        return (
          <div className="jobs" key={el._id}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`http://${el.link}`}
            >
              <div
                className="imgBgDark center"
                style={{ background: "#000", height: "200px", width: "200px" }}
              >
                <p className="type">{el.type}</p>
              </div>
              <div className="contentJob">
                <p className="date">{titleDate}</p>
                <h4 className="title">{el.title}</h4>
              </div>
            </a>
          </div>
        );
      });

    return <>{jobList}</>;
  }
}
