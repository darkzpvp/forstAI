'use client'
import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import "../globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "../context/UsuarioProvider";
import Sidebar from "../components/Perfil/Sidebar";
import { useState } from "react";
import useUsuarioContext from "../hooks/useUsuarioContext";
import Modal from "../components/CambiarPerfil/Modal";
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


  return (
    <html lang="en" className=" overflow-x-hidden  ">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />
</head>
      <body className={`${kumbh.className}`}>
<UsuarioProvider>
    <Sidebar/>
    {children}

</UsuarioProvider>

     

        </body>
    </html>
  );
}
