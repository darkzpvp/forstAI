  'use client'
import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import "../globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "../context/UsuarioProvider";
import Sidebar from "../components/Perfil/Sidebar";
import { useEffect, useState } from "react";
import useUsuarioContext from "../hooks/useUsuarioContext";
import Modal from "../components/CambiarPerfil/Modal";
import { redirect } from "next/navigation";
const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
        if (
          localStorage.getItem("suscripcionElegida") === null ||
          localStorage.getItem("suscripcionElegida") === undefined ||
          localStorage.getItem("suscripcionElegida") === "" ||
          localStorage.getItem("suscripcionElegida") === "0"
        ) {
          redirect("/");
        }
      }, []);
    

  return (
    <html lang="en" className=" overflow-x-hidden  ">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />
</head>
      <body className={`${kumbh.className}`}>
<UsuarioProvider>

    {children}

</UsuarioProvider>

     

        </body>
    </html>
  );
}
