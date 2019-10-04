import React, { Component } from "react";
import axios from "axios";

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

  // deleteCV = () => {
  //   const id = this.props.match.params.id;
  //   axios.delete(`/api/cv/${id}`).then(() => {
  //     this.props.history.push("/cv");
  //   });
  // };

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
          <i className="fas fa-check-circle fa-7x text-success"></i>

          <h1>{name}</h1>
          <h6>Email:</h6>
          <p>{email}</p>
          <h6>Contact:</h6>
          <p>{phone}</p>
          <h6>LinkedIn:</h6>
          <p>
            <a href={linkedin}>{linkedin}</a>
          </p>
          <h6>GitHub:</h6>
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
      </div>
    );
  }
}
