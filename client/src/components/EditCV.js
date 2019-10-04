import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import UserForm from "./UserForm";

class EditCV extends Component {
    state = {
        
    }
  render() {
    return (
      <div>
        <h2>Edit project: </h2>
        <Form onSubmit={this.props.handleSubmit}>
          <UserForm />

          {/* 
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </Form.Group> */}

          <Button type="submit">Edit</Button>
        </Form>
      </div>
    );
  }
}

export default EditCV;
