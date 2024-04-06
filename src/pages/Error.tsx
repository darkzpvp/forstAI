import React from 'react';

const Error = () => {
  return (
    <div className='bg-zinc-800 h-screen'>

      <div>
        <img className='flex flex-row justify-start mx-auto w-[100%] max-w-md' src='/src/assets/img/error.svg' />
      </div>

      <div className='w-[100%] max-w-md mx-auto'>
        <p className='flex justify-center text-center mb-5 text-gray-300 font-bold text-2xl'>¿Quieres volver a la página principal?</p>
      </div>

      <div className="flex items-center w-[100%] max-w-md justify-center mx-auto">
        <button type="button" className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] rounded-lg text-sm py-2.5 px-3 inline-block w-auto transition ease-in duration-100">
          <a href='/'>
          Volver a home
          </a>
        </button>
      </div>
    </div>
  );
}

export default Error;
