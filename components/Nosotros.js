import React from "react";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="bg-sectiongray"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center lg:flex-row-reverse lg:py-32 py-16">         
          <div className="lg:w-5/12 w-full">          
            <h3 className="title-line text-3xl lg:text-4xl font-semibold leading-none mb-4">
              Nosotros
            </h3>
            <p className="font-light text-bodytext text-lg mb-4">
              Somos una empresa especializada en brindar soluciones integrales de
              correo expreso, logística internacional, cargas aéreas, marítimas y
              terrestres. Enfocados en un servicio personalizado de puerta a
              puerta, nuestro objetivo es brindarles a nuestros clientes la forma
              más rápida, segura y efectiva para recibir sus compras.
              </p>
            <p className="font-light text-bodytext text-lg mb-4">
              Contamos con nuestro warehouse en Miami y Buenos Aires, una vez que
              recibimos tus compras las re-empaquetamos para enviártelas donde nos
              indiques. </p>
            <p className="font-light text-bodytext text-lg mb-8 lg:mb-0">
              Nuestro valor agregado se basa en poder ofrecer servicios de
              almacenamiento ilimitado, distribución y logística, que incluyen
              desde paquetería de tamaño y peso reducidos hasta grandes cargas
              comerciales y domésticas.
            </p>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="image-wrapper">
              <div className="img" style={{backgroundImage: 'url(/images/nosotros.jpg)'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
