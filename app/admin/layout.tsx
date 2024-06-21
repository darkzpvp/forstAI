// @ts-nocheck

"use client";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  
        <UsuarioProvider>{children}</UsuarioProvider>
  );
}
