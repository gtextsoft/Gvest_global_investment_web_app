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


export const transactions = [
  {
    purpose: "Saving Deposit",
    amount: "NGN 100",
    type: "Debit",
    date: "08 February, 2024",
    reference: "GVETRBSFHIKAY3D",
  },
  {
    purpose: "Saving Deposit",
    amount: "NGN 300,000",
    type: "Debit",
    date: "31 January, 2024",
    reference: "GVETRLMH12R2XVR",
  },
  {
    purpose: "Fund Wallet",
    amount: "NGN 300,000",
    type: "Credit",
    date: "31 January, 2024",
    reference: "GVETRHCA7TTG25A",
  },
  {
    purpose: "Fund Wallet",
    amount: "NGN 1,000",
    type: "Credit",
    date: "24 January, 2024",
    reference: "ChargedFromAndr",
  },
  {
    purpose: "Fund Wallet",
    amount: "NGN 1,000",
    type: "Credit",
    date: "24 January, 2024",
    reference: "GVETRT3NK3C9I11",
  },
  {
    purpose: "Fund Wallet",
    amount: "NGN 5,000,000",
    type: "Credit",
    date: "29 September, 2023",
    reference: "GVETRFI3YZRJBLX",
  },
  {
    purpose: "Investment Deposit",
    amount: "NGN 5,000,000",
    type: "Debit",
    date: "28 September, 2023",
    reference: "GVETRF6I2RMXZM0",
  },
  {
    purpose: "Investment Deposit",
    amount: "NGN 10,000,000",
    type: "Debit",
    date: "01 September, 2023",
    reference: "GVETR9KEE0LZKF2",
  },
  {
    purpose: "Investment Deposit",
    amount: "NGN 1,000,000",
    type: "Debit",
    date: "29 August, 2023",
    reference: "GVETR6RQIV67DUN",
  },
];
