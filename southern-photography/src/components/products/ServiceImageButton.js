import { Link } from "react-router-dom";

const ServiceImageButton = ({ service }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/services/${service.name}`}>
      <div className="service-item-img-container">
        <img
          className="service-item-img enlarge"
          src={service.image}
          alt={service.name}
        />
      </div>
      <div className="service-item-text-container">
        <p className="service-item-text">{service.name.toUpperCase()}</p>
      </div>
    </Link>
  );
};
export default ServiceImageButton;
