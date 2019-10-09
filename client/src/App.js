import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

//================Blog=====================
import Portfolio from "./components/blog/Portfolio";
import JobDashboard from "./components/blog/JobDashboard";
import PortfolioDashboard from "./components/blog/PortfolioDashboard";
import EditProject from "./components/blog/EditProject";
import CreateNewProject from "./components/blog/CreateNewProject";
import Project from "./components/blog/Project";
import CreateJob from "./components/blog/CreateNewJob";
import JobEdit from "./components/blog/JobEdit";
//================Blog=====================
import Signup from "./components/Signup";
import Login from "./components/Login";
import FinishedCV from "./components/FinishedCV";
import AllCVs from "./components/AllCVs";
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
    console.log("app", this.state);
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        {/* if there's no logged in user, don't show the projects page */}
        <div className="container-custom">
          <Switch>
            <Route exact path="/" render={props => <Login setUser={this.setUser} {...props} />} />
            <Route exact path="/signup" render={props => <Signup setUser={this.setUser} {...props} />} />
            {/* ================BLOG Router===================== */}
            <Route path="/portfolio/project/:id" component={Project} /> */}
            <Route exact path="/portfolio/user/:username" render={props => <Portfolio user={this.state.user} {...props} />} />
            <Route exact path="/portfolio" render={props => <Portfolio user={this.state.user} {...props} />} />
            <Route exact path="/job" component={JobDashboard} />
            <Route exact path="/job/create-new" component={CreateJob} />
            <Route path="/job/:id" component={JobEdit} /> */}
            {/* ================SignUp/LogIn===================== */}
            <Route exact path="/signup" render={props => <Signup setUser={this.setUser} {...props} />} />
            <Route exact path="/login" render={props => <Login setUser={this.setUser} {...props} />} />
            {/* ================CV Router===================== */}
            <Route exact path="/cv/all" render={props => <AllCVs setUser={this.setUser} {...props} />} />
            <Route exact path="/cv-details/:id" render={props => <FinishedCV setUser={this.setUser} {...props} user={this.state.user} />} />
            {/* only logged in users */}
            {this.state.user ? (
              <>
                <Switch>
                  {/* ================BLOG Router===================== */}
                  <Route exact path="/portfolio/dashboard" render={() => <PortfolioDashboard user={this.state.user} />} />
                  <Route exact path="/portfolio/dashboard/create-new" render={() => <CreateNewProject user={this.state.user} />} />
                  <Route exact path="/portfolio/dashboard/edit-project/:id" component={EditProject} />
                  {/* ================CV Router===================== */}
                  <Route exact path="/cv/form" render={props => <UserForm setUser={this.setUser} {...props} />} />
                </Switch>
              </>
            ) : (
              <>
                <h2>Please log in or sign up to access this page.</h2>
              </>
            )}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
