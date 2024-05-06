"use client";
import Header_Dos from "@/app/components/Header_Dos";
import Link from "next/link";
import "react-image-crop/dist/ReactCrop.css";

import React, { useEffect } from "react";
import { useState } from "react";
import Profile from "../CambiarPerfil/Profile";
import { usePathname, useRouter } from "next/navigation";
import Modal from "../CambiarPerfil/Modal";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
const page = () => {

  const Router = usePathname()
  const [pestañaPerfil, setPestañaPerfil] = useState(true);
  const [gestionarPlan, setGestionarPlan] = useState(false);
  const [cancelarPlan, setCancelarPlan] = useState(false);
  const [eliminarCuenta, setEliminarCuenta] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [cambiarPerfil, setCambiarPerfil] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleCancelarPlan = () => {
    setCancelarPlan(!cancelarPlan);
  };
  const handleEliminarCuenta = () => {
    setEliminarCuenta(!eliminarCuenta);
  };
  const handleGestionarPlan = () => {
    setGestionarPlan(!gestionarPlan);
  };
  const { avatarUrl, setAvatarUrl } = useUsuarioContext();

  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc)
  };
  return (
    <>
    
      <aside
        id="logo-sidebar"
        className=" fixed z-30 left-0 w-64 h-screen transition-transform -translate-x-full  border-r  sm:translate-x-0 bg-gray-800 border-gray-700"
        aria-label="Sidebar"
       >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-gray-900">
          <ul className="relative mt-12 space-y-2 text-sm ">
            <div className="  mb-10 text-center px-10 max-w-xl mx-auto">
              <div className=" absolute top-5 left-5 cursor-pointer">
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

          
              <Profile modalOpen={modalOpen} setModalOpen={setModalOpen}/>


            </div>

            <li onClick={() => setPestañaPerfil(true)}>
              <a className=" cursor-pointer flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Perfil
                </span>
              </a>
            </li>
            <li onClick={() => setPestañaPerfil(false)}>
              <a className=" cursor-pointer flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clip-rule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Historial de prompts
                </span>
              </a>
            </li>
            <li>
              <a
                href="/generar"
                className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Generar
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-0 sm:px-4  sm:ml-64">
        <div className=" sm:hidden flex text-sm font-medium text-center  border-b  text-gray-400 border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className=" inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover: hover:text-gray-300"
              >
                Perfil
              </a>
            </li>
            <li className="me-2">
              <a
                onClick={() => setPestañaPerfil(false)}
                href="#"
                className="inline-block p-4  border-b-2  rounded-t-lg active text-blue-500 border-blue-500"
                aria-current="page"
              >
                Historial de prompts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-0 sm:px-4 sm:ml-64">
        <div className="p-4 border-2  border-dashed rounded-lg border-gray-700">
          {pestañaPerfil ? (
            <>
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
                    <p className=" text-gray-200 text-sm">
                      victor1val@hotmail.es
                    </p>
                  </div>
                </div>

                <div className=" border-b border-gray-600 px-5">
                  <div className="  py-2 flex  max-w-sm justify-between  ">
                    <h1 className="text-gray-400 text-sm  ">Contraseña</h1>
                    <input
                      className=" bg-gray-700 rounded-lg w-36 pt-1  px-2 "
                      type="password"
                      placeholder="*****"
                    />
                  </div>
                </div>
                <div className="border-b border-gray-600 px-5">
                  <div className="py-2 flex max-w-sm justify-between items-center">
                    <h1 className="text-gray-400 text-sm ">Nueva contraseña</h1>
                    <input
                      className="bg-gray-700 rounded-lg w-36 pt-1 px-2 flex-shrink-0"
                      type="password"
                      placeholder="*****"
                    />
                  </div>
                </div>
                <div className=" py-3 px-3">
                  <button
                    type="button"
                    className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
                  >
                    Cambiar contraseña
                  </button>{" "}
                </div>
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
                    <h1 className=" text-gray-200 text-sm mt-2">Plan Premium</h1>
                    <p className=" text-gray-400 text-sm ">
                      Pago mensual | Expira el 11/05/2024
                    </p>
                  </div>
                  <div className=" md:flex md:gap-2 hidden px-3   mt-5">
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
                      className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 custom:h-14  h-9 transition ease-in duration-100"
                    >
                      Cambiar suscripción
                    </button>
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
                        <td className="text-gray-200">Plan Premium</td>
                        <td className="text-gray-400">1</td>
                        <td className="text-gray-400">20€</td>
                        <td className="text-gray-400">40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className=" md:hidden flex   justify-end gap-2 text-nowrap  p-3">
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
                </div>
              </div>

              <div className=" bg-gray-800 w-full max-w-4xl rounded-lg mt-5 ">
                <div className=" bg-gray-900 p-5 rounded-t-lg">
                  <h1 className=" text-sm text-gray-200">Dar de baja</h1>
                  <p className=" text-sm text-gray-400">
                    Si no quieres seguir disfrutando de los beneficios, puedes
                    dar de baja tu cuenta
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
                    onClick={handleEliminarCuenta}
                    type="submit"
                    className=" px-3 text-gray-200 bg-red-700 hover:bg-red-800  active:bg-red-900 rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
                  >
                    Dar de baja
                  </button>{" "}
                </div>
              </div>
            </>
          ) : (
            <div className="block  w-full col-span-4 max-w-4xl">
              <div className="relative overflow-x-auto sm:rounded-lg mx-w-xl mt-5 mx-auto">
                <table className="w-full text-sm rounded-lg text-left rtl:text-right  text-gray-400 bg-gray-900 mb-3">
                  <thead className="text-xs  uppercase bg-gray-900 text-gray-400">
                    <tr>
                      <th className="px-6 py-3">Registro de prompts</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className=" border-b bg-gray-800 border-gray-700  ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-gray-300"
                      >
                        Perro sentado en frente de un bosque lleno de vegetación
                        y fauna
                      </th>

                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" border-b bg-gray-800 border-gray-700  ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Familia de acampada disfrutando con sus hijos
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" border-b bg-gray-800 border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Hoy es el primer día del resto de tu vida. ¡Hazlo
                        memorable!
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" border-b bg-gray-800 border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Descubre el mundo lápiz en mano y deja que tus sueños
                        sean tu brújula
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" border-b bg-gray-800 border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Arbol de 100 años en medio de un campo de flores
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" border-b bg-gray-800 border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Muñeco de nieve en un campo de hielo
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className="bg-gray-800 border-b  border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Leon en la sabana africana corriendo detrás de su presa
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" bg-gray-800 border-b  border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Hijo de 10 años jugando en la playa con su perro
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" bg-gray-800 border-b  border-gray-700 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Hijo de 10 años jugando en la playa con su perro
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                    <tr className=" bg-gray-800 rounded-b-lg ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                      >
                        Hijo de 10 años jugando en la playa con su perro
                      </th>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul className="flex items-center -space-x-px h-10 text-base mb-5">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight  border border-e-0  rounded-s-lg   bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight   border    bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight   border    bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 flex items-center justify-center px-4 h-10 leading-tight  border   hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight   border    bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight   border    bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight   border  rounded-e-lg   bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      {gestionarPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={() => setGestionarPlan(false)}
        >
          <div
            className=" bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <form className="max-w-sm mx-auto mb-3">
                <label
                  htmlFor="countries"
                  className="block mb-5  text-lg font-medium  text-white"
                >
                  Selecciona la suscripción
                </label>
                <select
                  id="countries"
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                >
                  <option selected>Elige la suscripción</option>
                  <option value="PB">Plan básico</option>
                  <option value="PE">Plan estándar</option>
                  <option value="PP">Plan Premium</option>
                </select>
              </form>
              <div className=" flex gap-2 justify-center mx-auto">
                <button
                  onClick={() => setGestionarPlan(false)}
                  className="py-2.5 px-5 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                >
                  Cancelar
                </button>
                <button className="text-white bg-[#5D68CC] hover:bg-[#525cb7]   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                  <Link href={"carrito"} legacyBehavior>
                    Continuar
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {cancelarPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={() => setCancelarPlan(false)}
        >
          <div
            className=" bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4  w-12 h-12 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-300 ">
                ¡Estás a un paso de cancelar la suscripción!
              </h3>
              <div className=" flex justify-center mx-auto gap-2">
                <button
                  onClick={() => setCancelarPlan(false)}
                  className="py-2.5 px-5 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                >
                  No, cancela
                </button>
                <button
                  onClick={() => handleCancelarPlan()}
                  className="text-white bg-red-600 hover:bg-red-700   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Sí, cancelar suscripción
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {eliminarCuenta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={() => setEliminarCuenta(false)}
         >
          <div
            className=" bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
           >
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4  w-12 h-12 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className=" max-w-md">
                <h3 className="mb-5 text-lg font-normal text-gray-300 ">
                  ¡Esta opción es irreversible! ¿Estás seguro de que quieres
                  eliminar tu cuenta?
                </h3>
              </div>

              <div className="w-full max-w-72 lg:max-w-80 relative flex justify-center mx-auto">
                <div className="flex items-center rounded-lg bg-gray-700 mb-8 text-gray-300 w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="contraseña"
                    className="w-full text-sm p-2.5 bg-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none"
                    placeholder="Escribe tu contraseña"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 focus:outline-none"
                    onClick={handlePassword}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

   
              <div className=" flex justify-center mx-auto gap-2">
                <button
                  onClick={() => setEliminarCuenta(false)}
                  className="py-2.5 px-5 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                >
                  No, cancela
                </button>
                <button
                  onClick={() => handleEliminarCuenta()}
                  className="text-white bg-red-600 hover:bg-red-700   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Eliminar cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


{modalOpen && (
  <div className="fixed inset-0 z-30 flex items-center justify-center bg-zinc-900 bg-opacity-70">
      <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
</div>  
)}

    </>
  );
};

export default page;
