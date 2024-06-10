// @ts-nocheck

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo/prueba.png"
import { useEffect } from "react";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  menuHeader: boolean,
  setMenuHeader: (value: boolean) => void
  modal: boolean;
  }
  
const Header = ({menuHeader, setMenuHeader, modal} : HeaderProps) => {
const {avatarUrl, setAvatarUrl} = useUsuarioContext()


  const handleMenu = () => {
    setMenuHeader(!menuHeader);
  };
  const cerrarModal = () => {
 
    setMenuHeader(false);
  };
  const handleSubmit = () => {
    setMenuHeader(false);
 
  }
const handleClose = () => {
  if (menuHeader) {
    setMenuHeader(false);
  }
}
useEffect(() => {
setAvatarUrl(avatarUrl)
}, [avatarUrl])
  return (
    <>
    {!modal && (

   
      <header className="fixed z-50 w-full bg-zinc-800" >
        <div className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5" onClick={(e) => handleClose()}>
          <button className="w-[25%] " >
            <Link href="#home" legacyBehavior>
              <div className="w-[100%] min-w-12 max-w-12 cursor-pointer">

              <Image
           
                src={Logo}
                alt="..."
                onClick={cerrarModal}
              />
                </div>
            </Link>
          </button>

          <div className="text-gray-300 items-center hidden sm:flex " >
            <ul className="flex items-center gap-0 sm:gap-4 md:gap-6">
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link href="#intro" legacyBehavior>
                  Introducción
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link href="#galeria" legacyBehavior>
                  Galería
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link href="#precios" legacyBehavior>
                  Precios
                </Link>
              </li>
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link href="#faqs" legacyBehavior>
                  FAQS
                </Link>
              </li>
 
              <li className="cursor-pointer hover:text-gray-400 ">
                <Link href="#contacto" legacyBehavior>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:hidden flex flex-col items-center">
        
            <button
              type="button"
              onClick={handleMenu}
              className="flex items-center justify-center p-2 w-10 h-10 text-sm  rounded-lg ease-in duration-100    text-gray-400 hover:bg-gray-600 active:bg-gray-700 "
        
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
          <Link href={'/login'} legacyBehavior>
          <div className="flex  items-center w-[25%]  justify-end">
          <button type="button" onClick={handleSubmit} className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100">

              Get started
        
          </button>
          </div>
          </Link>
        </div>

        <AnimatePresence>

{menuHeader && (
  <div
    id="nooverlay"
    className="flex justify-end 2xl:px-60 xl:px-20 lg:px-14"
    onClick={(e) => e.stopPropagation()}
  >
    <motion.div
      className="absolute z-50 text-base rounded-b-lg shadow py-4 bg-zinc-800 w-full block sm:max-w-56 px-5 h-60 overlay"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: -2 }}
      exit={{ opacity: 0, y: -5 }}

    >
      <div className="flex flex-col text-center">
        <Link href="/#home" legacyBehavior>
          <a
            className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
            aria-current="page"
          >
            Home
          </a>
        </Link>
        <Link href="/#galeria" legacyBehavior>
          <a
            className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
            aria-current="page"
          >
            Galería
          </a>
        </Link>
        <Link href="/#precios" legacyBehavior>
          <a
            className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
            aria-current="page"
          >
            Comprar
          </a>
        </Link>
 <Link  href="/#faqs" legacyBehavior>
          <a
            className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
     
          >
            FAQS
          </a>
        </Link>
        <Link href="/#contacto" legacyBehavior>
          <a
            className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
            aria-current="page"
          >
            Contacto
          </a>
        </Link>

       
  
  
      </div>
    </motion.div>
  </div>
)}
</AnimatePresence>


      </header>
 )}
    </>
  );
};

export default Header;
