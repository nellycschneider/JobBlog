import React, { Component } from "react";
import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    content: []
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
          content: response.data.content
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
        content: this.state.content
      })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          content: response.data.content,
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
        <div key={i}>
          <img src={el.img} alt="" />
          <p>{el.imgDescription}</p>
        </div>
      );
    });

    const titlePicture = this.state.content[0];
    console.log("Test: ", titlePicture);

    if (this.state.error) return <div>{this.state.error}</div>;
    return (
      <div className="project">
        {this.state.content[0] ? (
          <div
            className="titlePicture"
            style={{
              background: `url(${this.state.content[0].img})`
            }}
          >
            {" "}
          </div>
        ) : (
          ""
        )}
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {content}
      </div>
    );
  }
}
