import React from "react";

const SocialMedia = () => {
  return (
    <div className="lg:pl-8 ml-0 lg:w-4/12 w-full">
          <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
            Seguinos en:
          </h3>
        <div className="flex flex-row lg:mb-24 mb-16 items-center">
          <a href="#" className="mr-6">
            <img className="w-6" src="/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" className="mr-6">
            <img className="w-6" src="/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" className="mr-6">
            <img className="w-6" src="/youtube.svg" alt="Youtube" />
          </a>
          <a href="#" className="mr-6">
            <img
              className="w-6"
              src="/instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
          Contacto:
        </h3>
        <p className="mb-4">
          <a href="mailto:info@globaltradebox.com" className="text-light lg:text-lg text-herobutton2">
            info@globaltradebox.com
          </a>
        </p>
        <p>
          <a href="tel://54111234567" className="text-light text-lg text-dark">Tel: +54 (11) 123 4567</a>
        </p>
    </div>
  );
};

export default SocialMedia;
