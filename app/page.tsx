"use client";
import { MouseEventHandler, useState } from "react";
import FAQ from "../app/components/Home/FAQ";
import Header from "../app/components/Home/Header";
import Cards from "./components/Home/Cards";
import Contacto from "./components/Home/Contacto";
import Footer from "./components/Home/Footer";
import Ventajas from "./components/Home/Ventajas";
import Galeria from "./components/Home/Galeria";
import Intro from "./components/Home/Intro";
import Portada from "./components/Home/Portada";
import { Imagen } from "./types";


const imagenState : Imagen = {
id: 0,
title: '',
url: ''
}

const Home = () => {
  const [menuHeader, setMenuHeader] = useState(false);

  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState<Imagen>(imagenState);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.classList.contains("overlaymodal")) {
      setMenuHeader(true);
    } else {
      setMenuHeader(false);
    }
  };
  return (
    <>
      <Header menuHeader={menuHeader} setMenuHeader={setMenuHeader} modal={modal} />
      <div
        className=" overflow-hidden overlaymodal bg-grishome"
        onClick={handleOverlayClick}
       >
        <Portada />
        <Intro />
        <Galeria
          modal={modal}
          setModal={setModal}
          imagen={imagen}
          setImagen={setImagen}
        />
        <Ventajas />
        <Cards />
        <FAQ />
        <Contacto />
        <Footer />
      </div>
    </>
  );
};

export default Home;
