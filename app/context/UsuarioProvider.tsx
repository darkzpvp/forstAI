'use client'
import React, { createContext, useEffect, useState } from "react";
import useCambiarFotoPerfil from "../hooks/useCambiarFotoPerfil";
import clienteAxios from "../config/axios";

const UsuarioContext = createContext({});
const UsuarioProvider = ({ children }) => {
  const [errores, setErrores] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const initialCart = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const suscripcionElegida = localStorage.getItem('suscripcionElegida');
      return suscripcionElegida ? JSON.parse(suscripcionElegida) : 0;
    } else {
      return 0; // O cualquier otro valor predeterminado si localStorage no está disponible
    }
  };
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

const [usuarioId, setUsuarioId] = useState([])

  const informacionUsuarioId = async(id, setTextPrompt, setLoading, setTotalElementsUser) => {
   
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

      const { data } = await clienteAxios(`api/informacion-usuario-panel/${id}`, {
        headers: config.headers,
      
      });
       setUsuarioId(data)
       setTextPrompt(data?.prompts)
       setLoading(false)
       setTotalElementsUser(data?.prompts?.length)
    } catch (error) {
 console.log(error);
  
    }
  }
const [usuarioSemana, setUsuarioSemana] = useState([])

const usuarioSemanaPanel = async() => {
try {
  const authToken = localStorage.getItem('AUTH_TOKEN')
  if(!authToken){
    console.log('Usuario no autenticado');
    return
  }
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const {data} = await clienteAxios('api/usuarios-ultima-semana', config)

  setUsuarioSemana(data)
} catch (error) {
  console.log(error);
}
}

const [beneficioSemana, setBeneficioSemana] = useState([])

const beneficioSemanaPanel = async() => {
try {
  const authToken = localStorage.getItem('AUTH_TOKEN')
  if(!authToken){
    console.log('Usuario no autenticado');
    return
  }
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const {data} = await clienteAxios('api/suscripcion/beneficio', config)

  setBeneficioSemana(data)
} catch (error) {
  console.log(error);
}
}

const [ingresosTotales, setIngresosTotales] = useState([])

const ingresosTotalesPanel = async() => {
try {
  const authToken = localStorage.getItem('AUTH_TOKEN')
  if(!authToken){
    console.log('Usuario no autenticado');
    return
  }
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const {data} = await clienteAxios('api/suscripcion/total', config)
  setIngresosTotales(data)
} catch (error) {
  console.log(error);
}
}

  return (
    <UsuarioContext.Provider value={{ avatarUrl, setAvatarUrl, suscripcionElegida,
       setSuscripcionElegida, modalOpen, setModalOpen, userPanel, showModal, setShowModal, usuario, setUsuario, informacionUsuarioPanel, loading,
       setLoading, totalElements, setTotalElements, informacionUsuarioId, setUsuarioId, usuarioId, usuarioSemanaPanel, beneficioSemanaPanel, ingresosTotalesPanel, ingresosTotales, setIngresosTotales, 
      usuarioSemana, setUsuarioSemana, beneficioSemana, setBeneficioSemana, errores, setErrores, mensaje, setMensaje



     }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export {UsuarioProvider};

export default UsuarioContext;
