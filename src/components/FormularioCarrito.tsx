import React from 'react'
import paises from "../data/paises.json";
const FormularioCarrito = ({continuar, setContinuar}) => {


    const numero = (event) => {
        let newValue = event.target.value;
        newValue = newValue.slice(0, 15);
        newValue = newValue.replace(/[^0-9]/g, "");
        event.target.value = newValue;
      };
    
    
    
      const nombre = (event) => {
        const regex = /^[A-Za-z\s]*$/;
        let newValue = event.target.value;
        if (!regex.test(newValue)) {
            event.target.value = newValue.replace(/[^A-Za-z\s]/g, '');
        }
    };

  return (
    <div className="md:col-span-3">
    <form className=" shadow-lg bg-gray-800 px-5 py-5 rounded-lg">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
            placeholder="Víctor"
            onChange={nombre}
            required

          />
        </div>

        <div>
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Apellidos
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
            placeholder="Valverde"
            onChange={nombre}
            required
          />
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Número de teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
            placeholder="654958823"
            onChange={numero}
            required
          />
        </div>

        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Selecciona tu país
          </label>

          <select
            defaultValue={`ES`}
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
          >
            <option value="" disabled>
              --Selecciona un país--
            </option>
            {paises.map((pais) => (
              <option key={pais.code} value={pais.code}>
                {pais.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Población
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
            placeholder="Málaga"
            onChange={nombre}
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Provincia
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
            placeholder="Málaga"
            onChange={nombre}
            required
          />
        </div>
        <div className='md:col-span-2'>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            NIF / NIE
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
            placeholder="44332255G"
            required
          />
        </div>
      </div>
    </form>
  </div>
  )
}

export default FormularioCarrito