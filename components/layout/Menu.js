import React from "react";
import Link from "next/link";
import GTBLogo from "../../public/images/gtblogo.svg";

const Layout = () => {
  return (
    <>
      <nav className="h-24 flex items-center absolute left-0 top-0 z-10 w-full">        
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center">
            <Link href="/">
              <a className="inline-block">
                <GTBLogo />
              </a>
            </Link>       

          <div className="flex-grow">
            <ul className="flex flex-row justify-end items-center text-white text-base lg:text-lg">
              <li className="px-4">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li className="px-4">
                <Link href="./#nosotros">
                  <a>Nosotros</a>
                </Link>
              </li>
              <li className="px-4">
                <Link href="./#tarifas">
                  <a>Tarifas</a>
                </Link>
              </li>
              <li className="px-4">
                <Link href="./#servicios">
                  <a>Servicios</a>
                </Link>
              </li>
              <li className="px-4">
                <Link href="/novedades/">
                  <a>Novedades</a>
                </Link>
              </li>
              <li className="bg-mbutton hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-full transition-all duration-300">
                <Link href="./#contacto">
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Layout;
