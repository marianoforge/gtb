import React from "react";
import Link from "next/link";
import GTBLogo from "../../public/images/gtblogo.svg";

const Layout = () => {
  return (
    <>
      <nav className="flex flex-row h-24 bg-transparent">
        <div className="lg:w-1/2 mt-8 lg:ml-48 ">
          <Link href="/">
            <a>
              <GTBLogo />
            </a>
          </Link>
        </div>

        <div className="w-1/2 mr-24 mt-1">
          <ul className="flex flex-row justify-end items-center mt-6 text-white  text-xl">
            <li className="mt-2 mr-8">
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li className="mt-2 mr-8">
              <Link href="#nosotros">
                <a>Nosotros</a>
              </Link>
            </li>
            <li className="mt-2 mr-8">
              <Link href="#tarifas">
                <a>Tarifas</a>
              </Link>
            </li>
            <li className="mt-2 mr-8">
              <Link href="#servicios">
                <a>Servicios</a>
              </Link>
            </li>
            <li className="mt-2 mr-8">
              <Link href="/novedades/">
                <a>Novedades</a>
              </Link>
            </li>
            <li className="bg-mbutton hover:bg-orange-600 text-white font-bold px-5 py-3 mt-2 rounded-full">
              <Link href="#contacto">
                <a>Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Layout;
