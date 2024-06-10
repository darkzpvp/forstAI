import React from 'react'

const Ventajas = () => {
  return (
    <>
    <h1
    className="flex justify-center items-center mt-10 text-gray-300  font-bold text-3xl"
  >
    Precios
  </h1>
    <section  id="precios" className="bg-gray-800 shadow border-gray-700 py-16 flex place-items-center justify-center w-full max-w-full mt-10">
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-wrap md:flex-nowrap px-10 ">
        <div className="flex justify-center md:mb-0 mb-5">
          <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
            <svg
              fill="#1F2937"
              id="Layer_1"
              height="512"
              viewBox="0 0 24 24"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="m14.09 16h.91c6.643 0 9-3.5 9-6.5a3.5 3.5 0 0 0 -2.84-3.433 7.564 7.564 0 0 0 .409-1 3.887 3.887 0 0 0 -.626-3.458 3.979 3.979 0 0 0 -3.214-1.609h-11.458a3.979 3.979 0 0 0 -3.214 1.612 3.887 3.887 0 0 0 -.626 3.458 7.564 7.564 0 0 0 .409 1 3.5 3.5 0 0 0 -2.84 3.43c0 3 2.357 6.5 9 6.5h.91a5.027 5.027 0 0 1 .09.921v3.079a1.883 1.883 0 0 1 -2 2h-2a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-1.994a1.885 1.885 0 0 1 -2.006-2v-3.08a5.025 5.025 0 0 1 .09-.92zm1.636-2.851a23.486 23.486 0 0 0 4.4-5.225 1 1 0 0 0 .374.076 1.5 1.5 0 0 1 1.5 1.5c0 2.176-1.839 4.5-7 4.5h-.056a4.805 4.805 0 0 1 .782-.851zm-6.726.851c-5.161 0-7-2.324-7-4.5a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 .375-.076 23.486 23.486 0 0 0 4.4 5.225 4.805 4.805 0 0 1 .781.851z" />
            </svg>
          </div>
          <div className="px-2 text-gray-200 ">
            <h1 className="font-bold text-lg  ">Precio competitivo</h1>
            <p className=" text-gray-400">
              Disponemos de precios muy asequibles para todo el mundo
            </p>
          </div>
        </div>
        <div className="flex justify-center md:mb-0 mb-5">
          <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
            <svg
              fill="#1F2937"
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM16.718,9.717l-4.272,4.272a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4A1,1,0,1,1,8.868,10.16L11.112,12.5,15.3,8.3a1,1,0,0,1,1.414,1.414Z" />
            </svg>
          </div>
          <div className="px-2 text-gray-200 ">
            <h1 className="font-bold  text-lg">Calidad superior</h1>
            <p className="text-gray-400 ">
              Destacamos por ofrecer una calidad excepcional en nuestras
              imágenes
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
            <svg
              fill="#1F2937"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M12,1C.374.982-4.414,16.17,5.112,22.818l.639.449L8,20h8l2.249,3.267.639-.449C28.418,16.166,23.621.98,12,1ZM10.169,12.2a2,2,0,0,1,3.81.581L20.643,15.7l-.8,1.831-6.664-2.924A2,2,0,0,1,10.169,12.2Z" />
            </svg>
          </div>
          <div className="px-2 text-gray-200 ">
            <h1 className="font-bold  text-lg">Velocidad punta</h1>
            <p className="text-gray-400 ">
              Generamos imágenes al instante gracias a nuestros potentes
              procesadores
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Ventajas