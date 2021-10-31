import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import "./Navbar.css";
const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span
              className="ms-2  text-danger fw-bold custom-style p-2 "
              style={{ border: "1px solid white", borderRadius: "10px" }}
            >
              Tours Club
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              {/* CONDIOTIONAL RENDERING BASE ON THE AUNTHENTICATION STATUS OF USER */}
              {user.email ? (
                <>
                  <li className="nav-item">
                    <Link to={`/myEvents`} className="nav-link">
                      My Trips
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link to={`/manageAllEvents`} className="nav-link">
                      Manage All Trips
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link to={`/AddMoreTrips`} className="nav-link">
                      Add More Trips
                    </Link>
                  </li>{" "}
                  {user.displayName ? (
                    <span
                      className="me-2 text-dark  bg-warning  p-1 px-sm-3 my-sm-2 my-4  fw-bold"
                      style={{ borderRadius: "20px" }}
                    >
                      {user.displayName}
                    </span>
                  ) : (
                    <span className="me-2 text-white">Your account</span>
                  )}
                  <button className="btn btn-danger" onClick={logOut}>
                    {" "}
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <button className="btn btn-primary">Login</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
