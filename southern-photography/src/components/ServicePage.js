import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { weddingServices, investmentServices } from "../shared/services";
import Helmet from "react-helmet";

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
    <div className="md-test">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{service.name} Service - Southern Images</title>
        <meta name="description" content={`${service.name}: ${service.desc}`} />
        <link
          rel="canonical"
          href={`http://southern-images.com/services/${service.name}`}
        />
      </Helmet>
      <div className="container">
        <div className="d-sm-flex">
          <div style={{ width: "80%" }}>
            <ServiceItem src={service.image} alt={service.name} />
          </div>
          <div className="container">
            <div style={{ margin: "20px 0" }}>
              <h1
                className="text-center"
                style={{ fontSize: "40px", fontFamily: "Croissant One" }}
              >
                {service.name}
              </h1>
              <div className="divider"></div>
            </div>
            <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
              {service.desc}
            </h2>
            <h3>{service.name} session details</h3>
            <div className="md-test">
              {service.sessionLength} hour{service.sessionLength > 1 && "s"}
            </div>
            <div className="md-test">${service.price}</div>
            <div className="md-test">{service.photographers} photographer</div>
            <div className="md-test">
              Add-on: Second Photographer $100 Per Hour
            </div>
            <div className="md-test">{service.numImages} images expected</div>
            <div className="border m-3">
              <h4>Payment details</h4>
              <div className="md-test">25% Deposit Required at Booking</div>
              <div className="md-test">
                Payment Plans Available upon request
              </div>
            </div>
            <div className="border m-3">
              <h4>Travel details</h4>
              <div className="md-test">
                Additional Travel Fee Will Be Applied (Over 20 Miles)
              </div>
              {service.type === "wedding" && (
                <div className="md-test">
                  Inquiries for destination weddings, please email me.
                  Additional fees will be applied (Airfare, Lodging, &
                  Transportation)
                </div>
              )}
            </div>
            <div className="my-5">
              <BookingButton to="/contact">Book Now</BookingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
