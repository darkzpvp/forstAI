import React from "react";
import Acordeon from "./Acordeon";

const FAQ = () => {
  return (
<>
    <h1 className=" font-bold text-3xl text-gray-300 text-center mb-10 mt-10">
    FAQS
  </h1>
  <section
    id="faqs"
    className="flex justify-center mb-10 px-5 sm:px-12 md:px-20 lg:px-44"
   >
    <div className="p-4 bg-gray-800 border-gray-700 rounded-lg w-full border ">
      <Acordeon
        title="Diferencias entre los planes básico, estándar y premium"
        answer="Los planes varían en términos de la cantidad de equipos permitidos, la cantidad de prompts generados por día, la velocidad de generación y otros beneficios adicionales. El plan básico permite un solo equipo y 10 prompts al día, el plan estándar permite dos equipos y 50 prompts al día, mientras que el plan premium permite hasta cuatro equipos y prompts ilimitados."
      />
      <Acordeon
        title="¿Qué significa velocidad media y velocidad rápida en los planes?"
        answer="La velocidad de generación se refiere a la rapidez con la que se procesan los prompts y se generan las imágenes. En el plan básico, la velocidad es media, lo que significa que puede haber una pequeña demora en la generación. En el plan estándar y premium, la velocidad es rápida, lo que garantiza una generación más ágil y eficiente."
      />
      <Acordeon title="¿Qué incluye la documentación completa?" 
      answer="La documentación completa incluye instrucciones detalladas sobre cómo utilizar nuestra plataforma, información sobre la API, ejemplos de código, guías de resolución de problemas y cualquier otra información relevante para maximizar el uso de nuestros servicios" />
      <Acordeon
        title="¿Cómo funciona el soporte 24/7 por teléfono y correo electrónico?"
        answer="Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para ayudarlo con cualquier consulta, problema técnico o pregunta relacionada con nuestros servicios. Puede ponerse en contacto con nosotros a través del teléfono o el correo electrónico proporcionados, y nos esforzaremos por brindarle una asistencia rápida y eficaz."
      />
           <Acordeon
        title="¿Puedo cambiar de plan en cualquier momento?"
        answer="Sí, puede cambiar entre nuestros planes en cualquier momento según sus necesidades. Simplemente contáctenos y estaremos encantados de ayudarlo a actualizar o cambiar su plan según sea necesario."
      />
           <Acordeon
        title="¿Qué tipo de imágenes puedo generar con su plataforma?"
        answer="Nuestra plataforma es versátil y puede generar una amplia variedad de imágenes en función de los prompts proporcionados. Esto incluye imágenes realistas, abstractas, de estilo artístico, y mucho más. Nuestros algoritmos están diseñados para adaptarse a una variedad de estilos y temas."
      />
    </div>
    </section>
    </>
  );
};

export default FAQ;