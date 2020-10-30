import React from "react";

const ComponenteServicio = ({ title, text, text2, svg, backSquare }) => {
  return (
    <div className="w-full lg:w-1/3 mb-8 lg:mb-16">
      <div className="mb-4 flex flex-row items-center">        
          <div
            style={backSquare}
            className="lg:font-semibold rounded-lg
                   text-white h-16 w-16 flex items-center justify-center flex-none">          
            {svg}
          </div>
          <h4 className="lg:text-lg text-base font-semibold ml-4">{title}</h4>
      </div>
      <div className="justify-center font-light text-bodytext text-base lg:w-4/5 w-11/12 h-auto">
        <p className="mb-4">{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default ComponenteServicio;
