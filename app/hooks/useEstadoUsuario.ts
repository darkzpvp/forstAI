import { useContext } from 'react'
import EstadoContext from '../context/EstadoUsuario'
const useEstadoUsuario = () => {
  return (
    useContext(EstadoContext)
  )
}

export default useEstadoUsuario