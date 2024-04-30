import clienteAxios from "../config/axios";
import useSWR from "swr";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const useAuth = ({ middleware, url }) => {
  const {data: user, error, mutate} = useSWR("/api/user", () =>
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
  const login = async (datos, setErrores) => {
    try {
      const { data } = await clienteAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrores([]);
      await mutate();
    } catch (error) {
      if (error.response.status === 419) {
        // Handle expired session or CSRF token mismatch
        console.error("Session expired or CSRF token mismatch");
        localStorage.removeItem("AUTH_TOKEN"); // Clear token
        // Redirect to login page or prompt re-authentication
      } else {
        setErrores(Object.values(error.response.data.errors));
      }
    }
  };

  const registro = async (datos, setErrores) => {
    try {
      await clienteAxios("/sanctum/csrf-cookie");
      const { data } = await clienteAxios.post("/api/registro", datos); 
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrores([]);
      await mutate();
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
