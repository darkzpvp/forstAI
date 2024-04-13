import React from 'react'

const Contacto = () => {
  return (
    <div className="h-full min-h-[80vh] grid md:grid-cols-2 grid-cols-1 bg-contactobackground">
    <div className="flex flex-col justify-center items-center md:px-28 lg:px-36 sm:px-20 px-10 mt-12 md:mt-0">
      <h5 className="text-3xl font-bold text-gray-300 text-center mb-5">
        ¡Contacta con nosotros!
      </h5>
      <p className="text-center text-gray-300">
        Estamos disponibles para ayudarte con cualquier pregunta,
        sugerencia o comentario que tengas
      </p>
    </div>

    <div id="contacto" className="flex justify-center my-10 items-center">
      <div className="w-full max-w-lg p-4   rounded-lg shadow sm:p-8 bg-zinc-700/50 ">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Tu nombre
        </label>
        <input
          type="text"
          id="nombre"
          className=" mb-2     text-sm rounded-lg   block w-full p-2.5 bg-gray-200 placeholder-gray-400    "
          placeholder="Víctor Valverde"
          required
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Tu email
        </label>
        <input
          type="email"
          id="email"
          className="mb-2  border   text-sm rounded-lg   block w-full p-2.5 bg-gray-200 placeholder-gray-400   "
          placeholder="hola@correo.com"
          required
        />

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium  text-gray-300"
        >
          Tu mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          className="mb-8 block p-2.5 w-full text-sm   rounded-lg border    bg-gray-200 placeholder-gray-400  "
          placeholder="Escribe los detalles de tu mensaje"
        ></textarea>

        <button
          type="button"
          className="transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d]"
        >
          Enviar formulario
        </button>
      </div>
    </div>
  </div>
  )
}

export default Contacto