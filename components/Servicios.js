import React from "react";
import ComponentesServicio from "../components/Servicios/ComponentesServicio";

const Servicios = () => {
  return (
    <div>
      <section
        id="servicios"
        className="h-auto lg:pt-32 lg:pb-16 pb-8 pt-16"
      >
        <div className="container mx-auto px-4">
          <div className="lg:text-center">
            <h3 className="title-line text-3xl lg:text-4xl font-semibold leading-none mb-8 inline-block">
              Servicio
            </h3> 
          </div> 
          <div className="flex flex-wrap mb-6 lg:mb-10">
            <p className="font-light text-bodytext text-base lg:text-lg lg:w-6/12 mb-4 lg:pr-3">
              Ofrecemos servicio de almacenamiento, servicio puerta a puerta
              para empresas y particulares.
            </p>
            <p className="font-light text-bodytext text-base lg:text-lg lg:w-6/12 mb-4 lg:pl-3">
              Brindamos soluciones a medida de logística nacional e
              internacional. Envío y recepción de paquetería de todo tipo,
              tamaño y peso.
            </p>
          </div>
            <ComponentesServicio />
        </div>
      </section>
    </div>
  );
};

export default Servicios;
