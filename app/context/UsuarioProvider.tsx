'use client'
import React, { createContext, useEffect, useState } from "react";
import useCambiarFotoPerfil from "../hooks/useCambiarFotoPerfil";
import suscripciones from "../data/suscripciones.json";
import clienteAxios from "../config/axios";
import { revalidatePath } from "next/cache";
const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const initialCart = ()   => {
    const suscripcionElegida = localStorage.getItem('suscripcionElegida')
    return suscripcionElegida ? JSON.parse(suscripcionElegida) : 0
}
  const [suscripcionElegida, setSuscripcionElegida] = useState(initialCart);
  const [showModal, setShowModal] = useState(false);
const [loading, setLoading] = useState(true)
const [totalElements, setTotalElements] = useState(0)

  useEffect(() => {
    localStorage.setItem('suscripcionElegida', JSON.stringify(suscripcionElegida))
}, [suscripcionElegida])



  const {recibirFoto  } = useCambiarFotoPerfil();

  useEffect(() => {
    const obtenerAvatar = async () => {
      try {
        const urlImagen = await recibirFoto(avatarUrl, setAvatarUrl);
        if (urlImagen) {
          setAvatarUrl(urlImagen?.url_imagen);
      
        } 
      } catch (error) {
        console.error("Error al obtener la imagen del perfil:", error);
      }
    };
  
    obtenerAvatar();
    
  }, [avatarUrl]);


  const [modalOpen, setModalOpen] = useState(false);


  const [userPanel, setUserPanel] = useState([]);
  const [usuario, setUsuario] = useState({});


  const informacionUsuarioPanel = async() => {
   
    try {
      const authToken = localStorage.getItem("AUTH_TOKEN");
      if (!authToken) {
        console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await clienteAxios("/api/ver-informacion-usuario", {
        headers: config.headers,
      
      });

      setUserPanel(data)

      setLoading(false);
      setTotalElements(data.length);

    } catch (error) {
 console.log(error);
  
    }


  }

 

 

  return (
    <UsuarioContext.Provider value={{ avatarUrl, setAvatarUrl, suscripcionElegida,
       setSuscripcionElegida, modalOpen, setModalOpen, userPanel, showModal, setShowModal, usuario, setUsuario, informacionUsuarioPanel, loading,
       setLoading, totalElements, setTotalElements


     }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export {UsuarioProvider};

export default UsuarioContext;
