import React, { Component } from "react";
import axios from "axios";

class Extras extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.submitted();
    this.props.nextStep();

    const data = this.props.values;

    axios.post("/cv", data).then(res => {
      this.props.getId(res.data._id);
      console.log(res);
    });

    e.target.reset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Miscellaneous</h3>
          <hr style={{ borderBottom: "1px solid black" }} />
        </div>
        <form onSubmit={this.formSubmit}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-6 md-form">
              <input
                type="text"
                name="extra_1"
                className="form-control input-margin"
                placeholder="Languages"
                defaultValue={values.status === 1 ? "" : values.extra_1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-6 md-form">
              <input
                type="text"
                name="extra_2"
                className="form-control input-margin"
                placeholder="Hobbies"
                defaultValue={values.status === 1 ? "" : values.extra_2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br />
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-6 md-form">
              <input
                type="text"
                name="extra_3"
                id="extra_3"
                className="form-control input-margin"
                placeholder="Activity/Achievement"
                defaultValue={values.status === 1 ? "" : values.extra_3}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-6 md-form">
              <input
                type="text"
                name="extra_4"
                id="extra_4"
                className="form-control input-margin"
                placeholder="Activity/Achievement"
                defaultValue={values.status === 1 ? "" : values.extra_4}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 md-form">
              <input
                type="text"
                name="extra_5"
                id="extra_5"
                className="form-control input-margin"
                placeholder="Activity/Achievement"
                defaultValue={values.status === 1 ? "" : values.extra_5}
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
              Finished
            </button>
          </div>
          <br />
        </form>
        {/* <button type="submit" htmlFor="/all" className="btn btn-info">
          <Link to={`/cv/all`}>All CVs</Link>
          <i className="fas fa-download ml-1"></i>
        </button> */}
      </div>
    );
  }
}

export default Extras;
