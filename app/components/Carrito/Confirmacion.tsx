import React from "react";

const Confirmacion = () => {
  return (
    <div className="md:col-span-3 shadow-lg bg-gray-800 rounded-lg">
      <table className=" rounded-lg w-full ">
        
          <thead  className="bg-gray-900  rounded-t-lg font-bold uppercase text-xs text-gray-400 ">
          <tr>
        <td className="py-3 px-5 rounded-t-lg " colSpan={2}>
            Información Personal
        </td>
    </tr>
          </thead>
          <tbody className="mb-4 px-5 py-5">
      
   
            <tr className=" text-sm font-medium text-gray-300  ">
            <td   className=" px-5 pt-5  w-1/2 text-gray-200">
                    Nombre y apellidos
                </td>
                <td  className=" pt-5 text-gray-300 px-5">
                    Número de teléfono
                </td>
                
            </tr>
   
        
            <tr className=" text-sm text-gray-300 border-b border-gray-600">
            <td className="  px-5 text-gray-400 pb-2">
                    Koldo García Sánchez
                </td>
                <td  className="text-gray-400 px-5">
                    674948394
                </td>
            </tr>
            <tr className=" text-sm font-medium text-gray-300">
            <td  className=" px-5  text-gray-300 pt-2">
                    NIF/NIE
                </td>
                <td  className=" text-gray-300 px-5 pt-2">
                   Dirección
                </td>
            </tr>
            <tr className=" text-sm font-medium text-gray-300">
            <td  className="px-5 pb-5 text-gray-400">
                    25884493F
                </td>
                <td  className="text-gray-400 pb-5 px-5">
                   Av. de Gregorio Prieto 9. 28027 Madrid, España
                </td>
            </tr>
          
          
          </tbody>
   

      
          <thead  className="bg-gray-900  rounded-t-lg font-bold uppercase text-xs text-gray-400 ">
          <tr>
        <td className="py-3 px-5 " colSpan={2}>
            Datos de facturación
        </td>
    </tr>
          </thead>
          <tbody className="mb-4 px-5 py-5">
      
     
            <tr  className=" text-sm font-medium text-gray-300  ">
            <td   className="  px-5 pt-5 text-gray-200">
                    Número de tarjeta
                </td>
                <td  className="text-gray-300 pt-5 px-5">
                    Fecha de expiración
                </td>
            </tr>
   
        
            <tr className=" text-sm text-gray-300 border-b border-gray-600">
            <td  className=" px-5  text-gray-400 pb-2">
                    5434 4343 4343 4343
                </td>
                <td  className="text-gray-400 w-max-content px-5">
                    05/27
                </td>
            </tr>
            <tr className=" text-sm font-medium text-gray-300">
            <td  className="px-5  pt-2 text-gray-300">
                    CVC
                </td>
                <td  className=" text-gray-300 pt-2 px-5">
                   Títular de la cuenta
                </td>
            </tr>
            <tr className=" text-sm font-medium text-gray-300">
            <td  className="px-5 text-gray-400 pb-5">
                    232
                </td>
                <td  className=" text-gray-400 pb-5 px-5">
                   Koldo García Sánchez
                </td>
            </tr>
       
          
          </tbody>
      </table>
    </div>
  );
};

export default Confirmacion;
