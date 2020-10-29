import React from "react";
import Form from "./Contacto/Form";
import SocialMedia from "./Contacto/SocialMedia";

const Contacto = () => {
  const sendForm = (data) => {
    alert(JSON.stringify(data).toUpperCase());
    return data;
  };

  return (
    <section id="contacto" className="h-auto lg:pb-32 pb-16 bg-white">
      <div className="lg:w-full lg:mt-8">
        <div className="flex flex-row lg:justify-center items-center lg:w-full mt-12">
          <div className="bg-herobutton2 lg:w-3 w-2 h-16 lg:h-10 lg:-ml-24 ml-3 "></div>
          <h3 className="ml-2 text-3xl lg:text-4xl font-semibold leading-tight ">
            Formulario de Contacto
          </h3>
        </div>
      </div>
      <div className="lg:flex lg:flex-row justify-center lg:mt-8 mt-4 w-full">
        <Form onSubmit={sendForm} />
        <SocialMedia />
      </div>
    </section>
  );
};

export default Contacto;
