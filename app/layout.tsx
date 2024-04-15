import type { Metadata } from "next";

import "./globals.css";
import { Kumbh_Sans} from 'next/font/google'
const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Generador de imágenes",
  description: "Generador de imágenes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      
      <body className={`${kumbh.className}`}>

  {children}

     

        </body>
    </html>
  );
}
