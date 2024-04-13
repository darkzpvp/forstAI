'use client'
import React, { useState } from "react";
import Header_Dos from "../components/Header_Dos";
import { useRouter } from 'next/navigation';
import ResumenCarrito from "../components/Carrito/ResumenCarrito";
import ProgresoCarrito from "../components/Carrito/ProgresoCarrito";
import FormularioCarrito from "../components/Carrito/FormularioCarrito";
import DatosBancarios from "../components/Carrito/DatosBancarios";
import Confirmacion from "../components/Carrito/Confirmacion";

const Page = () => {
  const router = useRouter();

  const [comprado, setComprado] = useState(false);
  const [menu, setMenu] = useState(false);
  const [suscripcion, setSuscripcion] = useState(false);

  const [continuar, setContinuar] = useState<number>(0);

  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
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
      />

      <section className="py-7" onClick={handleCloseMenu}>
        {comprado && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg w-[100%] max-w-xl block mx-auto mb-5">
            <p className="text-lg font-semibold">
              Estado del pedido: Confirmado
            </p>
            <p>
              Tu pedido ha sido correctamente confirmado y está siendo
              procesado.
            </p>
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
