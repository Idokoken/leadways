import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import { Tablet, Desktop } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(
    243.22deg,
    rgba(248, 238, 238, 0.9) 0%,
    rgba(231, 225, 225, 0.63) 31.77%,
    rgba(223, 225, 237, 0.72) 68.75%,
    rgba(61, 40, 40, 0.45) 100%
  );

  input,
  textarea,
  button,
  select {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }

  span {
    display: block;
    text-align: center;
    margin: 23px 0;
  }
`;

function AddPostPage() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [cover, setCover] = useState(null);
  const [description, setDescription] = useState("");
  const [values, setValues] = useState({
    title: "",
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
    const { title, category, author } = values;
    // Handle text and file uploads here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cover", cover);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("description", description);

    try {
      const resp = await fetch(`${apiUrl}/post`, {
        method: "POST",
        body: formData,
      });
      if (resp.status === 200) {
        // Success
        setMessage("post successfully created");
        setValues({
          title: "",
          author: "",
          category: "",
        });
        setDescription("");
        setCover("");
        console.log("File uploaded successfully");
      } else {
        // Handle error
        setError("could not create post, all fields are required");
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
      <div className="container-fluid py-4 my-0">
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
            {/* <div className="form-group mb-3">
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
            </div> */}

            <div className="form-group mb-3">
              <label className="mb-1" htmlFor="label">
                Description
              </label>
              <CKEditor
                editor={ClassicEditor}
                name="description"
                id="description"
                rows="5"
                value={description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
              />
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
