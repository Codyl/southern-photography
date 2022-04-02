import styled from "styled-components";
import ServiceImageButton from "./ServiceImageButton";
import { weddingServices as services } from "../shared/services";
import Helmet from "react-helmet";

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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wedding - Southern Images</title>
        <meta
          name="description"
          content="Please select the Wedding Photography session that best meets your needs
        to learn more."
        />
        <link rel="canonical" href="http://southern-images.com/wedding" />
      </Helmet>
      <h1
        className="text-center"
        style={{ fontSize: "40px", fontFamily: "Croissant One" }}
      >
        Wedding
      </h1>
      <div className="divider"></div>
      <p className="md-text text-center">
        Please select the Wedding Photography session that best meets your needs
        to learn more.
      </p>
      <ServiceRow>
        {services.map((service) => (
          <ServiceImageButton
            key={service.name}
            service={service}
            setService={setService}
          />
        ))}
      </ServiceRow>
    </div>
  );
}
