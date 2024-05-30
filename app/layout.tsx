// @ts-nocheck

'use client'
import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "./context/UsuarioProvider";
import { InformacionProvider } from "./context/InformacionProvider";
import { DatosProvider } from "./context/DatosBancariosProvider";
import { usePathname } from "next/navigation";
import { EstadoProvider } from "./context/EstadoUsuario";
import useEstadoUsuario from "./hooks/useEstadoUsuario";
import { useEffect } from "react";
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
  return (
    <html lang="en" className=" overflow-x-hidden  ">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />
</head>
      <body className={`${kumbh.className}`}>
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
