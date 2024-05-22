import { useState } from "react";
import clienteAxios from "../config/axios";


const useRecibirMail = () => {

    const recibirMail = async (datos, setMensajeOk) => {
       try {
        const {data} = await clienteAxios.post("/api/receive-email", datos);
  
        setMensajeOk(data.status);
       } catch (error) {
        console.log(error);
    }
      };

  return { 
    recibirMail
   };
};

export default useRecibirMail;
