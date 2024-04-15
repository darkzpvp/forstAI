'use client'
import { useState } from "react";

import generarImagenes from "../data/generarImagenes.json";
import Header_Dos from "../components/Header_Dos";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
const Generar = () => {
  const [menu, setMenu] = useState(false);
  const [suscripcion, setSuscripcion] = useState(false);
 
const {user, error} = useAuth({middleware: 'auth'})
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
  };
  return (
    <header className="fixed z-50 w-full bg-zinc-800">
      <Header_Dos menu={menu} setMenu={setMenu} suscripcion={suscripcion} setSuscripcion={setSuscripcion}/>
      <section
        className="bg-gray-700 h-[92.2vh] flex justify-center body"
        onClick={handleCloseMenu}
      >
        <div className="flex relative ">
          <div className="absolute flex gap-2 mx-auto animate-marquee">
            {[...generarImagenes.images, ...generarImagenes.images].map(
              (imagen, index) => (
                <div
                  key={index}
                  className="mb-5 md:w-40 md:h-40 w-28 h-28 cursor-pointer relative"
                >
                  <div className="relative">
                    <Image
                    width={200}
                    height={200}
                      className="rounded-lg aspect-square "
                      src={imagen.url}
                      alt={imagen.title}
                     
                    />

                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg">
                      <p className=" absolute text-gray-200 flex bottom-2 left-2 text-sm">
                        {imagen.title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
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
                src="/img/generar/imagenicono.svg"
                alt="Imagen Icono"
              />
            </div>
            <button
              type="submit"
              className="flex mt-2 justify-center mx-auto text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] font-medium rounded-lg text-sm px-4 py-2"
            >
              Descargar
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
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Generar;
