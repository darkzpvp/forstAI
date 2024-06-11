// @ts-nocheck

"use client";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";

import { useAuth } from "../hooks/useAuth";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   useAuth({ middleware: "admin", url: "/" });

  return (
  
        <UsuarioProvider>{children}</UsuarioProvider>
  );
}
