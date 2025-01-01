import React from "react";
import { features, Main } from "./Constants";

const MainSection = () => {
  return (
    <main className="bg-amber-400">
      <div className="flex flex-col items-center lg:mx-44 gap-4 px-4 py-4 pt-20">
        <h1 className="font-lora md:text-4xl text-3xl font-bold text-indigo-900">
          {Main.heading}
        </h1>
        <p className="font-roboto font-medium md:text-lg text-base md:leading-normal text-black text-center">
          {Main.description.split("powerful glucose tracker")[0]}
          <strong>powerful glucose tracker</strong>
          {
            Main.description
              .split("powerful glucose tracker")[1]
              .split("Type 1 or Type 2")[0]
          }
          <strong>Type 1 or Type 2</strong>
          {Main.description.split("Type 1 or Type 2")[1]}
        </p>
      </div>

      {/* Features */}
      {features.map((feature,index)=>(
        <div key={index}>
            <img src={feature.img} alt="" />
            <h1>{feature.heading}</h1>
            <p>{feature.description}</p>
        </div>
      ))}
    </main>
  );
};

export default MainSection;
