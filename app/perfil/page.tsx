"use client";
import "react-image-crop/dist/ReactCrop.css";
import React, { useEffect } from "react";
import { useState } from "react";
import useGetSuscripciones from "@/app/hooks/useSuscripciones";
import AlertaOk from "@/app/components/Home/AlertaOk";
import Alerta from "@/app/components/Generar/Alerta";
import GestionarPlan from "../components/Perfil/GestionarPlan";
import EliminarCuenta from "../components/Perfil/EliminarCuenta";
import CancelarPlan from "../components/Perfil/CancelarPlan";
import CambiarCredenciales from "../components/Perfil/CambiarCredenciales";
import GestionarSuscripcion from "../components/Perfil/GestionarSuscripcion";
import DarBajaCuenta from "../components/Perfil/DarBajaCuenta";
import useUsuarioContext from "../hooks/useUsuarioContext";
const page = () => {
  const { getSuscripciones } = useGetSuscripciones();
  const [cancelarPlan, setCancelarPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [eliminarCuenta, setEliminarCuenta] = useState(false);
  const [infoSuscripciones, setInfoSuscripciones] = useState([]);
  const [freePrompts, setFreePrompts] = useState([]);
const {errores, setErrores, mensaje, setMensaje} = useUsuarioContext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getSuscripciones();
        setInfoSuscripciones(datos?.[0]);
        setFreePrompts(datos.free_prompts);
      } catch (error) {
        console.error(
          "Error al obtener la información de las suscripciones:",
          error
        );
      }
    };

    fetchData();
  }, []);

  const [gestionarPlan, setGestionarPlan] = useState(false);

  const handleGestionarPlan = () => {
    setGestionarPlan(!gestionarPlan);
  };

  return (
    <>
      <div className="p-0 sm:px-4 sm:ml-64">
        <div className="p-4 border-2  border-dashed rounded-lg border-gray-700">
          <>
            <div className=" max-w-4xl mb-0">
              {mensaje && <AlertaOk>{mensaje}</AlertaOk>}

            </div>

            <CambiarCredenciales
      
            
            />

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

export default page;
