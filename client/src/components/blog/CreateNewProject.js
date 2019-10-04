import React, { Component } from "react";
import axios from "axios";

export default class CreateNewProject extends Component {
  state = {
    title: "",
    description: "",
    content: []
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/portfolio", {
        title: this.state.title,
        description: this.state.description,
        content: this.state.content
      })
      .then(() => {
        this.state({
          title: "",
          description: "",
          content: []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      content: [...this.state.content, { imgDescription: "", img: "" }]
    });
  };

  handleChangeTwo = event => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    console.log(this.state);
    this.setState({
      [name]: value
    });
  };

  handleChange = (event, index) => {
    const { name, value } = event.target;
    let updatedContent = this.state.content.map((el, i) => {
      if (i === index) {
        return {
          ...el,
          [name]: value
        };
      }
      return el;
    });
    this.setState({ content: updatedContent });
  };
  // postTemplate = () => {
  //   return (
  //     <div className="content">
  //       <label htmlFor="imgUpload">Upload a Picture: </label>
  //       <input type="file" name="imgUpload" id="imgUpload" />
  //       <label htmlFor="description">Picture Description: </label>
  //       <textarea name="subDescription" id="subDescription" cols="30" rows="10"></textarea>
  //     </div>
  //   );
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Project Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChangeTwo}
              value={this.state.title}
            />
          </div>
          <div className="description">
            <label htmlFor="description">Project Description: </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={this.handleChangeTwo}
              value={this.state.description}
            ></textarea>
          </div>
          {/* <div className="content">
            <label htmlFor="imgUpload">Upload a Picture: </label>
            <input type="file" name="imgUpload" id="imgUpload" />
            <label htmlFor="description">Picture Description: </label>
            <textarea name="subDescription" id="subDescription" cols="30" rows="10"></textarea>
          </div> */}
          {this.state.content.map((el, i) => {
            return (
              <div className="content" key={el.id}>
                <label htmlFor="imgUpload">Upload a Picture: </label>
                <input
                  type="file"
                  name="imgUpload"
                  id="imgUpload"
                  value={el.img}
                  onChange={e => this.handleChange(e, i)}
                />
                <label htmlFor="description">Picture Description: </label>
                <textarea
                  name="imgDescription"
                  id="imgDescription"
                  cols="30"
                  rows="10"
                  value={el.imgDescription}
                  onChange={e => this.handleChange(e, i)}
                ></textarea>
              </div>
            );
          })}
          <button onClick={this.handleClick}>Create new</button>
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}
