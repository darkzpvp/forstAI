// @ts-nocheck

import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import useSWR from "swr";

export const usePrompt = () => {

  const enviarFormulario = async (datos, setErrores) => {
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
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await clienteAxios.post(
        "/api/enviar_formulario",
        datos,
        config
      );
      mutateData(); 
      return data.message;
    } catch (error) {
      console.log(error);
      setErrores(error?.response?.data?.errors);
    }
  };
  const getPrompts = async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN");
      const response = await clienteAxios(`/api/prompts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response?.data?.prompts;
    } catch (error) {

    }
  };
  
  const { data: promptsData, error: errorData, mutate: mutateData } = useSWR('promptsTotal', getPrompts);

  useEffect(() => {
    getPrompts()
  }, [])

  const getTextPrompts = async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN");
      const response = await clienteAxios.get(`/api/ver-prompts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  const { data, error, mutate } = useSWR('prompts', getTextPrompts);

  return {
    textPrompt: data,
    loading: !data && !error,
    totalElements: data?.length,
    error,
    mutate,
    enviarFormulario,
    getPrompts,
    promptsData,
    loadingPage: !promptsData
  };
};
