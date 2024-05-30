// @ts-nocheck
"use client"
import React, { createContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { DatosBancarios, datosBancariosSchema } from "../validations/datosBancariosSchema";
import useInformacionPersonal from "../hooks/useInformacionPersonal";

const DatosContext = createContext({});
const DatosProvider = ({ children }) => {
  const [errores, setErrores] = useState([]);
const [datosBancarios, setDatosBancarios] = useState([])
  const Router = useRouter();
  const router = usePathname();

  const {
    register,
    handleSubmit,
    watch,
reset,
    formState: { errors },
  } = useForm<DatosBancarios>({
    resolver: zodResolver(datosBancariosSchema),
  });
  const {setContinuarCarrito} = useInformacionPersonal()

  const onSubmit: SubmitHandler<DatosBancarios> = async (data) => {
    setDatosBancarios(data);
    setContinuarCarrito(3);
    Router.push("/carrito/confirmacion");
  };
  useEffect(() => {
    if (router !== '/carrito' && router !== '/carrito/datosbancarios' && router !== '/carrito/confirmacion') {
      reset();
    }
  }, [router]);
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
