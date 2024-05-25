// @ts-nocheck

"use client";
import Header_Dos from "@/app/components/Header_Dos";
import React, { useState } from "react";
import useInformacionPersonal from "@/app/hooks/useInformacionPersonal";
import paises from "@/app/data/paises.json";

const Page = () => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    suscripcionObjeto,
  } = useInformacionPersonal();
  const [menu, setMenu] = useState(false);
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };

  return (
    <div className="bg-gray-700 h-full">
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />

      <section className="py-7" onClick={handleCloseMenu}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex justify-center mx-auto w-[100%] max-w-3xl mb-10">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-300 sm:text-base">
              <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-500">
                <button id="1">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#5D68CC"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Información{" "}
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Personal
                    </span>
                  </span>
                </button>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                <button onClick={handleSubmit(onSubmit)} id="2">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                    <span className="me-2">2</span>
                    Datos{" "}
                    <span className="hidden sm:inline-flex sm:ms-2">
                      bancarios
                    </span>
                  </span>
                </button>
              </li>
              <li className="flex items-center">
                <button id="3">
                  <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-500">
                    <span className="me-2">3</span>
                    Confirmación
                  </span>
                </button>
              </li>
            </ol>
          </div>

          <div className="w-[100%] max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-5 gap-5">
              <div className="md:col-span-3">
                <div className=" shadow-lg bg-gray-800 px-5 py-5 rounded-lg">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
                        placeholder="Víctor"
                        {...register("nombre")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.nombre?.message && (
                          <p>{errors?.nombre?.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="apellidos"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Apellidos
                      </label>
                      <input
                        type="text"
                        id="apellidos"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="Valverde"
                        {...register("apellidos")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.apellidos?.message && (
                          <p>{errors?.apellidos?.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Número de teléfono
                      </label>
                      <input
                        type="number"
                        id="telefono"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="654958823"
                        {...register("numero_telefono")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.numero_telefono?.message && (
                          <p>{errors?.numero_telefono?.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Selecciona tu país
                      </label>

                      <select
                        id="countries"
                        {...register("pais")}
                        defaultValue={`Spain`}
                        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-500 text-gray-300"
                      >
                        <option value="" disabled>
                          --Selecciona un país--
                        </option>
                        {paises.map((pais) => (
                          <option key={pais.code} value={pais.name}>
                            {pais.name}
                          </option>
                        ))}
                      </select>
                      <p className=" text-sm text-red-600">
                        {errors?.pais?.message && (
                          <p>{errors?.pais?.message}</p>
                        )}
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Población
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="Málaga"
                        {...register("poblacion")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.poblacion?.message && (
                          <p>{errors?.poblacion?.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="provincia"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Provincia
                      </label>
                      <input
                        type="text"
                        id="provincia"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
                        placeholder="Málaga"
                        {...register("provincia")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.provincia?.message && (
                          <p>{errors?.provincia?.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="direccion"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="Avenida Bulevar Louis Pasteur"
                        {...register("direccion")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.direccion?.message && (
                          <p>{errors?.direccion?.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cp"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        CP
                      </label>
                      <input
                        type="number"
                        id="cp"
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="29010"
                        {...register("cp")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.cp?.message && <p>{errors?.cp?.message}</p>}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="NIFNIE"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        NIF / NIE
                      </label>
                      <input
                        type="text"
                        id="NIFNIE"
                        {...register("nif_nie")}
                        className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
                        placeholder="44332255G"
                      />
                      <div className=" text-sm text-red-600">
                        {errors?.nif_nie?.message && (
                          <p>{errors?.nif_nie?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" md:col-span-2  shadow-lg bg-gray-800 px-5 py-5 rounded-lg h-72 flex flex-col justify-center">
                <h1 className="text-gray-300 text-xl font-bold mb-5">
                  Resumen
                </h1>

                <div>
                  <div className="flex">
                    <p className="text-gray-300 mb-5 w-[100%]">Suscripción</p>
                    <p className="flex text-gray-300 font-bold whitespace-nowrap">
                      {suscripcionObjeto?.plan}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-gray-300 mb-5 w-full">
                      Subtotal artículos
                    </p>
                    <p className="text-gray-300 mb-5">
                      {suscripcionObjeto?.precio}€
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-300 mb-5 w-full">Total</p>
                    <p className="text-gray-300 mb-5 text-3xl font-bold ">
                      {suscripcionObjeto?.precio}€
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100 w-full"
                >
                  Guardar y continuar
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Page;
