"use client";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Header_Dos from "../components/Header_Dos";
import ModalAdmin from "../components/Admin/ModalAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const page = () => {
  const [action, setAction] = useState<boolean>(false);
  const [responsive, setResponsive] = useState<boolean>(true);
  const [clickModificar, setClickModificar] = useState<boolean>(false);
  const [clickEliminar, setClickEliminar] = useState<boolean>(false);
  const [clickBanear, setClickBanear] = useState<boolean>(false);
  const [menuHamburguesa, setMenuHamburguesa] = useState<boolean>(false);

  const [actualizarTabla, setActualizarTabla] = useState<boolean>(false);

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAction(!action);
  };

  const handleCloseMenu = () => {
    if (action) {
      setAction(false);
    }
    // if(actualizarTabla){
    
    //   setActualizarTabla(false)
    // }
  };

  const handleUserMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
    if(menuHamburguesa){
      setMenuHamburguesa(false)
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

  const notifyModificar = () => {
    toast("¡Usuario cambiado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };
  const notifyEliminar = () => {
    toast("¡Usuario eliminado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };
  const notifyBanear = () => {
    toast("¡Usuario baneado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };
  const handleActualizarMenu = () => {
    if (actualizarTabla) {
      setActualizarTabla(false);
      
    }
  };
  const handleOutsideClick = () => {
    handleCloseMenu();
    handleUserMenu();
    handleActualizarMenu()
  };

  const handleActualizarTabla = () => {
    setActualizarTabla(!actualizarTabla);
   
    }
    const modificarUsuario = () => {
      setClickModificar(true);
      setActualizarTabla(false)
      }
      const handleEliminar = () => {
        setClickEliminar(true);
       
        }
        const handleBanear = () => {
          setClickBanear(true);
         
          }

          const handleSubmitModificar = () => {
            setClickModificar(false);
            notifyModificar()
            }
          const handleSubmitEliminar = () => {
            setClickEliminar(false);
            notifyEliminar()
            }
            const handleSubmitBanear = () => {
              setClickBanear(false);
              notifyBanear()
              }

  return (
    <div
      className=" bg-gray-700 z-20 overlaymodal h-screen "
      onClick={() => {
        handleOutsideClick();
      }}
    >
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        suscripcion={suscripcion}
        setSuscripcion={setSuscripcion}
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />
      <ToastContainer />



<div className=" sm:flex block px-8 xl:px-0  gap-4 justify-center w-full max-w-7xl mx-auto   ">
  <div class="max-w-md  mx-auto w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-4 ">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">100</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Usuarios esta semana</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>

</div>





<div class="max-w-md   mx-auto  w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-4">
  <div class="flex justify-between  pb-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Beneficio</dt>
      <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">2000€</dd>
    </dl>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        Profit 10%
      </span>
    </div>
  </div>


    
</div>



<div class="max-w-md  mx-auto  w-full bg-white rounded-lg shadow dark:bg-gray-800 mt-4">
  <div class="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">450$</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Suscripciones esta semana</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  </div>
 
</div>
      






<div className=" flex justify-center mx-8">
  <div className=" overflow-x-auto z-40 bg-gray-800 sm:rounded-lg  mt-4 w-full max-w-7xl mb-10">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                <div className="w-[25%] z-40">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
            <tr className=" z-40 relative border-b bg-gray-800 border-gray-700  hover:bg-gray-900 transform ease-in duration-75">
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
                  <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                    Usuario
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">Plan básico</td>

              <td className="px-6 py-2">
                <svg
                  onClick={(e) => handleActualizarTabla()}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                {actualizarTabla && (
         <div className=" modaloverlay absolute   z-40  rounded-lg shadow w-40 bg-gray-700 divide-gray-600 " >
        <ul className=" py-1 text-sm  text-gray-200 ">
          <li onClick={() => modificarUsuario()}>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in"
            >
              Modificar usuario
            </a>
          </li>

          <li onClick={() => handleEliminar()}>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in"
            >
              Eliminar usuario
            </a>
          </li>
          <li onClick={() => handleBanear()}>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in "
            >
              Banear usuario
            </a>
          </li>
          <li >
            <a
              href="/admin/user"
              className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in "
            >
             Ver detalles del usuario
            </a>
          </li>
        </ul>
       </div>
       )}
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
                  <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <span className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <span className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight  border border-e-0  rounded-s-lg hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight  border  hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight  border  hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
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
                className="flex items-center justify-center px-4 h-10 leading-tight  border  hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight  border  hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight  border  rounded-e-lg hover:  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
</div>
    
   
     

      {/* {actualizarTabla && (
   
)} */}


{clickModificar && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70" onClick={() => setClickModificar(false)}>
 <div className=" bg-gray-800 p-6 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
 <form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-white">Nombre</label>
            <input type="text" id="first_name" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Marcos" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium  text-white">Correo electrónico</label>
            <input type="email" id="last_name" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="marcos@correo.com" required />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium  text-white">Contraseña</label>
            <input type="password" id="company" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="******" required />
        </div>  
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium  text-white">Repite contraseña</label>
            <input type="password" id="company" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="******" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium  text-white">Prompts gratuitos</label>
            <input type="number" id="phone" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="12345678" pattern="[0-9]{3}[0-9]{2}[0-9]{3}" required />
        </div>
        <div className="">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium  text-white">Selecciona la suscripción</label>
  <select id="countries" className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  ">
    <option selected>Selecciona la suscripción</option>
    <option value="US">Plan básico</option>
    <option value="CA">Plan estándar</option>
    <option value="FR">Plan Premium</option>
  </select>
</div>
        <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4    rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-gray-300">Admin</label>
</div>
    </div>
</form>
<div className=" flex justify-center mx-auto gap-2">
      <button onClick={() => setClickModificar(false)} className="py-2.5 px-5 text-sm font-medium   rounded-lg bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  ">
       No, cancela
     </button>
     <button onClick={() => handleSubmitModificar()} className="text-white bg-[#5D68CC] hover:bg-[#525cb7]   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ">
       Sí, estoy seguro
     </button>
</div>
 
   </div>
 </div>

)}








{clickBanear   && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70" onClick={() => setClickBanear(false)}>
 <div className=" bg-gray-800 p-6 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
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
       ¡Estás a un paso de banearlo!
     </h3>
<div className=" flex justify-center mx-auto gap-2">
   <button onClick={() => setClickBanear(false)} className="py-2.5 px-5 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  ">
       No, cancela
     </button>
     <button onClick={() => handleSubmitBanear()} className="text-white bg-[#5D68CC] hover:bg-[#525cb7]   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
       Sí, estoy seguro
     </button>
</div>
    
   </div>
 </div>
</div>
)}




{clickEliminar   && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70" onClick={() => setClickEliminar(false)}>
 <div className=" bg-gray-800 p-6 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
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
       ¡Estás a un paso de eliminarlo!
     </h3>
<div className=" flex gap-2 justify-center mx-auto">
    <button onClick={() => setClickEliminar(false)} className="py-2.5 px-5 text-sm font-medium   rounded-lg bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  ">
       No, cancela
     </button>
     <button onClick={() => handleSubmitEliminar()} className="text-white bg-[#5D68CC] hover:bg-[#525cb7]   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
       Sí, estoy seguro
     </button>
</div>
   
   </div>
 </div>
</div>
)}
    </div>
  );
};

export default page;
