import React from "react";
import Media from "react-media";
import Menu from "../components/layout/Menu";
import MenuMobile from "../components/layout/MenuMobile";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.bgImg}>
      <div className={styles.container}>
        <div className={styles.topnav}>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <>
                {matches.small && <MenuMobile />}
                {matches.medium && <MenuMobile />}
                {matches.large && <Menu />}
              </>
            )}
          </Media>

          <div className="text-left ">
            <h1
              className="text-3xl lg:text-5xl text-white ml-6 mt-56 lg:ml-48 lg:mt-40 w-full lg:w-5/12 pr-12 
                           leading-tight font-semibold"
            >
              Compra en Estados Unidos sin moverte de tu casa.
            </h1>
            <h3 className="text-base lg:text-lg text-white w-5/6 lg:w-1/3 mt-6 ml-6 lg:ml-48 lg:mt-4 leading-relaxed font-light">
              Ofrecemos un servicio puerta a puerta garantizado. Te pasamos una
              tarifa final donde está incluido todos los gastos y no vas a tener
              trámites engorrosos ni sorpresas en el camino.
            </h3>
            <button
              className=" flex flex-row lg:text-base font-semibold bg-gradient-to-r from-herobutton via-herobutton to-herobutton2
                   text-white ml-6 mt-6 py-4 px-8 rounded-full w-56 lg:mt-10 lg:ml-48"
            >
              <span className="ml-2">CONOCER MÁS</span>
              <svg
                className="w-4 h-4 mt-1 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Typeface: Poppins
// Weight: 600
// Size: 64
// Style: normal
// Character: 0
// Line Height: 72 (1.125)
// Color: #FFFFFF
// Horizontal: Left
// Vertical: Top
