import React, { Component } from "react";
import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    content: [],
    createdAt: "",
    type: ""
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/portfolio/project/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          title: response.data.title,
          description: response.data.description,
          content: response.data.content,
          createdAt: response.data.createdAt,
          type: response.data.type
        });
      })
      .catch(err => {
        console.log(err.response);
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
      .put(`/portfolio/project/${id}`, {
        title: this.state.title,
        description: this.state.description,
        content: this.state.content,
        type: this.state.type
      })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          content: response.data.content,
          type: response.data.type,
          editForm: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteProject = () => {
    const id = this.props.match.params.id;
    axios.delete(`/portfolio/project/${id}`).then(() => {
      this.props.history.push("/portfolio");
    });
  };

  render() {
    const content = this.state.content.map((el, i) => {
      return (
        <div className="projectContent" key={i}>
          <div className="projectImg">
            <img src={el.img} alt="" />
          </div>
          <p>{el.imgDescription}</p>
        </div>
      );
    });

    if (this.state.error) return <div>{this.state.error}</div>;
    return (
      <div className="project">
        {this.state.content[0] ? (
          <div
            className="titlePicture"
            style={{
              background: `url(${this.state.content[0].img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <h1 className="projectTitle">{this.state.title}</h1>
          </div>
        ) : (
          ""
        )}

        <p className="projectDescription">{this.state.description}</p>
        <div className="content">{content}</div>
      </div>
    );
  }
}
