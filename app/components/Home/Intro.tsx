import React from 'react'
import Image from 'next/image'
import intro from "../../../app/data/intro.json";
const Intro = () => {
  return (
    <section
    id="intro"
    className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-2"
  >
    <div className="  ">
      <Image
        width={400}
        height={400}
        className=" hidden lg:flex justify-center mx-auto w-[100%] max-w-xl h-screen"
        src={'/img/home/about.svg'}
        alt="About"
      />
    </div>

    <div className=" px-14 lg:pr-14 lg:pl-0">
      <h1 className=" font-bold text-3xl text-gray-300 text-center mb-10 mt-10">
        Introducción
      </h1>
      <div className="text-gray-300 w-[100%] max-w-2xl block justify-center mx-auto">
        {intro.data.map((parrafo) => (
          <p className="mb-7" key={parrafo.id}>
            {parrafo.msg}
          </p>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Intro