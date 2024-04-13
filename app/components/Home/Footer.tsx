import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className=" shadow bg-zinc-800">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0 space-x-3 cursor-pointer">
          <Link href={"#home"} legacyBehavior>
            <Image
              src="/img/logo/prueba.png"
              width={70}
              height={70}
              sizes='100vw'
              alt="ForstAI Logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 ">
          <li>
            <Link href={"#intro"} legacyBehavior>
              <p className="hover:underline me-4 md:me-6 cursor-pointer ">
                Introducción
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#galeria"} legacyBehavior>
              <p className="hover:underline me-4 md:me-6 cursor-pointer ">
                Galería
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#precios"} legacyBehavior>
              <p className="hover:underline me-4 md:me-6 cursor-pointer ">
                Precios
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#faqs"} legacyBehavior>
              <p className="hover:underline me-4 md:me-6 cursor-pointer ">
                FAQS
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#contacto"} legacyBehavior>
              <p className="hover:underline me-4 md:me-6 cursor-pointer ">
                Contacto
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
      <span className="sm:flex justify-center gap-2 text-sm text-gray-300 sm:text-center block ">
        {" "}
        © {new Date().getFullYear()}
        <Link href={"#intro"}>
          <p className="hover:underline cursor-pointer "> ForstAI.</p>{" "}
        </Link>
        Todos los derechos reservados.
      </span>
    </div>
  </footer>
  )
}

export default Footer