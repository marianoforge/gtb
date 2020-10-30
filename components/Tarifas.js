import React from "react";

const Tarifas = () => {
  return (
    <section
      id="tarifas"
      className="bg-sectiongray"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:py-32 py-16 items-center">
          <div className="w-full lg:w-6/12 lg:pr-3">           
            <h3 className="title-line text-3xl lg:text-4xl font-semibold leading-none mb-4">
              Tarifas
            </h3>
            <p className="font-light text-bodytext text-lg lg:mb-0 mb-8">
              Dede la calculadora podrás obtener un número estimativo de los
              costos de envío de tus paquetes. Deberás tener en cuenta lo
              siguiente:
            </p>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-3">   
            <div className="p-6 bg-white rounded-lg shadow-2xl">
              Aqui va la calculadora
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Tarifas;
