// @ts-nocheck

'use client'
import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "./context/UsuarioProvider";
import { InformacionProvider } from "./context/InformacionProvider";
import { DatosProvider } from "./context/DatosBancariosProvider";
import { redirect, usePathname } from "next/navigation";
import { EstadoProvider } from "./context/EstadoUsuario";
import useEstadoUsuario from "./hooks/useEstadoUsuario";
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
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

const {state, setState, count, setCount, remaining, setRemaining, ultimaActividad} = useEstadoUsuario()

const Path = usePathname();

useEffect(() => {
  if (Path !== '/carrito' && Path !== '/carrito/datosbancarios' && Path !== '/carrito/confirmacion' && Path !== '/perfil') {
    localStorage.removeItem('suscripcionElegida');
    localStorage.removeItem('carrito');
  }
}, [Path]);

const {usuarioVerificado, mutate} = useAuth({})
const rutasPrivadas = ['/carrito', '/generar', '/perfil', '/verificar'];

const verificarYMutate = async () => {
  if (Path === '/verificar') {
    await mutate(); 
  } else if (rutasPrivadas.includes(Path)) {
    if (!usuarioVerificado) {
      redirect('/login'); 
    } 
   
  }

};

useEffect(() => {
  verificarYMutate();

}, [Path])

  return (
    <html lang="en">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />

</head>
      <body className={`${kumbh.className} overflow-x-hidden`}>
<UsuarioProvider>
  <InformacionProvider>
    <DatosProvider>
      <EstadoProvider>
                      {children}

      </EstadoProvider>
    </DatosProvider>
  </InformacionProvider>
</UsuarioProvider>

        </body>
    </html>
  );
}
