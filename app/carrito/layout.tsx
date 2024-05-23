  'use client'
import "tailwindcss/tailwind.css";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";
import { useEffect } from "react";

import { redirect } from "next/navigation";


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

<UsuarioProvider>
    {children}
</UsuarioProvider>

  );
}
