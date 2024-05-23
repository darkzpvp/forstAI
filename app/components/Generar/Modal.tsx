import Image from "next/image";
import { useEffect, MouseEventHandler } from "react";


const Modal = ({ modal, setModal, imageBase64 }) => {

    const handleModal = () => {
      setModal(false);
      
    
    };
  
      const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (event.currentTarget.classList.contains('overlay')) {
          handleModal();
        }
      };
      useEffect(() => {
        if(modal){
          document.body.classList.add('overflow-hidden')
        
        } else {
          document.body.classList.remove('overflow-hidden')
        
        }
      }, [modal])
    return (
      <>
        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-40 overlay "  onClick={handleOverlayClick}>
            <div className="flex flex-col justify-center items-center max-w-2xl h-full relative overlay" >
         
              <Image height={600} width={600} className="rounded-md"  src={`data:image/png;base64,${imageBase64}`} alt="Imagen en modal" 
                  sizes="100vw"
                  onClick={(event) => event.stopPropagation()}
              />
         
              <button
                onClick={handleModal}
                type="button"
                className=" sm:right-[5%] md:right-[-5%] absolute top-5 lg:right-[-10%] xl:right-[-10%] z-40 cursor-pointer p-2 rounded-full  bg-gray-700  hover:bg-gray-600"
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
    