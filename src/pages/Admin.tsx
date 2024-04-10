import React, { useEffect, useState } from "react";
import setBodyColor from "../setBodyColor";
import Header_Dos from "../components/Header_Dos";
import ModalAdmin from "../components/ModalAdmin";

const Admin = () => {
  const [action, setAction] = useState(false);
  setBodyColor({ color: "#374151" });
  const handleAction = () => {
    setAction(!action);
  };

    // Verificar si el elemento clicado es el overlay
 
    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('overlaymodal')) {
            setAction(true);
        } else {
            setAction(false);
           setMenu(false)
        }
    };
    const [menu, setMenu] = useState(false);
    const [suscripcion, setSuscripcion] = useState(false);
  
  return (
    <div className=" bg-gray-700 h-screen z-50 ">
      <Header_Dos menu={menu} setMenu={setMenu} suscripcion={suscripcion} setSuscripcion={setSuscripcion}/>

      <div
       onClick={handleOverlayClick}
        className=" overflow-x-auto sm:rounded-lg m-10"
      >
        <p className=" text-gray-300 font-bold text-xl mb-3">
          Gestión de usuarios
        </p>
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row pb-4">
          <div>
            <button
              onClick={handleAction}
              className={`${action ? '' : 'overlaymodal'} inline-flex items-center font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400  hover:bg-[#171f2b] 2xs:mb-2 `}
              type="button"
            >
              
              Acciones
              <svg
                className="w-2.5 h-2.5 ms-2.5"
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

            {action && (
              <ModalAdmin />
            )}
            
 
          </div>

          <div className="relative">
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
              className="block p-2 ps-10 text-sm   rounded-lg w-80   bg-gray-800  placeholder-gray-400 text-gray-300 "
              placeholder="Buscar usuarios"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right  text-gray-400 ">
          <thead className="text-xs  uppercase  bg-gray-900 text-gray-400">
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
                Suscripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Admin
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
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
                className="flex items-center px-6 py-4  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/src/assets/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Víctor Valverde</div>
                  <div className="font-normal ">victor1val@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-4">Plan básico</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-500 hover:underline"
                >
                  Editar usuario
                </a>
              </td>
            </tr>
            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-600">
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
                className="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/src/assets/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Mario Casas</div>
                  <div className="font-normal ">mario@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-4">Plan estándar</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-500 hover:underline"
                >
                  Editar usuario
                </a>
              </td>
            </tr>
            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-600">
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
                className="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/src/assets/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Ana López</div>
                  <div className="font-normal ">ana@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-4">Plan premium</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-500 hover:underline"
                >
                  Editar usuario
                </a>
              </td>
            </tr>
            <tr className=" border-b bg-gray-800 border-gray-700 hover: hover:bg-gray-600">
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
                className="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/src/assets/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Tomás González</div>
                  <div className="font-normal ">tomas@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-4">Plan básico</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-500 hover:underline"
                >
                  Editar usuario
                </a>
              </td>
            </tr>
            <tr className=" bg-gray-800 hover: hover:bg-gray-600">
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
                className="flex items-center px-6 py-4 font-medium  whitespace-nowrap text-gray-300"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/src/assets/img/usuario.svg"
                  alt="Imagen usuario"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Juan Vázquez</div>
                  <div className="font-normal ">juan@hotmail.com</div>
                </div>
              </th>
              <td className="px-6 py-4">Plan estándar</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-500 hover:underline"
                >
                  Editar usuario
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
