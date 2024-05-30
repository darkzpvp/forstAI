// @ts-nocheck

"use client";
import useOlvidePassword from "@/app/hooks/useOlvidePassword";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import AlertaOk from "@/app/components/AlertaOk";
import Alerta from "@/app/components/Generar/Alerta";
import { SubmitHandler, useForm } from "react-hook-form";
import { password, passwordSchema } from "@/app/validations/PasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Page({ params }: { params: { token: string } }) {
  const [mensajeOk, setMensajeOk] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [tokenUrl, setTokenUrl] = useState(params.token);
  const [tokenValido, setTokenValido] = useState([]);
  const { resetPassword, comprobarToken } = useOlvidePassword();

  useEffect(() => {
    if (mensajeOk) {
      setTimeout(() => {
        setMensajeOk("");
      }, 10000);
    }
  }, [mensajeOk]);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    comprobarToken(tokenUrl, setTokenValido);
  }, [tokenUrl]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<password>({
    resolver: zodResolver(passwordSchema),
  });
  const onSubmit: SubmitHandler<password> = async (data) => {
    const datos = {
      ...data,
    };
    await resetPassword(datos, tokenUrl, setMensajeOk);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 h-screen ">
      <div className=" flex justify-center bg-login-gradient bg-center bg-cover bg-no-repeat md:col-span-1 lg:col-span-2 md:items-start items-center ">
        <div className="sm:my-20 text-[#272B30] p-5  rounded-md mx-7   my-10">
          <h1 className=" font-bold md:text-4xl sm:text-2xl text-xl mb-3 text-center">
            Reestablece la contraseña
          </h1>
          <p className="text-center">Recuerda de poner una contraseña segura</p>
        </div>
      </div>

      <div
        className={`bg-[#272B30] text-gray-300 shadow-lg md:col-span-1 flex flex-col gap-0 md:gap-8 ${
          tokenValido ? "justify-normal pt-14" : "justify-center"
        }`}
      >
        {!tokenValido ? (
          <>
            <div className="absolute top-5 mx-5 cursor-pointer">
              <Link href={"/"} className="flex gap-2">
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex justify-center items-center flex-col  xl:px-28 lg:px-20 md:px-20 px-8"
            >
              {mensajeOk ? <AlertaOk>{mensajeOk}</AlertaOk> : null}
              <div className="w-full max-w-72 lg:max-w-80 relative">
                <label
                  htmlFor="contraseña"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Contraseña
                </label>
                <div className="flex items-center border rounded-lg bg-gray-200 mb-2 text-black w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="contraseña"
                    className="w-full text-sm p-2.5 bg-transparent placeholder-gray-400 focus:outline-none"
                    placeholder="Escribe tu contraseña"
                    {...register("password")}
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
                  {errors?.password?.message && (
                    <p>{errors?.password?.message}</p>
                  )}
                </div>
                <label
                  htmlFor="contraseña2"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Repite contraseña
                </label>
                <div className="flex items-center border rounded-lg bg-gray-200 mb-2 text-black w-full">
                  <input
                    type="password"
                    id="contraseña2"
                    className="w-full text-sm p-2.5 bg-transparent placeholder-gray-400 focus:outline-none"
                    placeholder="Escribe tu contraseña"
                    {...register("password_confirmation")}
                  />
                </div>
                <div className=" text-sm text-red-600 mb-4">
                  {errors?.password_confirmation?.message && (
                    <p>{errors?.password_confirmation?.message}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 block text-center active:bg-[#464f9d] w-full max-w-72 lg:max-w-80"
              >
                Reestablecer contraseña
              </button>
            </form>
          </>
        ) : (
          <div className="">
            {tokenValido
              ? tokenValido.map((error, i) => (
                  <div
                  key={i}
                    class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                    role="alert"
                  >
                    <svg
                      class="w-5 h-5 inline mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <span class="font-medium">¡Error!</span>
                      {error}
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
}
