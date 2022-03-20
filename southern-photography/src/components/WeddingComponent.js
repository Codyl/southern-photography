import React, { useState, useEffect } from "react";
import styled from "styled-components";
import elopement from "../images/elopement.jpg";
import engagement from "../images/engagement.jpg";
import halfDay from "../images/half-day.jpg";
import wholeDay from "../images/full-day.jpg";

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
`;

const services = [
  {
    name: "elopement",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: elopement,
  },
  {
    name: "engagement",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: engagement,
  },
  {
    name: "half-day",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: halfDay,
  },
  {
    name: "whole-day",
    price: 1000,
    location: "local",
    photographers: 1,
    sessionLength: 2,
    image: wholeDay,
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
      <p>
        ${service.price} | {service.photographers} Photographer(s) |{" "}
        {service.sessionLength} hours
      </p>
    </div>
  );
};

export default function Wedding() {
  return (
    <>
      {/* <LargeImage /> */}
      {/* <div>Moments you will remember forever...</div> */}
      <h1
        className="text-center"
        style={{ fontSize: "40px", fontFamily: "Croissant One" }}
      >
        Wedding
      </h1>
      <div className="divider"></div>
      <ServiceRow>
        {services.map((service) => (
          <ServiceItemContainer key={service.name} service={service} />
        ))}
      </ServiceRow>
    </>
  );
}
