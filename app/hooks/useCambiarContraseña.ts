import clienteAxios from "../config/axios";
import useUsuarioContext from "./useUsuarioContext";

const useCambiarContraseña = () => {
  const {mensaje, setMensaje} = useUsuarioContext()
  const cambiarContraseña = async (datos, setErrores) => {
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
        "Content-Type": "application/json", // Cambiado a application/json si estás enviando datos JSON
      },
    };

    const url = `/api/change-password`;
    try {
      const { data } = await clienteAxios.post(url, datos, config); // Cambiado el orden de los argumentos
      setMensaje(data.message)
      setTimeout(() => {
setMensaje("")
      }, 5000)
      setErrores([]);
      return data;
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error.response.data.incorrecto));
      setTimeout(() => {
        setErrores([]);
      }, 5000);
    }
  };

  return {
    cambiarContraseña,
  };
};

export default useCambiarContraseña;
