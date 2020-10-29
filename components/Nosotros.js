import React from "react";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className=" flex flex-row mt-16 h-auto lg:pb-32 pb-16 bg-sectiongray"
    >
      <div className="lg:w-7/12 lg:block hidden">
        <img src="" />
      </div>
      <div className="lg:w-5/12 lg:mt-16">
        <div className="flex flex-row">
          <div className="bg-herobutton2 lg:w-3 w-2 h-8 lg:h-10 ml-6 mt-16"></div>
          <h3 className="ml-2 text-3xl lg:text-4xl font-semibold leading-tight mt-16">
            Nosotros
          </h3>
        </div>
        <div className="mt-4 ml-6 mr-8 lg:w-9/12">
          <p className="font-light text-bodytext text-lg">
            Somos una empresa especializada en brindar soluciones integrales de
            correo expreso, logística internacional, cargas aéreas, marítimas y
            terrestres. Enfocados en un servicio personalizado de puerta a
            puerta, nuestro objetivo es brindarles a nuestros clientes la forma
            más rápida, segura y efectiva para recibir sus compras.
            <br />
            <br />
            Contamos con nuestro warehouse en Miami y Buenos Aires, una vez que
            recibimos tus compras las re-empaquetamos para enviártelas donde nos
            indiques. <br />
            <br />
            Nuestro valor agregado se basa en poder ofrecer servicios de
            almacenamiento ilimitado, distribución y logística, que incluyen
            desde paquetería de tamaño y peso reducidos hasta grandes cargas
            comerciales y domésticas.
          </p>
        </div>
        <div className="lg:w-7/12 lg:hidden flex flex-wrap">
          <h1>IMAGEN</h1>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
