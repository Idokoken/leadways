import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Tablet, Desktop } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  .relatedPost-container {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    padding: 20px;
    ${Tablet({ gridTemplateColumns: "40% 40%", gap: "50px" })}
    ${Desktop({ gridTemplateColumns: "30% 30% 30%", gap: "50px" })}
  }

  .related-post {
    /* height: 250px; */
    padding: 10px;
    box-shadow: 0 3px 3px #888888;
  }

  .related-post .img-container {
    width: 100%;
    height: 200px;
    background-color: grey;
    margin: auto;
  }
  .related-post img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .related-post h4 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 24px;
    margin-top: 10px;
    font-weight: 600;
  }
  .related-post p {
    font-size: 16px;
    font-weight: 500;
  }
  .related-post span {
    color: var(--primary-color);
    font-weight: 500;
  }
  .related-post a:hover {
    opacity: 0.6;
  }
  .more {
    margin: 30px;
    margin-top: 20px;
  }
  .more a {
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 30px;
    text-decoration: none;
  }
  .more a:hover {
    color: #0a0f83;
    font-weight: 700;
  }
`;

function RelatedPost({ id }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await axios.get(`${apiUrl}/post/related`);
        setRelatedPosts(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [apiUrl]);

  const items = relatedPosts
    .filter((p, i) => p._id !== id)
    .map((item, i) => (
      <div className="related-post" key={item._id}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/post/${item._id}`}
        >
          <div className="img-container">
            <img
              src={item.cover}
              alt="product cover"
              width="100"
              height="100"
            />
          </div>
          <h4>{item.title.slice(0, 100)}</h4>

          <div className="desc">
            <p>{item.description.slice(0, 100)}</p>
            <span>more</span>
          </div>
        </Link>
      </div>
    ));
  return (
    <Wrapper>
      <div className="relatedPost-container">{items}</div>
      <div className="more">
        <Link to="/posts">More News</Link>
      </div>
    </Wrapper>
  );
}

export default RelatedPost;
