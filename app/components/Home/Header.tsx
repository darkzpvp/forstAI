import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo/prueba.png"

interface HeaderProps {
  menuHeader: boolean,
  setMenuHeader: (value: boolean) => void
  }
  
const Header = ({menuHeader, setMenuHeader} : HeaderProps) => {



  const handleMenu = () => {
    setMenuHeader(!menuHeader);
  };
  const cerrarModal = () => {
 
    setMenuHeader(false);
  };
  const handleSubmit = () => {
    setMenuHeader(false);
 
  }
 

  return (
    <>
      <header className="fixed z-50 w-full bg-zinc-800">
        <div className="py-2 mx-auto flex items-center justify-between w-full max-w-4xl px-5">
          <button className="w-[25%] ">
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

          <div className="text-gray-300 items-center hidden sm:flex">
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
          <Link href={'/login'} legacyBehavior>
          <div className="flex  items-center w-[25%]  justify-end">
          <button type="button" onClick={handleSubmit} className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2.5 flex justify-center px-3 transition ease-in duration-100">

              Get started
        
          </button>
          </div>
          </Link>
        </div>

        {menuHeader && (
          <div className="w-full sm:hidden">
          <ul className="flex flex-col text-center font-medium rounded-lg bg-zinc-800" >
            <li >
              <Link href="#intro" legacyBehavior>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Introducción
                </a>
              </Link>
            </li>
            <li >
              <Link href="#galeria" legacyBehavior>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Galería
                </a>
              </Link>
            </li>
            <li >
              <Link href="#precios" legacyBehavior>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  Precios
                </a>
              </Link>
            </li>
            <li >
              <Link href="#faqs" legacyBehavior>
                <a
                  className="block py-2 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-400 active:bg-gray-700 cursor-pointer active:text-gray-500 transition ease-in duration-100"
                  aria-current="page"
                >
                  FAQS
                </a>
              </Link>
            </li>
            <li > 
              <Link href="#contacto" legacyBehavior>
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
