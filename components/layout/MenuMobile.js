import React from "react";
import GTBLogo from "../../public/images/gtblogo.svg";

const Layout = () => {
  return (
    <>
      <nav className="flex flex-row h-24  bg-transparent">
        <div>
          <GTBLogo className="w-24 ml-6 mt-5" />
        </div>
        <div className="w-1/3"></div>
        <div className="w-1/3 flex flex-row-reverse mr-6 mt-8">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Layout;
