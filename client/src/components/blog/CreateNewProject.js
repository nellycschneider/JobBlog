import React, { Component } from "react";
import axios from "axios";
import shortId from "shortid";
import service from "../../services/api";

console.log(shortId.generate());

export default class CreateNewProject extends Component {
  state = {
    title: "",
    description: "",
    content: [],
    owner: "",
    type: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/portfolio", {
        title: this.state.title,
        description: this.state.description,
        content: this.state.content,
        type: this.state.type,
        owner: this.props.user._id
      })
      .then(() => {
        this.setState({
          title: "",
          description: "",
          content: [],
          type: "",
          owner: this.props.user._id
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          if (el.id === id) {
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
    const filtContent = this.state.content.filter(content => content.id !== deletedContent.id);
    console.log(filtContent);
    this.setState({
      content: filtContent
    });
  };

  handleChangeTwo = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = (event, id) => {
    const { name, value } = event.target;
    let updatedContent = this.state.content.map(el => {
      if (el.id === id) {
        return {
          ...el,
          [name]: value
        };
      }
      return el;
    });
    this.setState({ content: updatedContent });
  };

  handleChangeType = event => {
    this.setState({ type: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-create">
          <div className="title">
            <label htmlFor="title">Project Title: </label>
            <input type="text" name="title" id="title" onChange={this.handleChangeTwo} value={this.state.title} />
          </div>
          <div className="description">
            <label htmlFor="description">Project Description: </label>
            <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleChangeTwo} value={this.state.description}></textarea>
          </div>

          {this.state.content.map(el => {
            return (
              <div className="contentImg" key={el.id}>
                <button onClick={() => this.handleClickDelete(el)}>
                  <i className="fas fa-minus"></i>
                </button>

                <label htmlFor="imgUpload" className="imgUpload">
                  Upload a Picture:{" "}
                </label>
                <input type="file" onChange={e => this.handleFileUpload(e, el.id)} />

                <label htmlFor="description" className="imgUpload">
                  Picture Description:{" "}
                </label>
                <textarea
                  name="imgDescription"
                  id="imgDescription"
                  cols="30"
                  rows="10"
                  value={el.imgDescription}
                  onChange={e => this.handleChange(e, el.id)}
                ></textarea>
              </div>
            );
          })}

          <button onClick={this.handleClick} className="btn">
            Upload picture
          </button>

          <select className="btn" value={this.state.type} name="type" onChange={this.handleChangeType}>
            <option value="UI/UX">UI/UX</option>
            <option value="Frontend">Frontend</option>
            <option selected value="Backend">
              Backend
            </option>
            <option value="Fullstack">Fullstack</option>
          </select>

          <button type="submit" className="btn">
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

/*



*/
