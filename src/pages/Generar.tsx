import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Generar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
  };

  return (
    <>
      <nav className="bg-zinc-800 px-10">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-2">
          <button className="w-[25%]">
            <Link to="/generar">
              <img
                className="w-[100%] min-w-12 max-w-12 cursor-pointer"
                src="/src/assets/img/prueba.png"
                alt="..."
              />
            </Link>
          </button>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={handleMenu}
              className="flex text-sm bg-gray-800 rounded-full"
              id="user-menu-button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/src/assets/img/usuario.svg"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>

      {menu && (
        <>
          <div className="absolute z-50 my-2 text-base divide-y rounded-lg shadow bg-gray-800 divide-gray-600 w-fit block 2xl:right-16 right-0">
            <div className="px-4 py-3">
              <span className="block text-sm text-white">Víctor Valverde</span>
              <span className="block text-sm text-gray-400">
                hola@correo.com
              </span>
            </div>
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Suscripciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Configuración
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </>
      )}

      <section
        className="bg-gray-700 h-[92.2vh] flex justify-center"
        onClick={handleCloseMenu}
      >
        <div className="block md:flex items-center px-5 justify-center mt-10 md:mt-0">
          <div className="md:text-left w-full md:w-[100%] mx-auto min-w-[50vh] px-10">
            <h1 className="md:text-5xl font-bold text-gray-300 mb-5 text-2xl">
              Generador de Imágenes por IA
            </h1>
            <p className="text-gray-400 md:text-lg text-md">
              Nuestra herramienta de texto a imagen genera resultados infinitos
              a tiempo real. ¿Quieres probarla?
            </p>
            <form className="mt-6" action="#">
              <div className="relative">
                <input
                  type="text"
                  className="block w-full p-4 text-sm rounded-lg bg-gray-200"
                  placeholder="Escribe el prompt (0/10)"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-0 mb-2 mr-2 text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] font-medium rounded-lg text-sm px-4 py-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className=" w-[100%] max-w-[50vh] mx-auto px-10 sm:px-0">
            <div className=" mt-10 bg-gray-500 rounded-lg shadow-lg py-10 px-10  flex items-center justify-center mx-auto ">
              <img
                className="w-[20vh] h-[20vh]"
                src="/src/assets/img/imagenicono.svg"
                alt="Imagen Icono"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Generar;
