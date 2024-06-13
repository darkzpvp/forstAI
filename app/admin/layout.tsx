// @ts-nocheck

"use client";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";
import { useAuth } from "../hooks/useAuth";
import {redirect} from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {isAdmin} = useAuth({})

  if(!isAdmin){
    redirect('/not-found')
  }
  return (
  
        <UsuarioProvider>{children}</UsuarioProvider>
  );
}
