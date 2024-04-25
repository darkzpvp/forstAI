"use client";
import Header_Dos from "@/app/components/Header_Dos";
import React from "react";

const page = () => {
  const myStyles = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.833), rgba(17, 24, 39, 0.5)), url('/img/admin/layeredUser.jpg')`,
  };

  return (
    <>
      <Header_Dos />

      <div
        style={myStyles}
        className=" h-44 rounded-md overflow-hidden bg-cover bg-center flex items-center justify-center"
      >
        <div className=" text-center px-10 max-w-xl mx-auto">
          <div className=" relative">
            <img
            className=" w-14 h-14 mx-auto"
            src="/img/usuario.svg"
            alt="User"
          /> 
              <span className="bottom-0 left-32 absolute  w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>

          </div>
         
          <h2 className="text-xl text-white font-semibold mt-4">
            Víctor Valverde Olmedo
          </h2>
          <p className="mt-2 text-gray-400">victor1val@hotmail.es</p>
        </div>
      </div>
      <div className=" mx-auto px-0 md:px-32 sm:px-20 mt-5 ">
        <div className=" grid grid-cols-4 gap-5">
          <div className=" col-span-2 w-full bg-gray-800 rounded-lg mt-5 p-10 ">
            <h2 class="mb-2 mt-1 text-lg font-semibold text-gray-900 dark:text-white ">
              Detalles de la cuenta
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 border-t border-gray-600">
              <div className="  grid grid-cols-2">
                <div className=" flex gap-2 mb-5  mt-8">
                  <div className=" gradient w-10 h-10 rounded-lg flex items-center justify-center   stroke-indigo-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke=""
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div className="  text-sm">
                    <h2 className="text-gray-300">Suscripción</h2>
                    <p className="text-gray-400">Plan Premiúm</p>
                  </div>
                </div>

                <div className=" flex gap-2  mt-8">
                  <div className=" gradient w-10 h-10 rounded-lg flex items-center justify-center   stroke-indigo-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke=""
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div className="  text-sm">
                    <h2 className="text-gray-300">Prompts restantes</h2>
                    <p className="text-gray-400">80</p>
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className=" gradient w-10 h-10 rounded-lg flex items-center justify-center   stroke-indigo-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke=""
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div className="  text-sm">
                    <h2 className="text-gray-300">
                      Expiración de la suscripción
                    </h2>
                    <p className="text-gray-400">27/04/21</p>
                  </div>
                </div>

                <div className=" flex gap-2">
                  <div className=" gradient w-10 h-10 rounded-lg flex items-center justify-center   stroke-indigo-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke=""
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div className="  text-sm">
                    <h2 className="text-gray-300">IP</h2>
                    <p className="text-gray-400">192.169.0.1</p>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className=" col-span-2 w-full bg-gray-800 rounded-lg mt-5 p-10 ">
            <h2 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white  ">
              Detalles de facturación
            </h2>
            <ul class=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left max-w-md  border-t border-gray-600   ">
              <div className=" grid grid-cols-2 text-sm  text-left ">
                <h2 className="text-gray-300 mt-8">Nombre completo</h2>
                <p className="text-gray-400 mt-8">Víctor Valverde Olmedo</p>
              </div>

              <div className=" grid grid-cols-2 text-sm  text-left">
                <h2 className="text-gray-300">Dirección</h2>
                <p className="text-gray-400">Av. Victor 9. Bloque 4, 4-3</p>
              </div>

              <div className="grid grid-cols-2 text-sm  text-left">
                <h2 className="text-gray-300">País y provincia</h2>
                <p className="text-gray-400">España, Málaga</p>
              </div>
              <div className=" grid grid-cols-2 text-sm  text-left">
                <h2 className="text-gray-300">Municipio</h2>
                <p className="text-gray-400">Málaga</p>
              </div>
            </ul>
          </div>
          <div className="block  w-full col-span-4">
            <div className="relative overflow-x-auto sm:rounded-lg container mx-w-xl mt-5 mx-auto">
              <table className="w-full text-sm text-left rtl:text-right  text-gray-400 bg-gray-600 mb-3">
                <thead className="text-xs  uppercase bg-gray-600 text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Registro de prompts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b bg-gray-800 border-gray-700  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-gray-300"
                    >
                      Ejemplo frame 1
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
                      Ejemplo frame 2
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
                      Ejemplo frame 3
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
                      Ejemplo frame 3
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
                      Ejemplo frame 3
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
                      Ejemplo frame 3
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
                      Ejemplo frame 3
                    </th>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                  </tr>
                  <tr className=" bg-gray-800 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium dwhitespace-nowrap text-gray-300"
                    >
                      Ejemplo frame 3
                    </th>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-right">24/11/2024:12:01</td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-10 text-base mb-5">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
