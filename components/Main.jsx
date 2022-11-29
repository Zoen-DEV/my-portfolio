import Image from "next/image";
import React from "react";
import main from "../public/main.png"

const Main = () => {
  return (
    <section className=" w-full h-screen flex justify-center items-center gap-0 md:gap-40 flex-wrap" id="home">
      <div data-aos="fade-up" className=" flex justify-center flex-col items-center gap-5 mt-16 lg:items-start ">
        <h1 className=" text-center text-6xl text-teal-700 drop-shadow-md ">Enzo Gabriel Holgado</h1>
        <p className=" text-3xl drop-shadow-md text-gray-700 ">Fullstack Developer</p>
      </div>
      <div data-aos="fade-up" className=" relative w-96 h-96 bg-gradient-to-b from-teal-500 rounded-full overflow-hidden flex justify-center items-center shadow-lg ">
        <Image src={main} width="auto" height="auto" alt="main logo" className="object-cover" priority />
      </div>
    </section>
  );
};

export default Main;
