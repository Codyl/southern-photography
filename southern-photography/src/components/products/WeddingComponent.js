import styled from "styled-components";
import ServiceImageButton from "./ServiceImageButton";
import { weddingServices as services } from "../../shared/services";
import Helmet from "react-helmet";
import "./products.css";

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
      <h1 className="text-center lg-text">Wedding</h1>
      <div className="divider"></div>
      <p className="md-text text-center">
        Please select the Wedding Photography session that best meets your needs
        to learn more.
      </p>
      <div className="service-row">
        {services.map((service) => (
          <ServiceImageButton
            key={service.name}
            service={service}
            setService={setService}
          />
        ))}
      </div>
    </div>
  );
}
