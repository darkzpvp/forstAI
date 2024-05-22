import { format, parseISO } from 'date-fns';

const DetallesCuenta = ({informacion_personal, suscripcion}) => {

    const isoDate = informacion_personal?.ultima_sesion;

    let formattedDate = '';
    if (isoDate) {
      try {
        const parsedDate = parseISO(isoDate);
        formattedDate = format(parsedDate, 'PPpp');
      } catch (error) {
        console.error('Error al parsear o formatear la fecha:', error);
      }
    }

     
  return (
    <div className="block sm:col-span-2 w-full   mt-5 ">
    <div className=" col-span-2 w-full rounded-lg  bg-gray-800 text-gray-400 ">
      <h2 className=" bg-gray-900 py-3 px-8 rounded-t-lg font-bold uppercase text-xs">
        Detalles de la cuenta
      </h2>
      <ul className=" md:p-10 p-5  space-y-1 text-gray-500  dark:text-gray-400">
        <div className=" grid grid-cols-2">
          <div className=" flex gap-2  mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke=""
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">Suscripción</h2>
              <p className="text-sm text-gray-200 font-semibold">
                Plan {suscripcion ? suscripcion?.tipo : "gratuito"}
              </p>
            </div>
          </div>

          <div className=" flex gap-2  mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke=""
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">Prompts restantes</h2>
              <p className="text-sm text-gray-200 font-semibold">
                {informacion_personal?.total_prompts}
              </p>
            </div>
          </div>

          <div className=" flex gap-2 md:mt-6 mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke=""
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">Mes de expiración</h2>
              <p className="text-sm text-gray-200 font-semibold">
                {suscripcion
                  ? suscripcion?.fecha_expiracion
                  : "No caduca"}
              </p>
            </div>
          </div>

          <div className=" flex gap-2 md:mt-6 mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke=""
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">IP</h2>
              <p className="text-sm text-gray-200 font-semibold">
                {informacion_personal?.ip_address}
              </p>
            </div>
          </div>
          <div className=" flex gap-2 md:mt-6 mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke=""
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">Estado del usuario</h2>
              <p className="text-sm font-semibold text-gray-200">
                {informacion_personal?.estado}
              </p>
            </div>
          </div>

          <div className=" flex gap-2 md:mt-6 mb-5 md:mb-0">
            <div className=" bg-gray-900 min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10 rounded-lg flex items-center justify-center   stroke-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke=""
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <div className="  text-sm">
              <h2 className="text-gray-400">Última actividad</h2>
              <p className="text-sm font-semibold text-gray-200">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
  )
}

export default DetallesCuenta