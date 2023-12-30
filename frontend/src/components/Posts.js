import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Tablet, Desktop } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  .post-container {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    padding: 20px;
    ${Tablet({ gridTemplateColumns: "40% 40%", gap: "50px", paddingLeft: '40px' })}
    ${Desktop({ gridTemplateColumns: "30% 30% 30%", gap: "50px" })}
  }

  .post {
    /* height: 250px; */
    padding: 10px;
    box-shadow: 0 3px 3px #888888;
  }
  .post span {
    color: var(--primary-color);
    font-weight: 500;
  }

  .img-container {
    width: 100%;
    height: 200px;
    background-color: grey;
    margin: auto;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    font-family: Georgia, "Times New Roman", Times, serif;
    /* font-size: 24px; */
    margin-top: 10px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    /* font-weight: 500; */
  }
  .next span,
  .next button {
    color: var(--primary-color);
    font-weight: 500;
  }
  .next {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
  .post a:hover {
    opacity: 0.6;
  }
`;

function Posts() {
  const [posts, setPosts] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  // for handling pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  // const totalPost = posts.length;

  const startIndex = (currentPage - 1) * postPerPage;
  const endIndex = startIndex + postPerPage;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await axios.get(`${apiUrl}/post`);
        setPosts(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [apiUrl]);

  const items = postsToDisplay.map((item, i) => (
    <div className="post" key={item._id}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/post/${item._id}`}
      >
        <div className="img-container">
          <img src={item.cover} alt="product cover" width="100" height="100" />
        </div>
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
      <div className="post-container">{items}</div>
      <div className="next">
        <nav aria-label="...">
          <div></div>
          <ul className="pagination">
            <li className="page-item">
              {currentPage !== 0 && currentPage !== 1 && (
                <button onClick={() => setCurrentPage(1)} className="page-link">
                  First
                </button>
              )}
            </li>
            <li className="page-item">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="page-link"
                >
                  Previous
                </button>
              )}
            </li>

            <li className="page-item">
              {currentPage < Math.ceil(posts.length / postPerPage) && (
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}

export default Posts;
