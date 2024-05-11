import React, { createContext, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { DatosBancarios, datosBancariosSchema } from "../validations/datosBancariosSchema";
import useInformacionPersonal from "../hooks/useInformacionPersonal";

const DatosContext = createContext({});
const DatosProvider = ({ children }) => {
  const [errores, setErrores] = useState([]);
const [datosBancarios, setDatosBancarios] = useState([])
  const Router = useRouter();

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<DatosBancarios>({
    resolver: zodResolver(datosBancariosSchema),
  });
  const {
    continuarCarrito,
    setContinuarCarrito
     } = useInformacionPersonal();
  const onSubmit: SubmitHandler<DatosBancarios> = async (data) => {
    setDatosBancarios(data)
  setContinuarCarrito(3)
    Router.push("/carrito/confirmacion");
    
  };

  return (
    <DatosContext.Provider
      value={{
        errores,
        setErrores,
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors,
        datosBancarios
      }}
    >
      {children}
    </DatosContext.Provider>
  );
};

export { DatosProvider };
export default DatosContext;
