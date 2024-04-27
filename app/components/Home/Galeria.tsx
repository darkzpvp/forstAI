import React from 'react'
import Image from 'next/image'
import Modal from './Modal'
import galeria from "../../../app/data/galeria.json";
import { Imagen } from '@/app/types';
interface GaleriaProps {
    modal: boolean;
    imagen: Imagen
    setModal: (value: boolean) => void;
    setImagen: (imagen: Imagen) => void
}

const Galeria = ({modal, setModal, imagen, setImagen} : GaleriaProps) => {
    const handleGaleria = (imagen : Imagen) => {
        setModal(true);
        setImagen(imagen);
      };
  return (
    <section id="galeria">
    <h1 className="flex justify-center items-center mt-3 text-gray-300  font-bold text-3xl">
      Galería
    </h1>
    <p className="flex justify-center items-center mt-2 text-gray-400  text-center mb-5">
      Algunos de nuestros prompts...
    </p>
    <div className="w-full max-w-5xl columns-2 md:columns-3 gap-5 mx-auto px-5">
      {galeria.images.map((imagen) => (
        <div key={imagen.id} className="mb-5 cursor-pointer relative">
          <a onClick={() => handleGaleria(imagen)}>
            <Image
              width={1920}
              height={1080}
              className="rounded-lg relative"
              src={`/img/galeria/${imagen.url}`}
              alt={imagen.title}
            />

            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg">
              <p className=" absolute text-gray-200 flex bottom-2 left-2 text-sm">
                {imagen.title}
              </p>
            </div>
          </a>
        </div>
      ))}

      <Modal
        modal={modal}
        setModal={setModal}
        imagen={imagen}
       
      />
    </div>
  </section>
  )
}

export default Galeria