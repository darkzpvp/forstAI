// @ts-nocheck

const GestionarSuscripcion = ({infoSuscripciones, freePrompts, gestionarPlan, setGestionarPlan, handleGestionarPlan, cancelarPlan, setCancelarPlan, selectedPlan, setSelectedPlan}) => {
    const handleCancelarPlan = () => {
        setCancelarPlan(!cancelarPlan)
      }
  return (
    <div className=" bg-gray-800 w-full max-w-4xl rounded-lg mt-5 ">
              <div className=" bg-gray-900 p-5 rounded-t-lg">
                <h1 className=" text-sm text-gray-200">
                  Gestión de la suscripción
                </h1>
                <p className=" text-sm text-gray-400">
                  Mantén tu suscripción al día para seguir disfrutando de los
                  beneficios
                </p>
              </div>

              <div className=" grid grid-cols-2">
                <div className=" p-5">
                  <span className=" text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                    Actualmente
                  </span>
                  <h1 className="text-gray-200 text-sm mt-2">
                    {infoSuscripciones && infoSuscripciones?.tipo
                      ? `Plan ${infoSuscripciones?.tipo}`
                      : "No hay ningún plan contratado"}
                  </h1>{" "}
                  <p className=" text-gray-400 text-sm ">
                    {infoSuscripciones && infoSuscripciones?.fecha_expiracion
                      ? `Pago mensual | Expira el ${infoSuscripciones?.fecha_expiracion}`
                      : ""}
                  </p>
                </div>
                <div className=" md:flex md:gap-2 hidden px-3   mt-5">
                  {infoSuscripciones && infoSuscripciones?.tipo && (
                    <>
                      <button
                        type="submit"
                        onClick={() => setCancelarPlan(true)}
                        className=" px-3 text-gray-200 bg-gray-600 hover:bg-gray-700  border-gray-600 rounded-lg text-sm py-2  h-9 items-center text-center transition ease-in duration-100"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        onClick={handleGestionarPlan}
                        className=" px-3 text-gray-200  bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 custom:h-14  h-9 transition ease-in duration-100"
                      >
                        Cambiar suscripción
                      </button>
                    </>
                  )}
                  {!infoSuscripciones?.tipo && (
                    <button
                      type="submit"
                      onClick={handleGestionarPlan}
                      className=" px-3 text-gray-200  bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2 custom:h-14  h-9 transition ease-in duration-100"
                    >
                      Comprar plan
                    </button>
                  )}
                </div>
              </div>
              <div className=" p-5 border-t border-gray-600">
                <table className="w-full max-w-md text-sm font-normal">
                  <thead>
                    <tr>
                      <th className="text-gray-400 text-left font-normal">
                        Descripción
                      </th>
                      <th className="text-gray-400 text-left font-normal">
                        Cantidad
                      </th>
                      <th className="text-gray-400 text-left font-normal">
                        Precio
                      </th>
                      <th className="md:flex hidden text-gray-400 text-left font-normal whitespace-nowrap">
                        Prompts disponibles
                      </th>
                      <th className="flex md:hidden text-gray-400 text-left font-normal">
                        Prompts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-200">
                        {infoSuscripciones && infoSuscripciones?.tipo
                          ? `Plan ${infoSuscripciones?.tipo}`
                          : "Plan de prueba"}
                      </td>
                      <td className="text-gray-400">{"1"}</td>
                      <td className="text-gray-400">
                        {infoSuscripciones && infoSuscripciones?.precio
                          ? `${infoSuscripciones?.precio}€`
                          : "0€"}
                      </td>
                      <td className="text-gray-400">
                        {infoSuscripciones && infoSuscripciones?.prompts
                          ? infoSuscripciones?.prompts
                          : freePrompts}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" md:hidden flex   justify-end gap-2 text-nowrap  p-3">
                {infoSuscripciones && infoSuscripciones?.tipo && (
                  <>
                    <button
                      type="submit"
                      onClick={handleCancelarPlan}
                      className=" px-3 text-gray-200  bg-gray-600 hover:bg-gray-700  border-gray-600 rounded-lg text-sm py-2  h-9 items-center text-center transition ease-in duration-100"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      onClick={handleGestionarPlan}
                      className=" px-3 text-nowrap  text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2  h-9 transition ease-in duration-100"
                    >
                      Cambiar suscripción
                    </button>
                  </>
                )}
                {!infoSuscripciones?.tipo && (
                  <button
                    type="submit"
                    onClick={handleGestionarPlan}
                    className=" px-3 text-nowrap  text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7]  active:bg-[#464f9d] rounded-lg text-sm py-2  h-9 transition ease-in duration-100"
                  >
                    Comprar plan
                  </button>
                )}
              </div>
            </div>
  )
}

export default GestionarSuscripcion