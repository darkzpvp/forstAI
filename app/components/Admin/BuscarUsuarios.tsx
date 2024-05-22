import React from 'react'

const BuscarUsuarios = ({query, setQuery}) => {
  return (
    <div className="relative   w-[25%] justify-end mx-24 sm:mx-16">
    <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4  text-gray-400"
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
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      className="block p-2 ps-10 text-sm   rounded-lg   bg-gray-700  placeholder-gray-400 text-gray-300"
      placeholder="Buscar usuarios"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  </div>
  )
}

export default BuscarUsuarios