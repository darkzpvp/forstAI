import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import generarImagenes from "../data/generarImagenes.json";

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
    <header className="fixed z-50 w-full bg-zinc-800">
    <div className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5">
      
          <button className="w-[25%]">
            <Link to="/generar">
              <img
                className="w-[100%] min-w-12 max-w-12 cursor-pointer"
                src="/src/assets/img/prueba.png"
                alt="..."
              />
            </Link>
          </button>

          

          <div>
          <Link to="/">
            <a className=" text-gray-300 cursor-pointer">Home</a>
            </Link>
          </div>
          <div className="flex  items-center w-[25%]  justify-end">
            <button
              type="button"
              onClick={handleMenu}
              className="flex text-sm bg-gray-800 rounded-full"
            
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

      {menu && (
        <>
        <div className=" flex justify-end 2xl:px-60 xl:px-20 lg:px-14">
<div className="absolute z-50 text-base divide-y rounded-b-lg shadow bg-zinc-800 divide-gray-600 w-full block sm:max-w-48 px-5 ">
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
          </div>
        </>
      )}

      <section
        className="bg-gray-700 h-[92.2vh] flex justify-center"
        onClick={handleCloseMenu}
      >
<div className="flex relative ">
  <div className="absolute flex gap-2 mx-auto animate-marquee">
    {[...generarImagenes.images, ...generarImagenes.images].map((imagen, index) => (
      <div key={index} className="mb-5 md:w-40 md:h-40 w-28 h-28 cursor-pointer relative">
        <div className="relative">
          <img
            className="rounded-lg aspect-square "
            src={imagen.url}
            alt={imagen.title}
          />
         
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg">
          <p className=" absolute text-gray-200 flex bottom-2 left-2 text-sm">{imagen.title}</p>
          </div>
        </div>
       
      </div>
    ))}
  </div>
</div>

      
        <div className="block md:flex items-center px-5 justify-center mt-32 md:mt-0">
          <div className=" w-full md:w-[100%] mx-auto min-w-[50vh] px-10 text-center md:text-left">
            <h1 className="md:text-5xl font-bold text-gray-300 mb-5 text-2xl">
              Genera con Stable Diffusion
            </h1>
            <p className="text-gray-400 md:text-lg text-md">
            Empieza a generar imagenes increíbles ahora mismo



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
            <div className=" md:mt-10 mt-5 bg-gray-500 rounded-lg shadow-lg py-10 px-10  flex items-center justify-center mx-auto">
              <img
                className="w-[20vh] h-[20vh] "
                src="/src/assets/img/imagenicono.svg"
                alt="Imagen Icono"
              />
            </div>
            <button
                  type="submit"
                  className="flex mt-2 justify-center mx-auto text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] font-medium rounded-lg text-sm px-4 py-2"
                >
                  Descargar
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
</svg>

                </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Generar;
