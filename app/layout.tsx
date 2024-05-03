import type { Metadata } from "next";

import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
import { useEffect } from "react";
const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Generador de imágenes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className=" ">

      <body className={`${kumbh.className}`}>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>

  {children}

     

        </body>
    </html>
  );
}
