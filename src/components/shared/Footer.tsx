import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/gVestLogo.svg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 flex flex-wrap md:justify-around relative overflow-hidden">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lonestar-900 via-lonestar-800 to-lonestar-900"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-lonestar-900/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lonestar-900/5 rounded-full blur-3xl"></div> */}

        <div className="grid gap-12 md:gap-20 max-w-[1400px] w-full px-5 md:px-10 mx-auto pt-20 pb-12 relative">
          <div className="grid gap-8">
            <Image
              height={70}
              width={120}
              alt="logo"
              className="h-12 sm:h-16 w-auto"
              src={Logo}
            />
            <div className="grid gap-6">
              <p className="text-base md:text-lg font-normal max-w-3xl w-full text-gray-600 leading-relaxed">
                Attempting to solve common problems by combined actions through
                empowerment, shared ownership, & democratic control are major
                key concepts of the GVest Cooperative.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/gvestglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <Instagram aria-label="instagram-icon" className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/gvestglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <Twitter aria-label="twitter-icon" className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/gvestng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <Facebook aria-label="facebook-icon" className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/gvestng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <Linkedin aria-label="linkedin-icon" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <p className="font-semibold text-lg text-gray-900">
                Company
              </p>
              <div className="grid gap-3">
                <Link
                  href="/about-us"
                  className="relative group block text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <p>About Us</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <p>Pricing</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <p>Blog</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold text-lg text-gray-900">
                Support
              </p>
              <div className="grid gap-3">
                <Link
                  href="/"
                  className="relative group block text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <span>FAQs</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <span>Privacy Policy</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
                <Link
                  href="/"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <span>Help</span>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-semibold text-lg text-gray-900">
                Contact Us
              </p>

              <p className="text-gray-600 leading-relaxed">4 Joe Faraday, Mojisola Onikoyi Estate, Banana Island, Ikoyi, Lagos, Nigeria</p>

              <div className="grid gap-2">
                <a
                  href="tel:+2348092255133"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <p>+234 809 225 5133</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
                <a
                  href="tel:+2348099990864"
                  className="relative block group text-base h-fit w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
                >
                  <p>+234 809 999 0864</p>
                  <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </div>

              <Link
                href="mailto:invest@gvestglobal.ng"
                className="relative block group w-fit text-gray-600 hover:text-lonestar-900 transition-colors duration-300"
              >
                <span>invest@gvestglobal.com</span>
                <span className="absolute left-0 -bottom-[1.5px] h-[2px] w-full bg-lonestar-900 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Copyright &copy; {new Date().getFullYear()}.{" "}
              <Link href="https://gtextholdings.com" className="hover:text-lonestar-900 transition-colors duration-300">
                Created by Gtext Holdings
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
