
import Basico from "./Card/Basico";
import Estandar from "./Card/Estandar";
import Premium from "./Card/Premium";

const Cards = () => {


  return (
    <section className="justify-center grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-5 xl:mx-56 lg:mx-40 md:mx-20 my-10 place-items-center ">
      <Basico />
      <Estandar />
      <Premium />
    </section>
  );
};

export default Cards;
