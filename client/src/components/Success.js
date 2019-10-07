import React, { Component } from "react";

export default class Success extends Component {
  render() {
    console.log("SUCCESS DATA: ", this.props.values);

    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
          <h1>{this.props.values.name}</h1>
          <h5>Email:</h5>
          <p>{this.props.values.email}</p>
          <h5>Contact:</h5>
          <p>{this.props.values.phone}</p>
          <h5>LinkedIn:</h5>
          <p>
            <a href={this.props.values.linkedin}>
              {this.props.values.linkedin}
            </a>
          </p>
          <h5>Github:</h5>
          <p>
            <a href={this.props.values.github}>{this.props.values.github}</a>
          </p>
          <h3>Skills:</h3>
          <p>{this.props.values.skills}</p>
          <h3>Experience:</h3>
          <h5>
            {this.props.values.exp1_org}, {this.props.values.exp1_pos}
          </h5>
          <p>{this.props.values.exp1_dur}</p>
          <p>{this.props.values.exp1_desc}</p>
          <h5>
            {this.props.values.exp2_org}, {this.props.values.exp2_pos}
          </h5>
          <p>{this.props.values.exp2_dur}</p>
          <p>{this.props.values.exp2_desc}</p>
          <h3>Projects:</h3>
          <h5>
            {this.props.values.proj1_title} ({this.props.values.proj1_link})
          </h5>
          <p>{this.props.values.proj1_desc}</p>
          <h5>
            {this.props.values.proj2_title} ({this.props.values.proj2_link})
          </h5>
          <p>{this.props.values.proj2_desc}</p>
          <h3>Education:</h3>
          <h5>
            {this.props.values.edu1_school} (
            {this.props.values.edu1_qualification},{" "}
            {this.props.values.edu1_year})
          </h5>
          <p>{this.props.values.edu1_desc}</p>
          <h5>
            {this.props.values.edu2_school} (
            {this.props.values.edu2_qualification},{" "}
            {this.props.values.edu2_year})
          </h5>
          <p>{this.props.values.edu2_desc}</p>
          <h3>Extra-Curriculars/Activities:</h3>
          <h5>Languages:</h5>
          <p>{this.props.values.extra_1}</p>
          <h5>Hobbies:</h5>
          <p>{this.props.values.extra_2}</p>
          <ul>
            <li>{this.props.values.extra_3}</li>
            <li>{this.props.values.extra_4}</li>
            <li>{this.props.values.extra_5}</li>
          </ul>
        </div>
      </div>
    );
  }
}
