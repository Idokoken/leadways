import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tablet } from "../Responsive";

const Wrapper = styled.footer`
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  // background: white;
  // color: black;

  .footer {
    width: 100vw;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    border-top: 4px solid var(--primary-color);
  }

  .footer .item {
    flex: 100%;
    ${Tablet({ flex: "25%" })}
    display: flex;
    flex-direction: column;
    ${Tablet({ alignItems: "center" })}
  }
  .footer .item .icon-header h3 {
    font-size: 30px;
    font-family: "Lobster", cursive;
    background: linear-gradient(180deg, #b80a0a 47.92%, #280c78 79.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .footer .item h3 {
    color: var(--primary-color);
    font-weight: 500;
  }
  .rule {
    border-top: 4px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copywite {
    margin: 10px;
    font-family: "Oleo Script Swash Caps", cursive;
    ${Tablet({ fontSize: "20px" })}
  }
  img {
    width: 30px;
    height: 30px;
  }
  .brand {
    align-self: flex-start;
  }
  .icon-header {
    display: flex;
  }
  .icons-container {
    display: grid;
    grid-template-columns: 22% 22% 22% 22%;
    gap: 10px;
    padding: 20px;
  }
  .icon-container {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .icon {
    // margin-right: 20px;
    color: white;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #0a0f83;
    font-weight: 700;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="item">
          <div className="icon-header">
            <img src="/images/brand.png" alt="brand" />{" "}
            <h3 className="ms-2">Leadways</h3>
          </div>
        </div>
        <div className="item">
          <p>
            Leadways news-blog is your number one destination for latest,
            trending and honest news in Nigeria, Africa and the world at large
          </p>
        </div>
        <div className="item">
          <h3>Quick Links</h3>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/post">Posts</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="item">
          <h4>Follow Us</h4>
          <div className="icons-container">
            <div className="icon-container">
              <Link to="https://facebook.com/leadways">
                <i className="fa-brands fa-facebook icon"></i>
              </Link>
            </div>

            <div className="icon-container">
              <Link to="https://twitter.com/leadways">
                <i className="fa-brands fa-twitter icon"></i>
              </Link>
            </div>

            <div className="icon-container">
              <Link to="https://instagram.com/leadways">
                <i className="fa-brands fa-instagram icon"></i>
              </Link>
            </div>

            <div className="icon-container">
              <Link to="https://youtube.com/leadways">
                <i className="fa-brands fa-youtube icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rule">
        <p className="copywite">
          All Right reversed &copy; Leadways-news 2023{" "}
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
