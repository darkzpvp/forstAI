import clienteAxios from "../config/axios";
import useSWR from "swr";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const useAuth = ({ middleware, url }) => {
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    clienteAxios("/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response?.data?.message);
      })
  );
  const login = async (datos, setErrores, email, setMensajeOk) => {
    try {
      const { data } = await clienteAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      console.log(data);
      if (data.user.email_verified_at === null) {
        await mandarEmailVerificacion(email, setErrores, setMensajeOk);
      }
      setErrores([]);
      await mutate();
    } catch (error) {
      console.log(error);
    
        setErrores(Object.values(error.response.data.errors));
      }
    }
  

  const registro = async (datos, setErrores, email, setMensajeOk) => {
    try {
      await clienteAxios("/sanctum/csrf-cookie");
      const { data } = await clienteAxios.post("/api/registro", datos);
      console.log(data);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrores([]);
      await mutate();
      mandarEmailVerificacion(email, setErrores, setMensajeOk);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error?.response?.data.errors));
    }
  };

  const mandarEmailVerificacion = async (email, setErrores, setMensajeOk) => {
    try {
      setMensajeOk("");
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

      const { data } = await clienteAxios.post(
        "/api/email/verification-notification",
        email,
        config
      );
      setErrores([]);
      setMensajeOk(data.status);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error?.response?.data.errors));
    }
  };

  const logout = async () => {
    try {
      await clienteAxios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {
      throw Error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (middleware === "guest" && url && user) {
      redirect(url);
    }

    if (middleware === "auth" && error) {
      redirect("/");
    }
  }, [user, error]);
  return {
    login,
    registro,
    logout,
    user,
    error,
  };
};
