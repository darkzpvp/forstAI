import React from 'react'

const ModalAdmin = () => {
  return (
    <div className="modaloverlay absolute  rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ">
                <ul className="py-1 text-sm  text-gray-200 ">
                <li>
                    <a href="#" className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in">
                      Agregar usuario
                    </a>
                  </li>
                 
                  <li>
                    <a href="#" className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in">
                      Eliminar usuario
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2  hover:bg-gray-800 transition duration-100 ease-in ">
                      Banear usuario
                    </a>
                  </li>

                </ul>
                
              </div>
  )
}

export default ModalAdmin