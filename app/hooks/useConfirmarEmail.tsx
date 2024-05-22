import { useRouter } from "next/navigation";
import clienteAxios from "../config/axios";
import { useState } from "react";

const useConfirmarEmail = () => {
    const router = useRouter();
    const confirmarEmail = async (id, hash, setErrores) => {
      try {
        const authToken = localStorage.getItem("AUTH_TOKEN");
        if (!authToken) {
          console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
          // Manejar el caso de usuario no autenticado, por ejemplo, redirigiendo a la página de inicio de sesión.
          router.push('/login')
          return;
        }
    
        const url = `/api/verify-email/${id}/${hash}`;
        // Adjuntar el token al encabezado de la solicitud
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        };
    
        const { data } = await clienteAxios.get(url, config);
        setErrores([]);
        router.push("/generar");
      } catch (error) {
        console.log(error);
        setErrores(Object.values(error?.response?.data.errors));
      }
    };

  return { 
    confirmarEmail
    
   };
};

export default useConfirmarEmail;
