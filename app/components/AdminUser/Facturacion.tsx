import React from 'react'

const Facturacion = ({detalles_facturacion, informacion_personal}) => {
  return (
    <div className=" col-span-2 w-full rounded-lg  bg-gray-800 text-gray-400 mt-5  ">
    <h2 className=" bg-gray-900 py-3 px-8 rounded-t-lg font-bold uppercase text-xs">
      Detalles de facturación
    </h2>
    <ul className=" md:p-10 p-5 space-y-1  text-gray-400 text-left  ">
      <dl className="max-w-md  divide-y  text-gray-200 divide-gray-700">
        <div className="flex flex-col pb-3">
          <dt className="mb-1  text-gray-400 text-sm">
            Dirección de correo
          </dt>
          <dd className="text-sm font-semibold">
            {informacion_personal?.email}{" "}
            {informacion_personal?.nif_nie}
          </dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1  text-sm text-gray-400">Dirección</dt>
          <dd className="text-sm font-semibold">
            {detalles_facturacion ? (
              <div>
                {detalles_facturacion.direccion},{" "}
                {detalles_facturacion.poblacion},{" "}
                {detalles_facturacion.provincia},{" "}
                {detalles_facturacion.pais}, {detalles_facturacion.cp}
              </div>
            ) : (
              "No disponible"
            )}
          </dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1  text-sm text-gray-400">
            Número de teléfono
          </dt>
          <dd className="text-sm font-semibold">
            {detalles_facturacion ? (
              <div> {detalles_facturacion?.numero_telefono}</div>
            ) : (
              "No disponible"
            )}
          </dd>
        </div>
      </dl>
    </ul>
  </div>

  )
}

export default Facturacion