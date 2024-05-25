// @ts-nocheck

import React from 'react'

const ModalAdmin = ({setClickUsuario, setClickEliminar}) => {

  const handleAgregarUsuario = () => {
    setClickUsuario(true)
    }
    const handleEliminarUsuario = () => {
      setClickEliminar(true)
      }
  return (
    <div className="modaloverlay absolute z-50  rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ">
                <ul className="py-1 text-sm  text-gray-200 ">
                <li>
                    <li onClick={handleAgregarUsuario} className=" cursor-pointer block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in">
                      Agregar usuario
                    </li>
                  </li>
                  <li>
                    <li onClick={handleEliminarUsuario} className=" cursor-pointer block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in">
                      Eliminar usuario
                    </li>
                  </li>
                </ul>
              
              </div>
  )
}

export default ModalAdmin