"use client";
import Header_Dos from "@/app/components/Header_Dos";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import useDatosBancarios from "@/app/hooks/useDatosBancarios";
import useInformacionPersonal from "@/app/hooks/useInformacionPersonal";
const page = () => {
    const {
        register,
        handleSubmit,
        errors,
     onSubmit,
      } = useDatosBancarios();
      const {
     continuarCarrito,
     suscripcionObjeto
      } = useInformacionPersonal();
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);

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
      <form onSubmit={(e) => {
    e.preventDefault(); 
    handleSubmit(onSubmit)(e); 
}} className="">
          <div className="flex justify-center mx-auto w-[100%] max-w-3xl mb-10">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-300 sm:text-base">
              <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-500">
                <Link href={'/carrito'} id="1">
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
                <button id="2">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#5D68CC"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Datos{" "}
                    <span className="hidden sm:inline-flex sm:ms-2">
                      bancarios
                    </span>
                  </span>
                </button>
              </li>
              <li className="flex items-center">
                <button onClick={handleSubmit(onSubmit)} id="3">
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
                <div className="shadow-lg bg-gray-800 px-5 py-5 rounded-lg">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="md:col-span-2 relative">
                      <div>
                        <label
                          htmlFor="numero_tarjeta"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Número de tarjeta
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          id="numero_tarjeta"
                          type="number"
                          className="  text-sm rounded-lg  block w-full pe-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 "
                          placeholder="4242 4242 4242 4242"
                          {...register("numeroTarjeta")}
                          
                        />

                        <div className="absolute inset-y-0 end-0  flex items-center pe-3.5 ">
                          <svg
                            fill="none"
                            className="h-6  text-gray-300"
                            viewBox="0 0 36 21"
                          >
                            <path
                              fill="currentColor"
                              d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" text-sm text-red-600">
                        {errors.numeroTarjeta?.message && (
                          <p>{errors.numeroTarjeta?.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label
                        htmlFor="mmaa"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Fecha de expiración
                      </label>
                      <input
                        type="number"
                        id="mmaa"
                        className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
                        placeholder="MM/AA"
                        {...register("fechaExpiracion")}
                      />
                      <div className="text-sm text-red-600 ">
                        {errors.fechaExpiracion?.message && (
                          <p>{errors.fechaExpiracion?.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Código de seguridad
                      </label>
                      <input
                        type="number"
                        id="cvc"
                        className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
                        placeholder="3 dígitos"
                        {...register("codigoExpiracion")}
                      />
                      <div className=" text-sm text-red-600">
                        {errors.codigoExpiracion?.message && (
                          <p>{errors.codigoExpiracion?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="titular"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Titular de la cuenta
                      </label>
                      <input
                        type="text"
                        id="titular"
                        className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
                        placeholder="Koldo Ortega"
                        {...register("titular")}
                      />
                      <div className=" text-red-600 text-sm">
                        {errors.titular?.message && (
                          <p>{errors.titular?.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center mt-5 text-gray-400 text-sm gap-2 fill-gray-400">
                      <p>Pago seguro cifrado con SSL</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill=""
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
    </>
  );
};
export default page;

