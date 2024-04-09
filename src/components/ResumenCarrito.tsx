import React, { useState, useEffect } from 'react';
import ModalCarrito from './ModalCarrito';

const ResumenCarrito = ({ continuar, setContinuar, comprado, setComprado }) => {
  const [enviar, setEnviar] = useState(false);
  const [modal, setModal] = useState(false);
  const handleContinuar = () => {
    if (continuar > 2) return;
    setContinuar(continuar + 1);
   
  };
const handlePagar = () => {
    setModal(true)
    if (continuar > 2) return;
    setContinuar(continuar + 1);
   

}

  useEffect(() => {
    if (continuar === 3) {
      setEnviar(true);
    } else {
        setEnviar(false)
    }
  }, [continuar]);

  return (
  
    <div className=" md:col-span-2  shadow-lg bg-gray-800 px-5 py-5 rounded-lg h-72 flex flex-col justify-center" >
      <h1 className="text-gray-300 text-xl font-bold mb-5" >Resumen</h1>
      <div className="flex">
        <p className="text-gray-300 mb-5 w-[100%]">Suscripción</p>
        <p className="flex text-gray-300 font-bold whitespace-nowrap">
          Plan Premium
        </p>
      </div>
      <div className="flex">
        <p className="text-gray-300 mb-5 w-full">Subtotal artículos</p>
        <p className="text-gray-300 mb-5">15€</p>
      </div>
      <div className="flex items-center">
        <p className="text-gray-300 mb-5 w-full">Total</p>
        <p className="text-gray-300 mb-5 text-3xl font-bold ">15€</p>
      </div>
      {enviar ? (
  <button
    type="button"
    className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100 w-full"
    onClick={handlePagar}
  >
    Pagar ahora
  </button>
) : (
  <button
    type="button"
    className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100 w-full"
    onClick={handleContinuar}
  >
    Guardar y continuar
  </button>
)}
    

   <ModalCarrito modal={modal} setModal={setModal} comprado={comprado} setComprado={setComprado}/>

   
</div>









  );
};

export default ResumenCarrito;
