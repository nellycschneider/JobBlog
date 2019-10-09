import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../services/api";

export default class Login extends Component {
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

    login(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: ""
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/portfolio/dashboard");
      }
    });
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username" placeholder="NAME" />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="PASSWORD" />
            <div className="buttons">
              <button type="submit" className="btn-form">
                LOGIN
              </button>
            </div>
            <p className="loginSignup">
              Still don't have an account ¯\_(ツ)_/¯?? <Link to="/signup">Sign up here</Link>
            </p>
            {this.state.message && <Alert variant="danger">{this.state.message}</Alert>}
          </form>
        </div>
      </>
    );
  }
}

/*

 <form id="form" class="topBefore">
            
          </form>
		
		  <input id="name" type="text" placeholder="NAME">
		  <input id="email" type="text" placeholder="E-MAIL">
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
  <input id="submit" type="submit" value="GO!">
  


<Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username: </Form.Label>
              <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} id="username" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password: </Form.Label>
              <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" />
            </Form.Group>
            {this.state.message && <Alert variant="danger">{this.state.message}</Alert>}
            <Button type="submit">Login</Button>
          </Form>

*/
