import clienteAxios from "../config/axios";


export const usePrompt = () => {
  const enviarFormulario = async (userId, setErrores) => {
    try {
      const { data } = await clienteAxios.post("/api/enviar_formulario", { user_id: userId }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
        }
      });
      return data.message;
    } catch (error) {
     
console.log(error);
      setErrores(error.response.data.errors)

    }
    
  };
 


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

  return {
    enviarFormulario,
    getPrompts
  };
};
