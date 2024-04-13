const DatosBancarios = () => {
  const handleInputChange = (event: any) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 3);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };

  const handleInputChangeCVC = (event: any) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 4);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };

  const handleInputChangeTarjeta = (event: any) => {
    let newValue = event.target.value;
    newValue = newValue.slice(0, 16);
    newValue = newValue.replace(/[^0-9]/g, "");
    event.target.value = newValue;
  };

  const titularTarjeta = (event: any) => {
    const regex = /^[A-Za-z\s]*$/;
    let newValue = event.target.value;
    if (!regex.test(newValue)) {
      event.target.value = newValue.replace(/[^A-Za-z\s]/g, "");
    }
  };

  return (
    <div className="md:col-span-3">
      <form className="shadow-lg bg-gray-800 px-5 py-5 rounded-lg">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2 relative">
            <label
              htmlFor="numero_tarjeta"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Número de tarjeta
            </label>
            <div className="relative">
              <input
                onChange={handleInputChangeTarjeta}
                type="text"
                className="  text-sm rounded-lg  block w-full pe-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 "
                placeholder="4242 4242 4242 4242"
                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                required
              />
              <div className="absolute inset-y-0 end-0  flex items-center pe-3.5 ">
                <svg
                  fill="none"
                  className="h-6  text-gray-300"
                  viewBox="0 0 36 21"
                >
                  <path
                    fill="currentColor"
                    d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"
                  />
                </svg>
              </div>
            </div>
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
          <div className="md:col-span-2">
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
        <div className="flex items-center mt-5 text-gray-400 text-sm gap-2 fill-gray-400">
          <p>Pago seguro cifrado con SSL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=""
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default DatosBancarios;
