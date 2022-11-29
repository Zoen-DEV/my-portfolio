import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import firstProject from "../public/firstProject.gif";
import animercce from "../public/animercce.gif";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";

const Portfolio = () => {
  const [projectOne, setProjectOne] = useState(project1);
  const [projectTwo, setProjectTwo] = useState(project2);

  return (
    <section
      className="flex flex-col justify-evenly items-center w-full min-h-screen px-5 gap-20 "
      id="portfolio"
    >
      <h1
        data-aos="fade-up"
        className=" font-burtons font-bold text-4xl tracking-wider drop-shadow-md border-t-2 border-orange-400 w-5/6 text-center pt-10 "
      >
        PORTAFOLIO
      </h1>
      <div data-aos="fade-up" className=" flex flex-wrap gap-10 justify-center">
        <Link
          href="https://first-portfolio-template.vercel.app/"
          target="_blank"
          className=" flex flex-col items-center lg:w-2/6 "
          onMouseOver={() => setProjectOne(firstProject)}
          onMouseLeave={() => setProjectOne(project1)}
        >
          <Image src={projectOne} className="w-full h-full" alt="project one" />
          <p className=" text-gray-200 ">
            Haz click en la imagen para ver el proyecto
          </p>
        </Link>
        <Link
          href="https://animercce.vercel.app/"
          target="_blank"
          className=" flex flex-col items-center lg:w-2/6 "
          onMouseOver={() => setProjectTwo(animercce)}
          onMouseLeave={() => setProjectTwo(project2)}
        >
          <Image src={projectTwo} className="w-full h-full" alt="project two" />
          <p className=" text-gray-200 ">
            Haz click en la imagen para ver el proyecto
          </p>
        </Link>
        {/* <Link
          href="https://first-portfolio-template.vercel.app/"
          target="_blank"
          className=" flex flex-col items-center lg:w-2/6 "
        >
          <Image src={firstProject} className=" hover:brightness-75 " />
          <p className=" text-gray-200 ">
            Haz click en la imagen para ver el proyecto
          </p>
        </Link> */}
      </div>
    </section>
  );
};

export default Portfolio;
