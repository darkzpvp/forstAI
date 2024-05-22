import clienteAxios from "../config/axios";


export const usePrompt = () => {
  const enviarFormulario = async (datos, setErrores) => {
  
      const authToken = localStorage.getItem("AUTH_TOKEN");
      if (!authToken) {
        console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data", // Asegúrate de establecer el tipo de contenido correctamente
        },
      };

      try {
      const { data } = await clienteAxios.post("/api/enviar_formulario", datos, config) 
        return data.message;
      } catch (error) {
console.log(error);
setErrores(error?.response?.data?.errors)
      }
    }
  



  const getPrompts = async (userId, setErrores) => {
    try {
     
      const token = localStorage.getItem("AUTH_TOKEN");
      const response = await clienteAxios.get(`/api/prompts?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setErrores(response.data.errors)
      return response.data.prompts;

    } catch (error) {
    
    }
  }
  const getTextPrompts = async (setTextPrompt, setLoading, setTotalElements) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN");

      const response = await clienteAxios.get(`/api/ver-prompts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });      
      setTextPrompt(response.data);
      setLoading(false);
      setTotalElements(response.data.length);
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
    
  }

  return {
    enviarFormulario,
    getPrompts,
    getTextPrompts
  };
};
