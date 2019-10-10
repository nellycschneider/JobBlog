import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AllCVs extends Component {
  state = {
    cvs: []
  };

  getAllCVs = () => {
    axios
      .get(`/cv/user/${this.props.user._id}`)
      .then(responseFromApi => {
        this.setState({
          cvs: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getAllCVs();
  };

  render() {
    return (
      <div>
        <div className="all-cvs-dashboard">
          <>
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
          </>
        </div>
      </div>
    );
  }
}
