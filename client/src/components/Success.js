import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div>
        <div className="card-body text-center pt-5 pb-5">
          {/* Contact */}
          <div className="contactForm">
            <h1 className="contactName">{this.props.values.name}</h1>
            <div className="contact">
              <i class="far fa-envelope fa-2x"></i>
              <p>{this.props.values.email}</p>
            </div>

            <div className="contact-column">
              <div className="contact">
                <i class="fas fa-phone fa-2x"></i>
                <p>{this.props.values.phone}</p>
              </div>
              <div className="icons">
                <a href={`http://${this.props.values.linkedin}`}>
                  <i class="fab fa-linkedin-in fa-2x"></i>
                  {this.props.values.linkedin}
                </a>
                <br />
                <a href={`http://${this.props.values.github}`}>
                  <i class="fab fa-github fa-2x"></i>
                  {this.props.values.github}
                </a>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="skills">
            <h3>Skills:</h3>
            <p>{this.props.values.skills}</p>
          </div>

          {/* Experience */}
          <div className="experience">
            <h3>Experience:</h3>
            <div className="exp-middle-section">
              <div className="exp-small-section">
                <h5>
                  {this.props.values.exp1_org}, {this.props.values.exp1_pos}
                </h5>
                <p>{this.props.values.exp1_dur}</p>
                <p>{this.props.values.exp1_desc}</p>
              </div>
            </div>
            <div className="exp-middle-section">
              <div className="exp-small-section">
                <h5>
                  {this.props.values.exp2_org}, {this.props.values.exp2_pos}
                </h5>
                <p>{this.props.values.exp2_dur}</p>
                <p>{this.props.values.exp2_desc}</p>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="projects-section">
            <h3>Projects:</h3>
            <div className="proj-middle-section">
              <div className="proj-small-section">
                <h5>
                  {this.props.values.proj1_title}{" "}
                  <a href={`{proj1_link}`}>({this.props.values.proj1_link})</a>
                </h5>
                <p>{this.props.values.proj1_desc}</p>
              </div>
            </div>
            <div className="proj-middle-s">
              <div className="proj-small-section">
                <h5>
                  {this.props.values.proj2_title}{" "}
                  <a href={`{proj2_link}`}>({this.props.values.proj2_link})</a>
                </h5>
                <p>{this.props.values.proj2_desc}</p>
              </div>
            </div>
          </div>
          <div className="education">
            <h3>Education:</h3>
            <div className="proj-middle-section">
              <div className="proj-small-section">
                <h5>
                  {this.props.values.edu1_school} (
                  {this.props.values.edu1_qualification},{" "}
                  {this.props.values.edu1_year})
                </h5>
                <p>{this.props.values.edu1_desc}</p>
              </div>
            </div>
            <div className="proj-middle-section">
              <div className="proj-small-section">
                <h5>
                  {this.props.values.edu2_school} (
                  {this.props.values.edu2_qualification},{" "}
                  {this.props.values.edu2_year})
                </h5>
                <p>{this.props.values.edu2_desc}</p>
              </div>
            </div>
          </div>
          <div className="extra">
            <h3>Extra-Curriculars/Activities:</h3>
            <div className="extra-small">
              <h5>Languages:</h5>
              <p>{this.props.values.extra_1}</p>
              <h5>Hobbies:</h5>
              <p>{this.props.values.extra_2}</p>
            </div>
            <h5>Other:</h5>
            <ul>
              <li>{this.props.values.extra_3}</li>
              <li>{this.props.values.extra_4}</li>
              <li>{this.props.values.extra_5}</li>
            </ul>
          </div>
        </div>
        <Link className="btn" to="/cv/all">
          go to CVs
        </Link>
      </div>
    );
  }
}
