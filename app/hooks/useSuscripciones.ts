import clienteAxios from "../config/axios";

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
      console.log(data);
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
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
};



  return {
    getSuscripciones,
    eliminarSuscripciones,
  };
};

export default useSuscripciones;