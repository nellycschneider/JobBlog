import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = props => {
  return (
    <div className="navBarPosition">
      <nav className="navBar">
        <ul>
          <li>
            <Link className="navItem home" to="/">
              Home
            </Link>
          </li>

          {props.user ? (
            // user is logged in, show these
            <>
              <li>
                <Link
                  className="navItem portfolioNav"
                  to={`/portfolio/user/${props.user.username}`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/portfolio/dashboard" className="btn">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="navItem allCv" to="/cv/all">
                  All CVs
                </Link>
              </li>
              <li>
                <Link
                  className="navItem"
                  to="/"
                  onClick={() => handleLogout(props)}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            // else show these
            <>
              <li>
                <Link className="navItem" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="navItem" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

/*


<Nav className="nav justify-content-end navBar" bg="dark">
      {props.user && <Nav.Brand>Welcome, {props.user.username}</Nav.Brand>}
      <Nav.Brand>
        <Link to="/">Home</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/cv/form">CV Form</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to="/portfolio">Portfolio</Link>
      </Nav.Brand>

      {props.user ? (
        // user is logged in, show these
        <>
          <Nav.Brand>
            <Link to="/cv/all">All CVs</Link>
          </Nav.Brand>
          <Nav.Brand>
            <Link to="/" onClick={() => handleLogout(props)}>
              Logout
            </Link>
          </Nav.Brand>
        </>
      ) : (
        // else show these
        <>
          <Nav.Brand>
            <Link to="/signup">Signup</Link>
          </Nav.Brand>
          <Nav.Brand>
            <Link to="/login">Login</Link>
          </Nav.Brand>
        </>
      )}
    </Nav>


*/
