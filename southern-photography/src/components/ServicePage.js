import { useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { weddingServices, investmentServices } from "../shared/services";
const ServiceItem = styled.img`
  width: 80%;
`;
const BookingButton = styled(Link)`
  background-color: white;
  color: black;
  font-family: Charmonman, cursive;
  font-size: 2em;
  border-radius: 32px;
  padding: 5px 20px;
  box-shadow: 3px 3px 8px black;
  text-decoration: none;
  position: relative;
  left: 100%;
  margin: -150px;
`;
const Divider = styled.div`
  width: 80%;
  height: 5px;
  background-color: black;
  margin: auto;
`;
export default function ServicePage() {
  let location = useLocation().pathname.split("/")[2];
  location = location.replace("%20", " ").toLowerCase();
  const services = [
    ...investmentServices,
    ...weddingServices.filter((service) => service.name !== "bodouir"),
  ];
  const service = services.find((service) => {
    return service.name === location;
  });
  return (
    <div className="container">
      <div className="d-sm-flex">
        <div style={{ width: "80%" }}>
          <ServiceItem src={service.image} alt="" />
        </div>
        <div className="container">
          <div style={{ margin: "20px 0" }}>
            <h1
              className="text-center"
              style={{ fontSize: "40px", fontFamily: "Croissant One" }}
            >
              {service.name}
            </h1>
            <Divider />
          </div>
          <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
            {service.desc}
          </h2>
          <h3>{service.name} session details</h3>
          <p>
            {service.sessionLength} hour{service.sessionLength > 1 && "s"}
          </p>
          <p>${service.price}</p>
          <p>{service.photographers} photographer</p>
          <p>Add-on: Second Photographer $100 Per Hour</p>
          <p>{service.numImages} images expected</p>
          <div className="border m-3">
            <h4>Payment details</h4>
            <p>25% Deposit Required at Booking</p>
            <p>Payment Plans Available upon request</p>
          </div>
          <div className="border m-3">
            <h4>Travel details</h4>
            <p>Additional Travel Fee Will Be Applied (Over 20 Miles)</p>
            {service.type === "wedding" && (
              <p>
                Inquiries for destination weddings, please email me. Additional
                fees will be applied (Airfare, Lodging, & Transportation)
              </p>
            )}
          </div>
          <div className="my-5">
            <BookingButton to="/contact">Book Now</BookingButton>
          </div>
        </div>
      </div>
    </div>
  );
}
