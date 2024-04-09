import React from "react";

const Confirmacion = ({ continuar, setContinuar }) => {
  return (
    <div className="md:col-span-3">
      <div className="shadow-lg bg-gray-800 rounded-lg">
        
          <h2 className="text-lg font-semibold mb-2 text-gray-400 bg-gray-900 py-5 px-5 rounded-lg">
            Información Personal:
          </h2>
          <div className="mb-4 px-5 py-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Nombre y apellidos
              </label>
              <p className="text-gray-400">Koldo García Sánchez</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Número de Teléfono:
              </label>
              <p className="text-gray-400">679349334</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                NIF / NIE:
              </label>
              <p className="text-gray-400">679349334</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Dirección:
              </label>
              <p className="text-gray-400">
                Av. de Gregorio Prieto 9, 29010, Málaga, Málaga, España Bloq 2,
                5-5.
              </p>
            </div>
          </div>
        </div>

      
          <h2 className="text-lg font-semibold mb-2 text-gray-400 bg-gray-900 py-5 px-5 rounded-lg">
            Datos de Facturación:
          </h2>
          <div className="mb-4 px-5 py-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Número de Tarjeta:
              </label>
              <p className="text-gray-400">0934 5432 3434 1233</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Fecha de Expiración:
              </label>
              <p className="text-gray-400">05/27</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                CVC:
              </label>
              <p className="text-gray-400">321</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-300">
                Titular de la cuenta:
              </label>
              <p className="text-gray-400">Víctor Valverde</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion;
