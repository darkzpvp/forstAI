"use client";
import Header_Dos from "@/app/components/Header_Dos";
import React, { useEffect, useState } from "react";
import ModalCarrito from "./ModalCarrito";
import Link from "next/link";
import useDatosBancarios from "@/app/hooks/useDatosBancarios";
import { redirect, useRouter } from "next/navigation";
import useInformacionPersonal from "@/app/hooks/useInformacionPersonal";

const Page = () => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const [modal, setModal] = useState(false);

  const [comprado, setComprado] = useState(false);
  const [menu, setMenu] = useState(false);
  const Router = useRouter();
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };

  const handleComprar = (e) => {
    e.preventDefault();
    setModal(true);
  };
  const { continuarCarrito, setContinuarCarrito, getInformacion, datosPersonales } =
    useInformacionPersonal();
  const { datosBancarios } = useDatosBancarios();

useEffect(() => {
  const  getInformacionUser = async() => {
await getInformacion()
  }
  getInformacionUser()
getInformacion()
}, [datosPersonales])


  return (
    <>
      {continuarCarrito < 2 && redirect("/carrito")}
      <div className="bg-gray-700 h-full">
        <Header_Dos
          menu={menu}
          setMenu={setMenu}
          menuHamburguesa={menuHamburguesa}
          setMenuHamburguesa={setMenuHamburguesa}
        />

        <section className="py-7" onClick={handleCloseMenu}>
          {comprado && (
            <div className="flex justify-center ">
              <div
                className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">¡Compra con éxito!</span> Ya
                  puede comenzar a generar imágenes.
                </div>
              </div>
            </div>
            
          )}

          <div className="flex justify-center mx-auto w-[100%] max-w-3xl mb-10">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-300 sm:text-base">
              <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-500">
                <Link href={"/carrito"} id="1">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                    <span className="me-2">1</span>
                    Información{" "}
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Personal
                    </span>
                  </span>
                </Link>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                <Link href={"/carrito/datosbancarios"} id="2">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                    <span className="me-2">2</span>
                    Datos{" "}
                    <span className="hidden sm:inline-flex sm:ms-2">
                      bancarios
                    </span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <button id="3">
                  <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#5D68CC"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Confirmación
                  </span>
                </button>
              </li>
            </ol>
          </div>

          <form onSubmit={(e) => handleComprar(e)} className="">
            <div className="w-[100%] max-w-6xl mx-auto px-5">
              <div className="grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3">
                  <div className="md:col-span-3 shadow-lg bg-gray-800 rounded-lg">
                    <table className=" rounded-lg w-full ">
                      <thead className="bg-gray-900  rounded-t-lg font-bold uppercase text-xs text-gray-400 ">
                        <tr>
                          <td className="py-3 px-5 rounded-t-lg " colSpan={2}>
                            Información Personal
                          </td>
                        </tr>
                      </thead>

                      <tbody className="mb-4 px-5 py-5">
                        <tr className=" text-sm font-medium text-gray-300  ">
                          <td className=" px-5 pt-5  w-1/2 text-gray-200">
                            Nombre y apellidos
                          </td>
                          <td className=" pt-5 text-gray-300 px-5">
                            Número de teléfono
                          </td>
                        </tr>

                        <tr className=" text-sm text-gray-300 border-b border-gray-600">
                          <td className="  px-5 text-gray-400 pb-2">
                            {datosPersonales?.nombre}{" "}
                            {datosPersonales?.apellidos}
                          </td>
                          <td className="text-gray-400 px-5">
                            {datosPersonales?.numero_telefono}
                          </td>
                        </tr>
                        <tr className=" text-sm font-medium text-gray-300">
                          <td className=" px-5  text-gray-300 pt-2">NIF/NIE</td>
                          <td className=" text-gray-300 px-5 pt-2">
                            Ubicación
                          </td>
                        </tr>
                        <tr className=" text-sm font-medium text-gray-300">
                          <td className="px-5 pb-5 text-gray-400">
                            {datosPersonales?.nif_nie}
                          </td>
                          <td className="text-gray-400 pb-5 px-5">
                            {datosPersonales?.poblacion},{" "}
                            {datosPersonales?.provincia},{" "}
                            {datosPersonales?.pais}
                          </td>
                        </tr>
                      </tbody>

                      <thead className="bg-gray-900  rounded-t-lg font-bold uppercase text-xs text-gray-400 ">
                        <tr>
                          <td className="py-3 px-5 " colSpan={2}>
                            Datos de facturación
                          </td>
                        </tr>
                      </thead>
                      <tbody className="mb-4 px-5 py-5">
                        <tr className=" text-sm font-medium text-gray-300  ">
                          <td className="  px-5 pt-5 text-gray-200">
                            Número de tarjeta
                          </td>
                          <td className="text-gray-300 pt-5 px-5">
                            Fecha de expiración
                          </td>
                        </tr>

                        <tr className=" text-sm text-gray-300 border-b border-gray-600">
                          <td className="px-5 text-gray-400 pb-2">
                            {datosBancarios?.numeroTarjeta &&
                              `*********** ${datosBancarios.numeroTarjeta.slice(
                                -3
                              )}`}
                          </td>
                          <td className="px-5 text-gray-400 pb-5">
                            {datosBancarios?.fechaExpiracion &&
                              datosBancarios.fechaExpiracion.slice(0, -2) +
                                "/" +
                                datosBancarios.fechaExpiracion.slice(-2)}
                          </td>
                        </tr>
                        <tr className=" text-sm font-medium text-gray-300">
                          <td className="px-5  pt-2 text-gray-300">CVC</td>
                          <td className=" text-gray-300 pt-2 px-5">Titular</td>
                        </tr>
                        <tr className=" text-sm font-medium text-gray-300">
                          <td className="px-5 text-gray-400 pb-5">
                            {datosBancarios?.codigoExpiracion}
                          </td>
                          <td className=" text-gray-400 pb-5 px-5">
                            {datosBancarios?.titular}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className=" md:col-span-2  shadow-lg bg-gray-800 px-5 py-5 rounded-lg h-72 flex flex-col justify-center">
                  <h1 className="text-gray-300 text-xl font-bold mb-5">
                    Resumen
                  </h1>
                  <div className="flex">
                    <p className="text-gray-300 mb-5 w-[100%]">Suscripción</p>
                    <p className="flex text-gray-300 font-bold whitespace-nowrap">
                      Plan Premium
                    </p>
                  </div>

                  <div className="flex">
                    <p className="text-gray-300 mb-5 w-full">
                      Subtotal artículos
                    </p>
                    <p className="text-gray-300 mb-5">15€</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-300 mb-5 w-full">Total</p>
                    <p className="text-gray-300 mb-5 text-3xl font-bold ">
                      15€
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100 w-full"
                  >
                    Pagar ahora
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
        {modal && (
          <ModalCarrito
            setModal={setModal}
            modal={modal}
            setComprado={setComprado}
          />
        )}
      </div>
    </>
  );
};

export default Page;
