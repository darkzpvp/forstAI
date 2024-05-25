// @ts-nocheck

const DarBajaCuenta = ({setEliminarCuenta}) => {
  return (
    <div className=" bg-gray-800 w-full max-w-4xl rounded-lg mt-5 ">
    <div className=" bg-gray-900 p-5 rounded-t-lg">
      <h1 className=" text-sm text-gray-200">Dar de baja</h1>
      <p className=" text-sm text-gray-400">
        Si no quieres seguir disfrutando de los beneficios, puedes dar
        de baja tu cuenta
      </p>
    </div>
    <div className=" max-w-lg px-5">
      <p className=" text-gray-400 mt-5 mb-3 text-sm">
        ¡Atención! Si das de baja no podrás tener acceso nunca más a
        esta cuenta, y perderás todas las suscripciones que tengas
      </p>
    </div>
    <div className=" py-3 px-3">
      <button
        onClick={() => setEliminarCuenta(true)}
        type="submit"
        className=" px-3 text-gray-200 bg-red-700 hover:bg-red-800  active:bg-red-900 rounded-lg text-sm py-2 flex justify-center transition ease-in duration-100"
      >
        Dar de baja
      </button>{" "}
    </div>
  </div>
  )
}

export default DarBajaCuenta