// @ts-nocheck

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const NavegacionMobile = () => {

    const Router = usePathname()
  return (
    <div className=" sm:hidden flex text-sm font-medium text-center  border-b  text-gray-400 border-gray-700 px-4">
    <ul className="flex flex-wrap -mb-px">
      <li className="me-2">
        <Link href={'/perfil'}
          className={`inline-block p-4  border-b-2  rounded-t-lg active ${Router === '/perfil' ? 'text-[#727ee4] border-[#727ee4]' : 'text-gray-400 border-gray-700'}  `}
          >
          Perfil
          </Link>
      </li>
      <li className="me-2">
        <Link
          href={'/perfil/historial-prompts'}
          className={`inline-block p-4  border-b-2  rounded-t-lg active ${Router === '/perfil/historial-prompts' ? 'text-[#727ee4] border-[#727ee4]' : 'text-gray-400 border-gray-700'}  `}
        >
          Historial de prompts
        </Link>
      </li>
  
    </ul>
  </div>
  )
}

export default NavegacionMobile