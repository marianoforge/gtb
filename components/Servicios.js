import React from "react";
import ComponentesServicio from "../components/Servicios/ComponentesServicio";

const Servicios = () => {
  return (
    <div>
      <section
        id="servicios"
        className=" flex flex-row  h-auto lg:pb-32 pb-16 lg:ml-32 bg-white"
      >
        <div className="lg:w-full lg:mt-8">
          <div className="flex flex-row lg:justify-center lg:w-full">
            <div className="bg-herobutton2 lg:w-3 w-2 h-8 lg:h-10 lg:-ml-24 ml-6 mt-16"></div>
            <h3 className="ml-2 text-3xl lg:text-4xl font-semibold leading-tight mt-16">
              Servicio
            </h3>
          </div>
          <div className="mt-4 ml-6 mr-6 lg:w-11/12 lg:flex lg:mt-6 lg:flex-coulmn lg:-ml-8 lg:justify-around">
            <p className="font-light text-bodytext text-lg lg:mt-3 lg:text-xl lg:w-5/12">
              Ofrecemos servicio de almacenamiento, servicio puerta a puerta
              para empresas y particulares.
            </p>
            <p className="font-light text-bodytext text-lg lg:text-xl mt-5 lg:mt-3 lg:mr-4 lg:w-5/12">
              Brindamos soluciones a medida de logística nacional e
              internacional. Envío y recepción de paquetería de todo tipo,
              tamaño y peso.
            </p>
          </div>
          <div className="lg:mt-16">
            <ComponentesServicio />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
