// @ts-nocheck

"use client";
import { useEffect, useRef, useState } from "react";
import FAQ from "./components/Home/FAQ";
import Header from "./components/Home/Header";
import Cards from "./components/Home/Cards";
import Contacto from "./components/Home/Contacto";
import Footer from "./components/Home/Footer";
import Ventajas from "./components/Home/Ventajas";
import Galeria from "./components/Home/Galeria";
import Intro from "./components/Home/Intro";
import Portada from "./components/Home/Portada";
import { Imagen } from "./types";
import { useIsVisible } from "./hooks/useIsVisible";

const imagenState: Imagen = {
  id: 0,
  title: "",
  url: "",
};

const Home = () => {
  const [menuHeader, setMenuHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState<Imagen>(imagenState);
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  
  const handleOutsideClick = () => {
    if (menuHeader) {
      setMenuHeader(false);
    }
  };


  return (
    <>
      <Header
        menuHeader={menuHeader}
        setMenuHeader={setMenuHeader}
        modal={modal}
      />
      <div
        className="overflow-hidden overlaymodal bg-grishome"
        onClick={handleOutsideClick}
      >
        <Portada />
        <section ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <Intro />
        </section>
        <section ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <Galeria
            modal={modal}
            setModal={setModal}
            imagen={imagen}
            setImagen={setImagen}
          />
        </section>
        <section ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <Ventajas />
        </section>
        <section ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <Cards />
        </section>
        <section ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
          <FAQ />
        </section>
        <section ref={ref6} className={`transition-opacity ease-in duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
          <Contacto />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
