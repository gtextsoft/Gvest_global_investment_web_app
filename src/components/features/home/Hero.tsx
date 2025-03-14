"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gvestApp from "../../../../public/images/gvestapp.png";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter()
  return (
    <section className="grid items-center justify-center pt-24 md:pt-24 pb-10 bg-gradient-to-b from-white to-lonestar-100 w-full">
      <div className="container grid grid-cols-1 gap-20 md:gap-y-4 gap-x-4 max-w-[1400px] px-5 md:px-10 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-8 pt-4">
          <div className="flex flex-col gap-5">
            <h1
              className="font-semibold font-montserrat text-left text-4xl sm:text-5xl md:text-5xl lg:text-6xl !leading-tight"
              data-aos="fade-up"
            >
              Own Your Future. Invest in Real Estate with Ease.
            </h1>
            <p
              className="font-lora font-normal text-black-600 text-base md:text-xl text-left leading-normal"
              data-aos="fade-up"
            >
              Join GVest Cooperative, Africa&apos;s first digital investment
              platform, and secure high-growth real estate investments with
              fractional ownership, minimal risk, and guaranteed
              returns—effortlessly.
            </p>
          </div>
          <Button
            className="w-fit border h-fit md:min-w-fit py-2 px-4 text-lg font-medium"
            variant="default"
            onClick={() => router.push("/login")}
          >
            Invest Now
          </Button>
        </div>
        <div className="grid justify-center" data-aos="fade-left">
          <Image
            src={gvestApp}
            alt="Gvest App"
            className="w-auto h-full max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
