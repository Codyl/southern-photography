import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ServiceImageButton = ({ service, setService }) => {
  return (
    <Link onClick={() => setService(service)} to={`/services/${service.name}`}>
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
    </Link>
  );
};
export default ServiceImageButton;
