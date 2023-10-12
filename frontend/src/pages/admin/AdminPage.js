import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";

// import { Tablet, Desktop } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  .wel {
    font-family: "Lato", san-serif;
    font-style: italic;
    font-weight: 600;
    font-size: 35px;
  }
  span {
    display: block;
    text-align: center;
    margin: 23px 0;
  }
`;

function AdminPage() {
  const location = useLocation();
  // Access the message from the state object
  const message = location.state && location.state.message;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const resp = await axios.get(`/post`);
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
      await axios.delete(`/post/${id}`);
      getPosts();
      // if (resp.ok) {
      //   // const updatedPost = posts.filter((post) => post._id !== id);
      //   // setPosts(updatedPost);
      // }

      // navigate("/admin/okoro");
    } catch (err) {
      console.log(err);
    }
  };

  const items = posts.map((post, i) => (
    <tr key={post._id}>
      <th scope="row">
        <img src={post.cover} alt="cover" height="40" width="40" />
      </th>
      <td colSpan="2">{post.title}</td>
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
        <h4 className="text-bold text-center wel">
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
            <h3 className="text-info mt-4 mb-2">News Posts</h3>

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
          </>
        ) : (
          <h4>No post yet, Please add Posts or articles</h4>
        )}
      </div>
    </Wrapper>
  );
}

export default AdminPage;
