import React from "react";
import styled from "styled-components";
import wideImage from "../images/title.jpg";
import tallImage from "../images/sm-bg.jpg";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const LargeImage = styled.img`
  position: relative;
  width: 100vw;
  max-height: 100vh;
  height: auto;
  z-index: -1;
`;
const BookingButton = styled(Link)`
  position: absolute;
  top: ${window.innerWidth < 461 ? "30%" : "50%"};
`;
const Blockquote = styled.blockquote`
  position: relative;
  padding: 0 30px;
  font-size: 2rem;
  z-index: 3;
`;
export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Southern Images</title>
        <meta
          name="description"
          content="Reviews.I have known Tosha for 12 years. When she picked up the camera and
            started doing photography that was it! She is always the one I call
            on! Thank you so much for taking those memorable pictures every
            time."
        />
        <link rel="canonical" href="http://southern-images.com/" />
      </Helmet>
      <div className="d-flex justify-content-center">
        <LargeImage
          src={window.innerWidth > 426 ? wideImage : tallImage}
          alt="Sample of family Photograph session"
        />
        <BookingButton className="custom-btn" to="/portfolio">
          View my photography work
        </BookingButton>
      </div>
      <div style={{ overflow: "hidden", position: "relative", zIndex: 3 }}>
        <h3
          className="text-center"
          style={{ fontSize: "30px", fontFamily: "Croissant One" }}
        >
          Reviews
        </h3>
        <hr />
        <Blockquote>
          <p>
            I have known Tosha for 12 years. When she picked up the camera and
            started doing photography that was it! She is always the one I call
            on! Thank you so much for taking those memorable pictures every
            time.
          </p>
          <figcaption>- Betsy Thomas</figcaption>
        </Blockquote>

        <hr />
        <Blockquote>
          <p>
            Tosha was phenomenal & professional. I am always nervous and awkward
            taking pictures; I never know how to pose or what to do with my
            hands. She gave impeccable directions the entire time, making the
            experience fun & stress-free.
          </p>
          <figcaption>- Jackiee Johnson</figcaption>
        </Blockquote>
        <hr />
      </div>
    </div>
  );
}
