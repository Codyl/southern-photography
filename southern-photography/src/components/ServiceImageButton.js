import styled from "styled-components";

const serviceItemBoxSize = 250;

const ServiceItem = styled.img`
  width: ${serviceItemBoxSize}px;
  height: ${serviceItemBoxSize}px;
`;

const ServiceItemText = styled.p`
  position: relative;
  text-align: center;
  color: black;
  opacity: 1;
  font-size: 2em;
  padding: 10px;
`;

const ServiceImageButton = ({ src, service }) => {
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
export default ServiceImageButton;
