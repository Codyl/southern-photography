import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { investmentServices, weddingServices } from "../shared/services";
import { useLocation } from "react-router-dom";

const getStripeKey = async () => {
  try {
    const response = await fetch("http://localhost:3001/stripe-key");
    const key = await response.text();
    console.log(key);
    return key;
  } catch (err) {
    console.error(err);
  }
};

let stripePromise;
const getStripe = async () => {
  if (!stripePromise) {
    const stripeKey = await getStripeKey();
    stripePromise = loadStripe(stripeKey);
  }
  return stripePromise;
};

export default function Booking() {
  const [stripeError, setStripeError] = useState(null);
  const [loading, setLoading] = useState(false);

  let location = useLocation().pathname.split("/")[2];
  location = location.replace("%20", " ").toLowerCase();
  const services = [
    ...investmentServices,
    ...weddingServices.filter((service) => service.name !== "bodouir"),
  ];
  const service = services.find((service) => {
    return service.name === location;
  });
  const item = {
    price: service.stripePrice,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/book-session/success`,
    cancelUrl: `${window.location.origin}/book-session/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    if (error) {
      setStripeError(error.message);
    }
    setLoading(false);
  };
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
        onClick={redirectToCheckout}
        disabled={loading}
      >
        {loading ? "...loading please wait" : "Purchase"}
      </button>
    </div>
  );
}
