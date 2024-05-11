import React, {
  ChangeEventHandler,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import clienteAxios from "../config/axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  InformacionPersonal,
  informacionPersonalSchema,
} from "../validations/informacionPersonalSchema";

const InformacionContext = createContext({});

const InformacionProvider = ({ children }) => {
  const [errores, setErrores] = useState([]);
const [datosPersonales, setDatosPersonales] = useState([])
  const Router = useRouter();
  const informacionPersonal = async (datos) => {
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
        "Content-Type": "multipart/form-data", // Asegúrate de establecer el tipo de contenido correctamente
      },
    };

    const url = `/api/informacion-personal`;
    try {
      const { data } = await clienteAxios.post(url, datos, config);
      setErrores([]);

      Router.push("/carrito/datosbancarios");
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error?.response?.data.errors));
    }
  };

useEffect(() => {
  const getInformacion = async () => {
        try {
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
            },
            };
            const { data } = await clienteAxios("/api/informacion-personal", config);
            setDatosPersonales(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    getInformacion()
}, [])
  




  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<InformacionPersonal>({
    resolver: zodResolver(informacionPersonalSchema),
  });

  const onSubmit: SubmitHandler<InformacionPersonal> = async (data) => {
    await informacionPersonal(data);
    setContinuarCarrito(2)
    Router.push("/carrito/datosbancarios");
  };

const [continuarCarrito, setContinuarCarrito] = useState<number>(1)


  return (
    <InformacionContext.Provider
      value={{
        errores,
        setErrores,
        informacionPersonal,
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors,
        continuarCarrito,
        setContinuarCarrito,
        datosPersonales
      }}
    >
      {children}
    </InformacionContext.Provider>
  );
};

export { InformacionProvider };
export default InformacionContext;
