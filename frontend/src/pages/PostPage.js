import React from "react";
import Posts from "../components/Posts";
import { styled } from "styled-components";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  h2 {
    font-family: "Lora", serif;
    font-style: italic;
    font-weight: 700;
    text-align: center;
    margin: 25px 0;
    color: var(--primary-color);
  }
`;

function PostPage() {
  return (
    <Wrapper>
      <h2>Posts from ExpertGuide blog</h2>
      <Posts />
    </Wrapper>
  );
}

export default PostPage;
