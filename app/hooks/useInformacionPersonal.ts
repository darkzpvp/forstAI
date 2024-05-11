import { useContext } from 'react'
import InformacionContext  from '../context/InformacionProvider'
const useInformacionPersonal = () => {
  return (
    useContext(InformacionContext)
  )
}

export default useInformacionPersonal