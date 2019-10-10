import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = props => {
  return (
    <div className="navBarPosition">
      {/* WIDE SCREEN NAV */}

      <nav className="navBar">
        <ul>
          <li>
            <Link className="navItem home btn" to="/">
              Home
            </Link>
          </li>

          {props.user ? (
            // user is logged in, show these
            <>
              <li>
                <Link
                  className="navItem portfolioNav btn"
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
                <Link className="navItem allCv btn" to="/cv/all">
                  All CVs
                </Link>
              </li>
              <li>
                <Link
                  className="navItem btn"
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
                <Link className="navItem btn" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="navItem btn" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* MOBILE NAV */}

      <nav className="MobileNavBar">
        <ul>
          {props.user ? (
            // user is logged in, show these
            <>
              <li>
                <Link
                  className="navItem btn"
                  to={`/portfolio/user/${props.user.username}`}
                >
                  <i className="fas fa-paint-brush"></i>
                </Link>
              </li>
              <li>
                <Link to="/portfolio/dashboard" className="navItem btn">
                  <i className="fas fa-pencil-ruler"></i>
                </Link>
              </li>
              <li>
                <Link className="navItem btn allCv" to="/cv/all">
                  <i className="fas fa-id-card"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="navItem btn"
                  to="/"
                  onClick={() => handleLogout(props)}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            </>
          ) : (
            // else show these
            <>
              <li>
                <Link className="navItem btn" to="/">
                  <i className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <Link className="navItem btn" to="/signup">
                  <i class="fas fa-signature"></i>
                </Link>
              </li>
              <li>
                <Link className="navItem btn" to="/login">
                  <i class="fas fa-sign-out-alt"></i>
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
