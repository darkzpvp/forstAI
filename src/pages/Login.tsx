import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ImagenFondo = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.123),
      rgba(33, 37, 41, 0.85)
    ),
    url("/src/assets/img/fondoLogin.jpg") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    align-items: start;
  }
`;
const Login = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 h-screen ">
      <ImagenFondo className=" md:col-span-1 lg:col-span-2 hidden md:flex ">
        <div className=" my-20 text-[#272B30] ">
          <h1 className=" font-bold text-4xl mb-3 text-center">
            ¡Logueate en ForstAI!
          </h1>
          <p className=" text-center">Comienza a generar imágenes ya.</p>
        </div>
      </ImagenFondo>

      <div className="bg-[#272B30] text-gray-300 shadow-lg md:col-span-1 flex flex-col justify-center gap-0 md:gap-12">
        <div className="absolute top-5 mx-5 cursor-pointer">
            <Link to={'/'} className=" flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <p>Atrás</p>
          </Link>
        </div>

        <div className=" flex justify-center">
          <img
            className="hidden md:flex md:w-28 cursor-pointer"
            src="/src/assets/img/prueba.png"
            alt="Prueba"
          />
        </div>
        <div className="flex justify-center  flex-col  items-center px-8 md:px-20">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mb-4 border text-sm rounded-lg block p-2.5 bg-gray-200 placeholder-gray-400 text-black w-[100%] max-w-sm md:max-w-lg"
            placeholder="hola@correo.com"
            required
          />
          <label
            htmlFor="contraseña"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="contraseña"
            className="text-sm rounded-lg block  p-2.5 bg-gray-200 mb-8 text-black w-[100%] max-w-sm md:max-w-lg"
            placeholder="Escribe tu contraseña"
            required
          />

          <button
            type="button"
            className="transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 block  text-center active:bg-[#464f9d] max-w-sm md:max-w-lg w-[100%]"
          >
            Login
          </button>

          <div className="text-center text-sm">
            <a href="/">He olvidado mi contraseña</a>
          </div>

          <div className=" text-center text-sm mt-5">
            <a href="/registrar">
              ¿Todavía no tienes una cuenta?{" "}
              <span className="text-[#8f95d3]">Regístrate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
