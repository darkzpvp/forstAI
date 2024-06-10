// @ts-nocheck

"use client";
import "../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <html className=" overflow-x-hidden">
    <body>
        
       {children}
    </body>
  </html>
  );
}
