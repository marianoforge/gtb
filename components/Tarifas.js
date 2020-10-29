import React from "react";

const Tarifas = () => {
  return (
    <section
      id="tarifas"
      className=" flex flex-row mt-16 h-auto lg:pb-32 pb-16 bg-sectiongray"
    >
      <div className="lg:w-5/12 lg:mt-16">
        <div className="flex flex-row">
          <div className="bg-herobutton2 lg:w-3 w-2 h-8 ml-6 mt-16"></div>
          <h3 className="ml-2 text-3xl font-semibold leading-tight mt-16">
            Tarifas
          </h3>
        </div>
        <div className="mt-4 ml-6 mr-8 lg:w-9/12">
          <p className="font-light text-bodytext text-lg">
            Dede la calculadora podrás obtener un número estimativo de los
            costos de envío de tus paquetes. Deberás tener en cuenta lo
            siguiente:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tarifas;
