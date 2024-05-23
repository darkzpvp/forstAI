import clienteAxios from "../config/axios";


const useComprar = () => {

    const comprar = async (datos) => {
       try {
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
        const {data} = await clienteAxios.post("/api/comprar-suscripcion", datos, config);
      
       } catch (error) {
        console.log(error);
    console.log(error);
    }
      };

  return { 
    comprar
   };
};

export default useComprar;
