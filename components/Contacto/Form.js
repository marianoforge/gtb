import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const emailVal = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

  return (
    <div className="lg:w-7/12 w-11/12 ml-3">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-bodytext text-xs mb-2"
              htmlFor="name"
            ></label>
            <input
              ref={register({ required: true })}
              name="name"
              className="block w-full bg-white text-bodytext border font-thin border-gray-300 rounded-md py-3 px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Nombre y Apellido"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors?.name.type === "required" && (
                  <p>Please fill out this field.</p>
                )}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-bodytext text-xs mb-2"
              htmlFor="phone"
            ></label>
            <input
              ref={register({ minLength: 5 })}
              name="phone"
              className="block w-full bg-white text-bodytext border font-thin border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="number"
              placeholder="Teléfono"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">
                {errors?.phone.type === "minLength" && (
                  <p>Please enter a valid phone number</p>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-bodytext text-xs mb-2"
              htmlFor="email"
            ></label>
            <input
              ref={register({ required: true, pattern: emailVal })}
              name="email"
              className="appearance-none block w-full bg-white font-thin text-bodytext border border-gray-300 rounded-md py-3 px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors?.email.type === "required" && (
                  <p>Please fill out this field.</p>
                )}
                {errors?.email.type === "pattern" && (
                  <p>Please enter a valid email</p>
                )}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-bodytext text-xs mb-2"
              htmlFor="asunto"
            ></label>
            <input
              ref={register({ required: true })}
              name="asunto"
              className="block w-full bg-white text-bodytext font-thin border border-gray-300 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="asunto"
              type="text"
              placeholder="Asunto"
            />
            {errors.asunto && (
              <p className="text-red-500 text-xs italic">
                {errors?.asunto.type === "required" && (
                  <p>Please fill out this field.</p>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-bodytext text-xs mb-2"
              htmlFor="message"
            ></label>
            <textarea
              ref={register({ required: true })}
              name="message"
              rows="5"
              className="block w-full bg-white text-bodytext font-thin border border-gray-300 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              type="text"
              placeholder="Mensaje"
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors?.message.type === "required" && (
                  <p>Please fill out this field.</p>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center lg:ml-24">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="flex flex-row items-center justify-center h-12 lg:w-40 w-full shadow bg-mbutton hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-semibold lg:font-normal py-6 px-4 rounded-full"
              type="submit"
            >
              <span className="ml-2">ENVIAR</span>
              <svg
                className="w-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
