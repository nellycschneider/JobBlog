import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

//================Blog=====================
import Portfolio from "./components/blog/Portfolio";
import PortfolioDashboard from "./components/blog/PortfolioDashboard";
import EditProject from "./components/blog/EditProject";
import CreateNewProject from "./components/blog/CreateNewProject";
import Project from "./components/blog/Project";
//================Blog=====================
// import TaskDetails from "./components/TaskDetails";
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
        <Switch>
          {/* ================BLOG Router===================== */}
          <Route exact path="/portfolio" user={this.state.user} component={Portfolio} />
          <Route exact path="/portfolio/dashboard" component={PortfolioDashboard} />
          <Route path="/portfolio/dashboard/create-new" component={CreateNewProject} />
          <Route path="/portfolio/dashboard/edit-project/:id" component={EditProject} />
          <Route path="/portfolio/project/:id" component={Project} />
          {/* ================BLOG Router===================== */}

          {/* <Route exact path="/tasks/:id" component={TaskDetails} /> */}
          <Route exact path="/signup" render={props => <Signup setUser={this.setUser} {...props} />} />
          <Route exact path="/login" render={props => <Login setUser={this.setUser} {...props} />} />
          {/* <Route exact path="/cv" render={props => <CV setUser={this.setUser} {...props} />} /> */}
          <Route exact path="/form" render={props => <UserForm setUser={this.setUser} {...props} />} />
          <Route exact path="/cv/:id" render={props => <FinishedCV setUser={this.setUser} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
