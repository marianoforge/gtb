import Head from "next/head";

import Hero from "../components/Hero";
import Tiendas from "../components/Tiendas";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Tarifas from "../components/Tarifas";
import Contacto from "../components/Contacto";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Tiendas />
      <Nosotros />
      <Servicios />
      <Tarifas />
      <Contacto />
      <Footer />
    </>
  );
}
