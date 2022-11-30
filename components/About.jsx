import Image from "next/image";
import React from "react";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const About = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen py-20 gap-10 xl:flex-row  "
      id="about"
    >
      <div
        data-aos="fade-in"
        className="flex flex-col self-start w-11/12 bg-gray-800 rounded-r-md p-5"
      >
        <Image
          src={consulting}
          width="auto"
          height="auto"
          alt="logo del apartado de about"
          className=" w-32 self-end drop-shadow-lg opacity-30 absolute "
        />
        <div className="px-5 flex flex-col gap-5 mt-10 ">
          <h1 className=" font-mono font-bold text-2xl drop-shadow-md text-white ">
            ¿Quien soy?
          </h1>
          <p className=" tracking-wide text-gray-100 drop-shadow-md ">
            Hola, yo soy Enzo, soy de un pequeño pueblo de Argentina llamado
            Urdampilleta. Me gusta mucho viajar y conocer nuevos lugares,
            personas y experiencias. Soy una persona{" "}
            <span className=" font-semibold text-teal-500 ">
              proactiva, empatica y responsable
            </span>
            , con buenas
            <span className=" font-semibold text-teal-500 ">
              {" "}
              habilidades interpersonales
            </span>
            . Cuento con mas de 1 año de experiencia en el desarrollo de
            aplicaciones webs complejas con tecnologías basadas en Javascript.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col self-center w-11/12 bg-gray-800 rounded-md p-5"
        data-aos="fade-up"
      >
        <div className="px-5 flex flex-col gap-5 ">
          <h1 className=" font-mono text-center font-bold text-2xl drop-shadow-md text-white ">
            ¿Cual es mi experiencia y objetivo?
          </h1>
          <p className=" tracking-wide text-gray-100 drop-shadow-md ">
            He trabajado en equipos con{" "}
            <span className=" font-semibold text-teal-500 ">
              metodologias agiles
            </span>{" "}
            como <span className=" font-semibold text-teal-500 ">SCRUM</span>{" "}
            donde he podido aportar mucho con mis conocimientos tanto en backend
            como en frontend a los proyectos, ayudando a mis compañeros a{" "}
            <span className=" font-semibold text-teal-500 ">
              encontrar soluciones
            </span>{" "}
            y a que sea mas productivo el{" "}
            <span className=" font-semibold text-teal-500 ">
              flujo de trabajo
            </span>
            . Siempre tengo la mejor disposición para realizar las tareas que se
            me asignan. Estoy buscando un puesto desafiante donde pueda{" "}
            <span className=" font-semibold text-teal-500 ">
              continuar aprendiendo
            </span>{" "}
            y aportar con todo lo que se a los proyectos que se me presenten.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-in"
        className="flex flex-col self-end w-11/12 bg-gray-800 rounded-l-md p-5"
      >
        <Image
          src={code}
          width="auto"
          height="auto"
          alt="logo del apartado de about"
          className=" w-32 self-end drop-shadow-lg absolute opacity-30 "
        />
        <div className="px-5 flex flex-col gap-5 mt-10 ">
          <h1 className=" font-mono font-bold text-xl drop-shadow-md text-white ">
            ¿Cuales son mis habilidades tecnicas?
          </h1>
          <p className=" tracking-wide text-gray-100 drop-shadow-md ">
            Tengo conocimientos en lenguajes como:{" "}
            <span className=" font-semibold text-teal-500 ">
              JavaScript, HTML, CSS y SQL.
            </span>{" "}
            con el uso de frameworks y librerias como{" "}
            <span className=" font-semibold text-teal-500 ">
              React.js, Next.js, Redux, Tailwind css
            </span>{" "}
            para el lado del frontend. Y{" "}
            <span className=" font-semibold text-teal-500 ">
              Node.js, Express.js, Sequelize, PostgreSQL, MySQL
            </span>{" "}
            para backend y base de datos. ¡Entre otras!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
