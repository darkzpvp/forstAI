// @ts-nocheck

"use client";
import "../globals.css";
import { UsuarioProvider } from "../context/UsuarioProvider";
import { useAuth } from "../hooks/useAuth";
import {useRouter} from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const {isAdmin} = useAuth({})
const Router = useRouter()
if(!isAdmin){
  Router.replace('/not-found')
}
  return (
  
        <UsuarioProvider>{children}</UsuarioProvider>
  );
}
