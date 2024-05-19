import React, { useEffect, useState } from 'react';

const ModalTabla = ({ setClickModificar, setActualizarTabla, setClickEliminar }) => {
  const modificarUsuario = () => {
    setClickModificar(true);
    setActualizarTabla(false);
  };

  const handleEliminar = () => {
    setClickEliminar(true);
  };


  return (
    <div className='absolute z-50'>
      <div className="relative">
        <div className="rounded-lg shadow w-40 bg-gray-700  divide-gray-600">
          <ul className="py-1 text-sm text-gray-200">
            <li onClick={() => modificarUsuario()}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition duration-100 ease-in">
                Modificar usuario
              </a>
            </li>
            <li onClick={() => handleEliminar()}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition duration-100 ease-in">
                Eliminar usuario
              </a>
            </li>
      
            <li>
              <a href="/admin/user" className="block px-4 py-2 hover:bg-gray-800 transition duration-100 ease-in">
                Ver detalles del usuario
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalTabla;
