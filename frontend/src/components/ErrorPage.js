import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  min-height: 60vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: url("/images/error.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Tablet({ minHeight: "70vh" })}

  .error {
    // background-color: rgba(221, 114, 074, 0.5);
    background: linear-gradient(
      234.98deg,
      rgba(64, 198, 53, 0.5) 21.76%,
      rgba(183, 24, 24, 0.9) 78.14%
    );
    width: 90%;
    height: 200px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Tablet({ width: "60%", height: "250px" })}
  }

  h2 {
    color: white;
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    ${Tablet({ fontSize: "40px" })}
  }
`;

function ErrorPage() {
  return (
    <Wrapper>
      <div className="error">
        <h2 className="mt-2 mb-5">Page not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Go back Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default ErrorPage;
