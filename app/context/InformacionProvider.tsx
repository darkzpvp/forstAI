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
import { headers } from "next/headers";
import useUsuarioContext from "../hooks/useUsuarioContext";

const InformacionContext = createContext({});

const InformacionProvider = ({ children }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

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

    const datosUser = async (idUser) => {
      try {
        const authToken = localStorage.getItem("AUTH_TOKEN")
        if(!authToken){
          console.log('Usuario no autenticado'); return
        }
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
        const {data} = await clienteAxios(`api/informacion-usuario-panel/${idUser}`, config)
        return data[0]
      } catch (error) {
        console.log(error);
      }
    }

const actualizarDatosUserId = async(idUser, usuario) => {
  try {
    const authToken = localStorage.getItem("AUTH_TOKEN")
    if(!authToken){
      console.log('Usuario no autenticado'); return
    }
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
    const {data} = await clienteAxios.put(`api/informacion-usuario-panel/${idUser}`, usuario, config)
  } catch (error) {
    console.log(error);
  }
}


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


const eliminarUsuario = async(datos) => {
  try {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    if (!authToken) {
      console.log('No autenticado');
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: datos
    };
    const { data } = await clienteAxios.delete('api/eliminar-cuenta-usuario', config);
    console.log(data); 
  } catch (error) {
    console.log(error);
  }
};


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
        datosPersonales,
        getInformacion,
        datosUser,
        actualizarDatosUserId,
        selectedUsers,
        setSelectedUsers,
        eliminarUsuario
      }}
    >
      {children}
    </InformacionContext.Provider>
  );
};

export { InformacionProvider };
export default InformacionContext;
