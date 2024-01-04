import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";
import { Tablet } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  max-width: 100vw; 
  overflow-x: hidden;

  .wel {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 600;
    font-size: 25px;
    ${Tablet({ fontSize: '35px' })}
  }
  h3 {
    color: var(--primary-color);
    font-weight: 600;
  }
  span {
    display: block;
    text-align: center;
    margin: 23px 0;
  }
  table {
    font-size: 10px;
    overflow-x: hidden;
    ${Tablet({ fontSize: "16px" })}
  }
  img {
    width: 25px;
    height: 25px;
    ${Tablet({ width: "40px", height: "40px" })}
  }
  table a {
    width: 25px;
    height: 25px;
    padding: 0;
    ${Tablet({ width: "40px", height: "40px" })}
  }
  table button {
    width: 25px;
    height: 25px;
    padding: 0;
    ${Tablet({ width: "40px", height: "40px" })}
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
`;

function AdminPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();
  // Access the message from the state object
  const message = location.state && location.state.message;
  const [posts, setPosts] = useState([]);

  // for handling pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  // const totalPost = posts.length;

  const startIndex = (currentPage - 1) * postPerPage;
  const endIndex = startIndex + postPerPage;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  const getPosts = async () => {
    try {
      const resp = await axios.get(`https://leadways.cyclic.app`);
      setPosts(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`${apiUrl}/post/${id}`);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const items = postsToDisplay.map((post, i) => (
    <tr key={post._id}>
      <th scope="row">
        <img src={post.cover} alt="cover" />
      </th>
      <td colSpan="2">{post.title.slice(0, 100)}</td>
      <td>
        <Link className="btn btn-secondary" to={`/editpost/${post._id}`}>
          <i className="fa-regular fa-pen-to-square"></i>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deletePost(post._id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
      <td>{moment(post.createdAt).format("DD MMM YY")}</td>
    </tr>
  ));
  return (
    <Wrapper>
      <div className="container adminpage mt-5">
        <h4 className="text-bold text-center wel m-1">
          Welcome to the admin dashboard
        </h4>
        <div className=" my-4 bg-secondary">
          <div className="add">
            <Link to="/addpost" className="btn btn-primary m-2">
              Add Post
            </Link>
          </div>
        </div>
        {message && <span className="alert alert-success">{message}</span>}
        {posts.length !== 0 ? (
          <>
            <h3 className="my-4">News Posts</h3>

            <table className="table table-striped post">
              <thead>
                <tr>
                  <th scope="col">Cover</th>
                  <th scope="col" colSpan="2">
                    Title
                  </th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>


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
          </>
        ) : (
          <h4>No post yet, Please add Posts or articles</h4>
        )}
      </div>
    </Wrapper>
  );
}

export default AdminPage;
