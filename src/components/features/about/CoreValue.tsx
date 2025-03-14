import React from "react";
import Image from "next/image";
import mission from "../../../../public/icons/mission.svg";
import { Eye } from "lucide-react";
import FaRegHandshake from "../../../../public/icons/hand.svg"

const CoreValue = () => {
  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      icon: "../../../public/assets/Icons/mission.svg",
      iconAlt: "mission",
      bgColor: "bg-[#cff9cf]",
      textColor: "text-[#008000]",
      listTextColor: "text-[#008000]",
      content: [
        "To build an inclusive investment community, allowing individuals to own stakes in real estate, agriculture, and technology.",
        "To onboard 2,000 investors by the end of 2024.",
      ],
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: <Eye className="text-supernova-900 w-10 h-10 md:w-10 md:h-10" />,
      bgColor: "bg-[#f1e4ba]",
      textColor: "text-supernova-900",
      listTextColor: "text-supernova-900",
      content: [
        "To provide everyone with the opportunity to manage and grow wealth through secure, smart, and scalable investments.",
      ],
    },
    {
      id: "values",
      title: "Our Core Values",
      icon: (
        <Image
        src={FaRegHandshake}
        alt="Handshake icon"
        className="w-10 h-10 md:w-14 md:h-14"
        width={56}
        height={56}
      />
      ),
      bgColor: "bg-scheme-100",
      textColor: "text-scheme-900",
      listTextColor: "text-scheme-700",
      content: [
        "Integrity - We uphold the highest ethical standards in all we do.",
        "Trust - Your investments are safeguarded with transparency and accountability.",
        "Transparency - We provide clear, real-time insights into all investment processes.",
      ],
    },
  ];
  return (
    <div className="grid gap-6 font-inter">
      {sections.map(
        ({
          id,
          title,
          icon,
          bgColor,
          textColor,
          listTextColor,
          content,
          iconAlt,
        }) => (
          <div
            key={id}
            className={`grid gap-5 ${bgColor} p-5 py-10 md:p-10 pb-[60px] rounded-3xl shadow-md w-full ${
              id === "vision"
                ? "max-w-[1000px] justify-self-end"
                : "max-w-[1000px] justify-self-start"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {typeof icon === "string" ? (
                <Image
                  src={mission}
                  alt={iconAlt || title}
                  className="w-10 h-10 md:w-10 md:h-10"
                  sizes="14"
                  width="56"
                  height="56"
                />
              ) : (
                icon
              )}
              <h4 className={`${textColor} font-medium text-xl md:text-2xl`}>
                {title}
              </h4>
            </div>
            <ul
              className={`flex flex-col gap-3 pl-5 md:pl-10 list-disc text-base md:text-lg ${listTextColor}`}
            >
              {content.map((item, index) => {
                if (id === "values") {
                  const words = item.split(" "); // Split sentence into words
                  const firstWord = words.shift(); // Extract first word
                  return (
                    <li key={index}>
                      <span className="font-bold">{firstWord}</span>{" "}
                      {words.join(" ")}
                    </li>
                  );
                }

                return <li key={index}>{item}</li>; // Default rendering for other sections
              })}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default CoreValue;
