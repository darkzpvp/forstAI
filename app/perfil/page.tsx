// @ts-nocheck

"use client";
import "react-image-crop/dist/ReactCrop.css";
import React, { useEffect } from "react";
import { useState } from "react";
import useGetSuscripciones from "@/app/hooks/useSuscripciones";
import AlertaOk from "@/app/components/Home/AlertaOk";
import GestionarPlan from "../components/Perfil/GestionarPlan";
import EliminarCuenta from "../components/Perfil/EliminarCuenta";
import CancelarPlan from "../components/Perfil/CancelarPlan";
import CambiarCredenciales from "../components/Perfil/CambiarCredenciales";
import GestionarSuscripcion from "../components/Perfil/GestionarSuscripcion";
import DarBajaCuenta from "../components/Perfil/DarBajaCuenta";
import useUsuarioContext from "../hooks/useUsuarioContext";
import Profile from "../components/CambiarPerfil/Profile";
import NavegacionMobile from "../components/Perfil/NavegacionMobile";
const Page = () => {
  const { getSuscripciones } = useGetSuscripciones();
  const [cancelarPlan, setCancelarPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [eliminarCuenta, setEliminarCuenta] = useState(false);
  const [infoSuscripciones, setInfoSuscripciones] = useState([]);
  const [freePrompts, setFreePrompts] = useState([]);
  const { mensaje, setModalOpen, obtenerAvatar } =
    useUsuarioContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getSuscripciones();
        setInfoSuscripciones(datos);
        setFreePrompts(datos.free_prompts);
      } catch (error) {
        console.error(
          "Error al obtener la información de las suscripciones:",
          error
        );
      }
    };
    obtenerAvatar()
    fetchData();
  }, []);

  const [gestionarPlan, setGestionarPlan] = useState(false);

  const handleGestionarPlan = () => {
    setGestionarPlan(!gestionarPlan);
  };
  const myStyles = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.534), rgba(17, 24, 39, 0.5)), url('/img/admin/layeredUserr.jpg')`,
  };

  return (
    <>
      <div className="p-0 sm:px-4 sm:ml-64">
        <div
          style={myStyles}
          className="relative h-[21rem] overflow-hidden bg-cover bg-center flex items-center justify-center sm:hidden "
         >
          <Profile setModalOpen={setModalOpen} />
        </div>
        <div className="p-0 sm:px-4  sm:ml-64">
          <NavegacionMobile />
        </div>
        <div className="p-4 border-2  border-dashed rounded-lg border-gray-700">
          <>
            <div className=" max-w-4xl mb-0">
              {mensaje && <AlertaOk>{mensaje}</AlertaOk>}
            </div>

            <CambiarCredenciales />

            <GestionarSuscripcion
              infoSuscripciones={infoSuscripciones}
              freePrompts={freePrompts}
              gestionarPlan={gestionarPlan}
              setGestionarPlan={setGestionarPlan}
              handleGestionarPlan={handleGestionarPlan}
              cancelarPlan={cancelarPlan}
              setCancelarPlan={setCancelarPlan}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />

            <DarBajaCuenta setEliminarCuenta={setEliminarCuenta} />
          </>
        </div>
      </div>
      <GestionarPlan
        gestionarPlan={gestionarPlan}
        setGestionarPlan={setGestionarPlan}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />

      <CancelarPlan
        cancelarPlan={cancelarPlan}
        setCancelarPlan={setCancelarPlan}
      />

      <EliminarCuenta
        eliminarCuenta={eliminarCuenta}
        setEliminarCuenta={setEliminarCuenta}
      />
    </>
  );
};

export default Page;
