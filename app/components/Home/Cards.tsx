import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/app/hooks/useAuth'

const Cards = () => {
  const {user} = useAuth({})


  return (
    <section className="justify-center grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 xl:mx-56 lg:mx-40 md:mx-20 my-10 place-items-center ">
    <div className="w-full max-w-sm p-4 border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
      <h5 className="mb-4 text-xl font-medium  text-gray-300">
        Plan básico
      </h5>
      <div className="flex items-baseline  text-gray-300">
        <span className="text-5xl font-extrabold tracking-tight">9</span>
        <span className="text-3xl font-semibold">€</span>
        <span className="ms-1 text-xl font-normal  text-gray-300">
          /mes
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            1 equipo
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            10 prompts / día
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Velocidad media
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Documentación completa
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <svg
            className=" w-4 h-4  text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Acceso a API
          </span>
        </li>

        <li className="flex line-through decoration-gray-500">
          <svg
            className=" w-4 h-4  text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Soporte 24/7 teléfono & email
          </span>
        </li>
      </ul>
      {user ? (
  <Link href="/carrito">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
) : (
  <Link href="/login">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
)}

    </div>

    <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
      <h5 className="mb-4 text-xl font-medium  text-gray-300">
        Plan estándar
      </h5>
      <div className="flex items-baseline  text-gray-300">
        <span className="text-5xl font-extrabold tracking-tight">19</span>
        <span className="text-3xl font-semibold">€</span>
        <span className="ms-1 text-xl font-normal  text-gray-300">
          /mes
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            2 equipos
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            50 prompts / día
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Velocidad rápida
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Documentación completa
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <svg
            className=" w-4 h-4  text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Acceso a API
          </span>
        </li>

        <li className="flex line-through decoration-gray-500">
          <svg
            className=" w-4 h-4  text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Soporte 24/7 teléfono & email
          </span>
        </li>
      </ul>
    
      {user ? (
  <Link href="/carrito">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
) : (
  <Link href="/login">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
)}
  
    </div>

    <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
      <h5 className="mb-4 text-xl font-medium  text-gray-300">
        Plan premium
      </h5>
      <div className="flex items-baseline  text-gray-300">
        <span className="text-5xl font-extrabold tracking-tight">25</span>
        <span className="text-3xl font-semibold">€</span>
        <span className="ms-1 text-xl font-normal  text-gray-300">
          /mes
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            4 equipos
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Prompts ilimitados
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Velocidad rápida
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Documentación completa
          </span>
        </li>
        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Acceso a API
          </span>
        </li>

        <li className="flex">
          <svg
            className=" w-4 h-4  text-[#5D68CC]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
            Soporte 24/7 teléfono & email
          </span>
        </li>
      </ul>
    
      {user ? (
  <Link href="/carrito">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
) : (
  <Link href="/login">
    <button
      type="submit"
      className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
    >
      Elegir plan
    </button>
  </Link>
)}
    
    </div>
  </section>
  )
}

export default Cards