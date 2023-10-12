import React, { Component } from "react";
import styled from "styled-components";
import NewsLetter from "../components/NewsLetter";
import { Tablet } from "../Responsive";

class About extends Component {
  render() {
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

      .img-container {
        width: 100%;
        height: 30vh;
        position: relative;
        ${Tablet({ height: "50vh" })}
      }
      img {
        width: 100%;
        height: 100%;
        margin-top: 0;
        margin-bottom: 0;
        object-fit: cover;
      }
      .office-name {
        font-weight: 600;
        font-size: 24px;
        color: rgba(30, 51, 187, 1);
        position: absolute;
        top: 60%;
        left: 5%;
        /* transform: translate(-50%, -50%); */
        ${Tablet({ top: "70%" })}
      }

      h3 {
        color: var(--primary-color);
        font-family: "Lora", serif;
        font-style: italic;
        font-weight: 700;
      }
      .content {
        padding: 0 20px;
        ${Tablet({ padding: "0 30px" })}
      }
      p {
        line-height: 35px;
        font-size: 18px;
      }
    `;
    return (
      <Wrapper>
        <div className="about container py-3 py-3">
          <h3 className="my-3">What Leadways Stands For</h3>
          <p style={{ textIndent: "30px" }}>
            Leadways blog, registered on September 1, 2023, commenced online
            publication on October 10, 2023.
          </p>
          <p style={{ textIndent: "30px" }}>
            The Leadways is an independent online news blog,for the purpose of
            presenting balanced coverage of events, and of promoting the best
            interests of the People. It owes allegiance to no political party,
            ethnic community, religious, Country or other interest group. Its
            primary commitment is to the integrity and truth, and beyond that to
            the unity of world. Leadways blog is a liberal online blog,
            committed to the best traditions and ideals of democracy. It
            believes that it is the responsibility of the state not only to
            protect and defend the citizen, but also to create the conditions,
            political, social, economic and cultural, in which all citizens may
            achieve their highest potential as human beings. It is committed to
            the principle of individual freedom, but believes that all citizens
            have duties as well as rights. . Leadways will at all times uphold
            the need for justice, probity in public life, equal access to the
            nation’s resources, and equal protection for all citizens.
          </p>
          <h3>Vision</h3>
          <p>
            To be among Nigeria’s first truly Independent national quality and
            news website.
          </p>
          <h3>Mission</h3>
          <p>
            To produce quality, vibrant and viable news that wills inform and
            form the nation’s present and aspiring political, business, economic
            and cultural leadership; challenge and inspire the nation’s
            journalists to advance and defend the public good; and deliver
            superior value to all stakeholders.
          </p>
          <h3>Editorial Policy</h3>
          <p>
            Our Editorial Policy, as set out by the Board of Directors, was
            founded on the following principle: We shall be independent on all
            matters, but shall never be neutral on any matter, especially those
            concerning the well-being of the Nigerian people.
          </p>

          <h3>Editorial Team</h3>
          <p>
            Nduka Idoko, Comrade Kerian Onah, Hon. Meletus Ona, Henry Udom,
            Musa-Ibrahim juwoo, Jonathan Ishaku.
          </p>

          <div className="categories">
            <h3>Our News Categories includes</h3>
            <p>Featured</p>
            <p>Politics</p>
            <p>World</p>
            <p>Sport</p>
            <p>Technology</p>
            <p>Art</p>
            <p>Business</p>
          </div>
        </div>
        <NewsLetter />
      </Wrapper>
    );
  }
}

export default About;
