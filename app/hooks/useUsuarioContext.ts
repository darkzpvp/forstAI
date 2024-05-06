import React from "react";
import { useContext } from "react";
import UsuarioProvider from "../context/UsuarioProvider"
const useUsuarioContext = () => {

return (
    useContext(UsuarioProvider)
)
}
export default useUsuarioContext