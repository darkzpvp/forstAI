import { MouseEventHandler } from "react";
import useComprar from "@/app/hooks/useComprar";
import { useRouter } from "next/navigation";
interface ModalCarritoProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  setComprado: (value: boolean) => void;
}
const ModalCarrito = ({ modal, setModal, setComprado }: ModalCarritoProps) => {
  const Router = useRouter();
  const { comprar } = useComprar();
  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.classList.contains("overlay")) {
      setModal(false);
    }
  };
  const suscripcion = localStorage.getItem("suscripcionElegida");
  const handleComprar = async () => {
    setModal(false);
    setComprado(true);
    const datos = {
      id_suscripcion: suscripcion,
    };
    await comprar(datos);
    setTimeout(() => {
      Router.push("/generar");
    }, 4000);
  };
  return (
    <>
      {modal ? (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-zinc-900 bg-opacity-70 flex justify-center z-40"
        >
          <div
            id="popup-modal"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overlay"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative  rounded-lg shadow bg-gray-800">
                <button
                  type="button"
                  className="absolute top-3 right-2.5  bg-transparent   rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                  onClick={() => setModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4  w-12 h-12 text-gray-200"
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
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-400 ">
                    ¡Estás a un paso de comprarlo!
                  </h3>

                  <div className=" flex gap-2 justify-center mx-auto">
                    <button
                      onClick={() => setModal(false)}
                      className="py-2.5 px-5 ease-in duration-100 text-sm font-medium   rounded-lg  bg-gray-600 hover:bg-gray-700  border-gray-600 text-gray-300  "
                    >
                      No, cancela
                    </button>
                    <button
                      onClick={() => handleComprar()}
                      className="text-white bg-[#5D68CC] ease-in duration-100 hover:bg-[#525cb7] active:bg-[#464f9d]  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-3"
                    >
                      Sí, estoy seguro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalCarrito;
