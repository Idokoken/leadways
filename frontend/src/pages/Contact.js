import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  h3 {
    color: var(--primary-color);
  }

  .address a {
    color: inherit;
    text-decoration: none;
    font-style: italic;
  }
  .rule {
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
  }

  input,
  textarea,
  button {
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 20px 0 20px 0;
  }
  button {
  }
`;

function Contact() {
  return (
    <Wrapper>
      <div className="contact py-4 m-4">
        <h3 className="mx-4">Get in Touch with Us</h3>
        <div className="address m-4">
          <h5>General Issues</h5>
          <Link to="mailto:info@leadwaysblog.com">info@leadwaysblog.com</Link>
          <h5 className="mt-3">News Post</h5>
          <Link to="mailto:news@leadwaysblog.com">news@leadwaysblog.com</Link>
          <h5 className="mt-3">Adverts</h5>
          <Link to="mailto:ads@leadwaysblog.com">ads@leadwaysblog.com</Link>
        </div>
        <hr className="rule" />
        <div className="m-4 form col-md-6">
          <h3 className="my-3">Send Leadways your Enquires</h3>
          <form method="post" action="/contact">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
