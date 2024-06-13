import useRecibirMail from "@/app/hooks/useRecibirmail";
import React, { useEffect, useState } from "react";
import AlertaOk from "./AlertaOk";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enviarEmail, enviarEmailSchema } from "@/app/validations/enviarEmailSchema";

const Contacto = () => {
  const [mensajeOk, setMensajeOk] = useState("");
  const [loading, setLoading] = useState(false);
  const { recibirMail } = useRecibirMail();

  useEffect(() => {
    if (mensajeOk.length > 0) {
      setTimeout(() => {
        setMensajeOk("");
      }, 5000);
    }
  }, [mensajeOk]);


  const {
    register,
    handleSubmit,
    watch,
reset,
    formState: { errors },
  } = useForm<enviarEmail>({
    resolver: zodResolver(enviarEmailSchema),
  });

  const onSubmit: SubmitHandler<enviarEmail> = async (data) => {
    setLoading(true);
    const datos = {
      ...data,
    };
    await recibirMail(datos, setMensajeOk);
    setLoading(false);
    reset()
  };

  return (
    <div className=" max-h-[1000px] flex flex-row justify-center items-center bg-contactobackground bg-center bg-cover bg-no-repeat ">

      <div className="flex p-10 md:flex-row flex-col w-full max-w-5xl mx-auto gap-5">

           <div className="flex flex-col justify-center items-center mx-auto max-w-md px-5">
        <h5 className="text-3xl font-bold text-gray-200 text-center mb-5">
          ¡Contacta con nosotros!
        </h5>
        <p className="text-center text-gray-400">
          Estamos disponibles para ayudarte con cualquier pregunta, sugerencia o
          comentario que tengas
        </p>
      </div>

      <div
        id="contacto"
        className="w-full max-w-md  mx-auto"
      >
        <div className="mt-5 block w-full max-w-lg mx-auto text-center md:text-left">
          {mensajeOk ? <AlertaOk>{mensajeOk}</AlertaOk> : null}
        </div>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className=" p-6 mx-auto rounded-lg shadow bg-gray-800 text-gray-300 "
        >
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium  text-gray-300"
          >
            Tu nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="focus:outline-none  mb-2     text-sm rounded-lg   block w-full p-2.5 bg-gray-700 placeholder-gray-400    "
            placeholder="Víctor Valverde"
            {...register("name")}
          />
          <div className=" text-sm text-red-600 mb-4">
            {errors?.name?.message && <p>{errors?.name?.message}</p>}
          </div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  text-gray-300"
          >
            Tu email
          </label>
          <input
            type="email"
            id="email"
            className="focus:outline-none mb-2   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 placeholder-gray-400   "
            placeholder="hola@correo.com"
            {...register("email")}
          />
          <div className=" text-sm text-red-600 mb-4">
            {errors?.email?.message && <p>{errors?.email?.message}</p>}
          </div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium  text-gray-300"
          >
            Tu mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className="focus:outline-none mb-2 block p-2.5 w-full text-sm   rounded-lg     bg-gray-700 placeholder-gray-400  "
            placeholder="Escribe los detalles de tu mensaje"
            {...register("message")}
          ></textarea>
          <div className=" text-sm text-red-600 mb-4">
            {errors?.message?.message && <p>{errors?.message?.message}</p>}
          </div>
          {loading ? (
            <button
              type="button"
              className={` cursor-not-allowed bg-[#727ee4] ease-in duration-100 text-white  rounded-lg text-sm px-4 py-2 w-full`}
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
              className={`text-white bg-[#5D68CC] ease-in duration-100 hover:bg-[#525cb7] active:bg-[#464f9d]  rounded-lg text-sm px-4 py-2 w-full`}
            >
              Enviar
            </button>
          )}
        </form>
      </div> 
      </div>
  
    </div>
  );
};

export default Contacto;
