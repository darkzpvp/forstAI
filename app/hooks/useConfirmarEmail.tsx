// @ts-nocheck

import { useRouter } from "next/navigation";
import clienteAxios from "../config/axios";
import { useAuth } from "./useAuth";

const useConfirmarEmail = () => {
  const {user} = useAuth({})
    const Router = useRouter();
    const confirmarEmail = async (id, hash, setErrores) => {
      try {
        const authToken = localStorage.getItem("AUTH_TOKEN");
        if (!authToken) {
          console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
          router.push('/login')
          return;
        }
    
        const url = `/api/verificar/${id}/${hash}`;
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        };
    
        const { data } = await clienteAxios.get(url, config);
        console.log(data);
        setErrores([]);
        if(user?.email_verified_at){
                Router.push('/generar')

        }
      } catch (error) {
        console.log(error);
        setErrores(Object.values(error?.response?.data.errors));
        Router.push('/');

      }
    };

  return { 
    confirmarEmail
    
   };
};

export default useConfirmarEmail;
