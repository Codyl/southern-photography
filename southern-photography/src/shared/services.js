import elopement from "../images/elopement.jpg";
import engagement from "../images/engagement.jpg";
import halfDay from "../images/half-day.jpg";
import wholeDay from "../images/full-day.jpg";
import graduation from "../images/graduation.jpg";
import birthday from "../images/birthday.jpg";
import boudoir from "../images/boudoir.jpg";
import couples from "../images/couples.jpg";
import family from "../images/family.jpg";
import maternity from "../images/maternity.jpg";
import bridal from "../images/bridal.jpg";
import smallCeremony from "../images/small-ceremony.jpg";

const investmentServices = [
  {
    type: "investment",
    name: "couples",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: couples,
  },
  {
    type: "investment",
    name: "family",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: family,
  },
  {
    type: "investment",
    name: "maternity",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: maternity,
  },
  {
    type: "investment",
    name: "birthday",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: birthday,
  },
  {
    type: "investment",
    name: "senior",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: graduation,
  },
  {
    type: "investment",
    name: "bodouir",
    price: 1000,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    photographers: 1,
    sessionLength: "2",
    image: boudoir,
  },
];

const weddingServices = [
  {
    type: "wedding",
    name: "small ceremony",
    desc: "Wedding Under 50 guests",
    price: 1400,
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    stripePrice: "price_1KjynbGaPMG6bxhxUCgczNCO",
    numImages: "50-100",
    photographers: 1,
    sessionLength: 3,
    image: smallCeremony,
  },
  {
    type: "wedding",
    name: "elopement",
    desc: "Bride & Groom",
    price: 900,
    stripePrice: "price_1KjzmpGaPMG6bxhxgWKi30h2",
    numImages: "40-80",
    photographers: 1,
    sessionLength: "2",
    image: elopement,
  },
  {
    type: "wedding",
    name: "engagement",
    desc: "",
    price: 300,
    stripePrice: "price_1Kjzq1GaPMG6bxhxbaXBuVsD",
    numImages: "20-50",
    photographers: 1,
    sessionLength: 1,
    image: engagement,
  },
  {
    type: "wedding",
    name: "bridal",
    desc: "",
    price: 1000,
    stripePrice: "price_1Kjzs5GaPMG6bxhxmD15McBr",
    numImages: "25-50",
    photographers: 1,
    sessionLength: 1 - 2,
    image: bridal,
  },
  {
    type: "wedding",
    name: "bodouir",
    price: 400,
    stripePrice: "price_1Kjzu6GaPMG6bxhxiq5jj4nT",
    numImages: "25-50",
    photographers: 1,
    sessionLength: "2",
    image: boudoir,
  },
  {
    type: "wedding",
    name: "half-day",
    desc: "",
    price: 2000,
    stripePrice: "price_1Kjzv8GaPMG6bxhxHQ22MkEq",
    numImages: "125-150",
    photographers: 1,
    sessionLength: 6,
    image: halfDay,
  },
  {
    type: "wedding",
    name: "whole-day",
    desc: "",
    price: 2800,
    stripePrice: "price_1KjzwAGaPMG6bxhxY6nby7fc",
    numImages: "150-200",
    photographers: 1,
    sessionLength: 8,
    image: wholeDay,
  },
];
const getService = (location) => {
  location = location.pathname.split("/")[2];
  location = location.replace("%20", " ").toLowerCase();
  const services = [
    ...investmentServices,
    ...weddingServices.filter((service) => service.name !== "bodouir"),
  ];
  return services.find((service) => {
    return service.name === location;
  });
};

export { weddingServices, investmentServices, getService };
