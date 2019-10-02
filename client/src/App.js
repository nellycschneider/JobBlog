import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
// import Projects from "./components/Projects";
// import ProjectDetails from "./components/ProjectDetails";
// import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CV from "./components/CV";

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
        {/* <Route
          exact
          path="/projects"
          render={props => {
            if (this.state.user) return <Projects {...props} />;
            else return <Redirect to={"/"} />;
          }}
        />

        <Route
          exact
          path="/projects/:id"
          render={props => <ProjectDetails {...props} user={this.state.user} />}
        /> */}

        {/* <Route exact path="/tasks/:id" component={TaskDetails} /> */}
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
          path="/cv"
          render={props => <CV setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
