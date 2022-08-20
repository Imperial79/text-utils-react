import "./NavBar.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.bool.isRequired,
  };
  NavBar.defaultProps = {
    title: "Title here",
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>{props.title}</strong>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{ height: "25px", width: "25px", cursor: "pointer" }}
                onClick={() => {}}
              ></div>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked="true"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "dark" ? "Light" : "Dark"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      <h1
        className="title"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        IMPERIAL79
      </h1>
    </>
  );
}
export default NavBar;
