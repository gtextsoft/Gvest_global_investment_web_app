import React from "react";
import Image from "next/image";
import clientTestimonies1 from "../../../../public/images/whatClientAreSaying/clientTestimonies1.png";
import clientTestimonies2 from "../../../../public/images/whatClientAreSaying/clientTestimonies2.png";
import clientTestimonies3 from "../../../../public/images/whatClientAreSaying/clientTestimonies3.png";
import clientTestimonies4 from "../../../../public/images/whatClientAreSaying/clientTestimonies4.png";

const InvestorsTestimonies = () => {
  return (
    <section className="max-w-[1400px] px-5 md:px-10 mx-auto py-28 bg-[#f7f7f7]">
      <div className="flex flex-col gap-20 md:items-center justify-center">
        <div className="flex flex-col md:items-center justify-center gap-5">
          <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-Black-950">
            What Our Investors Are Saying
          </h2>
          <p className="text-base md:text-2xl font-normal font-lora text-Black-900 max-w-3xl lg:max-w-4xl md:text-center">
            At GVest Global, we prioritize building trust and delivering value.
            Hear directly from our satisfied investors who have experienced the
            power of secure, high-growth real estate investments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Image
            src={clientTestimonies1}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
          <Image
            src={clientTestimonies2}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
          <Image
            src={clientTestimonies3}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
          <Image
            src={clientTestimonies4}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InvestorsTestimonies;
