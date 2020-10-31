import React from "react";
import Media from "react-media";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.bgImg} style={{backgroundImage: 'url(/images/hero.jpg)'}}>
      <div className={styles.mask}></div>
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
          <div className="w-full lg:w-7/12">
            <h1 className="text-4xl lg:text-6xl text-white leading-none lg:leading-tight font-semibold mb-2">
              Compra en Estados Unidos sin moverte de tu casa.
            </h1>
            <h2 className="text-base lg:text-xl text-white leading-relaxed font-light mb-4 lg:mb-8">
              Ofrecemos un servicio puerta a puerta garantizado. Te pasamos una
              tarifa final donde está incluido todos los gastos y no vas a tener
              trámites engorrosos ni sorpresas en el camino.
            </h2>
            <button
              className="flex flex-row lg:text-base font-semibold bg-gradient-to-r from-herobutton via-herobutton to-herobutton2
                   text-white py-4 px-8 rounded-full shadow-lg"
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
