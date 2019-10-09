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
    console.log("USER CV", this.props);
    this.getAllCVs();
  };

  render() {
    return (
      <div>
        <h1>All CVs</h1>
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
        <br />
        <form>
          <Link to="/cv/form" className="btn">
            Add CV
          </Link>
          <br />
          <Link to="/" className="btn">
            Go back
          </Link>
        </form>
      </div>
    );
  }
}
