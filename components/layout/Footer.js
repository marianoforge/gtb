import React from "react";
import GTBLogo from "../../public/images/gtblogo.svg";

const Footer = () => {
  return (
    <footer className="bg-herobutton2 h-auto py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-around">
          <div className="lg:w-6/12 w-full mb-4 lg:mb-0">
            <GTBLogo />
          </div>
          <div className="text-white lg:w-6/12 w-full text-sm">
            <p className="font-light mb-2 text-left lg:text-right">© Global Trade Box 2020. Copyright.</p>
            <p className="font-light text-left lg:text-right">
              <a href="#" className="pr-3">Term and Conditions</a> |
              <a href="#" className="px-3">Privacy</a> |
              <a href="#" className="pl-3">Help</a>
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
