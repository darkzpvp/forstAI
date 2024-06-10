// @ts-nocheck

import { useAuth } from "@/app/hooks/useAuth";
import React, { useRef, useState } from "react";

const EliminarCuenta = ({ eliminarCuenta, setEliminarCuenta }) => {
  const { eliminarCuentaPerfil } = useAuth({});

  const handleEliminarCuenta = async (e) => {
    e.preventDefault();
    const contraseña = {
      current_password: passwordEliminarCuenta.current.value,
    };
    await eliminarCuentaPerfil(
      contraseña,
      setErroresEliminarCuenta,
      erroresEliminarCuenta
    );
  };
  const passwordEliminarCuenta = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [erroresEliminarCuenta, setErroresEliminarCuenta] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {eliminarCuenta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={() => setEliminarCuenta(false)}
        >
          <div
            className=" bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              onSubmit={(e) => handleEliminarCuenta(e)}
              className="p-4 md:p-5 text-center"
            >
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
                <div className="flex items-center rounded-lg bg-gray-700 text-gray-300 w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="contraseña"
                    className="w-full text-sm p-2.5 bg-gray-700 rounded-lg  placeholder-gray-400 focus:outline-none"
                    placeholder="Escribe tu contraseña"
                    ref={passwordEliminarCuenta}
                  />
                  <button
                    type="submit"
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
              {erroresEliminarCuenta
                ? erroresEliminarCuenta.map((error, i) => (
                    <div
                      className=" text-red-600 text-center text-sm mt-2 "
                      key={i}
                    >
                      {erroresEliminarCuenta}
                    </div>
                  ))
                : null}
              <div className=" mt-4 flex justify-center mx-auto gap-2">
                <button
                  onClick={() => setEliminarCuenta(false)}
                  className="py-2.5 px-5 text-sm font-medium ease-in duration-100   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                >
                  No, cancela
                </button>
                <button
                  type="submit"
                  className="text-white bg-red-600 ease-in duration-100 hover:bg-red-700   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Eliminar cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EliminarCuenta;
