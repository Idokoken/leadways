import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  .newsletter {
    position: relative;
    padding: 30px;
    color: white;
  }
  .newsletter::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url("/images/newsletter_bg.png");
    background-size: 100% 100%;
    opacity: 0.7;
  }

  h4 {
    margin: 0;
    margin-bottom: 30px;
    position: relative;
    color: var(--primary-color);
  }
  .subscribe {
    display: flex;
  }
  input {
    padding: 8px 5px;
    padding-left: 15px;
    width: 150px;
    border: none;
    border-radius: 20px 0 0 20px;
    position: relative;
    ${Tablet({ width: "250px" })}
  }
  button {
    position: relative;
    padding: 8px 5px;
    padding-right: 15px;
    background: teal;
    color: white;
    border: none;
    border-radius: 0 20px 20px 0;
  }
`;

function NewsLetter() {
  return (
    <Wrapper>
      <div className="newsletter">
        <h4>Get breaking news delivered to your inbox</h4>
        <div className="suscribe">
          <input type="email" placeholder="enter email" />
          <button>Subscribe</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewsLetter;
