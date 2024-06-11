// @ts-nocheck

import useSWR, { mutate } from "swr";
import clienteAxios from "../config/axios";

const useCambiarFotoPerfil = () => {

  const fetchAvatar = async () => {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_LARAVEL}/api/imagen-perfil`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      return data.url_imagen;
    } catch (error) {
      console.error('Error al obtener la imagen de perfil:', error);
      throw error;
    }
  };

  const { data: avatarData, error: avatarError, mutate: mutateAvatar } = useSWR('avatar', fetchAvatar);

  const cambiarFoto = async (file) => {
    try {
      const authToken = localStorage.getItem("AUTH_TOKEN");
      if (!authToken) {
        console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
        return;
      }
      
      const formData = new FormData();
      formData.append("imagen", file); 
  
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data", 
        },
      };
  
      // Realiza la solicitud para cambiar la foto de perfil
      const response = await clienteAxios.post("/api/cambiar-perfil", formData, config);
      
      // Si la solicitud es exitosa, actualiza la caché de la imagen de perfil
      if (response.status === 200) {
        mutateAvatar(); // Esto actualizará la imagen de perfil en la caché
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { 
    cambiarFoto,
    avatarData,
    avatarError
  };
};

export default useCambiarFotoPerfil;
