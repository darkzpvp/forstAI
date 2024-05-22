import Link from 'next/link'
import React from 'react'

const EncabezadoAdminUser = ({informacion_personal, state}) => {
  return (
    <div className="  text-center px-10 max-w-xl mx-auto">
    <div className=" absolute top-5 left-5 cursor-pointer">
      <Link href={`/admin`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>

    <div className=" relative">
      <img
        className=" w-20 h-20 mx-auto rounded-full"
        src={
          informacion_personal?.imagen
            ? `http://localhost:8000/storage/${informacion_personal?.imagen}`
            : "../../img/usuario.svg"
        }
        alt="User"
      />
      {informacion_personal?.estado === "Conectado" ? (
        <span className="bottom-0 left-24 absolute  w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      ) : (
        <span className="bottom-0 left-24 absolute  w-5 h-5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      )}
    </div>

    <h2 className="text-xl text-white font-semibold mt-2">
      {informacion_personal?.nombre}
    </h2>
    <p className="mt-1 text-gray-400">{informacion_personal?.email}</p>
  </div>
  )
}

export default EncabezadoAdminUser