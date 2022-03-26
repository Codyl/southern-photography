import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ServiceImageButton from "./ServiceImageButton";
import { weddingServices as services } from "../shared/services";

const ServiceRow = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export default function Wedding({ setService }) {
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
          <ServiceImageButton
            key={service.name}
            service={service}
            setService={setService}
          />
        ))}
      </ServiceRow>
    </>
  );
}
