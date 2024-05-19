"use client";
import "react-image-crop/dist/ReactCrop.css";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import Modal from "@/app/components/CambiarPerfil/Modal";
import useGetSuscripciones from "@/app/hooks/useSuscripciones";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import { useAuth } from "@/app/hooks/useAuth";
import useCambiarContraseña from "@/app/hooks/useCambiarContraseña";
import AlertaOk from "@/app/components/Home/AlertaOk";
import Alerta from "@/app/components/Generar/Alerta";
import GestionarPlan from "../components/Perfil/GestionarPlan";
import EliminarCuenta from "../components/Perfil/EliminarCuenta";
import CancelarPlan from "../components/Perfil/CancelarPlan";
const page = () => {

  const { getSuscripciones, eliminarSuscripciones } = useGetSuscripciones();
  const Router = usePathname();
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [gestionarPlan, setGestionarPlan] = useState(false);
  const [cancelarPlan, setCancelarPlan] = useState(false);
  const [eliminarCuenta, setEliminarCuenta] = useState(false);


  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleGestionarPlan = () => {
    setGestionarPlan(!gestionarPlan);
  };

  const { user } = useAuth({});

  const [infoSuscripciones, setInfoSuscripciones] = useState([]);
  const [freePrompts, setFreePrompts] = useState([]);

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
console.log(infoSuscripciones);
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState([]);

  const { cambiarContraseña } = useCambiarContraseña();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const contraseña = {
      current_password: passwordRef.current.value,
      new_password: passwordConfirmationRef.current.value,
      new_password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log(contraseña);
    try {
      const datos = await cambiarContraseña(contraseña, setErrores);
      console.log(datos);
      setMensaje(datos.message);
      setTimeout(() => {
        setMensaje("");
      }, 5000);
    } catch (error) {
      console.log(errores);
      console.log(error);
    }
  };
const handleCancelarPlan = () => {
  setCancelarPlan(!cancelarPlan)
}
  return (
    <>
      <div className="p-0 sm:px-4 sm:ml-64">
        <div className="p-4 border-2  border-dashed rounded-lg border-gray-700">
          <>
            <div className=" max-w-4xl mb-0">
              {mensaje && <AlertaOk>{mensaje}</AlertaOk>}
              {errores
                ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)
                : null}
            </div>
            <div className=" bg-gray-800 w-full max-w-4xl rounded-lg ">
              <div className=" mt-5 bg-gray-900 p-5 rounded-t-lg">
                <h1 className=" text-sm text-gray-200">Autenticación</h1>
                <p className=" text-sm text-gray-400">
                  Cambia los datos de tu cuenta para mantenerte seguro
                </p>
              </div>

              <div className=" border-b border-gray-600 px-5">
                <div className="  py-3 flex max-w-sm justify-between  ">
                  <h1 className="text-gray-400 text-sm  ">Email</h1>
                  <p className=" text-gray-200 text-sm">{user?.email}</p>
                </div>
              </div>
              <form onSubmit={(e) => handleChangePassword(e)}>
                <div className=" border-b border-gray-600 px-5">
                  <div className="  py-2 flex  max-w-sm justify-between  ">
                    <h1 className="text-gray-400 text-sm  ">Contraseña</h1>
                    <input
                      className=" bg-gray-700 text-gray-300 rounded-lg w-36 pt-1  px-2 "
                      type="password"
                      placeholder="*****"
                      ref={passwordRef}
                    />
                  </div>
                </div>
                <div className="border-b border-gray-600 px-5">
                  <div className="py-2 flex max-w-sm justify-between items-center">
                    <h1 className="text-gray-400 text-sm ">Nueva contraseña</h1>
                    <input
                      className="bg-gray-700 text-gray-300 rounded-lg w-36 pt-1 px-2 flex-shrink-0"
                      type="password"
                      placeholder="*****"
                      ref={passwordConfirmationRef}
                    />
                  </div>
                </div>
                <div className=" py-3 px-3">
                  <button
                    type="submit"
                    className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
                  >
                    Cambiar contraseña
                  </button>{" "}
                </div>
              </form>
            </div>

            <div className=" bg-gray-800 w-full max-w-4xl rounded-lg mt-5 ">
              <div className=" bg-gray-900 p-5 rounded-t-lg">
                <h1 className=" text-sm text-gray-200">
                  Gestión de la suscripción
                </h1>
                <p className=" text-sm text-gray-400">
                  Mantén tu suscripción al día para seguir disfrutando de los
                  beneficios
                </p>
              </div>

              <div className=" grid grid-cols-2">
                <div className=" p-5">
                  <span className=" text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                    Actualmente
                  </span>
                  <h1 className="text-gray-200 text-sm mt-2">
                    {infoSuscripciones && infoSuscripciones?.tipo
                      ? `Plan ${infoSuscripciones?.tipo}`
                      : "No hay ningún plan contratado"}
                  </h1>{" "}
                  <p className=" text-gray-400 text-sm ">
                    {infoSuscripciones && infoSuscripciones?.fecha_expiracion
                      ? `Pago mensual | Expira el ${infoSuscripciones?.fecha_expiracion}`
                      : ""}
                  </p>
                </div>
                <div className=" md:flex md:gap-2 hidden px-3   mt-5">
                  {infoSuscripciones && infoSuscripciones?.tipo && (
                    <>
                      <button
                        type="submit"
                        onClick={() => setCancelarPlan(true)}
                        className=" px-3 text-gray-200 bg-gray-600 hover:bg-gray-700  border-gray-600 rounded-lg text-sm py-2  h-9 items-center text-center transition ease-in duration-100"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        onClick={handleGestionarPlan}
                        className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 custom:h-14  h-9 transition ease-in duration-100"
                      >
                        Cambiar suscripción
                      </button>
                    </>
                  )}
                  {!infoSuscripciones?.tipo && (
                    <button
                      type="submit"
                      onClick={handleGestionarPlan}
                      className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 custom:h-14  h-9 transition ease-in duration-100"
                    >
                      Comprar plan
                    </button>
                  )}
                </div>
              </div>
              <div className=" p-5 border-t border-gray-600">
                <table className="w-full max-w-md text-sm font-normal">
                  <thead>
                    <tr>
                      <th className="text-gray-400 text-left font-normal">
                        Descripción
                      </th>
                      <th className="text-gray-400 text-left font-normal">
                        Cantidad
                      </th>
                      <th className="text-gray-400 text-left font-normal">
                        Precio
                      </th>
                      <th className="md:flex hidden text-gray-400 text-left font-normal whitespace-nowrap">
                        Prompts disponibles
                      </th>
                      <th className="flex md:hidden text-gray-400 text-left font-normal">
                        Prompts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-200">
                        {infoSuscripciones && infoSuscripciones?.tipo
                          ? `Plan ${infoSuscripciones?.tipo}`
                          : "Plan de prueba"}
                      </td>
                      <td className="text-gray-400">{"1"}</td>
                      <td className="text-gray-400">
                        {infoSuscripciones && infoSuscripciones?.precio
                          ? `${infoSuscripciones?.precio}€`
                          : "0€"}
                      </td>
                      <td className="text-gray-400">
                        {infoSuscripciones && infoSuscripciones?.prompts
                          ? infoSuscripciones?.prompts
                          : freePrompts}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" md:hidden flex   justify-end gap-2 text-nowrap  p-3">
                {infoSuscripciones && infoSuscripciones?.tipo && (
                  <>
                    <button
                      type="submit"
                      onClick={handleCancelarPlan}
                      className=" px-3 text-gray-200 bg-gray-600 hover:bg-gray-700  border-gray-600 rounded-lg text-sm py-2  h-9 items-center text-center transition ease-in duration-100"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      onClick={handleGestionarPlan}
                      className=" px-3 text-nowrap text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2  h-9 transition ease-in duration-100"
                    >
                      Cambiar suscripción
                    </button>
                  </>
                )}
                {!infoSuscripciones?.tipo && (
                  <button
                    type="submit"
                    onClick={handleGestionarPlan}
                    className=" px-3 text-nowrap text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2  h-9 transition ease-in duration-100"
                  >
                    Comprar plan
                  </button>
                )}
              </div>
            </div>

            <div className=" bg-gray-800 w-full max-w-4xl rounded-lg mt-5 ">
              <div className=" bg-gray-900 p-5 rounded-t-lg">
                <h1 className=" text-sm text-gray-200">Dar de baja</h1>
                <p className=" text-sm text-gray-400">
                  Si no quieres seguir disfrutando de los beneficios, puedes dar
                  de baja tu cuenta
                </p>
              </div>
              <div className=" max-w-lg px-5">
                <p className=" text-gray-400 mt-5 mb-3 text-sm">
                  ¡Atención! Si das de baja no podrás tener acceso nunca más a
                  esta cuenta, y perderás todas las suscripciones que tengas
                </p>
              </div>
              <div className=" py-3 px-3">
                <button
                  onClick={() => setEliminarCuenta(true)}
                  type="submit"
                  className=" px-3 text-gray-200 bg-red-700 hover:bg-red-800  active:bg-red-900 rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
                >
                  Dar de baja
                </button>{" "}
              </div>
            </div>
          </>
        </div>
      </div>
      <GestionarPlan gestionarPlan={gestionarPlan} setGestionarPlan={setGestionarPlan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>

<CancelarPlan cancelarPlan={cancelarPlan} setCancelarPlan={setCancelarPlan}/>

     <EliminarCuenta eliminarCuenta={eliminarCuenta} setEliminarCuenta={setEliminarCuenta} />

 
    </>
  );
};

export default page;
