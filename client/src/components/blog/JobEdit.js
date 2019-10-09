import React, { Component } from "react";
import axios from "axios";

export default class JobEdit extends Component {
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

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/job/${id}`, {
        title: this.state.title,
        jobDescription: this.state.jobDescription,
        link: this.state.link,
        type: this.state.type
      })
      .then(response => {
        this.setState({
          title: response.data.title,
          jobDescription: response.data.jobDescription,
          link: response.data.link,
          type: response.data.type
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

  deleteProject = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios.delete(`/portfolio/project/${id}`).then(() => {
      this.props.history.push("/portfolio/dashboard");
    });
  };

  render() {
    return (
      <div>
        <h1>Hi ich bin ein Job</h1>
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

          <select value={this.state.type} name="type" onChange={this.handleChange}>
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
