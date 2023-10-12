import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  .newsletter {
    padding: 30px;
    color: white;
    background: linear-gradient(
      93.29deg,
      #fc40c7 0.19%,
      #1e44a6 26.84%,
      #146765 70.85%,
      #04970a 100%
    );
  }

  h4 {
    margin: 0;
    margin-bottom: 30px;
    color: white;
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
    ${Tablet({ width: "250px" })}
  }
  button {
    padding: 8px 5px;
    padding-right: 15px;
    background: black;
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
