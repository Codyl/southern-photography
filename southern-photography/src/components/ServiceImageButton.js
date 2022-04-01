import styled from "styled-components";
import { Link } from "react-router-dom";

const serviceItemBoxSize = 250;

const ServiceItem = styled.div`
  width: ${serviceItemBoxSize}px;
  height: ${serviceItemBoxSize}px;
  overflow: hidden;
  border-radius: 25px;
`;

const ServiceItemText = styled.p`
  position: relative;
  text-align: center;
  color: black;
  opacity: 1;
  font-size: 2em;
  padding: 10px;
`;
const ServiceItemImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  position: relative;
`;

const ServiceImageButton = ({ service }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/services/${service.name}`}>
      <ServiceItem>
        <ServiceItemImage className="enlarge" src={service.image} alt="" />
      </ServiceItem>
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
    </Link>
  );
};
export default ServiceImageButton;
