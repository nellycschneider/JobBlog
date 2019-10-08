import React, { Component } from "react";
import axios from "axios";

export default class CreateNewJob extends Component {
  state = {
    title: "",
    jobDescription: "",
    type: "",
    link: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/job", {
        title: this.state.title,
        jobDescription: this.state.jobDescription,
        type: this.state.type,
        link: this.state.link
      })
      .then(() => {
        this.setState({
          title: "",
          jobDescription: "",
          type: "",
          link: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChangeTwo(event) {
    this.setState({ value: event.target.type });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Job Title: </label>
            <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>

          <div className="description">
            <label htmlFor="jobDescription">Job Description: </label>
            <textarea name="jobDescription" id="jobDescription" cols="30" rows="10" onChange={this.handleChange} value={this.state.jobDescription}></textarea>
          </div>

          <div className="link">
            <label htmlFor="link">Link: </label>
            <input type="text" name="link" id="link" onChange={this.handleChange} value={this.state.link} />
          </div>

          <select value={this.state.type} onChange={this.handleChange}>
            <option value="uiux">UI/UX</option>
            <option value="frontend">Frontend</option>
            <option selected value="backend">
              Backend
            </option>
            <option value="fullstack">Fullstack</option>
          </select>

          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}
