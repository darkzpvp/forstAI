import { useState } from "react";
import clienteAxios from "../config/axios";


const useCambiarFotoPerfil = () => {

    const cambiarFoto = async (file) => {
        try {
          const authToken = localStorage.getItem("AUTH_TOKEN");
          if (!authToken) {
            console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
            return;
          }
          
          const formData = new FormData();
          formData.append("imagen", file); // Aquí asumo que el nombre del campo en el servidor es "imagen"
      
          const config = {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "multipart/form-data", // Asegúrate de establecer el tipo de contenido correctamente
            },
          };
      
          const response = await clienteAxios.post("/api/cambiar-perfil", formData, config);
          console.log(response.data); // Maneja la respuesta del servidor según tus necesidades
        } catch (error) {
          console.log(error);
        }
      };


      const recibirFoto = async (avatarUrl, setAvatarUrl) => {
        try {
            const authToken = localStorage.getItem("AUTH_TOKEN");
            if (!authToken) {
              console.log(
                "Usuario no autenticado. Redirigiendo a la página de inicio de sesión..."
              );
              return;
            }
            const config = {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            };
         const {data} = await clienteAxios("/api/imagen-perfil", config);
         
            setAvatarUrl(data.url_imagen);
         
        } catch (error) {
         console.log(error);
     }
       };

  return { 
    cambiarFoto,
    recibirFoto
   };
};

export default useCambiarFotoPerfil;
