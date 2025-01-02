import React from "react";
import { features, Main } from "./Constants";
import Highlighter from "react-highlight-words";
import { motion } from "framer-motion";

const MainSection = () => {
  const wordsToBold = [
    "tags",
    "charts",
    "meals",
    "insulin",
    "exercise",
    "PDF",
    "CSV",
    "doctor",
    "healthcare provider",
    "insights",
    "different times of the day",
  ];
  return (
    <main
      id="features"
      className="bg-amber-400 selection:bg-indigo-800 selection:text-amber-300"
    >
      <div className="flex flex-col items-center lg:mx-44 gap-4 px-4 py-4 pt-20">
        <motion.h1
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-lora text-center md:text-4xl text-3xl font-bold text-indigo-900"
        >
          {Main.heading}
        </motion.h1>
        <p className="font-roboto font-medium md:text-lg text-base md:leading-normal text-black text-center selection:text-white">
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

      <section className="flex flex-col md:flex-row  md:px-12 py-12 mx-auto flex-wrap">
        {features.map((feature, index) => (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left rounded-xl p-6 mx-auto"
          >
            <img
              src={feature.img}
              alt=""
              className={`w-80 rounded-xl mb-6 ${
                index === 0 ? "h-[236px]" : ""
              }`}
            />
            <div className="w-80">
              <h1 className="font-lora text-3xl font-bold text-indigo-900 mb-4">
                {feature.heading}
              </h1>
              <p className="font-roboto text-base md:text-lg text-black selection:text-white">
                <Highlighter
                  highlightStyle={{ backgroundColor: "transparent" }}
                  highlightClassName="font-bold"
                  searchWords={wordsToBold}
                  autoEscape={true}
                  textToHighlight={feature.description}
                />
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default MainSection;
