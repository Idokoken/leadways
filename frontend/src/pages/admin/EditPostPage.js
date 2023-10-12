import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Tablet, Desktop } from "../../Responsive";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

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

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [cover, setCover] = useState(null);

  const [values, setValues] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
  });
  const [isFeatured, setIsFeatured] = useState(false);

  // Function to handle the change in the selected option
  const handleOptionChange = (e) => {
    setIsFeatured(e.target.value === "true");
  };

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
    // console.log(values);
    // console.log(isFeatured);
    // Handle text and file uploads here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cover", cover);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("isFeatured", isFeatured);

    try {
      const resp = await fetch(`/post/${id}`, {
        method: "PUT",
        body: formData,
      });
      //   console.log(resp.data);
      if (resp.status === 200) {
        // Success

        console.log("File uploaded successfully");
        navigate("/admin/okoro", {
          state: { message: "post updated successfully" },
        });
      } else {
        // Handle error
        setError("failed to update post, all fields are required");
        console.error("File upload failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(`/post/${id}`);
        setValues(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [id]);

  return (
    <Wrapper>
      <div className="container-fluid py-4 my-0">
        <div className="container">
          <h1 className="text-darks">Add Post</h1>
          <form onSubmit={handleSubmit}>
            {error !== "" && (
              <span className="alert alert-danger my-3 text-center">
                {error}
              </span>
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
              <label className="mb-1" htmlFor="description">
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
                data={values.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValues({ ...values, description: data });
                }}
              />
            </div>

            <div className="form-group mb-5">
              <label className="mb-1" htmlFor="isFeatured">
                Featured Post
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={isFeatured.toString()}
                onChange={handleOptionChange}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
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
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="btn btn-info text-light mt-3">
              Update
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

export default EditPostPage;
