import React, { createContext, useEffect, useState } from "react";
import useCambiarFotoPerfil from "../hooks/useCambiarFotoPerfil";

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const {recibirFoto  } = useCambiarFotoPerfil();
  useEffect(() => {
    const obtenerAvatar = async () => {
      try {
        const urlImagen = await recibirFoto(avatarUrl, setAvatarUrl);
        if (urlImagen) {
          setAvatarUrl(urlImagen.url_imagen);
      
        } 
      } catch (error) {
        console.error("Error al obtener la imagen del perfil:", error);
      }
    };
  
    obtenerAvatar();
    
  }, [recibirFoto]);
  return (
    <UsuarioContext.Provider value={{ avatarUrl, setAvatarUrl }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export {UsuarioProvider}

export default UsuarioContext;
