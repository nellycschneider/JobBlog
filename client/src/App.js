import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FinishedCV from "./components/FinishedCV";

import UserForm from "./components/UserForm";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        {/* <Route exact path="/projects" component={Projects} /> */}

        {/* if there's no logged in user, don't show the projects page */}
        <Route exact path="/portfolio" component={Portfolio} />

        {/* <FinishedCV /> */}

        <Route
          exact
          path="/signup"
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/form"
          render={props => <UserForm setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/cv/:id"
          render={props => <FinishedCV setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;

// <Route
// exact
// path="/portfolio"
// render={props => {
//   if (this.state.user) return <Portfolio {...props} />;
//   else return <Redirect to={"/"} />;
// }}
// />
