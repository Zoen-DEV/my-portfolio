import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Nav = () => {
  const [screenWidth, screenHeight] = useWindowSize();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    screenWidth > 1024 ? setToggleNav(false) : setToggleNav(toggleNav);
  }, [screenWidth]);

  const handleResume = (e) => {
    window.open(
      "https://drive.google.com/file/d/1ugAfDt2RYHlqGb1LsWea89GzG83Q7ygw/view?usp=share_link",
      "_blank"
    );
  };

  return (
    <header
      className={` py-5 flex justify-between fixed w-screen shadow-lg items-center bg-gray-50 z-50 ${
        toggleNav ? "flex-col" : "flex-row"
      }`}
    >
      <h1 className=" text-xl font-burtons md:text-3xl lg:text-4xl px-5 drop-shadow-md font-semibold text-gray-800 select-none lg:px-10 ">
        Enzo Gabriel Holgado
      </h1>
      <nav
        className={` pr-10 flex justify-end ${
          toggleNav ? " w-full flex-col self-start pl-5 pb-10" : ""
        } w-2/6 lg:w-3/6`}
      >
        <ul
          className={` flex w-5/6 justify-between items-center font-semibold tracking-wide text-xl drop-shadow-md text-gray-800 ${
            screenWidth < 1024 ? "hidden" : ""
          }`}
        >
          <li className="whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link href="/">HOME</Link>
          </li>
          <li className="whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link href="#about">ABOUT</Link>
          </li>
          <li className="whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link href="#portfolio">PORTFOLIO</Link>
          </li>
          <li className="whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link href="#contact">CONTACT ME</Link>
          </li>
          <li className="whitespace-nowrap">
            <button
              onClick={handleResume}
              className=" bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
            >
              RESUME
            </button>
          </li>
        </ul>
        <ul
          className={` w-full ${toggleNav ? "" : "hidden"} ${
            screenWidth > 1024 ? "hidden" : ""
          } flex flex-col gap-2 pt-5 `}
        >
          <li className="font-bold whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link onClick={() => setToggleNav(false)} href="/">
              HOME
            </Link>
          </li>
          <li className="font-bold whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link onClick={() => setToggleNav(false)} href="#about">
              ABOUT
            </Link>
          </li>
          <li className="font-bold whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link onClick={() => setToggleNav(false)} href="#portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="font-bold whitespace-nowrap transition-all hover:text-teal-600 hover:scale-110 ">
            <Link onClick={() => setToggleNav(false)} href="#contact">
              CONTACT ME
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <button
              onClick={handleResume}
              className=" bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
            >
              RESUME
            </button>
          </li>
        </ul>
        <button
          onClick={() => setToggleNav(!toggleNav)}
          className={` ${screenWidth > 1024 ? "hidden" : ""} ${
            toggleNav ? " flex w-3/6 top-3/4 left-1/4 mt-10 justify-center animate-bounce absolute m-auto text-orange-600" : ""
          } text-2xl`}
        >
          {toggleNav ? <BiUpArrow /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
