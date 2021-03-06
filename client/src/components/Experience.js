import React, { Component } from "react";

class Experience extends Component {
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
          <h3 className="card-title">Experience Info</h3>
          <hr style={{ borderBottom: "1px solid black" }} />
        </div>
        <form onSubmit={this.continue}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="exp1_org"
                className="form-control input-margin"
                placeholder="Institute/Organisation*"
                defaultValue={values.status === 1 ? "" : values.exp1_org}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="exp1_pos"
                className="form-control input-margin"
                placeholder="Position*"
                defaultValue={values.status === 1 ? "" : values.exp1_pos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="exp1_dur"
                className="form-control input-margin"
                placeholder="Duration*"
                defaultValue={values.status === 1 ? "" : values.exp1_dur}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <input
                type="text"
                name="exp1_desc"
                className="form-control input-margin"
                placeholder="Description*"
                defaultValue={values.status === 1 ? "" : values.exp1_desc}
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
                name="exp2_org"
                className="form-control input-margin"
                placeholder="Institute/Organisation*"
                defaultValue={values.status === 1 ? "" : values.exp2_org}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="exp2_pos"
                className="form-control input-margin"
                placeholder="Position*"
                defaultValue={values.status === 1 ? "" : values.exp2_pos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="exp2_dur"
                className="form-control input-margin"
                placeholder="Duration*"
                defaultValue={values.status === 1 ? "" : values.exp2_dur}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <input
                type="text"
                name="exp2_desc"
                className="form-control input-margin"
                placeholder="Description*"
                defaultValue={values.status === 1 ? "" : values.exp2_desc}
                onChange={handleChange}
                required
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

export default Experience;
