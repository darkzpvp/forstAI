// @ts-nocheck

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import useOlvidePassword from "../hooks/useOlvidePassword";
import AlertaOk from "../components/AlertaOk";
const Olvide = () => {
  const emailRef = useRef();
  const [errores, setErrores] = useState([]);
  const [mensajeOk, setMensajeOk] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { olvidePassword } = useOlvidePassword();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const datos = {
      email: emailRef.current.value,
    };

    await olvidePassword(datos, setErrores, setMensajeOk);
    setLoading(false);

    emailRef.current.value = "";
  };

  useEffect(() => {
    if (errores.length > 0) {
      setTimeout(() => {
        setErrores([]);
      }, 10000);
    }
  }, [errores]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 h-screen ">
      <div className=" bg-login-gradient justify-center bg-cover  md:col-span-1 lg:col-span-2 flex md:items-start items-center ">
        <div className="sm:my-20 text-[#272B30] p-5  rounded-md mx-7  ">
          <h1 className="font-bold md:text-4xl sm:text-2xl text-xl mb-3 text-center">
            ¿Olvidaste la contraseña?
          </h1>
          <p className="text-center">No te preocupes, pronto tendrás acceso</p>
        </div>
      </div>

      <div className="bg-[#272B30] text-gray-300 shadow-lg md:col-span-1 flex flex-col justify-start md:justify-center py-5 gap-0 md:gap-8">
        <div className="absolute top-5 mx-5 cursor-pointer">
          <Link href={"/login"} className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="w-6 h-6 md:stroke-white stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <p className=" md:text-white text-black">Atrás</p>
          </Link>
        </div>
        <div className="flex justify-center max-w-20 sm:max-w-24 mx-auto pt-5">
          <Image
            width={50}
            height={50}
            layout="responsive"
            className=""
            src="/img/logo/prueba.png"
            alt="Prueba"
          />
        </div>

        <div className="flex justify-center items-center flex-col xl:px-28 lg:px-20 md:px-20 px-8">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full max-w-72 lg:max-w-80 "
          >
            {mensajeOk ? <AlertaOk>{mensajeOk}</AlertaOk> : null}

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`${mensajeOk && " cursor-not-allowed disabled"} focus:outline-none border text-sm rounded-lg block p-2.5 bg-gray-200 placeholder-gray-400 text-black w-full`}
              placeholder="hola@correo.com"
              disabled={mensajeOk && true}
              ref={emailRef}
            />
            {errores
              ? 
                
                  <div className="mb-2 text-sm text-red-600 ">{errores}</div>
                
              : null}

            {loading ? (
              <button
                type="button"
                className={` cursor-not-allowed bg-[#727ee4] ease-in duration-100 max-w-72 text-white  rounded-lg text-sm px-4 py-2 w-full mt-6 lg:max-w-80`}
                disabled
              >
                <svg
                  role="status"
                  className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#5D68CC"
                  />
                </svg>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className={`${
                  mensajeOk && " cursor-not-allowed disabled"
                }   max-w-72 lg:max-w-80 text-white bg-[#5D68CC] ease-in duration-100 hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm px-4 py-2 w-full mt-4`}
                disabled={mensajeOk && true}

              >
                Reestablecer contraseña
              </button>
            )}
          </form>

          <div className="text-center text-sm mt-5">
            <Link href="/login">
              <div>
                ¿Tienes ya una cuenta?{" "}
                <span className="text-[#8f95d3]">Logueate</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olvide;
