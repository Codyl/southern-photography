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
import bridal from "../images/maternity.jpg";
import smallCeremony from "../images/maternity.jpg";

const investmentServices = [
  {
    name: "Couples",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: couples,
  },
  {
    name: "Family",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: family,
  },
  {
    name: "Maternity",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: maternity,
  },
  {
    name: "Birthday",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: birthday,
  },
  {
    name: "Graduation/senior",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: graduation,
  },
  {
    name: "Bodouir",
    price: 1000,
    photographers: 1,
    sessionLength: 2,
    image: boudoir,
  },
];

const weddingServices = [
  {
    name: "small ceremony",
    desc: "Wedding Under 50 guests",
    price: 1400,
    numImages: "50-100",
    photographers: 1,
    sessionLength: 3,
    image: smallCeremony,
  },
  {
    name: "elopement",
    desc: "Bride & Groom",
    price: 900,
    numImages: "40-80",
    photographers: 1,
    sessionLength: 2,
    image: elopement,
  },
  {
    name: "engagement",
    desc: "",
    price: 300,
    numImages: "20-50",
    photographers: 1,
    sessionLength: 1,
    image: engagement,
  },
  {
    name: "bridal",
    desc: "",
    price: 1000,
    numImages: "25-50",
    photographers: 1,
    sessionLength: 1 - 2,
    image: bridal,
  },
  {
    name: "half-day",
    desc: "",
    price: 2000,
    numImages: "125-150",
    photographers: 1,
    sessionLength: 6,
    image: halfDay,
  },
  {
    name: "whole-day",
    desc: "",
    price: 2800,
    numImages: "150-200",
    photographers: 1,
    sessionLength: 8,
    image: wholeDay,
  },
  {
    name: "Bodouir",
    price: 400,
    numImages: "25-50",
    photographers: 1,
    sessionLength: 2,
    image: boudoir,
  },
];

export { weddingServices, investmentServices };
