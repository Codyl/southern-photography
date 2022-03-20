import React, { useState, useEffect } from "react";
import styled from "styled-components";
import graduation from "../images/graduation.jpg";
import birthday from "../images/birthday.jpg";
import boudoir from "../images/boudoir.jpg";
import couples from "../images/couples.jpg";
import family from "../images/family.jpg";
import maternity from "../images/maternity.jpg";

const serviceItemBoxSize = 250;

const ServiceItem = styled.img`
  width: ${serviceItemBoxSize}px;
  height: ${serviceItemBoxSize}px;
`;
const ServiceRow = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;
const ServiceItemText = styled.p`
  position: relative;
  text-align: center;
  color: black;
  opacity: 1;
  font-size: 2em;
  padding: 10px;
`;

const services = [
  {
    name: "Couples",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: couples,
  },
  {
    name: "Family",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: family,
  },
  {
    name: "Maternity",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: maternity,
  },
  {
    name: "Birthday",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: birthday,
  },
  {
    name: "Graduation",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: graduation,
  },
  {
    name: "Bodouir",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: boudoir,
  },
];

const ServiceItemContainer = ({ src, service }) => {
  return (
    <div>
      <ServiceItem src={service.image} />
      <div
        style={{
          width: serviceItemBoxSize,
          height: "50px",
          backgroundColor: "gray",
          opacity: "0.75",
          position: "relative",
          bottom: "125px",
        }}
      >
        <ServiceItemText>{service.name.toUpperCase()}</ServiceItemText>
      </div>
      <p style={{ fontSize: "1.5em", marginTop: "-40px" }}>
        ${service.price} | {service.photographers} Photographer(s) |{" "}
        {service.sessionLength} hours
      </p>
    </div>
  );
};
export default function Investments() {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/images/").then((response) => {
      console.log(response);
    });
  });

  return (
    <>
      {/* <LargeImage />
      <div>Lifes greatest moments captured on camera...</div> */}
      <h1
        className="text-center"
        style={{ fontSize: "40px", fontFamily: "Croissant One" }}
      >
        Investments
      </h1>
      <div className="divider"></div>
      <ServiceRow>
        {services.slice(0, 3).map((service) => (
          <ServiceItemContainer key={service.name} service={service} />
        ))}
      </ServiceRow>
      <ServiceRow>
        {services.slice(3, 6).map((service) => (
          <ServiceItemContainer key={service.name} service={service} />
        ))}
      </ServiceRow>
    </>
  );
}
