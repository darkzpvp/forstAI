import clienteAxios from "../config/axios";
import { useEffect } from "react";
import { redirect } from "next/navigation";

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
     

      setErrores(error.response.data.errors)

    }
    
  };
 
  return {
    enviarFormulario
  };
};
