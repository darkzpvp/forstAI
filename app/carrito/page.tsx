'use client'
import React, { useState, useEffect } from "react";
import Header_Dos from "../components/Header_Dos";
import { useRouter } from 'next/navigation';
import ResumenCarrito from "../components/Carrito/ResumenCarrito";
import ProgresoCarrito from "../components/Carrito/ProgresoCarrito";
import FormularioCarrito from "../components/Carrito/FormularioCarrito";
import DatosBancarios from "../components/Carrito/DatosBancarios";
import Confirmacion from "../components/Carrito/Confirmacion";

const Page = () => {


  const router = useRouter();
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);

  const [comprado, setComprado] = useState(false);
  const [menu, setMenu] = useState(false);
  const [suscripcion, setSuscripcion] = useState(false);

  const [continuar, setContinuar] = useState<number>(1);

  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
    if(menuHamburguesa){
      setMenuHamburguesa(false);
    }
  };

  if (comprado) {
   setTimeout(() => {
       setComprado(false);
     router.push("/generar");
    }, 5000);
  }

  return (
    <div className="bg-gray-700 h-full">
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        suscripcion={suscripcion}
        setSuscripcion={setSuscripcion}
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />

      <section className="py-7" onClick={handleCloseMenu}>
        {comprado && (
          <div className="flex justify-center ">
     <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">¡Compra con éxito!</span> Ya puede comenzar a generar imágenes.
      </div>
     </div>
          </div>
  
        )}
        <ProgresoCarrito continuar={continuar} setContinuar={setContinuar} />

        <div className="w-[100%] max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-5 gap-5">
            {continuar === 1 && (
              <FormularioCarrito />
            )}
            {continuar === 2 && (
              <DatosBancarios />
            )}
            {continuar === 3 && (
              <Confirmacion />
            )}
            <ResumenCarrito
              continuar={continuar}
              setContinuar={setContinuar}
              setComprado={setComprado}
              comprado={comprado}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
