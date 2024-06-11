// @ts-nocheck

"use client";
import "react-image-crop/dist/ReactCrop.css";
import React, { useEffect, useState } from "react";
import useGetSuscripciones from "@/app/hooks/useSuscripciones";
import AlertaOk from "@/app/components/Home/AlertaOk";
import GestionarPlan from "../components/Perfil/GestionarPlan";
import EliminarCuenta from "../components/Perfil/EliminarCuenta";
import CancelarPlan from "../components/Perfil/CancelarPlan";
import CambiarCredenciales from "../components/Perfil/CambiarCredenciales";
import GestionarSuscripcion from "../components/Perfil/GestionarSuscripcion";
import DarBajaCuenta from "../components/Perfil/DarBajaCuenta";
import Profile from "../components/CambiarPerfil/Profile";
import NavegacionMobile from "../components/Perfil/NavegacionMobile";
import Link from "next/link";
import useSWR, { mutate } from "swr";
import useCambiarFotoPerfil from "@/app/hooks/useCambiarFotoPerfil";

const Fetcher = async () => {
  const { getSuscripciones } = useGetSuscripciones();

  try {
    const datos = await getSuscripciones();
    
    return datos;
  } catch (error) {
    console.error("Error al obtener la información de las suscripciones:", error);
    throw error;
  }
};

const Page = () => {
  const [cancelarPlan, setCancelarPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [eliminarCuenta, setEliminarCuenta] = useState(false);
  const [infoSuscripciones, setInfoSuscripciones] = useState([]);
  const [freePrompts, setFreePrompts] = useState([]);
  const [mensaje, setMensaje] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const { cambiarFoto, recibirFoto } = useCambiarFotoPerfil();

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_LARAVEL}/api/suscripciones`, Fetcher);

  useEffect(() => {
    if (data) {
      setInfoSuscripciones(data);
      setFreePrompts(data.free_prompts);
    }
  }, [data]);

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
          className="relative h-[21rem] overflow-hidden bg-cover bg-center flex items-center justify-center sm:hidden"
        >
          <div className="absolute cursor-pointer sm:hidden left-5 top-20 p-1 text-sm rounded-lg ease-in duration-100 text-gray-400 hover:bg-gray-600 active:bg-gray-700">
            <Link href={`/generar`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <Profile setModalOpen={setModalOpen} avatarUrl={avatarUrl} cambiarFoto={cambiarFoto} />
        </div>
        <div className="p-0 sm:px-4 sm:ml-64">
          <NavegacionMobile />
        </div>
        <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">
          <>
            <div className="max-w-4xl mb-0">
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
