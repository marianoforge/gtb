import React from "react";

const ComponenteServicio = ({ title, text, text2, svg, backSquare }) => {
  return (
    <div className="lg:w-1/3">
      <div className="lg:h-24 lg:w-4/5 w-11/12 mb-4 mt-10 lg:mt-0 lg:mb-0 flex flex-row items-center">
        <div>
          <button
            style={backSquare}
            className="lg:font-semibold rounded
                   text-white lg:px-4 lg:py-4 px-3 py-3"
          >
            {svg}
          </button>
        </div>
        <div>
          <h4 className="lg:text-xl text-lg font-semibold ml-4">{title}</h4>
        </div>
      </div>
      <div className="justify-center font-light text-bodytext text-lg lg:w-4/5 w-11/12 h-auto">
        <p>{text}</p>
        <p className="mt-4">{text2}</p>
      </div>
    </div>
  );
};

export default ComponenteServicio;
