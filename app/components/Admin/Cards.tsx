import React from 'react'

const Cards = () => {
  return (
<>

<div className=" sm:flex block px-8 xl:px-0  gap-4 justify-center w-full max-w-7xl mx-auto   ">
  <div class="max-w-md  mx-auto w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-4 ">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">100</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Usuarios esta semana</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>

</div>





<div class="max-w-md   mx-auto  w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-4">
  <div class="flex justify-between  pb-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Beneficio</dt>
      <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">2000€</dd>
    </dl>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        Profit 10%
      </span>
    </div>
  </div>


    
</div>



<div class="max-w-md  mx-auto  w-full bg-white rounded-lg shadow dark:bg-gray-800 mt-4">
  <div class="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">450$</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Suscripciones esta semana</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  </div>
 
</div>
      
</>
  )
}

export default Cards