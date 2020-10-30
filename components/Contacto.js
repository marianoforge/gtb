import React from "react";
import Form from "./Contacto/Form";
import SocialMedia from "./Contacto/SocialMedia";

const Contacto = () => {
  const sendForm = (data) => {
    alert(JSON.stringify(data).toUpperCase());
    return data;
  };

  return (
    <section id="contacto" className="h-auto lg:py-32 py-16">
      <div className="container mx-auto px-4"> 
      <div className="lg:text-center">
          <h3 className="title-line text-3xl lg:text-4xl font-semibold leading-none mb-8 inline-block">
            Formulario de Contacto
          </h3> 
        </div>  
        <div className="flex flex-wrap">
          <Form onSubmit={sendForm} />
          <SocialMedia />
          </div>
        </div>
    </section>
  );
};

export default Contacto;
