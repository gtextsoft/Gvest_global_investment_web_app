import React from "react";
import Image from "next/image";

import GnA from "../../../../public/images/subsidaries/GandAlogo.png";
import GTLand from "../../../../public/images/subsidaries/GTLandlogo.png";
import GHoldings from "../../../../public/images/subsidaries/GtextHoldingsLogo.png";
import GvestLogo from "../../../../public/images/subsidaries/gVestLogo.png";
import GtextHome from "../../../../public/images/subsidaries/gtexthomeLogo.png";
import GtextSuit from "../../../../public/images/subsidaries/gtextsuitlogo.png";
import SAF from "../../../../public/images/subsidaries/stephenAkintayoFoundationlogo.png";

const logos = [
  { src: GnA, alt: "GandA Logo" },
  {
    src: GHoldings,
    alt: "GtextHoldings Logo",
  },
  { src: GtextHome, alt: "GtextHome Logo" },
  { src: GtextSuit, alt: "GtextSuit Logo" },
  { src: GTLand, alt: "GTLandLogo" },
  { src: GvestLogo, alt: "GVest Logo" },
  {
    src: SAF,
    alt: "StephenAkintayoFoundation Logo",
  },
];

const Subsidaries = () => {
  return (
    <section className="py-10 bg-white flex items-center max-w-[1400px] px md:px-10 mx-auto">
      <div className="flex justify-between items-center w-full gap-4 overflow-auto whitespace-nowrap scrollbar-hide">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={50}
          />
        ))}
      </div>
    </section>
  );
};

export default Subsidaries;
