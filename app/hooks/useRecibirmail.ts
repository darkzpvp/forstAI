import { useState } from "react";
import clienteAxios from "../config/axios";


const useRecibirMail = () => {

    const recibirMail = async (datos, setErrores, setMensajeOk) => {
       try {
        const {data} = await clienteAxios.post("/api/receive-email", datos);
        setErrores([]);
  
        setMensajeOk(data.status);
       } catch (error) {
        console.log(error);
        setErrores(Object.values(error?.response?.data.errors));
    }
      };

  return { 
    recibirMail
   };
};

export default useRecibirMail;
