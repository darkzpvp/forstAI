"use client";
import "tailwindcss/tailwind.css";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";

import { useAuth } from "../hooks/useAuth";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth({ middleware: "admin" });

  return (
  
        <UsuarioProvider>{children}</UsuarioProvider>
  );
}
