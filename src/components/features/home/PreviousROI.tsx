import Image from "next/image";
import React from "react";
import roipaymentproof1 from "../../../../public/images/payments/roi-payment-1.jpg";
import roipaymentproof2 from "../../../../public/images/payments/roi-payment-2.jpg";
import roipaymentproof3 from "../../../../public/images/payments/roi-payment-3.jpg";

const PreviousROI = () => {
  return (
    <section className="max-w-[1400px] px-5 md:px-10 mx-auto py-28 bg-white">
      <div className="flex flex-col gap-20 md:items-center justify-center">
        <div className="flex flex-col md:items-center justify-center gap-5">
          <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-black-950">
            Previous ROI Payments
          </h2>
          <p className="text-base md:text-2xl font-normal font-lora text-black-900 max-w-3xl lg:max-w-4xl md:text-center">
            We&apos;ve delivered consistent returns to our investors. See the
            track record of our past ROI payments and start investing with
            confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            src={roipaymentproof1}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
          <Image
            src={roipaymentproof2}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
          <Image
            src={roipaymentproof3}
            alt="roipaymentproof"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PreviousROI;
