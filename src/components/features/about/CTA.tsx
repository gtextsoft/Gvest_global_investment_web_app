import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="max-w-[1400px] px-5 md:px-16 mx-auto py-32 bg-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-center justify-center py-10 px-5 md:p-10 bg-[#FFF0F0] rounded-2xl">
        <div className="flex flex-col gap-5 w-full">
          <h2 className="text-2xl md:text-4xl font-medium leading-tight font-inter text-black-950">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-base md:text-xl font-normal font-inter text-black-900 max-w-4xl">
            Join thousands of satisfied investors already growing their wealth
            with our secure, high-growth real estate opportunities. Choose the
            investment plan that suits your goals and get started today.
          </p>
        </div>
        <Button
          className={`w-fit border h-fit md:min-w-fit !bg-Lonestar-950 !text-white py-2 px-4 text-lg font-medium`}
          variant="default"
        >
         Invest Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
