import { Dispatch, SetStateAction } from "react";

interface ProgresoCarritoProps {
    continuar: number;
    setContinuar: Dispatch<SetStateAction<number>>;
}

const ProgresoCarrito = ({ continuar, setContinuar }: ProgresoCarritoProps) => {
  const handleContinuar = (id: number) => { 
    setContinuar(id);
    console.log(id);
  };

  return (
    <div className="flex justify-center mx-auto w-[100%] max-w-3xl mb-10">
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-300 sm:text-base">
        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-500">
          <button onClick={() => handleContinuar(1)} id="1">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
            {continuar === 1 ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="#5D68CC"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
                <span className="me-2">1</span> 
            )}
              Información <span className="hidden sm:inline-flex sm:ms-2">Personal</span>
            </span>
          </button>
        </li>
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
          <button onClick={() => handleContinuar(2)} id="2">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
            {continuar === 2 ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="#5D68CC"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
                <span className="me-2">2</span> 
            )}
              Datos <span className="hidden sm:inline-flex sm:ms-2">bancarios</span>
            </span>
          </button>
        </li>
        <li className="flex items-center">
          <button onClick={() => handleContinuar(3)} id="3"> {/* Cambiar id="2" a id="3" */}
            <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-500">
              {/* <span className="me-2">2</span> */}
              {continuar === 3 ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="#5D68CC"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
                <span className="me-2">3</span> 
            )}
              Confirmación
            </span>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default ProgresoCarrito;
