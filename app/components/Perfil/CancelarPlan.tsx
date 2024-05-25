// @ts-nocheck

import useSuscripciones from '@/app/hooks/useSuscripciones';

const CancelarPlan = ({cancelarPlan, setCancelarPlan}) => {
    const {eliminarSuscripciones} = useSuscripciones()
    const handleCancelarPlan = async (e) => {
        e.preventDefault();
    
        setCancelarPlan(!cancelarPlan);
        await eliminarSuscripciones();
        window.location.reload();
      };
  return (
<>
{cancelarPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={() => setCancelarPlan(false)}
        >
          <div
            className=" bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4  w-12 h-12 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-300 ">
                ¡Estás a un paso de cancelar la suscripción!
              </h3>
              <div className=" flex justify-center mx-auto gap-2">
                <button
                  onClick={() => setCancelarPlan(false)}
                  className="py-2.5 px-5 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                >
                  No, cancela
                </button>
                <button
                  onClick={(e) => handleCancelarPlan(e)}
                  className="text-white bg-red-600 hover:bg-red-700   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Sí, cancelar suscripción
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
  )
}

export default CancelarPlan