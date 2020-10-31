import React from "react";
import Link from "next/link";
import GTBLogo from "../../public/images/gtblogo.svg";




const Layout = () => {

  const mobileClick = () => {
      let header = document.getElementById('header');
      let hamburger = document.getElementById('hamburgerbtn');
      header.classList.toggle('active');
  }
  return (
    <>
      <nav id="header" className="h-24 flex items-center absolute left-0 top-0 z-10 w-full">        
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center">
            <Link href="/">
              <a className="inline-block">
                <GTBLogo />
              </a>
            </Link>       

            <div className="flex flex-grow justify-end">
              <button aria-label="Abrir el menu" id="hamburgerbtn" onClick={mobileClick} className="lg:hidden text-white h-6 p-4 flex justify-center items-center border-0 relative z-10">
                <svg className="w-6 h-6 icn icn-hamb" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
                <svg className="w-6 h-6 icn icn-close" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.9 4.1L19.8 6l-6 6 6 6-1.9 1.9-6-6-6 6L4.1 18l6-6-6-6L6 4.1l6 6 5.9-6z" fill="#fff" />
                </svg>
              </button>
              <div className="hidden bg-black bg-opacity-75 lg:bg-transparent lg:flex justify-center lg:justify-end fixed lg:relative top-0 left-0 h-screen w-screen lg:h-auto lg:w-auto lg:top-auto lg:left-auto" id="navMenu">
                <ul className="flex lg:flex-row justify-center lg:justify-end items-center text-white text-xl lg:text-lg flex-col">
                  <li className="px-4 py-2 lg:py-0">
                    <Link href="/">
                      <a>Inicio</a>
                    </Link>
                  </li>
                  <li className="px-4 py-2 lg:py-0">
                    <Link href="./#nosotros">
                      <a>Nosotros</a>
                    </Link>
                  </li>
                  <li className="px-4 py-2 lg:py-0">
                    <Link href="./#tarifas">
                      <a>Tarifas</a>
                    </Link>
                  </li>
                  <li className="px-4 py-2 lg:py-0">
                    <Link href="./#servicios">
                      <a>Servicios</a>
                    </Link>
                  </li>
                  <li className="px-4 py-2 lg:py-0">
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
          </div>
      </nav>
    </>
  );
};

export default Layout;
