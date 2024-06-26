import Image from "next/image";
import { useState, useEffect, MouseEventHandler } from "react";
import { Imagen } from "@/app/types";
interface ModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  imagen: Imagen
}

const Modal = ({ modal, setModal, imagen } : ModalProps) => {

const [next, setNext] = useState(0)

useEffect(() => {
    
    setNext(imagen.id);
  }, [imagen]); 
  

useEffect(() => {
  if(modal){
    document.body.classList.add('overflow-hidden')
  
  } else {
    document.body.classList.remove('overflow-hidden')
  
  }
}, [modal])

    const handleModal = () => {
      setModal(false);
      
    
    };
  
    const previousHandle = () => {
        const currentImageIndex = next;
        let previousImageIndex = currentImageIndex - 1;
        if (previousImageIndex < 1) {
          previousImageIndex = 12;
        }
      
        setNext(previousImageIndex);
      };
      
  
      const nextHandle = () => {
        const currentImageIndex = next;
      
        let nextImageIndex = currentImageIndex + 1;
      

        if (nextImageIndex > 12) {
          nextImageIndex = 1;
        }
      
        setNext(nextImageIndex);
      };
    
      const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.currentTarget.classList.contains('overlay')) {
          handleModal();
        }
      };

    return (
      <>
        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-40 overlay "  onClick={handleOverlayClick}>
            <div className="flex flex-col justify-center items-center max-w-2xl h-full relative overlay" >
            

      
              <Image   onClick={(event) => event.stopPropagation()} height={600} width={600} className="rounded-md" src={`/img/galeria/${next}.jpg`} alt="Imagen en modal" 
                  sizes="100vw"
              />
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  previousHandle();
                }}
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group "
               
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full  bg-gray-100/70  hover:bg-gray-300/70 active:bg-gray-500/70 ">
                  <svg
                    className="w-4 h-4  text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                  onClick={(event) => {
                    event.stopPropagation();
                    nextHandle();
                  }}
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-100/70  hover:bg-gray-300/70 active:bg-gray-500/70 ">
                  <svg
                    className="w-4 h-4  text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
  
              <button
                onClick={handleModal}
                type="button"
                className=" sm:right-[5%] md:right-[-5%] absolute top-5 lg:right-[-10%] xl:right-[-10%] z-40 cursor-pointer p-2 rounded-full  bg-gray-700  hover:bg-gray-600 "
              >
                <svg
                  
                
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              </div>
            </div>
       
        )}
      </>
    );
  };
  
  export default Modal;
    