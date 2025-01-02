import React from "react";
import { healthAdvice } from "./Constants";

const HealthAdvice = () => {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/diabeticBG.jpg')" }}
    >
      <div className="bg-black text-white text-center flex flex-col justify-center items-center bg-opacity-65 px-8 py-8  rounded-xl gap-4 lg:mx-40 md:mx-20 mx-8">
        <h1 className="md:text-4xl text-3xl font-lora font-semibold">
          {healthAdvice.heading}
        </h1>
        <p className="font-roboto text-base md:text-lg md:text-justify text-center">
          {
            healthAdvice.description.split(
              "monitor your blood glucose levels regularly"
            )[0]
          }
          <span className="font-semibold">
            monitor your blood glucose levels regularly
          </span>
          {
            healthAdvice.description.split(
              "monitor your blood glucose levels regularly"
            )[1]
          }
        </p>
      </div>
    </section>
  );
};

export default HealthAdvice;
