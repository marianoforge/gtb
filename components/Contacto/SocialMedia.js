import React from "react";

const SocialMedia = () => {
  return (
    <div className="lg:ml-8 ml-4  mt-10 lg:mt-2">
      <div className="w-48">
        <div className="flex flex-row items-center">
          <div className="bg-herobutton2 w-2 h-5 lg:h-6"></div>
          <h3 className="ml-2 text-xl lg:text-2xl font-semibold leading-tight">
            Seguinos en:
          </h3>
        </div>
        <div className="flex flex-row flex-start ">
          <div>
            <img className="w-6 mt-6" src="/facebook.png" alt="Facebook" />
          </div>
          <div>
            <img className="w-6 mt-6 ml-6" src="/twitter.png" alt="Twitter" />
          </div>
          <div>
            <img className="w-6 mt-6 ml-6" src="/youtube.png" alt="Youtube" />
          </div>
          <div>
            <img
              className="w-6 mt-6 ml-6"
              src="/instagram.png"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
      <div className="w-48 lg:mt-24 mt-16">
        <div className="flex flex-row items-center">
          <div className="bg-herobutton2 w-2 h-5 lg:h-6"></div>
          <h3 className="ml-2 text-xl lg:text-2xl font-semibold leading-tight">
            Contacto:
          </h3>
        </div>
        <div className="mt-4">
          <p className="text-light lg:text-lg text-herobutton2">
            info@globaltradebox.com
          </p>
        </div>
        <div className="mt-4">
          <p className="text-light text-lg text-dark">Tel: +54 (11) 123 4567</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
