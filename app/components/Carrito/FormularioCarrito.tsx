import React from 'react'
import paises from "../../data/paises.json";
const FormularioCarrito = () => {


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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
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
            className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 placeholder-gray-500 text-gray-300  "
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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500  "
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
            className="bg-gray-700 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500   "
            placeholder="44332255G"
            required
          />
        </div>
      </div>
      <div className="flex items-center mt-5 text-gray-400 text-sm gap-2 fill-gray-400">
          <p>Tus datos se encuentran protegidos según la Ley de protección de datos</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>

        </div>
    </form>
  </div>
  )
}

export default FormularioCarrito