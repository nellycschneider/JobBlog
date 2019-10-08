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

  // Activity/Achievement

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
        // console.log(response.data);
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
        //const {name, email,phone,linkedin,github,skills,exp1_org,exp2_org} = response.data
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
        // console.log(err.response);
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact:</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>LinkedIn:</Form.Label>
            <Form.Control
              type="text"
              name="linkedin"
              value={this.state.linkedin}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Github:</Form.Label>
            <Form.Control
              type="text"
              name="github"
              value={this.state.github}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Skills:</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h3>Experience:</h3>
          <h4>First experience</h4>
          <Form.Group>
            <Form.Label>Institute/Organisation:</Form.Label>
            <Form.Control
              type="text"
              name="exp1_org"
              value={this.state.exp1_org}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position:</Form.Label>
            <Form.Control
              type="text"
              name="exp1_pos"
              value={this.state.exp1_pos}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="exp1_desc"
              value={this.state.exp1_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration:</Form.Label>
            <Form.Control
              type="text"
              name="exp1_dur"
              value={this.state.exp1_dur}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h4>Second experience</h4>
          <Form.Group>
            <Form.Label>Institute/Organisation:</Form.Label>
            <Form.Control
              type="text"
              name="exp2_org"
              value={this.state.exp2_org}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position:</Form.Label>
            <Form.Control
              type="text"
              name="exp2_pos"
              value={this.state.exp2_pos}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="exp2_desc"
              value={this.state.exp2_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration:</Form.Label>
            <Form.Control
              type="text"
              name="exp2_dur"
              value={this.state.exp2_dur}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h3>Projects</h3>
          <h4>First project</h4>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="proj1_title"
              value={this.state.proj1_title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link:</Form.Label>
            <Form.Control
              type="text"
              name="proj1_link"
              value={this.state.proj1_link}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="proj1_desc"
              value={this.state.proj1_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h4>Second project</h4>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="proj2_title"
              value={this.state.proj2_title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link:</Form.Label>
            <Form.Control
              type="text"
              name="proj2_link"
              value={this.state.proj2_link}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="proj2_desc"
              value={this.state.proj2_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h3>Education</h3>
          <h4>First school</h4>
          <Form.Group>
            <Form.Label>College/University:</Form.Label>
            <Form.Control
              type="text"
              name="edu1_school"
              value={this.state.edu1_school}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control
              type="text"
              name="edu1_year"
              value={this.state.edu1_year}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Qualification:</Form.Label>
            <Form.Control
              type="text"
              name="edu1_qualification"
              value={this.state.edu1_qualification}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="edu1_desc"
              value={this.state.edu1_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h4>Second school</h4>
          <Form.Group>
            <Form.Label>College/University:</Form.Label>
            <Form.Control
              type="text"
              name="edu2_school"
              value={this.state.edu2_school}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Year:</Form.Label>
            <Form.Control
              type="text"
              name="edu2_year"
              value={this.state.edu2_year}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Qualification:</Form.Label>
            <Form.Control
              type="text"
              name="edu2_qualification"
              value={this.state.edu2_qualification}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="edu2_desc"
              value={this.state.edu2_desc}
              onChange={this.handleChange}
            />
          </Form.Group>
          <h3>Skills</h3>
          <Form.Group>
            <Form.Label>Languages:</Form.Label>
            <Form.Control
              type="text"
              name="extra_1"
              value={this.state.extra_1}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hobbies:</Form.Label>
            <Form.Control
              type="text"
              name="extra_2"
              value={this.state.extra_2}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Activity/Achievement:</Form.Label>
            <Form.Control
              type="text"
              name="extra_3"
              value={this.state.extra_3}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Activity/Achievement:</Form.Label>
            <Form.Control
              type="text"
              name="extra_4"
              value={this.state.extra_4}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Activity/Achievement:</Form.Label>
            <Form.Control
              type="text"
              name="extra_5"
              value={this.state.extra_5}
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
