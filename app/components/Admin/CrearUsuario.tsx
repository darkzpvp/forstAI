// @ts-nocheck

import { useAuth } from "@/app/hooks/useAuth";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import {
  crearUsuario,
  
} from "@/app/validations/crearUsuarioSchema";
import { crearUsuarioSchema } from "@/app/validations/crearUsuarioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CrearUsuario = ({
  clickUsuario,
  setClickUsuario,
  setUsuario,
}) => {
  const notifyModificar = () => {
    toast("¡Usuario creado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };
  const {  informacionUsuarioPanel  } = useUsuarioContext()
  const { crearUsuario } = useAuth({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<crearUsuario>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: zodResolver(crearUsuarioSchema),
  });

  const onSubmit: SubmitHandler<crearUsuario> = async (data) => {
    setUsuario(data);
    await crearUsuario(data);
    setClickUsuario(false);
    notifyModificar();
    informacionUsuarioPanel()

  };

  const handleCerrarModal = (e) => {
    e.preventDefault();
    setClickUsuario(false);
    reset();
  };
  return (
    <>
      {clickUsuario && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={(e) => handleCerrarModal(e)}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="Marcos"
                  />
                  <div className=" text-sm text-red-600">
                    {errors?.name?.message && (
                      <p>{errors?.name?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="marcos@correo.com"
                  />
                  <div className=" text-sm text-red-600">
                    {errors?.email?.message && <p>{errors?.email?.message}</p>}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="******"
                  />
                  <div className=" text-sm text-red-600">
                    {errors?.password?.message && (
                      <p>{errors?.password?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password_confirmation"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Repite contraseña
                  </label>
                  <input
                    type="password"
                    id="password_confirmation"
                    {...register("password_confirmation")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="******"
                  />
                  <div className=" text-sm text-red-600">
                    {errors?.password_confirmation?.message && (
                      <p>{errors?.password_confirmation?.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mx-auto gap-2">
                <button
                  onClick={(e) => handleCerrarModal(e)}
                  className="py-2.5 px-5 text-sm ease-in duration-100 font-medium rounded-lg bg-gray-600 hover:bg-gray-700 border-gray-600 text-gray-300"
                >
                  No, cancelar
                </button>
                <button
                  type="submit"
                  className="text-white bg-[#5D68CC] ease-in duration-100 hover:bg-[#525cb7] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Sí, estoy seguro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CrearUsuario;
