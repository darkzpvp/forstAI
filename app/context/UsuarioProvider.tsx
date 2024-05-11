import React, { createContext, useEffect, useState } from "react";
import useCambiarFotoPerfil from "../hooks/useCambiarFotoPerfil";
import suscripciones from "../data/suscripciones.json";
const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const initialCart = ()   => {
    const suscripcionElegida = localStorage.getItem('suscripcionElegida')
    return suscripcionElegida ? JSON.parse(suscripcionElegida) : 0
}
  const [suscripcionElegida, setSuscripcionElegida] = useState(initialCart);


  useEffect(() => {
    localStorage.setItem('suscripcionElegida', JSON.stringify(suscripcionElegida))
}, [suscripcionElegida])



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
    <UsuarioContext.Provider value={{ avatarUrl, setAvatarUrl, suscripcionElegida, setSuscripcionElegida }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export {UsuarioProvider}

export default UsuarioContext;
