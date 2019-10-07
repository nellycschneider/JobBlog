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
    console.log(this.state.title);

    const content = this.state.content.map((el, i) => {
      console.log(el);
      return (
        <div key={i}>
          <img src={el.img} alt="" />
          <p>{el.imgDescription}</p>
        </div>
      );
    });

    if (this.state.error) return <div>{this.state.error}</div>;
    console.log(this.state);
    return (
      <div>
        <h1>Hi ich bin ein Project detail</h1>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {content}
      </div>
    );
  }
}
