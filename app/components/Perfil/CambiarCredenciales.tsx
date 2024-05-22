import { useAuth } from "@/app/hooks/useAuth";
import useCambiarContraseña from "@/app/hooks/useCambiarContraseña";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import { changePassword, changePasswordSchema } from "@/app/validations/ChangePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CambiarCredenciales = () => {

  const { user } = useAuth({});
  const { errores, setErrores } = useUsuarioContext();

  const { cambiarContraseña } = useCambiarContraseña();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<changePassword>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<changePassword> = async (data) => {
    const datos = {
        current_password: data.current_password,
        new_password: data.new_password,
        new_password_confirmation: data.new_password
    };
   
    await cambiarContraseña(datos, setErrores);
    reset()
  };

  return (
    <div className=" bg-gray-800 w-full max-w-4xl rounded-lg ">
      <div className=" mt-5 bg-gray-900 p-5 rounded-t-lg">
        <h1 className=" text-sm text-gray-200">Autenticación</h1>
        <p className=" text-sm text-gray-400">
          Cambia los datos de tu cuenta para mantenerte seguro
        </p>
      </div>

      <div className=" border-b border-gray-600 px-5">
        <div className="  py-3 flex max-w-sm justify-between  ">
          <h1 className="text-gray-400 text-sm  ">Email</h1>
          <p className=" text-gray-200 text-sm">{user?.email}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" border-b border-gray-600 px-5">
          <div className="  py-2 flex  max-w-sm justify-between  ">
            <h1 className="text-gray-400 text-sm  ">Contraseña</h1>
            <input
              className=" bg-gray-700 text-gray-300 rounded-lg w-36 pt-1  px-2 "
              type="password"
              placeholder="*****"
              {...register("current_password")}

            />
          </div>
          {errores && errores.length > 0 && (
            <div className="text-sm text-red-600 mb-4">{errores[0]}</div>
          )}
           <div className=" text-sm text-red-600 mb-4">
                        {errors?.current_password?.message && (
                          <p>{errors?.current_password?.message}</p>
                        )}
                      </div>
        </div>
        <div className="border-b border-gray-600 px-5">
          <div className="py-2 flex max-w-sm justify-between items-center">
            <h1 className="text-gray-400 text-sm ">Nueva contraseña</h1>
            <input
              className="bg-gray-700 text-gray-300 rounded-lg w-36 pt-1 px-2 flex-shrink-0"
              type="password"
              placeholder="*****"
              {...register("new_password")}
            />
         

          </div>
          {errores && errores.length > 0 && (
            <div className="text-sm text-red-600 mb-4">{errores[1]}</div>
          )}
           <div className=" text-sm text-red-600 mb-4">
                        {errors?.new_password?.message && (
                          <p>{errors?.new_password?.message}</p>
                        )}
                      </div>
        </div>
        <div className=" py-3 px-3">
          <button
            type="submit"
            className=" px-3 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
          >
            Cambiar contraseña
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default CambiarCredenciales;
