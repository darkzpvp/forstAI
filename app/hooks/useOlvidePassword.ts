import clienteAxios from "../config/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useOlvidePassword = () => {
  const router = useRouter();
  const olvidePassword = async (datos, setErrores, setMensajeOk) => {
    try {
      const { data } = await clienteAxios.post("/api/forgot", datos);

      setErrores([]);

      setMensajeOk(data.status);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error?.response?.data.errors));
    }
  };

  const resetPassword = async (datos, token, setErrores, setMensajeOk) => {
    const url = `/api/reset?token=${token}`;
    try {
      const { data } = await clienteAxios.post(url, datos);
      console.log({ data });
      setErrores([]);
      setMensajeOk(data.status);
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error?.response?.data.errors));
    }
  };

  const comprobarToken = async (token, setTokenValido) => {
    const url = `/api/check-token?token=${token}`;
    try {
      const { data } = await clienteAxios.get(url);
      setTokenValido("");
    } catch (error) {
      setTokenValido(Object.values(error?.response?.data.errors));
    }
  };

  return {
    olvidePassword,
    resetPassword,
    comprobarToken,
  };
};

export default useOlvidePassword;
