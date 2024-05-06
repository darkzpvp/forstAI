'use client'
import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { UsuarioProvider } from "./context/UsuarioProvider";
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
  
  return (
    <html lang="en" className="  ">
<head>
  <title>Generador de imagenes</title>
  <meta name="description" content="Generador de imagenes" />
</head>
      <body className={`${kumbh.className}`}>
<UsuarioProvider>
    {children}

</UsuarioProvider>

     

        </body>
    </html>
  );
}
