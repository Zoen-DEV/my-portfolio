import React, { useRef, useState } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const initialState = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const formRef = useRef();
  const [formData, setFormData] = useState(initialState);
  const [active, setActive] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const handleBlur = (e) => {
    setActive({
      ...active,
      [e.target.name]: false,
    });
  };

  const handleFocus = (e) => {
    setActive({
      ...active,
      [e.target.name]: true,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_name.length < 10) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "El nombre debe contener mas de 10 caracteres",
      });
    } else if (formData.user_email.length < 10) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "El correo debe contener mas de 10 caracteres",
      });
    } else if (formData.message.length < 60) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "El mensaje no puede contener menos de 60 caracteres",
      });
    } else {
      Swal.fire({
        title: "¿Estas seguro/a que quieres enviar este correo?",
        icon: "question",
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        showCloseButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          emailjs
          .sendForm(
            "service_9dkbklt",
            "template_opmb2er",
            formRef.current,
            "40CyW4M0MdAwS9RNg"
          )
          .then(
            (result) => {
              setFormData(initialState);
              Swal.fire({
                icon: 'success',
                title: 'Listo!',
                text: 'Correo enviado correctamente',
              })
              window.location.replace("http://enzoholgado.vercel.app/");
            },
            (error) => {
              console.log(error.text);
            }
          )
        }
      });
    }
  };
  return (
    <footer
      className="flex flex-col justify-evenly items-center w-full min-h-screen gap-20 lg:px-10"
      id="contact"
    >
      <h1
        data-aos="fade-up"
        className=" font-burtons font-bold text-4xl tracking-wider drop-shadow-md border-t-2 border-orange-400 w-5/6 text-center pt-10 "
      >
        CONTACTO
      </h1>
      <div className="flex flex-col justify-between items-center gap-20 pt-10 w-full lg:w-3/6 lg:py-10">
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
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col bg-gray-800 w-full px-5 py-5 text-white lg:rounded-sm gap-2 shadow-md lg:px-20 lg:py-10"
        >
          <h1 className="text-2xl text-white">Formulario de contacto</h1>
          <p className="text-gray-400">
            Completa el formulario para contactarte conmigo o si lo prefieres
            puedes escribirme a{" "}
            <span className="text-teal-500">enzoholgadodev@gmail.com</span>
          </p>
          <label className="flex flex-col">
            <span
              className={`${
                formData.user_name.length > 0
                  ? "text-white"
                  : active.user_name
                  ? "text-white"
                  : "relative top-7 left-1 text-gray-600 w-1/6 hover:cursor-text"
              }`}
            >
              Nombre
            </span>
            <input
              type="text"
              name="user_name"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              value={formData.user_name}
              className="text-gray-800 rounded-sm px-2 py-1 outline-none bg-gray-100 border-gray-100 border-2 focus:border-orange-400"
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                formData.user_email.length > 0
                  ? "text-white"
                  : active.user_email
                  ? "text-white"
                  : "relative top-7 left-1 text-gray-600 w-1/6 hover:cursor-text"
              }`}
            >
              Correo
            </span>
            <input
              type="email"
              name="user_email"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              value={formData.user_email}
              className="text-gray-800 rounded-sm px-2 py-1 outline-none bg-gray-100 border-gray-100 border-2 focus:border-orange-400"
            />
          </label>
          <label className="flex flex-col">
            <span
              className={`${
                formData.message.length > 0
                  ? "text-white"
                  : active.message
                  ? "text-white"
                  : "relative top-7 left-1 text-gray-600 w-1/6 hover:cursor-text"
              }`}
            >
              Mensaje
            </span>
            <textarea
              name="message"
              cols="30"
              rows="10"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              value={formData.message}
              className="text-gray-800 rounded-sm resize-none px-2 py-1 outline-none bg-gray-100 border-gray-100 border-2 focus:border-orange-400"
            ></textarea>
          </label>
          <input
            type="submit"
            value="Enviar"
            className="w-full text-bold text-teal-50 tracking-wider bg-gradient-to-r transition-all from-fuchsia-500 to-orange-600 mt-5 py-2 rounded-md cursor-pointer hover:from-fuchsia-600 hover:to-orange-700"
          />
        </form>
      </div>
    </footer>
  );
};

export default Contact;
