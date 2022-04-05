import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { services } from "../../shared/services";
import Helmet from "react-helmet";

export default function ServicePage() {
  let location = useLocation().pathname.split("/")[2];
  location = location.replace("%20", " ").toLowerCase();
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
          <div className="w-80">
            <img className="w-80" src={service.image} alt={service.name} />
          </div>
          <div className="container">
            <div style={{ margin: "20px 0" }}>
              <h1 className="text-center lg-text">
                {service.name.charAt(0).toUpperCase() + service.name.slice(1)}
              </h1>
              <div className="divider"></div>
            </div>
            <h2 style={{ textAlign: "center", fontStyle: "italic" }}>
              {service.desc}
            </h2>
            <h3>
              {service.name.charAt(0).toUpperCase() + service.name.slice(1)}{" "}
              session details
            </h3>
            <div className="md-test">
              {service.sessionLength} hour{service.sessionLength > 1 && "s"}
            </div>
            <div className="md-test">${service.price}</div>
            <div className="md-test">{service.photographers} photographer</div>
            <div className="md-test">
              Add-on: Second Photographer $100 Per Hour
            </div>
            <div className="md-test">{service.numImages} images expected</div>
            <div className="border m-3 p-4">
              <h4>Payment details</h4>
              <div className="md-test">25% Deposit Required at Booking</div>
              <div className="md-test">
                Payment Plans Available upon request
              </div>
            </div>
            <div className="border m-3 p-4">
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
              <Link className="custom-btn" to={`/portfolio/${service.name}`}>
                View {service.name} portfolio
              </Link>
              <br />
              <br />
              <br />
              <Link className="custom-btn" to={`/book-session/${service.name}`}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
