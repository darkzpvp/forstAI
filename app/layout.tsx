import type { Metadata } from "next";
import { LoginProvider } from "./context/LoginContext";
import { UsuariosProvider } from "./context/UsuariosContext";
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
<LoginProvider>
  <UsuariosProvider>
  {children}
  </UsuariosProvider>
</LoginProvider>
     

        </body>
    </html>
  );
}
