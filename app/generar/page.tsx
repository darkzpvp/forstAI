// @ts-nocheck

"use client";
import React, { useEffect, useRef, useState } from "react";
import generarImagenes from "../data/generarImagenes.json";
import Header_Dos from "../components/Header_Dos";
import { useAuth } from "../hooks/useAuth";
import { usePrompt } from "../hooks/usePrompt";
import Image from "next/image";
import Alerta from "../components/Generar/Alerta";
import useImageGeneration from "../hooks/generarPrompt";
import Modal from "../components/Generar/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles.css';
import { useLocalStorage } from "usehooks-ts";
const Generar = () => {
  const { enviarFormulario, promptsData, loadingPage, errorData } = usePrompt();
  const { user } = useAuth({ middleware: "auth", url: "/generar" });
  const { imageBase64, generateImage } = useImageGeneration();
  const [menu, setMenu] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const [pausarCarrusel, setPausarCarrusel] = useLocalStorage('pausarCarrusel', true);

  const [modal, setModal] = useState(false);
  const notify = () => {
    toast("¡Prompt generado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };

  const textAreaRef = useRef(null);

  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };
  const handleDownload = () => {
    if (imageBase64 && !loading) {
      const downloadLink = document.createElement("a");
      downloadLink.href = `data:image/png;base64,${imageBase64}`;
      downloadLink.download = "imagen_generada.png";
      downloadLink.click();
    }
  };
  const handleEnviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (promptText.trim() === "") {
      return;
    }
    setPromptText("");
    setLoading(true);
    notify();
    const datos: FormData = {
      texto: promptText,
    };

    enviarFormulario(datos);
    await generateImage(promptText);
    setLoading(false);
  };

  const handleChangePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptText(e.target.value);
  };

 
  // Esto es para hacer growing automático al textarea. Iban a sacar una clase, pero aún no lo han hecho
  useEffect(() => {
    if (!loadingPage && textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [promptText, loadingPage]);

  const handleCarruselInfinito = () => {
    setPausarCarrusel(!pausarCarrusel);
  };
  return (
    <>
      <header className="  overflow-y-auto z-50 w-full bg-zinc-800">
        <Header_Dos
          menu={menu}
          setMenu={setMenu}
          menuHamburguesa={menuHamburguesa}
          setMenuHamburguesa={setMenuHamburguesa}
        />
        <ToastContainer />
        <section
          className="bg-gray-700 overflow-x-hidden "
          onClick={handleCloseMenu}
         >
          <div className="flex">
            <div
              className="slider cursor-pointer"
              onClick={handleCarruselInfinito}
            >
              <div
                className={`slide-track ${
                  pausarCarrusel ? " animate-none" : ""
                }`}
              >
                {generarImagenes.images.map((imagen, index) => (
                  <div key={index} className="slide px-2 relative">
                    <div className="relative ">
                      <Image
                        width={200}
                        height={200}
                        className="rounded-lg aspect-square"
                        src={imagen.url}
                        alt={imagen.title}
                      />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg">
                        <p className="absolute text-gray-200 bottom-2 left-2 text-sm">
                          {imagen.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {generarImagenes.images.map((imagen, index) => (
                  <div
                    key={index + generarImagenes.images.length}
                    className="slide px-2 relative"
                  >
                    <div className="relative ">
                      <Image
                        width={200}
                        height={200}
                        className="rounded-lg aspect-square"
                        src={imagen.url}
                        alt={imagen.title}
                      />
                      <div className="absolute inset-0  bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg">
                        <p className="absolute text-gray-200 bottom-2 left-2 text-sm">
                          {imagen.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="block md:flex justify-center items-center px-5 mx-auto mb-5 max-w-5xl mt-7 md:mt-0">
            <div
              className={` md:px-5 px-0 md:mt-16 mt-0 mx-auto text-center md:text-left w-full ${
                imageBase64 ? "max-w-md" : "max-w-md"
              }`}
            >
              <h1 className="md:text-5xl font-bold text-gray-300 mb-5 text-3xl">
                Genera imágenes con{" "}
                <span className="bg-[#5D68CC] md:text-2xl text-sm p-2 rounded-lg whitespace-nowrap">
                  IA
                </span>
              </h1>
              <p className="text-gray-400 md:text-lg text-lg">
                Empieza a generar imagenes increíbles ahora mismo
              </p>
              {loadingPage ? (
                <div
                  role="status"
                  className=" max-w-md p-4 space-y-4 border border-gray-400  divide-y  rounded-lg shadow animate-pulse my-4  md:p-6 "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 bg-gray-400 rounded-full  w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-300 rounded-full "></div>
                    </div>
                    <div className="h-2.5 bg-gray-400 rounded-full  w-12"></div>
                  </div>
                </div>
              ) : (
                <form className={`mt-6`} action="#" onSubmit={handleEnviar}>
                  <div className="relative ">
                    <textarea
                      type="text"
                      className={` resize-none z-0 block w-full max-w-3xl p-4 text-sm rounded-lg bg-gray-200 active:outline-none focus:outline-none ${
                        errorData || loading === true
                          ? "cursor-not-allowed disabled"
                          : ""
                      }`}
                      placeholder={`Escribe el prompt (${promptsData !== null && promptsData !== undefined && !errorData ? promptsData : 0})`}
                      onChange={handleChangePrompt}
                      value={promptText}
                      disabled={errorData || loading === true}
                      rows={1}
                      ref={textAreaRef}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleEnviar(e);
                        }
                      }}
                    />
                    {loading ? (
                      <>
                        <button
                          disabled
                          type="button"
                          className={` z-40 bg-[#727ee4] ease-in duration-100 cursor-not-allowed  absolute right-0 bottom-0 mb-2 mr-2 text-white font-medium rounded-lg text-sm px-4 py-2`}
                        >
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                            viewBox="0 0 100 101"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="#5D68CC"
                            />
                          </svg>
                          Loading...
                        </button>
                      </>
                    ) : (
                      <button
                        type="submit"
                        className={` z-40 ${
                          errorData 
                            ? " bg-[#727ee4] hover:bg-[#727ee4] active:bg-[#727ee4] cursor-not-allowed ease-in duration-100 "
                            : ""
                        } absolute right-0 ease-in duration-100 bottom-0 mb-2 mr-2 text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] font-medium rounded-lg text-sm px-4 py-2`}
                        disabled={errorData}
                      >
                        Enviar
                      </button>
                    )}
                  </div>
                  <div className="flex md:justify-normal justify-center mt-5 w-full">
                    {errorData
                      ? 
                      <Alerta>{errorData}</Alerta>
                       
                      : ''}
                  </div>
                </form>
              )}
            </div>

            <div className=" w-[100%] max-w-[50vh] mx-auto  sm:px-0 md:mt-12 mt-0">
                {imageBase64 ? (
                  <>
                    <Modal
                      modal={modal}
                      setModal={setModal}
                      imageBase64={imageBase64}
                    />
                    <img
                      className="w-full max-w-[90%] rounded-lg cursor-pointer mx-auto"
                      onClick={() => setModal(true)}
                      src={`data:image/png;base64,${imageBase64}`}
                      alt="Imagen generada"
                    />
                  </>
                ) : (
                  <div className="">
                    <div className=" rounded-lg overflow-hidden shadow-lg bg-gray-800">
                      <img
                        className=" opacity-70 rounded-lg"
                        src="/img/generar/gato.jpeg"
                        alt="Imagen Icono"
                      />
                      <div className="px-6 py-4 ">
                        <h5 className=" text-2xl font-bold tracking-tight text-gray-300 ">
                          ¡Sugerencia!
                        </h5>
                        <p className="font-normal text-gray-400">
                          Específica la máxima cantidad de detalles que puedas
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              <button
                type="submit"
                onClick={handleDownload}
                className={` mb-5 ${
                  !imageBase64 || loading === true ? " hidden" : ""
                } flex mt-2 justify-center mx-auto ease-in duration-100 text-white bg-[#5D68CC] hover:bg-[#525cb7] active:bg-[#464f9d] font-medium rounded-lg text-sm px-4 py-2`}
              >
                Descargar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Generar;
