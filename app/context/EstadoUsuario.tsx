import React, { createContext, useEffect, useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";

const EstadoContext = createContext({});
const EstadoProvider = ({ children }) => {


    const [state, setState] = useState<string>('Conectado')
    const [count, setCount] = useState<number>(0)
    const [remaining, setRemaining] = useState<number>(0)
    const [ultimaActividad, setUltimaActividad] = useState<Date>(new Date());


    const onIdle = () => {
        setState('Desconectado')
        setUltimaActividad(new Date());
      }
      
      const onActive = () => {
        setState('Conectado')
      }
      
      const onAction = () => {
        setCount(count + 1)
   
      }
      
      const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        onAction,
        timeout: 60_000,
        throttle: 500
      })
      
      useEffect(() => {
        const interval = setInterval(() => {
          setRemaining(Math.ceil(getRemainingTime() / 1000))
        }, 500)
      
        return () => {
          clearInterval(interval)
        }
      })
    
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
