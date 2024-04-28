import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import { usePathname } from "next/navigation";


interface InterfazProps {
  menu: boolean;
  suscripcion: boolean;
  setMenu: (value: boolean) => void;
  setSuscripcion: (value: boolean) => void;
  menuHamburguesa: boolean;
  setMenuHamburguesa: (value: boolean) => void;
}

const Header_Dos = ({
  menu,
  setMenu,
  suscripcion,
  setSuscripcion,
  menuHamburguesa,
  setMenuHamburguesa
}: InterfazProps) => {
  const { logout, user } = useAuth({ middleware: "auth", url: "/" });
  const handleSuscripcion = () => {
    setSuscripcion(!suscripcion);
  };
const pathname = usePathname()

console.log(pathname);
 

  const handleMenu = () => {
    setMenu(!menu);
    setSuscripcion(false);
  };

  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
      setSuscripcion(false);
    }
    if(menuHamburguesa){
      setMenuHamburguesa(false)
    }
  };
  const arrowMenu = () => {
    setSuscripcion(false);
  };
const handleMenuHamburguesa = () => {
  setMenuHamburguesa(!menuHamburguesa)
}



useEffect(() => {
  if(menuHamburguesa){
    setMenu(false)
    setMenuHamburguesa(true)
  } else {
    setMenuHamburguesa(false)
  }
  if(menu){
    setMenuHamburguesa(false)
    setMenu(true)
  } else {
    setMenu(false)
  } 
}, [menuHamburguesa, menu])

  return (
    <>
      <div
        className={`${pathname == '/perfil' ? 'fixed' : ''} z-50 w-full bg-gray-900`}
      >
        <div
          className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5"
          onClick={(e) => {
            handleCloseMenu();
            e.stopPropagation();
          }}
         >
          <button className="w-[25%]">
            <Image
              fill={false}
              width={70}
              height={70}
              className="w-[100%] min-w-12 max-w-12 cursor-pointer"
              src="/img/logo/prueba.png"
              alt="..."
            />
          </button>
          <div className="sm:hidden flex flex-col items-center">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              onClick={handleMenuHamburguesa}
              className="flex items-center justify-center p-2 w-10 h-10 text-sm  rounded-lg    text-gray-400 hover:bg-gray-600 active:bg-gray-700 "
              aria-controls="navbar-hamburger"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div className=" hidden sm:flex gap-0 sm:gap-6 md:gap-8">
            <div>
              <Link href={"/"} legacyBehavior>
                <a className=" text-gray-300 cursor-pointer">Home</a>
              </Link>
            </div>
            <div>
              <Link href={"/#precios"} legacyBehavior>
                <a className=" text-gray-300 cursor-pointer">Comprar</a>
              </Link>
            </div>
            <div>
              <Link href={"/#contacto"} legacyBehavior>
                <a className=" text-gray-300 cursor-pointer">Contacto</a>
              </Link>
            </div>
            <div>
              <Link href={"https://huggingface.co/"} legacyBehavior>
                <a target="_blank" className=" text-gray-300 cursor-pointer">
                  API
                </a>
              </Link>
            </div>
          </div>
          <div className="flex  items-center w-[25%]  justify-end">
            <button
              type="button"
              onClick={handleMenu}
              className="flex text-sm bg-gray-800 rounded-full nooverlay"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/img/usuario.svg"
                alt="user photo"
              />
            </button>
          </div>
        </div>

        {menu && (
          <>
            <div
              id="nooverlay"
              className="flex justify-end 2xl:px-60 xl:px-20 lg:px-14  "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute z-50 text-base rounded-b-lg shadow py-4 bg-gray-900  w-full block sm:max-w-56 px-5 h-52 overlay">
                <div className=" flex ">
                  <div className=" w-[0%] ">
                    {suscripcion && (
                      <div
                        className="relative z-50 hover:bg-gray-700 active:bg-gray-800 rounded-lg p-1 stroke-gray-300 w-8 h-8"
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
                        className=" relative z-50 hover:bg-gray-700 active:bg-gray-800 rounded-lg p-1 stroke-gray-300 w-8 h-8"
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
                      {user?.name}
                    </span>
                    <span className="block text-sm text-gray-400 text-center ">
                      {user?.email}
                    </span>
                  </div>
                </div>

                {menu && !suscripcion && (
                  <>
                  <Link href={'/perfil'} legacyBehavior >
                   <a  className=" text-center block  px-4 py-2 text-sm hover:bg-gray-700  rounded-lg text-gray-200 hover:text-white cursor-pointer mx-auto sm:mx-0 w-full mt-6">
                    Ver perfil
                   </a>
                  </Link>
                  <button
                    onClick={handleSuscripcion}
                    className="block  px-4 py-2 text-sm hover:bg-gray-700  rounded-lg text-gray-200 hover:text-white cursor-pointer mx-auto sm:mx-0 w-full "
                   >
                    Suscripciones
                  </button>
                  </>
                )}

                {menu && !suscripcion && (
                  
                  <button
                    onClick={logout}
                    type="submit"
                    className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-lg text-gray-200 hover:text-white mx-auto sm:mx-0 w-full"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </>
        )}
        {menuHamburguesa && (
          <div
            className="w-full sm:hidden"
            onClick={() => setMenuHamburguesa(false)}
          >
            <ul
              className="flex flex-col text-center font-medium rounded-lg bg-gray-900 pb-5"
              onClick={(e) => e.stopPropagation()}
            >
              <li>
                <Link href="/" legacyBehavior>
                  <a
                    className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#precios" legacyBehavior>
                  <a
                    className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                    aria-current="page"
                  >
                    Comprar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contacto" legacyBehavior>
                  <a
                    className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                    aria-current="page"
                  >
                    Contacto
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"https://huggingface.co/"} legacyBehavior>
                  <a
                    className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                    aria-current="page"
                    target="_blank"
                  >
                    API
                  </a>
                </Link>
              </li>
             
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header_Dos;
