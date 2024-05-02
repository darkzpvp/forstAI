import React from "react";
import Image from "next/image";
import intro from "../../../app/data/intro.json";

const Intro = () => {
  return (
    <section id="intro" className="sm:grid sm:grid-cols-9 block mx-auto px-10">
      <div className="flex flex-col justify-center items-center max-w-md col-span-5 mx-auto xl:col-start-3 xl:col-end-6 ">
        <div className="sm:pt-5 pt-0 flex mt-10 sm:mt-0 ">
          <h1 className="text-4xl text-sky-600 font-black">
            Genera más y mejor
            <span className="text-gray-200 font-black text-4xl ">
             {' '} gracias a nuestra excelente calidad
            </span>
          </h1>
        </div>

        <p className="block text-gray-400 mt-2">
          Nuestro generador de imágenes usa la última tecnología, gracias a
          nuestros poderosos metadatos que entrenamos a diario desde el
          laboratorio de Huggingface.{" "}
        </p>

        <div className="mt-5 max-w-md flex flex-wrap">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Calidad</span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HD</span>
          <span className="bg-red-100 text-red-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Soporte</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Comunidad</span>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Crecimiento</span>
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Velocidad</span>
        </div>
      </div>

      <div className="my-10 rounded-lg col-span-4 mx-auto  flex justify-center items-center ">
        <img
          className="w-[100%] lg:max-w-md max-w-sm rounded-lg"
          src={"/img/home/about4.jpg"}
          alt="About"
        />
      </div>
    </section>
  );
};

export default Intro;
