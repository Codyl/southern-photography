import styled from "styled-components";
import ServiceImageButton from "./ServiceImageButton";
import { investmentServices as services } from "../shared/services";
import Helmet from "react-helmet";

const ServiceRow = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export default function Investments() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Investments - Southern Images</title>
        <meta
          name="description"
          content="Please select the Investment Photography session that best meets your needs
        to learn more."
        />
        <link rel="canonical" href="http://southern-images.com/investments" />
      </Helmet>
      <h1
        className="text-center"
        style={{ fontSize: "40px", fontFamily: "Croissant One" }}
      >
        Investments
      </h1>
      <div className="divider"></div>
      <p className="md-text text-center">
        Please select the Investment Photography session that best meets your
        needs to learn more.
      </p>
      <ServiceRow>
        {services.slice(0, 3).map((service) => (
          <ServiceImageButton key={service.name} service={service} />
        ))}
      </ServiceRow>
      <ServiceRow>
        {services.slice(3, 6).map((service) => (
          <ServiceImageButton key={service.name} service={service} />
        ))}
      </ServiceRow>
    </div>
  );
}
