"use client";
import Link from "next/link";
import Image from "next/image";
// import GetStarted from "../Home/Button";
// import { useSelector } from "react-redux";
import { useState } from "react";
import Logo from "../../../public/icons/gVestLogo.svg";
import Menu from "../../../public/icons/menu-icon.svg";
import X from "../../../public/icons/x.svg";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(true);
  //   const { isLogin } = useSelector((store) => store.user);
  const navBar = [
    {
      id: 1,
      text: "About",
      link: "/about-us",
    },
    {
      id: 2,
      text: "Investment",
      link: "/#investment",
    },
    {
      id: 3,
      text: "Contact",
      link: "/contact-us",
    },
  ];


  return (
    <>
      <header className="flex items-center justify-center min-h-[40px] w-full sticky top-0 z-50 pt-5">
        <section className="relative w-full max-w-7xl pl-3 sm:pl-5 pr-6 md:pr-8 mx-5 flex items-center justify-between shadow-md py-4 rounded-full bg-[#FDF3F3]">
          <Link href="/">
            <Image
              width={120}
              height={70}
              src={Logo}
              alt="icon"
              className="h-8 sm:h-16 w-auto"
            />
          </Link>

          <ul className="hidden md:flex items-center justify-center gap-5 font-inter text-base font-medium text-black leading-5">
            {navBar.map(({ id, text, link }) => (
              <li key={id}>
                <Link href={link} className="font-normal">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex md:hidden">
            <Image
              width={40}
              height={40}
              src={menuToggle ? Menu : X}
              alt="menu-icon"
              className="h-6 sm:h-10 w-auto cursor-pointer"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          </div>

          <div className="hidden md:flex gap-3 items-center">
            {/* {isLogin ? (
              <Link
                href="/dashboard"
                className="trans hover:bg-white/80 font-medium text-[15px] border border-pry text-pry py-2 px-4 rounded  hover:text-pry/70"
              >
                Dashboard
              </Link>
            ) : (
              <> */}
            <Button
              variant="secondary"
              size="lg"
              className="shadow-2xl w-fit transition-all duration-300 ease-in-out"
              onClick={() => router.push("/sign-in")}
            >
              Login
            </Button>
            <Button
              variant="default"
              size="lg"
              className="shadow-2xl w-fit transition-all duration-300 ease-in-out"
              onClick={() => router.push("/sign-up")}
            >
              Register
            </Button>
            {/* </>
            )} */}
          </div>

          {/* Mobile Nav */}
          <div
            className={`fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 ${
              menuToggle
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
            onClick={() => setMenuToggle(true)}
          ></div>

          {/* Slide-in Nav */}
          <div
            className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-lg transition-transform duration-300 ${
              menuToggle ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Close Button */}
            <div className="flex justify-end gap-4 p-4 pt-8">
              <Image
                width={30}
                height={30}
                src={X}
                alt="close-icon"
                className="cursor-pointer"
                onClick={() => setMenuToggle(true)}
              />
            </div>
            <div className="grid gap-5 pt-5">
              {/* Mobile Nav Links */}
              <ul className="flex flex-col gap-5 items-start px-8 space-y-6 text-lg font-medium">
                {navBar.map(({ id, text, link }) => (
                  <li key={id} className="!m-0">
                    <Link href={link} onClick={() => setMenuToggle(true)}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Login/Register buttons in Mobile Nav */}
              <div className="px-8 flex flex-col gap-5">
                {/* {isLogin ? (
                  <Link
                    href="/dashboard"
                    className="trans hover:bg-white/80 font-medium text-[15px] border border-pry text-pry py-2 px-4 rounded  hover:text-pry/70"
                    onClick={() => setMenuToggle(true)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <> */}
                <Button
                  variant="secondary"
                  size="lg"
                  className="shadow-2xl w-fit transition-all duration-300 ease-in-out"
                  onClick={() => router.push("/sign-in")}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="shadow-2xl w-fit transition-all duration-300 ease-in-out"
                  onClick={() => router.push("/sign-up")}
                >
                  Register
                </Button>
                {/* </>
                )} */}
              </div>
            </div>
          </div>
        </section>
        {/* <div className='border-b border-pry'></div> */}
      </header>
    </>
  );
};
export default Header;
