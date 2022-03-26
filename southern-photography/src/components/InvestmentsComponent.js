import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ServiceImageButton from "./ServiceImageButton";
import { investmentServices as services } from "../shared/services";
import { CSSTransition } from "react-transition-group";

const ServiceRow = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export default function Investments({ setService }) {
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
      <CSSTransition in={true} timeout={5000} classNames="my-node">
        <p>test</p>
      </CSSTransition>
      <ServiceRow>
        {services.slice(0, 3).map((service) => (
          <ServiceImageButton
            key={service.name}
            service={service}
            setService={setService}
          />
        ))}
      </ServiceRow>
      <ServiceRow>
        {services.slice(3, 6).map((service) => (
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
