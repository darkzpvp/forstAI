import clienteAxios from "../config/axios";
import useSWR, { mutate } from 'swr';

const useSuscripciones = () => {
  const getSuscripciones = async () => {
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
        "Content-Type": "multipart/form-data",
      },
    };

    const url = `/api/ver-suscripcion`;
    try {
      const { data } = await clienteAxios(url, config);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

const eliminarSuscripciones = async () => {
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
      "Content-Type": "multipart/form-data",
    },
  };

  const url = `/api/cancelar-suscripcion`;
  try {
    const { data } = await clienteAxios.delete(url, config);
    mutate()
    return data;

  } catch (error) {
    console.log(error);
  }
};
const Fetcher = async () => {

  try {
    const datos = await getSuscripciones();
    
    return datos;
  } catch (error) {
    console.error("Error al obtener la información de las suscripciones:", error);
    throw error;
  }
};
const { data, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_LARAVEL}/api/suscripciones`, Fetcher);

  return {
    getSuscripciones,
    eliminarSuscripciones,
  };
};

export default useSuscripciones;