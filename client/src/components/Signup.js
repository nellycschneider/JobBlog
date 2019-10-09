import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signup } from "../services/api";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    signup(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        // successfully signed up
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push("/portfolio");
      }
    });
  };

  render() {
    console.log(this.props);

    return (
      <>
        <h2>Sign up</h2>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username" placeholder="NAME" />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="PASSWORD" />
            <div className="buttons">
              <button type="submit" className="btn-form">
                SIGN UP
              </button>
            </div>
            <p className="loginSignup">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
            {this.state.message && <Alert variant="danger">{this.state.message}</Alert>}
          </form>
        </div>
      </>
    );
  }
}

/*






         <h2>Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
            />
          </Form.Group>

          <Button type="submit">Signup</Button>
        </Form>
        {this.state.message && (
          <Alert variant="danger">{this.state.message}</Alert>
        )}

*/
