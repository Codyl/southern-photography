import React from "react";
import styled from "styled-components";
const ServiceItem = styled.img`
  width: 200px;
  height: 200px;
`;
export default function ServicePage({ service }) {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <h1>{service.name}</h1>
      <h2>{service.desc}</h2>
      <ServiceItem src={service.image} alt="" />
      <p>
        {service.sessionLength} hours| ${service.price} |{service.photographers}{" "}
        photographer| {service.numImages} images
      </p>
    </>
  );
}
