"use client";
import { useEffect, useState } from "react";
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
import ScrollReveal from "scrollreveal";

const imagenState: Imagen = {
  id: 0,
  title: "",
  url: "",
};

const Home = () => {
  const [menuHeader, setMenuHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState<Imagen>(imagenState);

  const handleOutsideClick = () => {
    if (menuHeader) {
      setMenuHeader(false);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal();
    
    // Animación de Slide-In desde abajo
    sr.reveal('.reveal-slide-bottom', {
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      reset: false,
    });
    
   
  }, []);

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
        <section className="reveal-slide-bottom">
          <Intro />
        </section>
        <section className="reveal-slide-bottom">
          <Galeria
            modal={modal}
            setModal={setModal}
            imagen={imagen}
            setImagen={setImagen}
          />
        </section>
        <section className="reveal-slide-bottom">
          <Ventajas />
        </section>
        <section className="reveal-slide-bottom">
          <Cards />
        </section>
        <section className="reveal-slide-bottom">
          <FAQ />
        </section>
        <section className="reveal-slide-bottom">
          <Contacto />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
