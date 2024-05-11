'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "./context/UsuarioProvider";
import { InformacionProvider } from "./context/InformacionProvider";
import { DatosProvider } from "./context/DatosBancariosProvider";
import { usePathname } from "next/navigation";
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
  const Path = usePathname()
  if(Path !== '/carrito' && Path !== '/carrito/datosbancarios' && Path !== '/carrito/confirmacion'){
    localStorage.removeItem('suscripcionElegida');
    localStorage.removeItem('carrito');
  }
  return (
    <html lang="en" className="  ">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />
</head>
      <body className={`${kumbh.className}`}>
<UsuarioProvider>
  <InformacionProvider>
    <DatosProvider>
              {children}

    </DatosProvider>

  </InformacionProvider>

</UsuarioProvider>

     

        </body>
    </html>
  );
}
