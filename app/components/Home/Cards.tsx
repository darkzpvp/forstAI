
import Basico from "./Card/Basico";
import Estandar from "./Card/Estandar";
import Premium from "./Card/Premium";

const Cards = () => {


  return (
    <section className="justify-center flex items-center md:flex-row flex-col px-5 gap-5 my-10 max-w-5xl mx-auto  ">
      <Basico />
      <Estandar />
      <Premium />
    </section>
  );
};

export default Cards;
