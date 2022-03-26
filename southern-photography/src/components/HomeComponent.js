import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import image from "../images/title.jpg";
import { Link } from "react-router-dom";

const LargeImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-height: 100vh;
  height: auto;
  z-index: -1;
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
export default function Home() {
  return (
    <div className="d-flex justify-content-center">
      <LargeImage src={image} />
      <BookingButton to="/investments">Book Now</BookingButton>
    </div>
  );
}
