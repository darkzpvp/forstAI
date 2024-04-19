import React from 'react'
import Link from 'next/link'
const Portada = () => {
  return (
    <div
    id="home"
    className="flex flex-col justify-center items-center h-screen gap-5 px-5 text-center bg-introhome"
   >
    <h1 className="text-gray-200 text-4xl font-bold sm:text-6xl">
      ForstAI
    </h1>
    <p className="text-gray-300">
      Comienza a generar imágenes de forma gratuita.
    </p>

    <Link href={"#intro"} legacyBehavior>
      <div>
        <a
          className="absolute bottom-6  p-2   rounded-lg text-gray-400 hover:bg-gray-600 active:bg-gray-700 cursor-pointer"
          aria-current="page"
        >
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
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>
    </Link>
  </div>
  )
}

export default Portada