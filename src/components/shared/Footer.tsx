import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/gVestLogo.svg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="bg-lonestar-100 text-black-950 flex flex-wrap md:justify-around">
        <div className="grid gap-10 md:gap-20 max-w-[1400px] w-full px-5 md:px-10 mx-auto pt-10 pb-5">
          <div className="grid">
            <Image
              height={70}
              width={120}
              alt="logo"
              className="my-[40px] h-10 sm:h-16 w-auto"
              src={Logo}
            />
            <div className="grid gap-5 md:gap-4">
              <p className="text-base md:text-lg font-normal max-w-3xl w-full">
                Attempting to solve common problems by combined actions through
                empowerment, shared ownership, & democratic control are major
                key concepts of the GVest Cooperative.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/gvestglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram aria-label="instagram-icon" className="w-7 h-7" />
                </a>
                <a
                  href="https://twitter.com/gvestglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter aria-label="twitter-icon" className="w-7 h-7" />
                </a>
                <a
                  href="https://facebook.com/gvestng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook aria-label="facebook-icon" className="w-7 h-7" />
                </a>
                <a
                  href="https://facebook.com/gvestng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin aria-label="linkedin-icon" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-semibold text-lg h-fit text-Lonestar-950">
                Company
              </p>
              <div className="grid gap-2">
                <Link
                  href="/about-us"
                  className="relative group block text-base h-fit w-fit"
                >
                  <p>About Us</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit"
                >
                  <p>Pricing</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit"
                >
                  <p>Blog</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-semibold text-lg h-fit text-Lonestar-950">
                Support
              </p>
              <div className="grid gap-2">
                <Link
                  href="/"
                  className="relative group block text-base h-fit w-fit"
                >
                  <span>FAQs</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="relative block group text-base h-fit w-fit"
                >
                  <span>Privacy Policy</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit"
                >
                  <span>Help</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-semibold text-lg h-fit text-Lonestar-950">
                Contact Us
              </p>

              <p>309 Close, Banana Island, Ikoyi, Lagos State.</p>

              <div className="grid gap-1">
                <a
                  href="tel:+2348092255133"
                  className="relative block group text-base h-fit w-fit"
                >
                  <p>+234 809 225 5133</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
                <a
                  href="tel:+2348099990864"
                  className="relative block group text-base h-fit w-fit"
                >
                  <p>+234 809 999 0864</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </div>

              <Link
                href="mailto:invest@gvestglobal.ng"
                className="relative block group w-fit"
              >
                <span>invest@gvestglobal.com</span>
                <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
          <p className="my-12 md:my-[40px] text-center text-base font-normal">
            Copyright &copy; {new Date().getFullYear()}.
            <Link href="https://gtextholdings.com">
              Created by Gtext Holdings
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
