import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default class CV extends Component {
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
    interests: ""
  };

  handleChange = event => {
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
    } = event.target;

    // const name = event.target.name;
    // const summary = event.target.summary;
    // const skills = event.target.skills;
    const value = event.target.value;

    this.setState({
      [name]: value,
      [summary]: value,
      [skills]: value,
      [email]: value,
      [address]: value,
      [phoneNumber]: value,
      [experienceTitle]: value,
      [experienceDescription]: value,
      [educationTitle]: value,
      [educationDate]: value,
      [educationDescription]: value,
      [interests]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // http://localhost:5555/api/cv
    axios
      .post("/api/cv", {
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
      .then(() => {
        this.setState({
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
          interests: ""
        });
        // updates the parent's component's state, which causes new props to be passed to the <ProjectList/> component
        // this.props.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="title">Name: </Form.Label>
          <Form.Control
            type="text"
            onChange={this.handleChange}
            id="name"
            name="name"
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Summary: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="summary"
            id="summary"
            value={this.state.summary}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="skills">Skills: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="skills"
            id="skills"
            value={this.state.skills}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="email"
            id="email"
            value={this.state.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="address">Address: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="address"
            id="address"
            value={this.state.address}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="phoneNumber">Phone number: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={this.state.phoneNumber}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Experience: </Form.Label>
          <br />
          <Form.Label htmlFor="experienceTitle">Title: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="experienceTitle"
            id="experienceTitle"
            value={this.state.experienceTitle}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="experienceDescription">Description: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="experienceDescription"
            id="experienceDescription"
            value={this.state.experienceDescription}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Education:</Form.Label>
          <br />
          <Form.Label htmlFor="educationTitle">Title: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="educationTitle"
            id="educationTitle"
            value={this.state.educationTitle}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="educationDate">Date: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="educationDate"
            id="educationDate"
            value={this.state.educationDate}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="educationDescription">Description: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="educationDescription"
            id="educationDescription"
            value={this.state.educationDescription}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="interests">Interests: </Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="interests"
            id="interests"
            value={this.state.interests}
          />
        </Form.Group>
        <Button type="submit">Done</Button>
      </Form>
    );
  }
}
