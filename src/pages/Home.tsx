import styled from "styled-components";
import galeria from "../data/galeria.json";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import Modal from "../components/Modal";
import FAQ from "../components/FAQ";
import { Link } from "react-scroll";
const Home = () => {
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState({});
  const [overflow, setOverflow] = useState(false);
  const GradientBackground = styled.div`
    background: linear-gradient(rgba(33, 37, 41, 0.85), rgba(33, 37, 41, 0.85)),
      url("/src/assets/img/4598.jpg") center/cover no-repeat;
  `;

  const FondoContacto = styled.div`
    background: linear-gradient(rgba(33, 37, 41, 0.477), rgba(33, 37, 41, 0.85)),
      url("/src/assets/img/12288.jpg") center/cover no-repeat;
  `;

  const handleGaleria = (imagen) => {
    setModal(true);
    setImagen(imagen);
    setOverflow(true);
  };
  if (overflow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <GradientBackground>
        <div
          id="home"
          className="flex flex-col justify-center items-center h-screen gap-5 px-5 text-center"
        >
          <h1 className="text-gray-200 text-4xl font-black sm:text-6xl">
            ForstAI
          </h1>
          <p className="text-gray-300">
            Comienza a generar imágenes de forma gratuita.
          </p>
 
            <Link to="intro" offset={-50} duration={1} smooth={true}>
            <a
                  className="absolute bottom-6  p-2   rounded-lg text-gray-400 hover:bg-gray-600 active:bg-gray-700 cursor-pointer"
                  aria-current="page"
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
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              </a>
            </Link>

        </div>
      </GradientBackground>

      <section
        id="intro"
        className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1"
      >
        <img
          className="lg:h-[calc(100vh-3.5rem)] md:w-[100%]"
          src="/src/assets/img/about-section.jpg"
        />
        <div className="px-5 sm:px-10 xl:px-20">
          <h1 className=" font-bold text-3xl text-gray-300 text-center mb-10 mt-10">
            Introducción
          </h1>
          <div className="text-gray-300">
            <p className="mb-7">
              Bienvenido a Generate AI! Tu puerta de entrada al futuro de la
              creatividad visual. En ForstAI, hemos llevado la generación de
              imágenes a un nivel completamente nuevo al combinar la intuición
              humana con la potencia de la inteligencia artificial.
            </p>
            <p className="mb-7">
              Imagina un mundo donde cada idea, por extravagante que sea, cobra
              vida a través de algoritmos avanzados y técnicas de aprendizaje
              automático. En ForstAI, convertimos tus conceptos abstractos en
              imágenes cautivadoras y estéticamente atractivas, gracias a
              nuestra plataforma líder en inteligencia artificial.
            </p>
            <p className="mb-7">
              Nuestro equipo de expertos en IA ha perfeccionado algoritmos
              sofisticados que no solo comprenden tus necesidades creativas,
              sino que las amplifican. Ya sea que busques ilustraciones únicas,
              diseños gráficos innovadores o cualquier otro tipo de contenido
              visual, ForstAI está aquí para transformar tus ideas en una
              realidad visual impresionante.
            </p>
            <p className="mb-7">
              Con nuestra tecnología de vanguardia, puedes personalizar cada
              aspecto de tus imágenes, desde el estilo hasta los detalles más
              sutiles. Nos enorgullece ofrecer a nuestros clientes una solución
              fácil de usar que desata la verdadera creatividad sin comprometer
              la calidad.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria">
        <h1 className="flex justify-center items-center mt-10 text-gray-300  font-bold text-3xl">
          Galería
        </h1>
        <p className="flex justify-center items-center mt-5 text-gray-300  font-bold text-lg text-center">
          Algunos de nuestros prompts...
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto my-10 px-5 sm:px-5 ">
          {galeria.images.map((imagen) => (
            <div key={imagen.id}>
              <a
                onClick={() => handleGaleria(imagen)}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={imagen.title}
              >
                <img
                  className="rounded-lg cursor-pointer"
                  src={imagen.url}
                  alt={imagen.title}
                />
              </a>
              <Tooltip id="my-tooltip" />
            </div>
          ))}

          <Modal
            modal={modal}
            setModal={setModal}
            imagen={imagen}
            setImagen={setImagen}
            setOverflow={setOverflow}
          />
        </div>
      </section>

      <section className="bg-gray-800 shadow border-gray-700 py-16 flex place-items-center justify-center w-full max-w-full">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-wrap md:flex-nowrap px-10 ">
            <div className="flex justify-center md:mb-0 mb-5">
              <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
                <svg
                  fill="#1F2937"
                  id="Layer_1"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="m14.09 16h.91c6.643 0 9-3.5 9-6.5a3.5 3.5 0 0 0 -2.84-3.433 7.564 7.564 0 0 0 .409-1 3.887 3.887 0 0 0 -.626-3.458 3.979 3.979 0 0 0 -3.214-1.609h-11.458a3.979 3.979 0 0 0 -3.214 1.612 3.887 3.887 0 0 0 -.626 3.458 7.564 7.564 0 0 0 .409 1 3.5 3.5 0 0 0 -2.84 3.43c0 3 2.357 6.5 9 6.5h.91a5.027 5.027 0 0 1 .09.921v3.079a1.883 1.883 0 0 1 -2 2h-2a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-1.994a1.885 1.885 0 0 1 -2.006-2v-3.08a5.025 5.025 0 0 1 .09-.92zm1.636-2.851a23.486 23.486 0 0 0 4.4-5.225 1 1 0 0 0 .374.076 1.5 1.5 0 0 1 1.5 1.5c0 2.176-1.839 4.5-7 4.5h-.056a4.805 4.805 0 0 1 .782-.851zm-6.726.851c-5.161 0-7-2.324-7-4.5a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 .375-.076 23.486 23.486 0 0 0 4.4 5.225 4.805 4.805 0 0 1 .781.851z" />
                </svg>
              </div>
              <div className="px-2 text-gray-300 ">
                <h1 className="font-bold text-lg  ">Precio competitivo</h1>
                <p className=" ">
                  Disponemos de precios muy asequibles para todo el mundo
                </p>
              </div>
            </div>
            <div className="flex justify-center md:mb-0 mb-5">
              <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
                <svg
                  fill="#1F2937"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Filled"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM16.718,9.717l-4.272,4.272a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4A1,1,0,1,1,8.868,10.16L11.112,12.5,15.3,8.3a1,1,0,0,1,1.414,1.414Z" />
                </svg>
              </div>
              <div className="px-2 text-gray-300 ">
                <h1 className="font-bold  text-lg">Calidad superior</h1>
                <p className=" ">
                  Destacamos por ofrecer una calidad excepcional en nuestras
                  imágenes
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-400 lg:w-20 lg:h-20 w-16 h-16 flex justify-center items-center rounded-md px-5">
                <svg
                  fill="#1F2937"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path d="M12,1C.374.982-4.414,16.17,5.112,22.818l.639.449L8,20h8l2.249,3.267.639-.449C28.418,16.166,23.621.98,12,1ZM10.169,12.2a2,2,0,0,1,3.81.581L20.643,15.7l-.8,1.831-6.664-2.924A2,2,0,0,1,10.169,12.2Z" />
                </svg>
              </div>
              <div className="px-2 text-gray-300 ">
                <h1 className="font-bold  text-lg">Velocidad punta</h1>
                <p className=" ">
                  Generamos imágenes al instante gracias a nuestros potentes
                  procesadores
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1
        id="precios"
        className="flex justify-center items-center mt-10 text-gray-300  font-bold text-3xl"
      >
        Precios
      </h1>

      <section className="justify-center grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 xl:mx-56 lg:mx-40 md:mx-20 my-10 place-items-center ">
        <div className="w-full max-w-sm p-4 border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
          <h5 className="mb-4 text-xl font-medium  text-gray-300">
            Plan básico
          </h5>
          <div className="flex items-baseline  text-gray-300">
            <span className="text-5xl font-extrabold tracking-tight">9</span>
            <span className="text-3xl font-semibold">€</span>
            <span className="ms-1 text-xl font-normal  text-gray-300">
              /mes
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                1 equipo
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                10 prompts / día
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Velocidad media
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Documentación completa
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className=" w-4 h-4  text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Acceso a API
              </span>
            </li>

            <li className="flex line-through decoration-gray-500">
              <svg
                className=" w-4 h-4  text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Soporte 24/7 teléfono & email
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d] transition ease-in duration-100"
          >
            Elegir plan
          </button>
        </div>

        <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
          <h5 className="mb-4 text-xl font-medium  text-gray-300">
            Plan estándar
          </h5>
          <div className="flex items-baseline  text-gray-300">
            <span className="text-5xl font-extrabold tracking-tight">19</span>
            <span className="text-3xl font-semibold">€</span>
            <span className="ms-1 text-xl font-normal  text-gray-300">
              /mes
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                2 equipos
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                50 prompts / día
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Velocidad rápida
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Documentación completa
              </span>
            </li>
            <li className="flex line-through decoration-gray-500">
              <svg
                className=" w-4 h-4  text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Acceso a API
              </span>
            </li>

            <li className="flex line-through decoration-gray-500">
              <svg
                className=" w-4 h-4  text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                Soporte 24/7 teléfono & email
              </span>
            </li>
          </ul>
          <button
            type="button"
            className=" transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d]"
          >
            Elegir plan
          </button>
        </div>

        <div className="w-full max-w-sm p-4  border  rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
          <h5 className="mb-4 text-xl font-medium  text-gray-300">
            Plan premium
          </h5>
          <div className="flex items-baseline  text-gray-300">
            <span className="text-5xl font-extrabold tracking-tight">25</span>
            <span className="text-3xl font-semibold">€</span>
            <span className="ms-1 text-xl font-normal  text-gray-300">
              /mes
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                4 equipos
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Prompts ilimitados
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Velocidad rápida
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Documentación completa
              </span>
            </li>
            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Acceso a API
              </span>
            </li>

            <li className="flex">
              <svg
                className=" w-4 h-4  text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight  text-gray-300 ms-3">
                Soporte 24/7 teléfono & email
              </span>
            </li>
          </ul>
          <button
            type="button"
            className=" transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d]"
          >
            Elegir plan
          </button>
        </div>
      </section>

      <h1 className=" font-bold text-3xl text-gray-300 text-center mb-10 mt-10">
        FAQS
      </h1>
      <section
        id="faqs"
        className="flex justify-center mb-10 px-5 sm:px-12 md:px-20 lg:px-44"
      >
        <FAQ />
      </section>

      <FondoContacto className="h-full min-h-[80vh] grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-center items-center md:px-28 lg:px-36 sm:px-20 px-10 mt-12 md:mt-0">
          <h5 className="text-3xl font-bold text-gray-300 text-center mb-5">
            ¡Contacta con nosotros!
          </h5>
          <p className="text-center text-gray-300">
            Estamos disponibles para ayudarte con cualquier pregunta, sugerencia
            o comentario que tengas
          </p>
        </div>

        <div id="contacto" className="flex justify-center my-10 items-center">
          <div className="w-full max-w-lg p-4   rounded-lg shadow sm:p-8 bg-zinc-700/50 ">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Tu nombre
            </label>
            <input
              type="text"
              id="nombre"
              className=" mb-2     text-sm rounded-lg   block w-full p-2.5 bg-gray-200 placeholder-gray-400    "
              placeholder="Víctor Valverde"
              required
            />
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Tu email
            </label>
            <input
              type="email"
              id="email"
              className="mb-2  border   text-sm rounded-lg   block w-full p-2.5 bg-gray-200 placeholder-gray-400   "
              placeholder="hola@correo.com"
              required
            />

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              className="mb-8 block p-2.5 w-full text-sm   rounded-lg border    bg-gray-200 placeholder-gray-400  "
              placeholder="Escribe los detalles de tu mensaje"
            ></textarea>

            <button
              type="button"
              className="transition ease-in duration-100 text-gray-200 bg-[#5D68CC] hover:bg-[#525cb7] rounded-lg text-sm px-5 py-2.5 flex justify-center w-full text-center active:bg-[#464f9d]"
              >
              Enviar formulario
            </button>
          </div>
        </div>
      </FondoContacto>

      <footer className=" shadow bg-zinc-800">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="home" offset={-50} duration={1} smooth={true}>
              <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
                <img
                  src="/src/assets/img/prueba.png"
                  className=" h-16"
                  alt="ForstAI Logo"
                />
              </a>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 ">
              <li>
                <Link to="intro" offset={-50} duration={1} smooth={true}>
                  <a className="hover:underline me-4 md:me-6 cursor-pointer ">
                    Introducción
                  </a>
                </Link>
              </li>
              <li>
                <Link to="galeria" offset={-70} duration={1} smooth={true}>
                  <a className="hover:underline me-4 md:me-6 cursor-pointer ">
                    Galería
                  </a>
                </Link>
              </li>
              <li>
                <Link to="precios" offset={-80} duration={1} smooth={true}>
                  <a className="hover:underline me-4 md:me-6 cursor-pointer ">
                    Precios
                  </a>
                </Link>
              </li>
              <li>
                <Link to="faqs" offset={-150} duration={1} smooth={true}>
                  <a className="hover:underline me-4 md:me-6 cursor-pointer ">
                    FAQS
                  </a>
                </Link>
              </li>
              <li>
                <Link to="contacto" offset={-250} duration={1} smooth={true}>
                  <a className="hover:underline me-4 md:me-6 cursor-pointer ">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-300 sm:text-center ">
            © {new Date().getFullYear()}
            <Link to="home" offset={-250} duration={1} smooth={true}>
              <a className="hover:underline cursor-pointer "> ForstAI.</a>{" "}
            </Link>
            Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
