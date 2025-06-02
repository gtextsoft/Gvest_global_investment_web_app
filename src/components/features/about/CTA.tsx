import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="max-w-[1400px] px-5 md:px-16 mx-auto py-32">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-center justify-center py-16 px-8 md:p-16 bg-gray-900 rounded-3xl shadow-xl">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight font-inter text-white">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-lg md:text-xl font-normal font-inter text-white/90 max-w-4xl">
            Join thousands of satisfied investors already growing their wealth
            with our secure, high-growth real estate opportunities. Choose the
            investment plan that suits your goals and get started today.
          </p>
        </div>
        <Button
          className="w-fit h-fit md:min-w-[200px] py-4 px-8 text-lg font-medium bg-white text-lonestar-900 hover:bg-white/90 hover:text-lonestar-900 shadow-lg hover:shadow-xl transition-all duration-300"
          variant="secondary"
        >
          Invest Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
