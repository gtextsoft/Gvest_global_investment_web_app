"use client";
import React from "react";
import Image from "next/image";
import nairascheme from "../../../public/images/investmentplans/nairascheme.png";
import dollarscheme from "../../../public/images/investmentplans/dollarscheme.png";
import poundScheme from "../../../public/images/investmentplans/poundScheme.png";
import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";

const investmentOptions = [
  {
    id: 1,
    title: "Naira Investments (₦)",
    subtitle: "Fractional Ownership in Naira",
    description:
      "Invest in high-value properties using Naira and earn stable, risk-managed returns over time.",
    benefits: [
      "Earn in local currency with no forex risk",
      "Start small & grow your portfolio",
      "Guaranteed returns over time",
      "See how it works",
    ],
    image: nairascheme,
    bgColor: "bg-blueprish",
    btnBgColor: "!bg-lonestar-100",
    btnBgColorHover: "bg-lonestar-200",
    contBorderColor: "border-lonestar-200",
    borderColor: "border-lonestar-900",
    textColor: "!text-lonestar-900",
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Dollar Investments ($)",
    subtitle: "Earn in a Stable Currency",
    description:
      "Diversify your portfolio by investing in dollar-based properties with high growth potential.",
    benefits: [
      "Hedge against inflation",
      "Earn in USD, a globally stable currency",
      "Passive income from high-value assets",
      "See how it works",
    ],
    image: dollarscheme,
    bgColor: "bg-apricot",
    btnBgColor: "!bg-orange-200",
    textColor: "!text-orange-900",
    btnBgColorHover: "bg-orange-200",
    contBorderColor: "border-orange-200",
    borderColor: "border-orange-900",
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Pounds Investments (£)",
    subtitle: "Secure Premium UK Real Estate Investments",
    description:
      "Build a strong international portfolio with fractional property ownership in the UK.",
    benefits: [
      "Earn stable ROI in Pounds",
      "Invest in secure, high-value markets",
      "Exclusive access to prime locations",
    ],
    image: poundScheme,
    bgColor: "bg-lavender-100",
    // bgColor: "#FFECF0",
    btnBgColor: "!bg-lavender-100",
    // textColor: "text-black-900",
    btnBgColorHover: "bg-black-100",
    contBorderColor: "border-lavender-100",
    borderColor: "border-lavender-200",
    textColor: "!text-lavender-200",
    link: "/dashboard",
  },
];

const InvestmentPlans = () => {
  // const router = useRouter();

  return (
    <section
      className="max-w-[1400px] px-5 md:px-10 mx-auto py-28 bg-white"
      id="investment"
    >
      <div className="flex flex-col gap-20 md:items-center justify-center">
        <div className="flex flex-col md:items-center justify-center gap-5">
          <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-black-950">
            Investment Plans
          </h2>
          <p className="text-base md:text-2xl font-normal font-lora text-black-900 max-w-4xl md:text-center">
            Choose a plan that fits your financial goals and start building
            wealth with secure, high-growth real estate investments.
          </p>
        </div>
        <div className="grid gap-8 md:gap-14">
          {investmentOptions.map((investment, index) => (
            <div
              key={investment.id}
              className={`grid md:grid-cols-2 px-5 md:px-10 py-6 md:py-[60px] border ${investment.contBorderColor} shadow-md rounded-2xl ${investment.bgColor} gap-5 justify-center items-center`}
            >
              <Image
                src={investment.image}
                alt="Investment"
                className={`w-full h-full ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              />
              <div
                className={`grid gap-10 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="grid gap-7">
                  <h3 className="font-montserrat text-black-950 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {investment.title}
                  </h3>
                  <div className="grid gap-[10px]">
                    <h4 className="text-xl md:text-3xl lg:text-[32px] font-lora font-medium text-black-900">
                      {investment.subtitle}
                    </h4>
                    <p className="text-base text-left md:text-lg lg:text-xl font-inter text-black-800 font-normal">
                      {investment.description}
                    </p>
                    <ul className="grid gap-1 text-base md:text-lg lg:text-xl font-inter text-black-800 font-normal list-disc pl-8">
                      {investment.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  className={`py-3 w-fit ${investment.btnBgColor} ${investment.textColor} border ${investment.borderColor} text-${investment.textColor} transition-all duration-300 ease-in-out`}
                  // onClick={() => router.push({investment.link})}
                >
                  See how it works
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
