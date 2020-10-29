import React from "react";
import CompServicio from "../Servicios/ComponenteServicio";

const prueba = () => {
  const backSquare = {
    backgroundColor: "#0D53F7",
  };
  const backSquare2 = {
    backgroundColor: "#33ABFF",
  };
  const backSquare3 = {
    backgroundColor: "#FF703E",
  };
  const backSquare4 = {
    backgroundColor: "#6b6b6b",
  };

  const backSquare5 = {
    backgroundColor: "#0AFFE0",
  };
  return (
    <div>
      <div className="lg:flex lg:flex-row mt-10 lg:mt-0 ml-6 lg:ml-0">
        <CompServicio
          backSquare={backSquare}
          title="CREA TU USUARIO"
          text="Ofrecemos servicio de almacenamiento, servicio puerta a puerta para empresas y particulares"
          svg={
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          }
        />
        <CompServicio
          backSquare={backSquare2}
          title="ENVIA TUS COMPRAS CON TU NÚMERO DE CLIENTE"
          text="Desde tu casa, podrás comprar de forma online en cualquier sitio de USA pagando con tu tarjeta de crédito."
          text2="Sólo te queda usar nuestro depósito como dirección de envío ¡Nosotros nos encargamos del resto!"
          bgColor=""
          svg={
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          }
        />
        <div className="mt-6 lg:mt-0"></div>
        <CompServicio
          backSquare={backSquare3}
          title="PRE ALERTA TUS COMPRAS"
          text="Recibirás una alerta por cada paquete que hayas enviado a nuestro depósito. Desde tu panel online, podrás verificar el estado de tus compras."
          bgColor=""
          svg={
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          }
        />
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:mt-16 ml-6 lg:ml-0">
        <CompServicio
          backSquare={backSquare4}
          title="TU PAQUETE ESTÁ LISTO"
          text="Una vez que todas tus compras estén en depósito podrás elegir entre enviar, retirar o dejarlas en depósito. Pagas y ¡Listo!
El tiempo aproximado de entrega en Buenos Aires será de 72 horas."
          bgColor=""
          svg={
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          }
        />
        <CompServicio
          backSquare={backSquare5}
          title="ARRIBO DE TUS COMPRAS A BUENOS AIRES"
          text="¡Te noficaremos por Correo electrónico / Whatsapp que tus paquetes están listos para ser entregados! En este momento te enviaremos una factura online para que puedas ver el detalle de tu mercadería."
          bgColor=""
          svg={
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default prueba;
