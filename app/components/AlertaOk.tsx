import React from 'react'

const Alerta = ({children}: {children: React.ReactNode}) => {

  return (


    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg w-full max-w-72 lg:max-w-80 block mx-auto mb-2">
    <p className="text-sm font-semibold">
    {children}
    </p>
   
  </div>
  )
}

export default Alerta