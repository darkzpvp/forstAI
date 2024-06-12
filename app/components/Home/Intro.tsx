import Image from "next/image";
import React from "react";


const Intro = () => {
  return (
    <section id="intro" className=" flex flex-col md:flex-row max-w-5xl md:gap-10 mx-auto px-10">
      <div className="flex flex-col justify-center items-center w-[100%] max-w-md mx-auto my-10 ">
        <div className=" flex">
          <h6 className="text-4xl text-sky-600 font-black">
            Genera más y mejor
            <span className="text-gray-200 font-black text-4xl ">
             {' '} gracias a nuestra excelente calidad
            </span>
          </h6>
        </div>

        <p className="block text-gray-400 mt-2">
          Nuestro generador de imágenes usa la última tecnología, gracias a
          nuestros poderosos metadatos que entrenamos a diario desde el
          laboratorio de Huggingface.{" "}
        </p>

        <div className="mt-5 max-w-md flex flex-wrap">
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">Calidad</span>
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">HD</span>
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-red-900 text-red-300">Soporte</span>
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">Comunidad</span>
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-yellow-900 text-yellow-300">Crecimiento</span>
          <span className=" text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-indigo-900 text-indigo-300">Velocidad</span>
        </div>
      </div>

      <div className="md:my-10 my-5 rounded-lg mx-auto flex justify-center items-center ">
        <Image
        width={400}
        height={400}
          className="rounded-lg"
          src={"/img/home/about4.jpg"}
          alt="About"
        />
      </div>
    </section>
  );
};

export default Intro;
