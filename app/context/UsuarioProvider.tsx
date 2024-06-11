// @ts-nocheck

'use client'
import React, { createContext, useState } from "react";
import clienteAxios from "../config/axios";
import useSWR from "swr";

const UsuarioContext = createContext({});
const UsuarioProvider = ({ children }) => {
  const [errores, setErrores] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);
const [totalElements, setTotalElements] = useState(0)

  const [modalOpen, setModalOpen] = useState(false);
  const [usuario, setUsuario] = useState({});

  const informacionUsuarioPanel = async () => {
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
  
        const response = await clienteAxios.get('/api/ver-informacion-usuario', config);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    const { data: userPanel, error: avatarError, mutate: mutateAvatar } = useSWR('usuarioPanel', informacionUsuarioPanel);

  

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

return data
} catch (error) {
  console.log(error);
}
}
const { data: usuarioSemana } = useSWR('usuarioSemana', usuarioSemanaPanel);


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

  return data
} catch (error) {
  console.log(error);
}
}
const { data: beneficioSemana } = useSWR('beneficioSemana', beneficioSemanaPanel);


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
return data
} catch (error) {
  console.log(error);
}
}
const { data: ingresosTotales } = useSWR('ingresosTotales', ingresosTotalesPanel);

  return (
    <UsuarioContext.Provider value={{ 
        modalOpen, setModalOpen, userPanel, showModal, setShowModal, usuario, setUsuario, informacionUsuarioPanel, totalElements, setTotalElements, usuarioSemanaPanel, beneficioSemanaPanel, ingresosTotalesPanel, ingresosTotales, 
      usuarioSemana, beneficioSemana, errores, setErrores, mensaje, setMensaje, loading: !userPanel, loadingPage: !usuarioSemana || !beneficioSemana || !ingresosTotales



     }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export {UsuarioProvider};

export default UsuarioContext;
