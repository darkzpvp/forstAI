import clienteAxios from "../config/axios";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export const useAuth = ({ middleware, url }) => {
  const Router = useRouter();
  const { data: user, error, mutate } = useSWR(
    "/api/user",
    () =>
      clienteAxios("/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AUTH_TOKEN")}`,
        },
      })
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error?.response?.data?.message || error.message);
        }),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  const login = async (datos, setErrores, email, setMensajeOk) => {
    try {
      const { data } = await clienteAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      if (data.user.email_verified_at === null) {
        await mandarEmailVerificacion(email, setMensajeOk);
      }
      if (data.user.email_verified_at !== null) {
        Router.push("/generar");
      }
      setErrores([]);
      await mutate();
    } catch (error) {
      console.log(error);
      console.log(error.response.data.incorrecto);
      setErrores(error.response.data.incorrecto);
    }
  };

  const registro = async (datos, email, setMensajeOk) => {
    try {
      await clienteAxios("/sanctum/csrf-cookie");
      const { data } = await clienteAxios.post("/api/registro", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      await mutate();
      await mandarEmailVerificacion(email, setMensajeOk);
    } catch (error) {
      console.log(error);
    }
  };

  const crearUsuario = async (datos) => {
    try {
      await clienteAxios("/sanctum/csrf-cookie");
      const { data } = await clienteAxios.post("/api/registro", datos);
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const mandarEmailVerificacion = async (email, setMensajeOk) => {
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
      setMensajeOk(data.status);
    } catch (error) {
      console.log(error);
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
      Router.push("/");
    } catch (error) {
      throw Error(error?.response?.data?.message);
    }
  };

  const eliminarCuentaPerfil = async (
    contraseña,
    setErroresEliminarCuenta,
    erroresEliminarCuenta
  ) => {
    console.log(contraseña);
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

      const { data } = await clienteAxios.delete("/api/eliminar-cuenta", {
        headers: config.headers,
        data: contraseña,
      });
      localStorage.removeItem("AUTH_TOKEN");

      Router.push("/");
      window.location.reload();
    } catch (error) {
      setErroresEliminarCuenta(Object?.values(error?.response?.data.errors));
      setTimeout(() => {
        setErroresEliminarCuenta([]);
      }, 5000);
    }
  };

  useEffect(() => {
    if (middleware === "guest" && url && user) {
      redirect(url);
    }

    if (middleware === "guest" && user && user.rol === 1) {
      redirect("/admin");
    }

    if (middleware === "admin" && user && user.rol !== 1) {
      redirect("/");
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
    eliminarCuentaPerfil,
    crearUsuario,
  };
};
