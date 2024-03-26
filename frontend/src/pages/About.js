import React, { Component } from "react";
import styled from "styled-components";
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
          <h3 className="my-3">About Us</h3>
          <p style={{ textIndent: "30px" }}>
            At Expertguide, we are passionate about bringing you the latest news, insights, and analysis from
            the dynamic world of cryptocurrencies and blockchain technology. As a leading source of information
            in the crypto space, our mission is to empower our readers with knowledge to navigate the
            ever-evolving landscape of digital assets.
          </p>
          <p style={{ textIndent: "30px" }}>
            Expertguide is your premier destination for all things cryptocurrency and
            blockchain-related news. At Expertguide, we provide you with accurate,
            timely, and insightful information to navigate the dynamic world of digital currencies and
            decentralized technologies.
          </p>
          <p>
            Founded by a team of seasoned professionals with extensive experience in finance, technology, and
            blockchain, Expertguide is driven by a commitment to providing accurate, unbiased, and
            comprehensive coverage of the cryptocurrency industry. Whether you're a seasoned investor, a
            curious newcomer, or a blockchain enthusiast, our platform caters for all levels of expertise.
          </p>
          <p>
            What sets Expertguide apart is our dedication to delivering high-quality content that goes beyond the
            headlines. From in-depth market analysis and investment strategies to interviews with industry experts
            and explorations of emerging blockchain trends, we strive to offer valuable insights that enable our
            readers to make informed decisions in the fast-paced world of crypto.
          </p>
          <p>
            At Expertguide, we believe in the transformative potential of blockchain technology to
            revolutionize industries, redefine financial systems, and empower individuals worldwide. Through
            our platform, we aim to foster a vibrant community of crypto enthusiasts, investors, developers,
            and thought leaders who share our vision for a decentralized future.
          </p>
          <h3>Vision</h3>
          <p>
            To be among the world's platform for truly Independent quality cryptocurrency
            news website.
          </p>
          <h3>Mission</h3>
          <p>
            Our mission at Expertguide is to empower our readers with the knowledge and resources they
            need to understand, engage with, and thrive in the rapidly evolving landscape of cryptocurrencies.
            We believe that education is the key to unlocking the full potential of blockchain technology and
            its transformative impact on finance, technology, and society as a whole.
          </p>
          <h3>What We Offer</h3>
          <p>
            Through our carefully curated articles, analysis, guides, and news updates, we aim to keep you
            informed about the latest developments, trends, and innovations in the crypto space. Whether
            you're a seasoned investor, a blockchain enthusiast, or just getting started, we have something
            for everyone
          </p>

          <h3>Why Choose Us</h3>
          <p>
            At Expertguide, we pride ourselves on delivering high-quality content that is both informative
            and accessible. Our team of experienced writers and researchers are deeply immersed in the world of
            cryptocurrency and blockchain technology, ensuring that you receive reliable insights and expert
            analysis you can trust.
          </p>
          <h3>Stay Connected</h3>
          <p>
            Stay updated with the latest news, analysis, and insights by
            following us on social media. Join us on this exciting journey as we explore the endless
            possibilities of cryptocurrency and blockchain technology together.
          </p>
          <p>
            Join us on our journey as we explore the exciting possibilities of cryptocurrency and blockchain
            technology. Whether you're here to stay updated on the latest news, deepen your understanding of
            blockchain fundamentals, or discover new investment opportunities, Expertguide is your trusted
            companion in the world of digital assets. Welcome aboard!
          </p>
          <p>
            Thank you for choosing Expertguide as your trusted source for cryptocurrency news and information.
            We look forward to serving you and being a part of your crypto journey.
          </p>

        </div>

      </Wrapper>
    );
  }
}

export default About;
