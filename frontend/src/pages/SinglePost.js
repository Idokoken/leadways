import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Tablet } from "../Responsive";
import moment from "moment";
import RelatedPost from "../components/RelatedPost";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  min-height: 50vh;
  font-family: "Poppins", sans-serif;

  .post {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .content {
    margin: 20px;
  }
  .img-container {
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    height: 40vh;
    ${Tablet({ width: "90%", height: "50vh" })}
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    margin-top: 15px;
    font-size: 40px;
  }
  .related .heading {
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: 700;
    margin-top: 15px;
    margin-left: 20px;
    font-size: 30px;
  }
  p {
    font-size: 18px;
    line-height: 35px;
    text-indent: 30px;
    /* font-weight: 600; */
  }
  h5 {
    margin: 0;
    margin-left: 20px;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    font-style: italic;
  }
  .social {
    margin-bottom: 2px;
  }

  .social img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 15px;
  }
  .social h4 {
    color: rgb(150, 8, 8);
  }
  .social a:hover {
    opacity: 0.5;
  }
  .related {
    border-top: 4px solid rgba(0, 0, 0, 0.5);
  }
`;

function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const postUrl = window.location.href;
  const apiUrl = process.env.REACT_APP_API_URL;

  const getPost = async () => {
    try {
      const resp = await axios.get(`${apiUrl}/post/${id}`);
      setPost(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <Wrapper>
      <div className="post">
        <h2>{post.title}</h2>
        <h5>{moment(post.createdAt).format("DD MMMM, YYYY")}</h5>
        <div className="img-container">
          <img src={post.cover} alt="post cover" />
        </div>
        <div className="content">
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
          <div className="social my-4">
            <h4 className="mb-3">Share on</h4>
            <Link
              to={`https://twitter.com/intent/tweet?url=${postUrl}`}
              target="_blank"
            >
              <img src="/images/twitter.png" alt="twitter" />
            </Link>
            <Link
              to={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
              target="_blank"
            >
              <img src="/images/facebook.png" alt="facebook" />
            </Link>
            <Link
              to={`https://www.linkedin.com/shareArticle?url=${postUrl}`}
              target="_blank"
            >
              <img src="/images/linkedin.png" alt="linkedIn" />
            </Link>
            <Link to={`whatsapp://send?text=${postUrl}`} target="_blank">
              <img src="/images/whatsapp.png" alt="whatsapp" />
            </Link>
          </div>
        </div>
      </div>
      <div className="related">
        <h4 className="heading">More related posts from leadways blog</h4>
        <RelatedPost id={id} />
      </div>
    </Wrapper>
  );
}

export default SinglePost;
