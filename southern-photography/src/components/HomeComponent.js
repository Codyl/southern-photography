import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import wideImage from "../images/title.jpg";
import tallImage from "../images/sm-bg.jpg";
import { Link } from "react-router-dom";
const LargeImage = styled.img`
  position: relative;
  width: 100vw;
  max-height: 100vh;
  height: auto;
  z-index: -1;
`;
const QuoteBox = styled.div`
  background-color: lightgrey;
  width: 120vw;
  height: 400px;
  transform: rotate(5deg);
  position: absolute;
  top: -60px;
  left: -10vw;
  overflow: hidden;
  z-index: 2;
`;
const BookingButton = styled(Link)`
  background-color: white;
  color: black;
  position: absolute;
  top: 400px;
  font-family: Charmonman, cursive;
  font-size: 2em;
  border-radius: 32px;
  padding: 5px 20px;
  box-shadow: 3px 3px 8px black;
  text-decoration: none;
`;
const Blockquote = styled.blockquote`
  position: relative;
  padding: 0 30px;
  font-size: 2rem;
  z-index: 3;
`;
export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <LargeImage src={window.innerWidth > 426 ? wideImage : tallImage} />
        <BookingButton to="/contact">Book Now</BookingButton>
      </div>
      <div style={{ overflow: "hidden", position: "relative", zIndex: 3 }}>
        <hr />
        {/* <QuoteBox></QuoteBox> */}
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
    </>
  );
}
