import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import CVDetail from "./CVDetail";

export default class AllCVs extends Component {
  state = {
    cvs: []
  };

  getAllCVs = () => {
    axios
      .get("/cv/all")
      .then(responseFromApi => {
        this.setState({
          cvs: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllCVs();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.cvs.map(cv => {
            return (
              <div key={cv._id}>
                <Link to={`/cv-details/${cv._id}`}>
                  <h3>{cv.name}</h3>
                  <p>{cv.email}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
