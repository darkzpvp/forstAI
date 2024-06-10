// @ts-nocheck

"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import AlertaOk from "../components/AlertaOk";
import Alerta from "../components/Alerta";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  registroUsuario,
  registroUsuarioSchema,
} from "../validations/registroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
const Registrar = () => {
  const [errores, setErrores] = useState([]);
  const [mensajeOk, setMensajeOk] = useState("");
  const [loading, setLoading] = useState(false);
  const { registro, user } = useAuth({});
  const Router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<registroUsuario>({
    resolver: zodResolver(registroUsuarioSchema),
  });

  const onSubmit: SubmitHandler<registroUsuario> = async (data) => {
    setLoading(true);
    const datos = {
      ...data,
    };
    const email = {
      email: data.email,
    };
    await registro(datos, email, setMensajeOk, setErrores);
    setLoading(false);
  };

  useEffect(() => {
    if (user?.email_verified_at) {
      redirect("/generar");
    }
  }, []);

  const handleGoLogin = () => {
    Router.push("/login");
  };
setTimeout(() => {
setErrores([])
}, 4000)
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 h-screen">
      <div className=" bg-registro-gradient bg-cover bg-center block justify-center md:col-span-1 lg:col-span-2 md:flex">
        <div className="sm:my-20 text-[#272B30] p-5  rounded-md mx-7  my-10">
          <h1 className="font-bold md:text-4xl sm:text-2xl text-xl mb-3 text-center">
            ¡Regístrate en ForstAI!
          </h1>
          <p className="text-center">Estás a un paso de tener una cuenta.</p>
        </div>
      </div>

      <div className="bg-[#272B30] text-gray-300 shadow-lg md:col-span-1 flex flex-col justify-center gap-0 md:gap-8">
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
        <Link href={'/'} className="flex justify-center max-w-20 sm:max-w-24 mx-auto pt-5 hover:brightness-75 ease-in duration-100 cursor-pointer">
          <Image
            width={50}
            height={50}
            layout="responsive"
            className=""
            src="/img/logo/prueba.png"
            alt="Prueba"
          />
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center flex-col  xl:px-28 lg:px-20 md:px-20 px-8"
        >
        
          {mensajeOk ? <AlertaOk>{mensajeOk}</AlertaOk> : null}
          <div className="w-full max-w-72 lg:max-w-80">
          {errores.length > 0 ? 
                 <Alerta>{errores}</Alerta> : null}
              
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className={`${
                mensajeOk && " cursor-not-allowed disabled"
              } focus:outline-none border text-sm rounded-lg block p-2.5 bg-gray-200 placeholder-gray-400 text-black w-full`}
              placeholder="Víctor"
              {...register("name")}
              disabled={mensajeOk && true}
            />
            <div className=" text-sm text-red-600 mb-4">
              {errors?.name?.message && <p>{errors?.name?.message}</p>}
            </div>
          </div>
          <div className="w-full max-w-72 lg:max-w-80">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`${
                mensajeOk && " cursor-not-allowed disabled"
              }focus:outline-none border text-sm rounded-lg block p-2.5 bg-gray-200 placeholder-gray-400 text-black w-full`}
              placeholder="hola@correo.com"
              {...register("email")}
              disabled={mensajeOk && true}
            />
            <div className=" text-sm text-red-600 mb-4">
              {errors?.email?.message && <p>{errors?.email?.message}</p>}
            </div>
          </div>

          <div className="w-full max-w-72 lg:max-w-80 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Contraseña
            </label>
            <div className="focus:outline-none flex items-center border rounded-lg bg-gray-200 text-black w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`${
                  mensajeOk && " cursor-not-allowed disabled"
                } w-full text-sm p-2.5 bg-transparent placeholder-gray-400 focus:outline-none`}
                placeholder="Escribe tu contraseña"
                {...register("password")}
                disabled={mensajeOk && true}
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
                    stroke="black"
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
                    stroke="black"
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
            <div className=" text-sm text-red-600 mb-4">
              {errors?.password?.message && <p>{errors?.password?.message}</p>}
            </div>
          </div>

          <div className="w-full  max-w-72 lg:max-w-80">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Repite contraseña
            </label>
            <input
              type="password"
              id="password_confirmation"
              className={` ${
                mensajeOk && " cursor-not-allowed disabled"
              } focus:outline-none border text-sm rounded-lg block p-2.5 bg-gray-200  text-black w-full`}
              placeholder="Escribe tu contraseña"
              {...register("password_confirmation")}
              disabled={mensajeOk && true}
            />
            <div className=" text-sm text-red-600 mb-4">
              {errors?.password_confirmation?.message && (
                <p>{errors?.password_confirmation?.message}</p>
              )}
            </div>

          </div>

          {loading ? (
            <button
              type="button"
              className={` cursor-not-allowed bg-[#727ee4] text-white  max-w-72 lg:max-w-80  rounded-lg text-sm px-4 py-2 w-full`}
              disabled
            >
              <svg
                role="status"
                className="inline w-4 h-4 me-3 ease-in duration-100 text-gray-200 animate-spin dark:text-gray-600"
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
              }   max-w-72 lg:max-w-80 text-white ease-in duration-100 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm px-4 py-2 w-full`}
              disabled={mensajeOk && true}
            >
              Registrarse
            </button>
          )}

          <div className="text-center text-sm mt-5">
            <div onClick={handleGoLogin} className=" cursor-pointer pb-5">
              ¿Tienes ya una cuenta?{" "}
              <span className="text-[#8f95d3]">Logueate</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
