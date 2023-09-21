import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  nav {
    box-shadow: 0 5px 5px #888888;
  }

  .navbar-brand {
    /* color: var(--primary-color); */
    font-size: 30px;
    font-family: "Lobster", cursive;
    background: linear-gradient(180deg, #b80a0a 47.92%, #280c78 79.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

function Navbar({ user }) {
  return (
    <Wrapper className="sticky-top">
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/brand.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            leadways
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">
                  All Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
