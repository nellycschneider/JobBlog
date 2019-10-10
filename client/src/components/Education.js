import React, { Component } from "react";

export default class Education extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Education Info</h3>
          <hr style={{ borderBottom: "1px solid black" }} />
        </div>
        <form onSubmit={this.continue}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu1_school"
                className="form-control input-margin"
                placeholder="College/University*"
                defaultValue={values.status === 1 ? "" : values.edu1_school}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu1_year"
                className="form-control input-margin"
                placeholder="Year*"
                defaultValue={values.status === 1 ? "" : values.edu1_year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu1_qualification"
                className="form-control input-margin"
                placeholder="Qualification*"
                defaultValue={
                  values.status === 1 ? "" : values.edu1_qualification
                }
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <input
                type="text"
                name="edu1_desc"
                className="form-control input-margin"
                placeholder="Description*"
                defaultValue={values.status === 1 ? "" : values.edu1_desc}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <br />
          <hr style={{ borderBottom: "1px solid black" }} />

          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu2_school"
                className="form-control input-margin"
                placeholder="School"
                defaultValue={values.status === 1 ? "" : values.edu2_school}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu2_year"
                className="form-control input-margin"
                placeholder="Year"
                defaultValue={values.status === 1 ? "" : values.edu2_year}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="edu2_qualification"
                className="form-control input-margin"
                placeholder="Qualification"
                defaultValue={
                  values.status === 1 ? "" : values.edu2_qualification
                }
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <input
                type="text"
                name="edu2_desc"
                className="form-control input-margin"
                placeholder="Description"
                defaultValue={values.status === 1 ? "" : values.edu2_desc}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="container text-center">
            <button type="button" className="btn" onClick={this.back}>
              <i className="fas fa-angle-left mr-1"></i>Back
            </button>
            <button type="submit" className="btn">
              Next<i className="fas fa-angle-right ml-1"></i>
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}
