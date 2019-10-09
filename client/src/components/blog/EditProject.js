import React, { Component } from "react";
import axios from "axios";
import shortId from "shortid";
import service from "../../services/api";

export default class EditProject extends Component {
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

  handleFileUpload = (e, id) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        console.log(response);
        let updatedContent = this.state.content.map(el => {
          if (el._id === id) {
            return {
              ...el,
              img: response.secure_url
            };
          }
          return el;
        });
        this.setState({ content: updatedContent });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChangeEl = (event, id) => {
    const { name, value } = event.target;
    let updatedContent = this.state.content.map(el => {
      if (el._id === id) {
        return {
          ...el,
          [name]: value
        };
      }
      return el;
    });
    this.setState({ content: updatedContent });
  };

  handleClick = event => {
    const newId = shortId.generate();
    event.preventDefault();
    this.setState(
      {
        content: [...this.state.content, { id: newId, imgDescription: "", img: "" }]
      },
      () => console.log(this.state.content)
    );
  };

  handleClickDelete = deletedContent => {
    console.log(deletedContent);
    const filtContent = this.state.content.filter(content => content._id !== deletedContent._id);
    console.log(filtContent);
    this.setState({
      content: filtContent
    });
  };

  deleteProject = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios.delete(`/portfolio/project/${id}`).then(() => {
      this.props.history.push("/portfolio/dashboard");
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
          title: response.data.title,
          description: response.data.description,
          content: response.data.content
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Project Title: </label>
            <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="description">
            <label htmlFor="description">Project Description: </label>
            <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>
          {this.state.content.length > 0
            ? this.state.content.map(el => {
                return (
                  <div className="content" key={el._id}>
                    <button onClick={() => this.handleClickDelete(el)}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <label htmlFor="imgUpload">Upload a Picture: </label>
                    <input type="file" onChange={e => this.handleFileUpload(e, el._id)} />

                    <label htmlFor="description">Picture Description: </label>
                    <textarea
                      name="imgDescription"
                      id="imgDescription"
                      cols="30"
                      rows="10"
                      value={el.imgDescription}
                      onChange={e => this.handleChangeEl(e, el._id)}
                    ></textarea>
                  </div>
                );
              })
            : null}
          <button onClick={this.handleClick}>Create new</button>
          <button type="submit">Create Post</button>
          <button onClick={this.deleteProject}>
            <i className="fas fa-minus"></i>
          </button>
        </form>
      </div>
    );
  }
}
