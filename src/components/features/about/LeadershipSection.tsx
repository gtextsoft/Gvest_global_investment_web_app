import React from "react";
import Image from "next/image";
import CEO from "../../../../public/images/ceostephen.png";
import GVESTP from "../../../../public/images/gvest-president.jpeg";
import GVESTVP from "../../../../public/images/gvest-vice-president.jpeg";

const LeadershipSection = () => {
  const teamMembers = [
    {
      id: "chairman",
      name: "Dr. Stephen Akintayo",
      position: "Chairman, GText Holdings",
      image: CEO,
      hasOverlay: true,
      containerStyle: "relative flex shadow-md rounded-xl overflow-hidden",
      imageStyle: "w-full h-auto",
    },
    {
      id: "member1",
      name: "Ikenna Mba",
      position: "President, GVEST",
      image: GVESTP,
      hasOverlay: true,
      containerStyle: "relative flex shadow-md rounded-xl overflow-hidden",
      imageStyle: "w-full h-auto",
    },
    {
      id: "member2",
      name: "Ikenna Mba",
      position: "V-President, GVEST",
      image: GVESTVP,
      hasOverlay: true,
      containerStyle: "relative flex shadow-md rounded-xl overflow-hidden",
      imageStyle: "w-full h-auto",
    },
  ];
  return (
    <div className="grid gap-10 md:gap-20 max-w-[1400px] justify-center w-full px-5 md:px-10 mx-auto py-[120px] bg-[#f7f7f7]">
      <h2 className="text-2xl md:text-center md:text-3xl font-semibold font-montserrat text-Black-950 leading-snug">
        Meet Our Leadership Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 md:gap-6">
        {teamMembers.map(
          ({
            id,
            name,
            position,
            image,
            hasOverlay,
            containerStyle,
            imageStyle,
          }) => (
            <div key={id} className={`max-h-[500px] ${containerStyle}`}>
              <Image
                src={image}
                alt={name || "Team Member"}
                className={`object-top object-cover ${imageStyle}`}
                width={56}
                height={56}
                sizes="14"
              />
              {hasOverlay && (
                <div className="w-full absolute p-5 bg-white bottom-0 right-0 flex flex-col gap-1">
                  <h5 className="text-xl font-semibold text-[#18181B]">
                    {name}
                  </h5>
                  <p className="text-base text-[#71717A]">{position}</p>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LeadershipSection;
