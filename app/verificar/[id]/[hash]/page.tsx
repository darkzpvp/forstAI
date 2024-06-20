// @ts-nocheck

"use client";
import React, { useEffect, useState } from "react";

import PagePrincipal from "../../../page"
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
 function Page({ params }: { params: { id: number; hash: string } }) {
  const { user, confirmarEmail, mutate, usuarioVerificado } = useAuth({});
  const [idUrl, setIdUrl] = useState(params.id);
  const [hashUrl, setHashUrl] = useState(params.hash);
  const Router = useRouter()
const Path = usePathname()
  useEffect(() => {
    const verificar = async () => {
      try {
        await confirmarEmail(idUrl, hashUrl);
        await mutate(); 
      
          Router.push('/generar')
      
      } catch (error) {
        console.error('Error al verificar email:', error);
      }
    };

    verificar(); // Llamar a la función verificar dentro del useEffect
  }, [idUrl, hashUrl, Path, user, usuarioVerificado]); // Dependencias del useEffect
 
  return <PagePrincipal />;
}

export default Page;
