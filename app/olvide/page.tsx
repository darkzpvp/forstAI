'use client'
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";

const Olvide = () => {
  const { user } = useAuth({});

const [email, setEmail] = useState("")
const [error, setError] = useState([])
const [status, setStatus] = useState(null)
const handleSubmit = async (e) => {
e.preventDefault()
const res = await fetch("/api/olvide", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
})
}

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
      <form className="w-full max-w-72 lg:max-w-80 ">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="focus:outline-none border text-sm rounded-lg block p-2.5 bg-gray-200 placeholder-gray-400 text-black w-full mb-4"
          placeholder="hola@correo.com"
          required
        />
      </form>

      

      <button
        type="button"
        className="transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 block text-center active:bg-[#464f9d] w-full max-w-72 lg:max-w-80"
      >
        Enviar
      </button>

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