import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  const [active, setActive] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });

  useEffect(() => {
    console.log(document.activeElement);
    if (
      document.activeElement.name !== "input1" &&
      document.activeElement.name !== "input2" &&
      document.activeElement.name !== "input3" &&
      document.activeElement.name !== "input4"
    ) {
      setActive({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
      });
    }
  }, []);

  const handleLabel = (e) => {
    switch (e.target.name) {
      case "input1":
        setActive({
          input1: true,
          input2: false,
          input3: false,
          input4: false,
        });
        break;
      case "input2":
        setActive({
          input1: false,
          input2: true,
          input3: false,
          input4: false,
        });
        break;
      case "input3":
        setActive({
          input1: false,
          input2: false,
          input3: true,
          input4: false,
        });
        break;
      case "input4":
        setActive({
          input1: false,
          input2: false,
          input3: false,
          input4: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <footer
      className="flex flex-col justify-evenly items-center w-full min-h-screen px-5 gap-20"
      id="contact"
    >
      <h1
        data-aos="fade-up"
        className=" font-burtons font-bold text-4xl tracking-wider drop-shadow-md border-t-2 border-orange-400 w-5/6 text-center pt-10 "
      >
        CONTACTO
      </h1>
      <div className="flex flex-col justify-between items-center gap-20 p-10 w-3/6 ">
        <div className="flex justify-evenly w-5/6 gap-10">
          <Link
            href="https://www.linkedin.com/in/enzo-gabriel-holgado/"
            target="_blank"
            className="text-4xl hover:scale-125 transition-all drop-shadow-md text-blue-700 "
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://github.com/Zoen-DEV"
            target="_blank"
            className="text-4xl hover:scale-125 transition-all drop-shadow-md"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://twitter.com/ZoenDEV"
            target="_blank"
            className="text-4xl hover:scale-125 transition-all drop-shadow-md text-blue-300"
          >
            <BsTwitter />
          </Link>
        </div>
        <form className="flex flex-col bg-gray-800 w-full px-10 py-5 text-white rounded-sm gap-2">
          <h1 className="text-2xl text-white">Formulario de contacto</h1>
          <p className="text-gray-400">
            Completa el formulario para contactarte conmigo o si lo prefieres
            puedes escribirme a{" "}
            <span className="text-teal-500">enzoholgadodev@gmail.com</span>
          </p>
          <label className="flex flex-col">
            <span
              className={`${
                active.input1
                  ? "text-white"
                  : "relative top-6 left-1 text-gray-800"
              }`}
            >
              Nombre
            </span>
            <input
              type="text"
              name="input1"
              required
              onFocus={handleLabel}
              className="text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                active.input2
                  ? "text-white"
                  : "relative top-6 left-1 text-gray-800"
              }`}
            >
              Correo
            </span>
            <input
              type="email"
              name="input2"
              required
              onFocus={handleLabel}
              className="text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                active.input3
                  ? "text-white"
                  : "relative top-6 left-1 text-gray-800"
              }`}
            >
              Asunto
            </span>
            <input
              type="text"
              name="input3"
              required
              onFocus={handleLabel}
              className="text-gray-800"
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                active.input4
                  ? "text-white"
                  : "relative top-6 left-1 text-gray-800"
              }`}
            >
              Mensaje
            </span>
            <textarea
              name="input4"
              id=""
              cols="30"
              rows="10"
              onFocus={handleLabel}
              className="text-gray-800"
            ></textarea>
          </label>
          <input
            type="submit"
            value="Enviar"
            className="w-full text-bold text-teal-50 tracking-wider bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 mt-5 py-2 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </footer>
  );
};

export default Contact;
