// @ts-nocheck

import clienteAxios from "../config/axios";


const useCambiarFotoPerfil = () => {

    const cambiarFoto = async (file, avatarUrl, setAvatarUrl) => {
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
      
          const response = await clienteAxios.post("/api/cambiar-perfil", formData, config);
          console.log(response);
          recibirFoto(avatarUrl, setAvatarUrl)
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
