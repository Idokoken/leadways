import React, { useState, useEffect, useLocation } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";

// import { Tablet, Desktop } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
`;

function AdminPage() {
  const navigate = useNavigate();
  // const location = useLocation();
  // // Access the message from the state object
  // const message = location.state?.message || "No message available";
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
      const resp = await axios.delete(`/post/${id}`);
      if (resp.ok) {
        const updatedPost = posts.filter((post) => post._id !== id);
        setPosts(updatedPost);
      }

      navigate("/admin");
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
        <h4 className="text-bold">Admin Page</h4>
        <div className=" my-3 bg-secondary">
          <div className="add">
            <Link to="/addpost" className="btn btn-primary m-2">
              Add Post
            </Link>
          </div>
        </div>
        <h3 className="text-info mt-4 mb-2">News Posts</h3>
        <table className="table table-dark table-striped post">
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
      </div>
    </Wrapper>
  );
}

export default AdminPage;
