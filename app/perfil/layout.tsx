"use client";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";
import Sidebar from "../components/Perfil/Sidebar";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Header_Dos from "../components/Header_Dos";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth({ middleware: "auth", url: "/perfil" });

  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };
  return (

        <UsuarioProvider>
          <div className=" sm:hidden flex">
            <Header_Dos
              menu={menu}
              setMenu={setMenu}
              menuHamburguesa={menuHamburguesa}
              setMenuHamburguesa={setMenuHamburguesa}
            />
          </div>
          <div onClick={handleCloseMenu}>
             <Sidebar />
          {children}
          </div>
         
        </UsuarioProvider>
  );
}
