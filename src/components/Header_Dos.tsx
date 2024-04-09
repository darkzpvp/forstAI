import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Header_Dos = ({menu, setMenu, suscripcion, setSuscripcion}) => {
    const handleSuscripcion = () => {
        setSuscripcion(!suscripcion);
      };
      const handleMenu = () => {
        setMenu(!menu);
        setSuscripcion(false);
      };
      
      const handleCloseMenu = () => {
        if (menu) {
          setMenu(false);
          setSuscripcion(false);
        }
      };
      const arrowMenu = () => {
        setSuscripcion(false);
      };
  return (
   <>
      <div className=" z-50 w-full bg-zinc-800 overlay">
   <div className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5" onClick={handleCloseMenu}>
        <button className="w-[25%]">
          
            <img
              className="w-[100%] min-w-12 max-w-12 cursor-pointer"
              src="/src/assets/img/prueba.png"
              alt="..."
            />
         
        </button>

        <div>
          <Link to="/">
            <a className=" text-gray-300 cursor-pointer">Home</a>
          </Link>
        </div>
        <div className="flex  items-center w-[25%]  justify-end">
          <button
            type="button"
            onClick={handleMenu}
            className="flex text-sm bg-gray-800 rounded-full"
          >
          
            <img
              className="w-8 h-8 rounded-full"
              src="/src/assets/img/usuario.svg"
              alt="user photo"
            />
          </button>
        </div>
      </div>

      {menu && (
        <>
          <div className="flex justify-end 2xl:px-60 xl:px-20 lg:px-14 ">
            <div className="absolute z-50 text-base rounded-b-lg shadow bg-zinc-800  w-full block sm:max-w-56 px-5 h-40">
              <div className=" flex ">
                <div className=" w-[0%] ">
                  {suscripcion && (
                    <div
                      className="relative z-50 hover:bg-gray-600 active:bg-gray-700 rounded-lg p-1 stroke-gray-300 w-8 h-8"
                      onClick={arrowMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className=""
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                    </div>
                  )}

                  {!suscripcion && (
                    <div
                      className=" relative z-50 hover:bg-gray-600 active:bg-gray-700 rounded-lg p-1 stroke-gray-300 w-8 h-8"
                      onClick={handleCloseMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className=""
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-[100%] ">
                  <span className="block text-sm text-white text-center">
                    Víctor Valverde
                  </span>
                  <span className="block text-sm text-gray-400 text-center ">
                    hola@correo.com
                  </span>
                </div>
              </div>

              {menu && !suscripcion && (
                <button
                  onClick={handleSuscripcion}
                  className="block  px-4 py-2 text-sm hover:bg-gray-600  rounded-lg text-gray-200 hover:text-white cursor-pointer mx-auto sm:mx-0 w-full mt-6"
                >
                  Suscripciones
                </button>
              )}
              {suscripcion && (
                <>
                  <p className="block px-4 text-sm rounded-lg text-gray-200 hover:text-white font-bold text-center  mt-6 mb-2 ">
                    Aún no te has suscrito
                  </p>
                
                </>
              )}

              {menu && !suscripcion && (
                <button className="block px-4 py-2 text-sm hover:bg-gray-600 rounded-lg text-gray-200 hover:text-white mx-auto sm:mx-0 w-full">
                  Logout
                </button>
              )}
            </div>
          </div>
        </>
      )}
      </div>
   </>
  )
}

export default Header_Dos