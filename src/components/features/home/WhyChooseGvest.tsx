import Image from "next/image";
import React from "react";

import {
  ChartPie,
  ChartNoAxesCombined,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const WhyChooseGvest = () => {
  const features = [
    {
      icon: (
        <ChartPie className="text-5xl !w-10 !h-10 md:!w-12 md:!h-12 text-[#1A237E] transition-all duration-500 ease-in-out" />
      ),
      title: "Fractional Ownership",
      contBg: "#cacef9",
      textColor: "text-[#1A237E]",
      textColor2: "#5059B4",
      description:
        "Invest in premium properties with as little as ₦10,000, making real estate accessible to everyone.",
    },
    {
      icon: (
        <ChartNoAxesCombined className="text-5xl !w-10 !h-10 md:!w-12 md:!h-12 text-[#391448] transition-all duration-500 ease-in-out" />
      ),
      title: "Guaranteed ROI",
      contBg: "#f5d5ff",
      textColor: "text-[#391448]",
      textColor2: "#380C49",
      description:
        "Earn up to 90% returns over 10 years with a transparent and predictable investment model.",
    },
    {
      icon: (
        <RefreshCw className="text-5xl !w-10 !h-10 md:!w-12 md:!h-12 text-[#362903] transition-all duration-500 ease-in-out" />
      ),
      title: "Multi-Currency Investments",
      contBg: "#f1e4ba",
      textColor: "text-[#362903]",
      textColor2: "#3F310A",
      description:
        "Seamlessly invest in Naira, Dollars, or Pounds, without currency limitations or conversion worries.",
    },
    {
      icon: (
        <ShieldCheck className="text-5xl !w-10 !h-10 md:!w-12 md:!h-12 text-[#008000] transition-all duration-500 ease-in-out" />
      ),
      title: "Secure & Regulated",
      contBg: "#cff9cf",
      textColor: "text-[#008000]",
      textColor2: "#408C40",
      description:
        "Backed by trusted institutions, GVest ensures top-tier security and investor protection.",
    },
  ];
  return (
    <section className="max-w-[1400px] px-5 md:px-10 mx-auto py-20 md:py-28 bg-white">
      <div className="flex flex-col gap-10 md:gap-20 items-center justify-center">
        <div className="flex flex-col md:items-center justify-center gap-5">
          <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-black-950 leading-snug">
            Why Choose GVest?
          </h2>
          <p className="text-lg md:text-2xl font-normal font-lora text-black-900 max-w-2xl text-left md:text-center">
            Smarter Investing, Greater Returns—Built for secure, high-growth
            real estate investments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ backgroundColor: feature.contBg }}
              className={`grid dark:bg-[#18181B] p-5 py-8 md:p-10 gap-5 md:gap-10 rounded-3xl shadow-md transition-all duration-500 ease-in-out will-change-transform dark:hover:bg-[#22222A]`}
            >
              {typeof feature.icon === "string" ? (
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="!w-10 !h-10 md:!w-12 md:!h-12 transition-all duration-500 ease-in-out"
                />
              ) : (
                feature.icon
              )}
              <div className="grid gap-2 md:gap-3">
                <h3
                  className={`font-inter text-xl md:text-2xl ${feature.textColor} font-medium transition-all duration-500`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`font-inter text-base md:text-lg ${feature.textColor} font-normal transition-all duration-500`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGvest;
