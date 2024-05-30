// @ts-nocheck
"use client"
import React, { createContext, useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import clienteAxios from "../config/axios";

const EstadoContext = createContext({});
const EstadoProvider = ({ children }) => {
    const [state, setState] = useState('Conectado');
    const [count, setCount] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [ultimaActividad, setUltimaActividad] = useState(new Date());

    const enviarEstado = async (datos) => {
        const authToken = localStorage.getItem("AUTH_TOKEN");
        if (!authToken) {
            console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
            },
        };

        try {
            const { data } = await clienteAxios.post("/api/cambiar-estado-usuario", datos, config);
            return data.message;
        } catch (error) {
            console.log(error);
        }
    };

    const enviarUltimaSesion = async (datos) => {
        const authToken = localStorage.getItem("AUTH_TOKEN");
        if (!authToken) {
            console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
            },
        };

        try {
            const { data } = await clienteAxios.post("/api/ultima-sesion-usuario", datos, config);
            return data.message;
        } catch (error) {
            console.log(error);
        }
    };

    const onIdle = async () => {
        setState((prev) => {
            const newState = 'Desconectado';
            enviarEstado({ estado: newState });
            setUltimaActividad(new Date());
            enviarUltimaSesion({ ultima_sesion: new Date() });
            return newState;
        });
    };

    const onActive = async () => {
        setState((prev) => {
            const newState = 'Conectado';
            enviarEstado({ estado: newState });
            return newState;
        });
    };

    const onAction = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        onAction,
        timeout: 300000,
        throttle: 500,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(Math.ceil(getRemainingTime() / 1000));
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [getRemainingTime]);

    return (
        <EstadoContext.Provider
            value={{
                state, setState, count, setCount, remaining, setRemaining, ultimaActividad
            }}
        >
            {children}
        </EstadoContext.Provider>
    );
};

export { EstadoProvider };
export default EstadoContext;
