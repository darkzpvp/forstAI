"use client";
import { useState } from "react";
import FAQ from "../app/components/Home/FAQ";
import Header from "../app/components/Home/Header";
import Link from "next/link";
import Cards from "./components/Home/Cards";
import Contacto from "./components/Home/Contacto";
import Footer from "./components/Home/Footer";
import Ventajas from "./components/Home/Ventajas";
import Galeria from "./components/Home/Galeria";
import Intro from "./components/Home/Intro";

const Home = () => {
  const [menuHeader, setMenuHeader] = useState(false);

  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState({});

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlaymodal")) {
      setMenuHeader(true);
    } else {
      setMenuHeader(false);
    }
  };
  return (
    <>
      <Header menuHeader={menuHeader} setMenuHeader={setMenuHeader} />

      <div
        className=" overflow-hidden overlaymodal bg-grishome"
        onClick={handleOverlayClick}
      >
        <div
          id="home"
          className="flex flex-col justify-center items-center h-screen gap-5 px-5 text-center bg-introhome"
        >
          <h1 className="text-gray-200 text-4xl font-bold sm:text-6xl">
            ForstAI
          </h1>
          <p className="text-gray-300">
            Comienza a generar imágenes de forma gratuita.
          </p>

          <Link href={"#intro"} legacyBehavior>
            <div>
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
            </div>
          </Link>
        </div>
        <Intro />

        <Galeria
          modal={modal}
          setModal={setModal}
          imagen={imagen}
          setImagen={setImagen}
        />

        <Ventajas />

        <h1
          id="precios"
          className="flex justify-center items-center mt-10 text-gray-300  font-bold text-3xl"
        >
          Precios
        </h1>

        <Cards />

        <h1 className=" font-bold text-3xl text-gray-300 text-center mb-10 mt-10">
          FAQS
        </h1>
        <section
          id="faqs"
          className="flex justify-center mb-10 px-5 sm:px-12 md:px-20 lg:px-44"
        >
          <FAQ />
        </section>

        <Contacto />

        <Footer />
      </div>
    </>
  );
};

export default Home;
