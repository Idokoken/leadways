import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Tablet, Desktop } from "../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  h1 {
    margin: 30px;
    font-family: "Spectral SC", serif;
  }

  h2 {
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: 700;
    /* margin-top: 10px; */
    margin-left: 30px;
    color: var(--primary-color);
  }
  .featured {
    padding: 20px;
    margin-bottom: 0;
  }
  .featured .img-container {
    width: 100%;
    height: 40vh;
    background-color: grey;
    margin: auto;
    /* border-radius: 20px; */
    ${Tablet({
      width: "80%",
      height: "60vh",
      // borderRadius: "30px",
    })}/* ${Desktop({
      width: "70%",
    })} */
  }
  .featured img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* border-radius: 20px;
    ${Tablet({ borderRadius: "30px" })} */
  }
  .featured h3 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 30px;
    margin: 20px 0;
    font-weight: 700;
    text-align: center;
  }
  .featured p {
    text-align: center;
  }
  .featured .post {
    /* margin-bottom: 30px; */
    padding-bottom: 20px;
    /* ${Tablet({ paddingBottom: "50px" })} */
  }
  .post a:hover {
    opacity: 0.6;
  }
  .others {
    padding: 20px;
    display: grid;
    grid-template-columns: 100%;
    ${Tablet({ gridTemplateColumns: "50% 50%" })};
    ${Desktop({ gridTemplateColumns: "40% 40%" })}
  }
  .others .post {
    margin-bottom: 30px;
    box-shadow: 0 5px 5px #888888;
    padding: 20px;
    ${Tablet({ marginRight: "40px" })}
  }
  .others h4 {
    font-family: "Noto Serif";
    font-style: italic;
    font-weight: 700;
  }
  .others span {
    color: var(--primary-color);
    font-weight: 500;
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

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getfeaturedPosts = async () => {
      try {
        const resp = await axios.get(`${apiUrl}/post/featured`);
        setFeaturedPost(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getLatestPosts = async () => {
      try {
        const resp = await axios.get(`${apiUrl}/post/latest`);
        setPosts(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getfeaturedPosts();
    getLatestPosts();
  }, [apiUrl]);

  const featuredItems = featuredPost.map((item, i) => (
    <div className="post" key={item._id}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/post/${item._id}`}
      >
        <div className="img-container">
          <img src={item.cover} alt="product cover" width="100" height="100" />
        </div>
        <div className="container">
          <h3>{item.title.slice(0, 100)}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: item.description.slice(0, 100) }}
          />
        </div>
      </Link>
    </div>
  ));

  const otherItems = posts.map((item, i) => (
    <div className="post" key={item._id}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/post/${item._id}`}
      >
        <h4>{item.title.slice(0, 100)}</h4>

        <div className="desc">
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: item.description.slice(0, 100) }}
          />
          <span>more</span>
        </div>
      </Link>
    </div>
  ));
  return (
    <Wrapper>
      <h1>
        Welcome to Leadways blog, your number one destination for latest news
      </h1>

      {featuredPost.length !== 0 && (
        <>
          <h2 className="">Trending news</h2>
          <div className="featured">{featuredItems}</div>
        </>
      )}
      {posts.length !== 0 && (
        <>
          <h2>Latest news</h2>
          <div className="others">{otherItems}</div>
          <div className="more">
            <Link to="/posts">More News</Link>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
