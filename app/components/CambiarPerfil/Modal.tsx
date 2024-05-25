// @ts-nocheck

import CloseIcon from "./CloseIcon";
import ImageCropper from "./ImageCropper";

const Modal = ({ updateAvatar, closeModal }) => {
  return (
  
    <div
      className="relative z-50"
  
    >
 
      <div className="fixed inset-0 z-40 w-screen overflow-y-auto" >
        <div className="flex min-h-full justify-center px-2 py-12 text-center ">
          <div className={`relative w-[85%] sm:w-[70%] min-h-[50vh] rounded-2xl bg-gray-800 text-slate-100 text-left shadow-xl transition-all`} onClick={(e) => e.stopPropagation()}>
            <div className="px-5 py-4" >
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Cerrar menú</span>
                <CloseIcon />
              </button>
              <ImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};
export default Modal;
