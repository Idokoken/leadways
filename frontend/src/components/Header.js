import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  color: white;
  font-family: "Poppins", sans-serif;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  background: linear-gradient(
    269.64deg,
    #1d1c1c 21.2%,
    #c61414 53.65%,
    #0f0f0f 79.79%
  );

  div {
    margin: 5px;
    ${Tablet({ margin: "10px" })}
  }
  div a {
    text-decoration: none;
    color: inherit;
    font-size: 10px;
    font-weight: 500;
    ${Tablet({ fontSize: "14px" })}
  }
  .div a:hover {
    color: rgb(177, 211, 84);
  }
  .bg-light {
    background-color: white !important;
    /* background-image: linear-gradient(to right, blue, rgb(155, 170, 240), blue) !important; */
    box-shadow: 5px 5px 5px 5px #eee6e6;
  }
  .nav-link,
  .navbar-brand {
    color: var(--primary-color);
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
  }
  .nav-link:hover {
    color: rgb(177, 211, 84);
  }
`;

function Header({ user }) {
  return (
    <Wrapper>
      {user && user.isAdmin && (
        <>
          <div>
            <Link to="/admin">Admin</Link>
          </div>
          <div>
            <Link to="/logout">
              <i className="h-icon"></i>Logout
            </Link>
          </div>
        </>
      )}
      {user && (
        <>
          <div>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </div>
          <div>
            <Link to="/logout">
              <i className="h-icon"></i>Logout
            </Link>
          </div>
        </>
      )}
      {!user && (
        <>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default Header;
