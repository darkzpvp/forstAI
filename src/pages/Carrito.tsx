import React from "react";
import Header_Dos from "../components/Header_Dos";
import { useState } from "react";
import paises from "../data/paises.json"
const Carrito = () => {
  const [menu, setMenu] = useState(false);
  const [suscripcion, setSuscripcion] = useState(false);
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
  };
  return (
    <div className="fixed z-50 w-full bg-zinc-800">

      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        suscripcion={suscripcion}
        setSuscripcion={setSuscripcion}
      />

      <section
        className=" bg-gray-700 h-screen py-7"
        onClick={handleCloseMenu}
      >
        <div className=" flex justify-center  mx-auto w-[100%] max-w-3xl mb-10">

                    <ol className="flex items-center w-full text-sm font-medium text-center  text-gray-300 sm:text-base">
          <li className="flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-500">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2  after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            
                xmlns="http://www.w3.org/2000/svg"
                fill="#5D68CC"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Información{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Personal</span>
            </span>
          </li>
          <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2  after:text-gray-500">
              <span className="me-2">2</span>
              Datos{" "}
              <span className="hidden sm:inline-flex sm:ms-2">bancarios</span>
            </span>
          </li>
          <li className="flex items-center">
            <span className="me-2">3</span>
            Confirmación
          </li>
        </ol>
        </div>




        <div className=" w-[100%] max-w-6xl mx-auto ">
            <h1 className="text-gray-300 text-xl font-bold mb-5">Tu carrito</h1>
            <p className=" text-gray-300 text-sm mb-5">1 artículos</p>

            <div className=" grid grid-cols-5 gap-5">
            <div className=" col-span-3">
           
<form className=" border border-gray-500 px-5 py-5 rounded-lg">
    <div className="grid gap-6 md:grid-cols-2">
        <div>
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-300">Nombre</label>
            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="Víctor" required />
        </div>
     
        <div>
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-300">Apellidos</label>
            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="Valverde" required />
        </div>
        <div>
            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-300">Número de teléfono</label>
            <input type="tel" id="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="654958823" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
      
      <div>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-300">Selecciona tu país</label>

      <select defaultValue={`ES`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  ">
          <option value="" disabled>--Selecciona un país--</option>
            {paises.map(pais => (
                <option key={pais.code} value={pais.code}>{pais.name}</option>
            ))}
        </select>
      </div>
   
     
      
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300">Población</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="Málaga" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300">Provincia</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="Málaga" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-300">NIF / NIE</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-400  " placeholder="44332255G" required />
        </div>
    </div>

   
</form>

            </div>
            <div className=" col-span-2 px-5 py-5 border border-gray-500 rounded-lg h-72">
            <h1 className="text-gray-300 text-xl font-bold mb-5">Resumen</h1>
            <div className="flex">
            <p className="text-gray-300 mb-5 w-[74%]">Suscripción</p>
            <p className=" flex text-gray-300 font-bold w-[26%]">Plan Premium</p>

            </div>
            <div className="flex">
            <p className="text-gray-300 mb-5 w-full">Subtotal artículos</p>
            <p className="text-gray-300 mb-5">15€</p>
            
            </div>
            <div className="flex items-center">
            <p className="text-gray-300 mb-5 w-full">Total</p>
            <p className="text-gray-300 mb-5 text-3xl font-bold ">15€</p>
            </div>
            <button type="button" className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100 w-full">
              Guardar y continuar
            </button>
            </div>
            </div>
        </div>
      </section>

      
      </div>
  );
};

export default Carrito;
