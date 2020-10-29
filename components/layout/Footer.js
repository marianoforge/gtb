import React from "react";
import GTBLogo from "../../public/images/gtblogo.svg";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col items-center justify-around w-full bg-herobutton2 h-auto py-10">
      <div className="lg:w-1/3 w-1/4">
        <GTBLogo />
      </div>
      <div className="text-white mt-6 lg:mt-0">
        <p className="font-light">© Global Trade Box 2020. Copyright.</p>
        <p className="mt-2 font-light">Term and Conditions | Privacy | Help</p>
      </div>
    </footer>
  );
};

export default Footer;
