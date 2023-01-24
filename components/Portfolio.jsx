import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import { BiLink } from "react-icons/bi";

const Portfolio = ({ screen }) => {
  return (
    <section
      className="flex flex-col justify-evenly items-center w-full min-h-screen px-5 py-10 gap-20 "
      id="portfolio"
    >
      <h1
        // data-aos="fade-up"
        className=" font-burtons font-bold text-4xl tracking-wider drop-shadow-md border-t-2 border-orange-400 w-5/6 text-center pt-10 "
      >
        PORTAFOLIO
      </h1>
      <article className=" flex flex-wrap gap-20 justify-center">
        <div
          data-aos={screen < 800 ? "fade-in" : ""}
          className={`flex ${
            screen < 800 ? "flex-col bg-gray-800  w-full" : "w-5/6"
          } gap-5 rounded-md justify-between `}
        >
          <Image
            src={project1}
            data-aos={screen > 800 ? "fade-right" : ""}
            className={` ${
              screen < 800 ? "w-full" : "w-2/6"
            } h-full shadow-md rounded-md transition-all`}
            alt="project one"
          />
          <div
            data-aos={screen > 800 ? "fade-in" : ""}
            className={` ${
              screen < 800 ? "w-full gap-5 py-3" : "w-4/6 gap-2"
            } flex flex-col justify-between items-center px-4 `}
          >
            <h3
              className={` ${
                screen < 800 ? "text-white" : "text-gray-900"
              } drop-shadow-md font-bold text-2xl`}
            >
              Portfolio template
            </h3>
            <p
              className={` text-xl w-full ${
                screen < 800 ? "text-white" : "text-gray-900"
              } drop-shadow-md `}
            >
              Este es un proyecto individual donde realicé un template de un
              portafolio con tecnologías como:{" "}
              <span className=" font-semibold text-teal-500 ">
                React, Next.js, Tailwind css y React-icons.
              </span>{" "}
              El enfoque de este proyecto es que sea intuitivo y fácil de leer,
              además de haber implementado una funcionalidad de{" "}
              <span className=" font-semibold text-teal-500 ">
                Dark and Light themes
              </span>{" "}
              para la comodidad del usuario.
            </p>
            <Link
              href="https://first-portfolio-template.vercel.app/"
              target="_blank"
              className=" flex items-center gap-2 self-end bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
            >
              Ver proyecto <BiLink />
            </Link>
          </div>
        </div>
        {screen < 800 ? (
          <div
            data-aos="fade-in"
            className="flex flex-col bg-gray-800  w-full gap-5 rounded-md justify-between "
          >
            <Image
              src={project1}
              className={`w-full h-full shadow-md rounded-md transition-all`}
              alt="project one"
            />
            <div
              className={` ${
                screen < 800 ? "w-full gap-5 py-3" : "w-2/6"
              } flex flex-col justify-between items-center px-4 `}
            >
              <h3 className={`text-white drop-shadow-md font-bold text-2xl`}>
                Portfolio template
              </h3>
              <p className={` text-xl w-full text-white drop-shadow-md `}>
                Este es un proyecto individual donde realicé un template de un
                portafolio con tecnologías como:{" "}
                <span className=" font-semibold text-teal-500 ">
                  React, Next.js, Tailwind css y React-icons.
                </span>{" "}
                El enfoque de este proyecto es que sea intuitivo y fácil de
                leer, además de haber implementado una funcionalidad de{" "}
                <span className=" font-semibold text-teal-500 ">
                  Dark and Light themes
                </span>{" "}
                para la comodidad del usuario.
              </p>
              <Link
                href="https://first-portfolio-template.vercel.app/"
                target="_blank"
                className=" flex items-center gap-2 self-end bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
              >
                Ver proyecto <BiLink />
              </Link>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-row w-5/6 gap-20 rounded-md justify-center `}
          >
            <div
              data-aos="fade-in"
              className={` w-4/6 flex flex-col gap-2 justify-between items-center px-4 `}
            >
              <h3 className={`text-gray-900 drop-shadow-md font-bold text-2xl`}>
                Portfolio template
              </h3>
              <p className={` text-xl w-full text-gray-900 drop-shadow-md `}>
                Este es un proyecto individual donde realicé un template de un
                portafolio con tecnologías como:{" "}
                <span className=" font-semibold text-teal-500 ">
                  React, Next.js, Tailwind css y React-icons.
                </span>{" "}
                El enfoque de este proyecto es que sea intuitivo y fácil de
                leer, además de haber implementado una funcionalidad de{" "}
                <span className=" font-semibold text-teal-500 ">
                  Dark and Light themes
                </span>{" "}
                para la comodidad del usuario.
              </p>
              <Link
                href="https://first-portfolio-template.vercel.app/"
                target="_blank"
                className=" flex items-center gap-2 self-end bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
              >
                Ver proyecto <BiLink />
              </Link>
            </div>
            <Image
              src={project1}
              data-aos="fade-left"
              className={` w-2/6 h-full shadow-md rounded-md transition-all`}
              alt="project one"
            />
          </div>
        )}
        <div
          data-aos={screen < 800 ? "fade-in" : ""}
          className={`flex ${
            screen < 800 ? "flex-col bg-gray-800  w-full" : "w-5/6"
          } gap-5 rounded-md justify-between `}
        >
          <Image
            src={project1}
            data-aos={screen > 800 ? "fade-right" : ""}
            className={` ${
              screen < 800 ? "w-full" : "w-2/6"
            } h-full shadow-md rounded-md transition-all`}
            alt="project one"
          />
          <div
            data-aos={screen > 800 ? "fade-in" : ""}
            className={` ${
              screen < 800 ? "w-full gap-5 py-3" : "w-4/6 gap-2"
            } flex flex-col justify-between items-center px-4 `}
          >
            <h3
              className={` ${
                screen < 800 ? "text-white" : "text-gray-900"
              } drop-shadow-md font-bold text-2xl`}
            >
              Portfolio template
            </h3>
            <p
              className={` text-xl w-full ${
                screen < 800 ? "text-white" : "text-gray-900"
              } drop-shadow-md `}
            >
              Este es un proyecto individual donde realicé un template de un
              portafolio con tecnologías como:{" "}
              <span className=" font-semibold text-teal-500 ">
                React, Next.js, Tailwind css y React-icons.
              </span>{" "}
              El enfoque de este proyecto es que sea intuitivo y fácil de leer,
              además de haber implementado una funcionalidad de{" "}
              <span className=" font-semibold text-teal-500 ">
                Dark and Light themes
              </span>{" "}
              para la comodidad del usuario.
            </p>
            <Link
              href="https://first-portfolio-template.vercel.app/"
              target="_blank"
              className=" flex items-center gap-2 self-end bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 px-2 shadow-md rounded-sm py-1 text-teal-50 tracking-wider hover:scale-110"
            >
              Ver proyecto <BiLink />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio;
