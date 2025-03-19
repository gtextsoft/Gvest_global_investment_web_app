import nairaScheme from "../../public/images/investmentplans/nairascheme.png";
import dollarscheme from "../../public/images/investmentplans/dollarscheme.png";
import poundScheme from "../../public/images/investmentplans/poundScheme.png";

export const investments = [
  {
    id: 1,
    name: "Fractional Ownership Naira Scheme",
    type: "simple",
    currency: "naira",
    currencySign: "NGN",
    image: nairaScheme,
    price: 5000000,
    duration: "24-month Investment period",
    roi: "12% Annual ROI",
    investmentType: "Fixed Deposit",
    slots: 3,
    slug: "fractionalOwnershipNairaScheme",
    paragraph:
      "In this investment scheme, with an initial deposit of 5 million naira and a competitive annual interest rate of 16%, calculated in naira, your ROI is distributed yearly. This means you will receive 800,000 naira annually as your return on investment (ROI). Over the course of 3 years, your total ROI will amount to 2,400,000 naira.",
  },
  {
    id: 2,
    name: "Jasper Ibeju Lekki Legacy",
    type: "compound",
    currency: "naira",
    currencySign: "NGN",
    image: nairaScheme,
    price: 100000000,
    duration: "36-month Investment period",
    roi: "15% Annual ROI",
    investmentType: "Growth Fund",
    slots: 5,
    slug: "jasperIbejuLekkiLegacy",
    paragraph:
      "In this investment scheme, with an initial deposit of 5 million naira and a competitive annual interest rate of 16%, calculated in naira, your ROI is distributed yearly. This means you will receive 800,000 naira annually as your return on investment (ROI). Over the course of 3 years, your total ROI will amount to 2,400,000 naira.",
  },
  {
    id: 3,
    name: "Sapphire Ikorodu Heritage",
    type: "simple",
    currency: "dollar",
    currencySign: "USD",
    image: dollarscheme,
    price: 8000000,
    duration: "30-month Investment period",
    roi: "14% Annual ROI",
    investmentType: "Real Estate Fund",
    slots: 2,
    slug: "sapphireIkoroduHeritage",
    paragraph:
      "In this investment scheme, with an initial deposit of 5 million naira and a competitive annual interest rate of 16%, calculated in naira, your ROI is distributed yearly. This means you will receive 800,000 naira annually as your return on investment (ROI). Over the course of 3 years, your total ROI will amount to 2,400,000 naira.",
  },
  {
    id: 4,
    name: "Euro Investment Plan",
    type: "compound",
    currency: "euro",
    currencySign: "GBP",
    image: poundScheme,
    price: 120000000,
    duration: "48-month Investment period",
    roi: "16% Annual ROI",
    investmentType: "Wealth Accumulation",
    slots: 4,
    slug: "euroInvestmentPlan",
    paragraph:
      "In this investment scheme, with an initial deposit of 5 million naira and a competitive annual interest rate of 16%, calculated in naira, your ROI is distributed yearly. This means you will receive 800,000 naira annually as your return on investment (ROI). Over the course of 3 years, your total ROI will amount to 2,400,000 naira.",
  },
];