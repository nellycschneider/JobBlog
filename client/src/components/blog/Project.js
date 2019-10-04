import React, { Component } from "react";
// import EditProject from "./EditProject";
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    content: [
      {}
    ]
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
        // handle err.response depending on err.response.status
        // if (err.response.status === 404) {
        //   this.setState({ error: "Not found" });
        // }
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
    if (this.state.error) return <div>{this.state.error}</div>;
    //else if (!this.state.project) return <></>;

    // const { title, description } = this.state.project;

    // console.log(this.state.project);
    // const owner = this.state.project.owner;
    // const currentUser = this.props.user;

    //can only delete task if you wrote it
    //make it a boolean with Boolean() or !!
    // const canDelete = Boolean(currentUser && currentUser._id === owner);
    // console.log(canDelete);

    let canDelete = false;
    // if (currentUser && currentUser._id === owner) {
    //   canDelete = true;
    // }
    // console.log(canDelete);
    console.log(this.state);
    return (
      <div>
        <h1>Hi ich bin ein Project detail</h1>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <p>{this.state.description}</p>

        <Button onClick={this.toggleEditForm}>Show Edit form</Button>
        <Button onClick={() => this.setState({ taskForm: !this.state.taskForm })}>Show Task form</Button>
        {canDelete && (
          <Button variant="danger" onClick={this.deleteProject}>
            Delete project
          </Button>
        )}

        {/* form that is displayed when the edit button is clicked */}
        {/* {this.state.editForm && (
          <EditProject
            // spread properties from the state (title and description will be needed in the child component)
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )} */}

        {/* {this.state.taskForm && <AddTask projectId={this.state.project._id} getData={this.getData} hideForm={() => this.setState({ taskForm: false })} />} */}

        {/* <TaskList tasks={this.state.project.tasks} /> */}
      </div>
    );
  }
}
