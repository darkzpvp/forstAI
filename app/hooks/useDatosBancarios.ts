import { useContext } from 'react'
import DatosContext from '../context/DatosBancariosProvider'
const useDatosBancarios = () => {
  return (
    useContext(DatosContext)
  )
}

export default useDatosBancarios