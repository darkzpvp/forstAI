"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Header_Dos from "../components/Header_Dos";
import ModalAdmin from "../components/Admin/ModalAdmin";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [action, setAction] = useState(false);
  const [responsive, setResponsive] = useState(true);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const [actualizarTabla, setActualizarTabla] = useState(false);

  const handleAction = (e) => {
    e.stopPropagation();
    setAction(!action);
  };

  const handleCloseMenu = () => {
    if (action) {
      setAction(false);
    }
  };

  const handleUserMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const windowResponsive = window.innerWidth >= 768;
      setResponsive(windowResponsive);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [menu, setMenu] = useState(false);
  const [suscripcion, setSuscripcion] = useState(false);

  const notify = () => {
    toast("¡Usuario cambiado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };

  const handleOutsideClick = () => {
    handleCloseMenu();
    handleUserMenu();
  };

  const handleActualizarTabla = (e) => {
    const tdRect = e.target.getBoundingClientRect();
    const position = {
      x: tdRect.left + window.scrollX,
      y: tdRect.bottom + window.scrollY,
    };
    setModalPosition(position);
    setActualizarTabla(!actualizarTabla);
  
    // notify()
  };
  return (
    <div
      className=" bg-gray-700 z-20 overlaymodal "
      onClick={() => {
        handleOutsideClick();
      }}
    >
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        suscripcion={suscripcion}
        setSuscripcion={setSuscripcion}
      />
      <ToastContainer />
      <div className=" overflow-x-auto z-50 bg-gray-900 sm:rounded-lg mx-12 mt-9">
        {responsive ? (
          <div className="flex items-center justify-between py-3 px-4 bg-gray-900 p-5 rounded-t-lg ">
            <div className="w-[25%]">
              <button
                onClick={handleAction}
                className={`${
                  action ? "" : "overlaymodal"
                } inline-flex items-center font-medium rounded-lg text-sm p-2  bg-gray-700 text-gray-400  hover:bg-gray-800 `}
                type="button"
              >
                Acciones
                <svg
                  className="w-2.5 h-2.5 ms-2.5 pointer-events-none "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {action && <ModalAdmin />}
            </div>
            <div>
              <p className=" text-gray-300 font-bold text-xl ">
                Gestión de usuarios
              </p>
            </div>
            <div className="relative   w-[25%] justify-end">
              <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4  text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block p-2 ps-10 text-sm   rounded-lg   bg-gray-700  placeholder-gray-400 text-gray-300 "
                placeholder="Buscar usuarios"
              />
            </div>
          </div>
        ) : (
          <>
            <div className=" bg-gray-900 p-5 rounded-t-lg w-full">
              <div>
                <p className=" text-gray-300 font-bold text-xl mb-5">
                  Gestión de usuarios
                </p>
              </div>
              <div className=" flex justify-between pb-4 ">
                <div className="w-[25%]">
                  <button
                    onClick={handleAction}
                    className={`${
                      action ? "" : "overlaymodal"
                    } inline-flex items-center font-medium rounded-lg text-sm p-2 bg-gray-700 text-gray-400  hover:bg-gray-800 `}
                    type="button"
                  >
                    Acciones
                    <svg
                      className="w-2.5 h-2.5 ms-2.5 pointer-events-none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {action && <ModalAdmin />}
                </div>

                <div className="relative   w-[25%] justify-end mx-24 sm:mx-16">
                  <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4  text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block p-2 ps-10 text-sm   rounded-lg   bg-gray-700  placeholder-gray-400 text-gray-300"
                    placeholder="Buscar usuarios"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <table className="w-full text-sm text-left rtl:text-right  text-gray-400 ">
          <thead className="text-xs  uppercase  bg-gray-800  text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>

              <th scope="col" className="px-6 py-3">
                Rol de usuario
              </th>
              <th scope="col" className="px-6 py-3">
                Suscripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="relative border-b bg-gray-800 border-gray-700  hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">victor1val@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan básico</td>

              <td className="px-6 py-2">
                <svg
                  onClick={(e) => handleActualizarTabla(e)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
               
              </td>
              
            </tr>
            <tr className="relative border-b bg-gray-800 border-gray-700 hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">mario@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan estándar</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>

            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">ana@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan premium</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>
            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">tomas@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Administrador
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan básico</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="  border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">juan@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan estándar</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>
            <tr className=" bg-gray-800 hover: hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">tomas@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan básico</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>
            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-900 transform ease-in duration-75">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4    rounded   bg-gray-700 "
                  />
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="font-normal ">tomas@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Offline
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Administrador
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan básico</td>

              <td className="px-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          className=" flex justify-center py-2"
          aria-label="Page navigation example"
        >
          <ul class="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
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
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
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
   
     

      {/* {actualizarTabla && (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-70">
        <div className=" bg-gray-700 p-6 rounded-lg shadow-xl">
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
            <h3 className="mb-5 text-lg font-normal text-gray-400 ">
              ¡Estás a un paso de comprarlo!
            </h3>

            <button onClick={() => setActualizarTabla(false)} className="py-2.5 px-5 text-sm font-medium   rounded-lg bg-gray-800  border-gray-600 text-gray-300 hover:bg-[#1a212d] active:bg-[#151b25]">
              No, cancela
            </button>
            <button onClick={handleActualizarTabla} className="text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d]  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-3">
              Sí, estoy seguro
            </button>
          </div>
        </div>
      </div>
)} */}


{actualizarTabla && (
         <div className=" modaloverlay absolute  z-50  rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ">
        <ul className=" py-1 text-sm  text-gray-200 ">
          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in"
            >
              Agregar usuario
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in"
            >
              Eliminar usuario
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in "
            >
              Banear usuario
            </a>
          </li>
        </ul>
      </div>
      )}

    </div>
  );
};

export default page;
