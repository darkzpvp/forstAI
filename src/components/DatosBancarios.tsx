import React, { useState } from 'react';

const DatosBancarios = ({ continuar, setContinuar }) => {

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 3);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };

  const handleInputChangeCVC = (event) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 4);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };

  const handleInputChangeTarjeta = (event) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 16);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };



  const titularTarjeta = (event) => {
    const regex = /^[A-Za-z\s]*$/;
    let newValue = event.target.value;
    if (!regex.test(newValue)) {
        event.target.value = newValue.replace(/[^A-Za-z\s]/g, '');
    }
};

  return (
    <div className="md:col-span-3">
      <form className="shadow-lg bg-gray-800 px-5 py-5 rounded-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label
              htmlFor="numero_tarjeta"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Número de tarjeta
            </label>
            <input
              type="text"
              id="numero_tarjeta"
              className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
              placeholder="0000 0000 0000 0000"
              onChange={handleInputChangeTarjeta}
              required
            />
          </div>
          <div className="md:col-span-1">
            <label
              htmlFor="mmaa"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Fecha de expiración
            </label>
            <input
              type="number"
              id="mmaa"
              className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
              placeholder="MM/AA"
              onChange={handleInputChangeCVC}
              required
            />
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Código de seguridad
            </label>
            <input
              type="number"
              id="cvc"
              className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
              placeholder="3 dígitos"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='md:col-span-2'>
            <label
              htmlFor="titular"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Titular de la cuenta
            </label>
            <input
              type="text"
              id="titular"
              className="bg-gray-600/50 text-gray-300 text-sm rounded-lg  block w-full p-2.5  placeholder-gray-500"
              placeholder="Koldo Ortega"
            
              onChange={titularTarjeta}
              required
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DatosBancarios;