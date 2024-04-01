import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const cerrarModal = () => {
 
    setMenu(false);
  };
  return (
    <>
      <header className="fixed z-50 w-full bg-zinc-800">
        <div className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5">
          <button className="w-[25%] ">
            <Link to="home" duration={1} smooth={true}>
              <img
                className="w-[100%] min-w-16 max-w-16 cursor-pointer"
                src="/src/assets/img/prueba.png"
                alt="..."
                onClick={cerrarModal}
              />
            </Link>
          </button>

          <div className="text-gray-300 items-center hidden sm:flex">
            <ul className="flex items-center gap-0 sm:gap-4 md:gap-6">
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link to="intro" offset={-50} duration={1} smooth={true}>
                  Introducción
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link to="galeria" offset={-70} duration={1} smooth={true}>
                  Galería
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link to="precios" offset={-80} duration={1} smooth={true}>
                  Precios
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link to="faqs" offset={-150} duration={1} smooth={true}>
                  FAQS
                </Link>
              </li>
 
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link to="contacto" offset={-250} duration={1} smooth={true}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:hidden flex flex-col items-center">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              onClick={handleMenu}
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

          <div className="flex  items-center w-[25%]  justify-end">
            <button type="button" onClick={cerrarModal} className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100">
              Get started
            </button>
          </div>
        </div>

        {menu && (
          <div className="w-full sm:hidden">
          <ul className="flex flex-col text-center font-medium rounded-lg bg-zinc-800" >
            <li >
              <Link to="intro" offset={-50} duration={1} smooth={true}>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Introducción
                </a>
              </Link>
            </li>
            <li >
              <Link to="galeria" offset={-250} duration={1} smooth={true}>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Galería
                </a>
              </Link>
            </li>
            <li >
              <Link to="precios" offset={-250} duration={1} smooth={true}>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Precios
                </a>
              </Link>
            </li>
            <li >
              <Link to="faqs" offset={-320} duration={1} smooth={true}>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  FAQS
                </a>
              </Link>
            </li>
            <li > 
              <Link to="contacto" offset={-320} duration={1} smooth={true}>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
        
        )}


      </header>

    </>
  );
};

export default Header;
