import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import EditCV from "./EditCV";

export default class FinishedCV extends Component {
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
    extra_5: "",

    editForm: false,
    error: null
  };

  getData = () => {
    console.log("Getting the data...");
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`/cv/${id}`)
      .then(response => {
        console.log("Response from AXIOS", response);

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
    console.log(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  //edit CV
  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
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

  deleteCV = () => {
    const id = this.props.match.params.id;
    axios.delete(`/cv/${id}`).then(() => {
      this.props.history.push("/cv/all");
    });
  };

  render() {
    console.log(this.props.values);
    const {
      name,
      email,
      phone,
      linkedin,
      github,
      skills,

      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,

      exp2_org,
      exp2_pos,
      exp2_desc,
      exp2_dur,

      proj1_title,
      proj1_link,
      proj1_desc,

      proj2_title,
      proj2_link,
      proj2_desc,

      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_desc,

      edu2_school,
      edu2_year,
      edu2_qualification,
      edu2_desc,

      extra_1,
      extra_2,
      extra_3,
      extra_4,
      extra_5
    } = this.state;

    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
          <h1>{name}</h1>
          <h5>Email:</h5>
          <p>{email}</p>
          <h5>Contact:</h5>
          <p>{phone}</p>
          <h5>LinkedIn:</h5>
          <p>
            <a href={linkedin}>{linkedin}</a>
          </p>
          <h5>Github:</h5>
          <p>
            <a href={github}>{github}</a>
          </p>
          <h3>Skills:</h3>
          <p>{skills}</p>
          <h3>Experience:</h3>
          <h5>
            {exp1_org}, {exp1_pos}
          </h5>
          <p>{exp1_dur}</p>
          <p>{exp1_desc}</p>
          <h5>
            {exp2_org}, {exp2_pos}
          </h5>
          <p>{exp2_dur}</p>
          <p>{exp2_desc}</p>
          <h3>Projects:</h3>
          <h5>
            {proj1_title} ({proj1_link})
          </h5>
          <p>{proj1_desc}</p>
          <h5>
            {proj2_title} ({proj2_link})
          </h5>
          <p>{proj2_desc}</p>
          <h3>Education:</h3>
          <h5>
            {edu1_school} ({edu1_qualification}, {edu1_year})
          </h5>
          <p>{edu1_desc}</p>
          <h5>
            {edu2_school} ({edu2_qualification}, {edu2_year})
          </h5>
          <p>{edu2_desc}</p>
          <h3>Extra-Curriculars/Activities:</h3>
          <h5>Languages:</h5>
          <p>{extra_1}</p>
          <h5>Hobbies:</h5>
          <p>{extra_2}</p>
          <ul>
            <li>{extra_3}</li>
            <li>{extra_4}</li>
            <li>{extra_5}</li>
          </ul>
        </div>
        {/* {this.props.user ? (
          <> */}
        <EditCV />
        <form>
          {/* <Button onClick={this.handleChange}>Edit CV</Button> */}
          <Button variant="danger" onClick={this.deleteCV}>
            Delete project
          </Button>
        </form>
        {/* </>
        ) : (
          <></>
        )} */}
      </div>
    );
  }
}
