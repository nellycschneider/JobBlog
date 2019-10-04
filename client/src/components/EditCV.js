import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import UserForm from "./UserForm";
import axios from "axios";

class EditCV extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",

    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",

    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",

    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
    extra_3: "",
    extra_4: "",
    extra_5: ""
  };

  //edit CV
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.props.id;
    axios
      .put(`/cv/${id}`, {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        linkedin: this.state.linkedin,
        github: this.state.github,
        skills: this.state.skills,

        exp1_org: this.state.exp1_org,
        exp1_pos: this.state.exp1_pos,
        exp1_desc: this.state.exp1_desc,
        exp1_dur: this.state.exp1_dur,

        exp2_org: this.state.exp2_org,
        exp2_pos: this.state.exp2_pos,
        exp2_desc: this.state.exp2_desc,
        exp2_dur: this.state.exp2_dur,

        proj1_title: this.state.proj1_title,
        proj1_link: this.state.proj1_link,
        proj1_desc: this.state.proj1_desc,

        proj2_title: this.state.proj2_title,
        proj2_link: this.state.proj2_link,
        proj2_desc: this.state.proj2_desc,

        edu1_school: this.state.edu1_school,
        edu1_year: this.state.edu1_year,
        edu1_qualification: this.state.edu1_qualification,
        edu1_desc: this.state.edu1_desc,

        edu2_school: this.state.edu2_school,
        edu2_year: this.state.edu2_year,
        edu2_qualification: this.state.edu2_qualification,
        edu2_desc: this.state.edu2_desc,

        extra_1: this.state.extra_1,
        extra_2: this.state.extra_2,
        extra_3: this.state.extra_3,
        extra_4: this.state.extra_4,
        extra_5: this.state.extra_5
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          linkedin: response.data.linkedin,
          github: response.data.github,
          skills: response.data.skills,

          exp1_org: response.data.exp1_org,
          exp1_pos: response.data.exp1_pos,
          exp1_desc: response.data.exp1_desc,
          exp1_dur: response.data.exp1_dur,

          exp2_org: response.data.exp2_org,
          exp2_pos: response.data.exp2_pos,
          exp2_desc: response.data.exp2_desc,
          exp2_dur: response.data.exp2_dur,

          proj1_title: response.data.proj1_title,
          proj1_link: response.data.proj1_link,
          proj1_desc: response.data.proj1_desc,

          proj2_title: response.data.proj2_title,
          proj2_link: response.data.proj2_link,
          proj2_desc: response.data.proj2_desc,

          edu1_school: response.data.edu1_school,
          edu1_year: response.data.edu1_year,
          edu1_qualification: response.data.edu1_qualification,
          edu1_desc: response.data.edu1_desc,

          edu2_school: response.data.edu2_school,
          edu2_year: response.data.edu2_year,
          edu2_qualification: response.data.edu2_qualification,
          edu2_desc: response.data.edu2_desc,

          extra_1: response.data.extra_1,
          extra_2: response.data.extra_2,
          extra_3: response.data.extra_3,
          extra_4: response.data.extra_4,
          extra_5: response.data.extra_5,
          editForm: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //get data method
  //componentwillmount

  getData = () => {
    const { id } = this.props.id;
    axios
      .get(`/cv/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          linkedin: response.data.linkedin,
          github: response.data.github,
          skills: response.data.skills,

          exp1_org: response.data.exp1_org,
          exp1_pos: response.data.exp1_pos,
          exp1_desc: response.data.exp1_desc,
          exp1_dur: response.data.exp1_dur,

          exp2_org: response.data.exp2_org,
          exp2_pos: response.data.exp2_pos,
          exp2_desc: response.data.exp2_desc,
          exp2_dur: response.data.exp2_dur,

          proj1_title: response.data.proj1_title,
          proj1_link: response.data.proj1_link,
          proj1_desc: response.data.proj1_desc,

          proj2_title: response.data.proj2_title,
          proj2_link: response.data.proj2_link,
          proj2_desc: response.data.proj2_desc,

          edu1_school: response.data.edu1_school,
          edu1_year: response.data.edu1_year,
          edu1_qualification: response.data.edu1_qualification,
          edu1_desc: response.data.edu1_desc,

          edu2_school: response.data.edu2_school,
          edu2_year: response.data.edu2_year,
          edu2_qualification: response.data.edu2_qualification,
          edu2_desc: response.data.edu2_desc,

          extra_1: response.data.extra_1,
          extra_2: response.data.extra_2,
          extra_3: response.data.extra_3,
          extra_4: response.data.extra_4,
          extra_5: response.data.extra_5
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

  render() {
    const {
      name,
      email
      //   phone,
      //   linkedin,
      //   github,
      //   skills,

      //   exp1_org,
      //   exp1_pos,
      //   exp1_desc,
      //   exp1_dur,

      //   exp2_org,
      //   exp2_pos,
      //   exp2_desc,
      //   exp2_dur,

      //   proj1_title,
      //   proj1_link,
      //   proj1_desc,

      //   proj2_title,
      //   proj2_link,
      //   proj2_desc,

      //   edu1_school,
      //   edu1_year,
      //   edu1_qualification,
      //   edu1_desc,

      //   edu2_school,
      //   edu2_year,
      //   edu2_qualification,
      //   edu2_desc,

      //   extra_1,
      //   extra_2,
      //   extra_3,
      //   extra_4,
      //   extra_5
    } = this.state;

    return (
      <div>
        <h2>Edit project: </h2>
        <Form onSubmit={this.handleSubmit}>
          {/* <UserForm /> */}

          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit">Edit</Button>
        </Form>
      </div>
    );
  }
}

export default EditCV;
