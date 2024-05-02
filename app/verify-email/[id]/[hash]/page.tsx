'use client'
import useConfirmarEmail from '@/app/hooks/useConfirmarEmail';
import React, { useEffect, useState } from 'react'
import Registrar from '@/app/registrar/page';
function page({ params }: { params: { id: number, hash: string } }) {
const {confirmarEmail} = useConfirmarEmail();
  const [idUrl, setIdUrl] = useState(params.id);
  const [hashUrl, setHashUrl] = useState(params.hash);
const [errores, setErrores] = useState([])

useEffect(() => {

  const enviarParametro = async() => {
    await confirmarEmail(idUrl, hashUrl, setErrores);
  }

enviarParametro()
}, [idUrl, hashUrl])

  return (
    <Registrar/>
  )
}

export default page