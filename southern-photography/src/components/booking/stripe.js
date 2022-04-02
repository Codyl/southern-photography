import { loadStripe } from "@stripe/stripe-js";
import { getStripeKey } from "../../shared/requests";

export const getStripe = async (stripePromise) => {
  if (!stripePromise) {
    const stripeKey = await getStripeKey();
    stripePromise = loadStripe(stripeKey);
  }
  return stripePromise;
};

export const redirectToCheckout = async ({
  setLoading,
  setStripeError,
  service,
}) => {
  setLoading(true);
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
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  if (error) {
    setStripeError(error.message);
  }
  setLoading(false);
};
