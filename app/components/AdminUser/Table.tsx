// @ts-nocheck

import React from 'react';
import { parseISO, format } from 'date-fns';

const Table = ({ loading, entries }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-400 bg-gray-700 overflow-hidden">
      <thead className="text-xs uppercase bg-gray-900 text-gray-400">
        <tr>
          <th className="px-6 py-3 rounded-tl-lg">Prompt</th>
          <th className="px-6 py-3 text-nowrap whitespace-nowrap rounded-tr-lg">Fecha de generación</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr className='border-b bg-gray-800 border-gray-700'>
            <td colSpan="2" className="px-6 py-3 font-medium whitespace-nowrap text-gray-300 rounded-b-lg">Loading...</td>
          </tr>
        ) : (
          entries && entries.length > 0 ? (
            entries.map((entry, index) => (
              <tr key={index} className="border-b bg-gray-800 border-gray-700">
                <td className="w-[90%] px-6 py-4 font-medium whitespace-nowrap text-gray-300">
                  {entry.texto}
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap text-right text-gray-300">
                  {format(parseISO(entry.created_at), 'dd/MM/yyyy HH:mm:ss')}
                </td>
              </tr>
            ))
          ) : (
            <tr className='border-b bg-gray-800 border-gray-700'>
              <td colSpan={2} className="px-6 py-3 font-medium whitespace-nowrap text-gray-300 rounded-b-lg">No hay ningún prompt que mostrar</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
