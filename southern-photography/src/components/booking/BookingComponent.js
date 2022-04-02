import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getService } from "../../shared/services";

import { redirectToCheckout } from "./stripe";

export default function Booking() {
  const [stripeError, setStripeError] = useState(null);
  const [loading, setLoading] = useState(false);

  let location = useLocation();
  const service = getService(location);

  if (stripeError) {
    alert(stripeError);
  }

  return (
    <div>
      <h1 className="text-center title">Book your Session</h1>
      <div className="divider"></div>
      <div className="border container my-4 p-4">
        <h3 className="md-text">Your order details: </h3>
        <p className="md-test">{service.name}</p>
        <p className="md-test">
          {service.sessionLength} hour{service.sessionLength > 1 && "s"}
        </p>
        <p className="md-test">${service.price}</p>
        <p className="md-test">{service.photographers} photographer</p>
        <p className="md-test">{service.numImages} images expected</p>
      </div>
      <button
        className="custom-btn mx-5"
        onClick={() => redirectToCheckout(setLoading, setStripeError, service)}
        disabled={loading}
      >
        {loading ? "...loading please wait" : "Purchase"}
      </button>
    </div>
  );
}
