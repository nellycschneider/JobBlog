import React, { Component } from "react";

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div className="card-body">
          <h3 className="card-title">Personal Info</h3>
          <hr style={{ borderBottom: "1px solid black" }} />
        </div>
        <form onSubmit={this.continue}>
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-4 text-left">
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                placeholder="Name"
                defaultValue={values.status === 1 ? "" : values.name}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                placeholder="Email"
                defaultValue={values.status === 1 ? "" : values.email}
                required
              />
            </div>
            <div className="col-lg-4 text-left">
              
              <input
                type="text"
                name="phone"
                className="form-control"
                onChange={handleChange}
                placeholder="Mobile"
                defaultValue={values.status === 1 ? "" : values.phone}
                required
              />
            </div>
          </div>
          <br />
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-6 text-left">
              
              <input placeholder="Linkedin" type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? "" : values.linkedin} onChange={handleChange} />
            </div>
            <div className="col-lg-6 text-left">
             
              <input  placeholder="Github" type="text" name="github" className="form-control" defaultValue={values.status === 1 ? "" : values.github} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <input placeholder="Skills" type="text" name="skills" className="form-control" defaultValue={values.status === 1 ? "" : values.skills} onChange={handleChange} />
            </div>
          </div>
          <br />
          <div className="container text-center">
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

export default PersonalDetails;
