import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class CVDetail extends Component {
  state = {
    name: "",
    summary: "",
    skills: "",
    email: "",
    address: "",
    phoneNumber: "",
    experienceTitle: "",
    experienceDescription: "",
    educationTitle: "",
    educationDate: "",
    educationDescription: "",
    interests: "",
    cv: "",
    editForm: false,
    error: null
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/cv/${id}`)
      .then(response => {
        this.setState({
          cv: response.data,
          name: response.data.name,
          summary: response.data.summary,
          skills: response.data.skills,
          email: response.data.email,
          address: response.data.address,
          phoneNumber: response.data.phoneNumber,
          experienceTitle: response.data.experienceTitle,
          experienceDescription: response.data.experienceDescription,
          educationTitle: response.data.educationTitle,
          educationDate: response.data.educationDate,
          educationDescription: response.data.educationDescription,
          interests: response.data.interests
        });
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/cv/${id}`, {
        name: this.state.name,
        summary: this.state.summary,
        skills: this.state.skills,
        email: this.state.email,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        experienceTitle: this.state.experienceTitle,
        experienceDescription: this.state.experienceDescription,
        educationTitle: this.state.educationTitle,
        educationDate: this.state.educationDate,
        educationDescription: this.state.educationDescription,
        interests: this.state.interests
      })
      .then(response => {
        this.setState({
          cv: response.data,
          name: response.data.name,
          summary: response.data.summary,
          skills: response.data.skills,
          email: response.data.email,
          address: response.data.address,
          phoneNumber: response.data.phoneNumber,
          experienceTitle: response.data.experienceTitle,
          experienceDescription: response.data.experienceDescription,
          educationTitle: response.data.educationTitle,
          educationDate: response.data.educationDate,
          educationDescription: response.data.educationDescription,
          interests: response.data.interests,
          editForm: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteCV = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/cv/${id}`).then(() => {
      this.props.history.push("/cv");
    });
  };

  render() {
    const {
      name,
      summary,
      skills,
      email,
      address,
      phoneNumber,
      experienceTitle,
      experienceDescription,
      educationTitle,
      educationDate,
      educationDescription,
      interests
    } = this.state;
    // console.log(cv);
    return (
      <div>
        <h1>{name}</h1>
        <h4>Skills</h4>
        <p>{skills}</p>
        <h4>Email</h4>
        <p>{email}</p>
        <h4>Summary</h4>
        <p>{summary}</p>
        <h4>Address</h4>
        <p>{address}</p>
        <p>{phoneNumber}</p>
        <p>{experienceTitle}</p>
        <p>{experienceDescription}</p>
        <p>{educationTitle}</p>
        <p>{educationDate}</p>
        <p>{educationDescription}</p>
        <p>{interests}</p>
        <Button onClick={this.toggleEditForm}>Show Edit form</Button>
        <Button variant="danger" onClick={this.deleteCV}>
          Delete project
        </Button>
      </div>
    );
  }
}
