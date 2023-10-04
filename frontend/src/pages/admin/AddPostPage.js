import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Tablet, Desktop } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  span {
    display: block;
    text-align: center;
    margin: 23px 0;
  }
`;

function AddPostPage() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [cover, setCover] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setCover(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, category, description, author } = values;
    // Handle text and file uploads here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cover", cover);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("description", description);

    try {
      const resp = await fetch("/post", {
        method: "POST",
        body: formData,
      });
      if (resp.status === 200) {
        // Success
        setMessage("post successfully created");
        setValues({
          title: "",
          description: "",
          author: "",
          category: "",
        });
        setCover("");
        console.log("File uploaded successfully");
      } else {
        // Handle error
        setError("could not create post");
        console.error("File upload failed");
      }
      // window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
      console.log(error.message);
    }
  };
  return (
    <Wrapper>
      <div className="container-fluid py-4 my-0 text-white bg-dark">
        <div className="container">
          <h1 className="text-darks">Add Post</h1>
          <form onSubmit={handleSubmit}>
            {message !== "" && (
              <span className="alert alert-success">{message}</span>
            )}
            {error !== "" && (
              <span className="alert alert-danger">{error}</span>
            )}
            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="name">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                className="form-control"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="author">
                Author
              </label>
              <input
                type="text"
                name="author"
                placeholder="author"
                className="form-control"
                value={values.author}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="category">
                Category
              </label>
              <input
                name="category"
                id="category"
                placeholder="category"
                className="form-control"
                value={values.category}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="label">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder="description"
                name="description"
                id="description"
                rows="5"
                value={values.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="cover">
                Post cover
              </label>
              <input
                type="file"
                name="cover"
                placeholder="cover"
                className="form-control"
                value={values.cover}
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="btn btn-info text-light mt-3">
              Submit
            </button>
          </form>
          <Link to="/admin/okoro" className="btn btn-danger mt-4">
            Close
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddPostPage;
