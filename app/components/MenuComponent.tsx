// @ts-nocheck

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define el componente del menú
const MenuComponent = ({ handleCloseMenu, user, logout }) => (
  <div
    id="nooverlay"
    className="flex justify-end 2xl:px-60 xl:px-20 lg:px-14"
    onClick={(e) => e.stopPropagation()}
  >
    <motion.div
      className="absolute z-50 text-base rounded-b-lg shadow py-4 bg-gray-900 w-full block sm:max-w-56 px-5 h-44 overlay"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -2 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex">
        <div className="w-[0%]">
          <div
            className="absolute top-0 z-50 hover:bg-gray-700 active:bg-gray-800 rounded-lg p-1 stroke-gray-300 w-8 h-8"
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
        </div>

        <div className="w-[100%] mt-5 ">
          <span className="block text-sm text-white text-center">
            {user?.name}
          </span>
          <span className="block text-sm text-gray-400 text-center ">
            {user?.email}
          </span>
        </div>
      </div>

      <Link href="/perfil" legacyBehavior>
        <a className="text-center block px-4 py-2 text-sm hover:bg-gray-700 rounded-lg text-gray-200 hover:text-white cursor-pointer mx-auto sm:mx-0 w-full mt-3">
          Ver perfil
        </a>
      </Link>

      <button
        onClick={logout}
        type="submit"
        className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-lg text-gray-200 hover:text-white mx-auto sm:mx-0 w-full"
      >
        Logout
      </button>
    </motion.div>
  </div>
);

// Uso del componente del menú
const MyComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenMenu}>Abrir menú</button>
      {menuOpen && (
        <MenuComponent
          handleCloseMenu={handleCloseMenu}
  
        />
      )}
    </>
  );
};

export default MyComponent;
