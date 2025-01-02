import React from "react";
import mockup from "/laptopMockup.png";
import { Hero } from "./Constants/index";
import { motion } from "framer-motion";

const HeroSection = ({ heroRef }) => {
  return (
    <section
      ref={heroRef}
      className="bg-indigo-900 leading-normal min-h-screen selection:bg-amber-400 selection:text-indigo-800"
    >
      <div className="flex items-center md:flex-row flex-col-reverse md:justify-between lg:mx-36 md:mx-28 gap-6 md:gap-0">
        {/* Text */}
        <motion.section className="whitespace-normal space-y-4 text-left md:mx-0 mx-6">
          <h1 className="font-lora md:text-4xl text-3xl font-bold text-amber-400">
            {Hero.heading}
          </h1>
          <p className="font-roboto text-gray-100 md:text-lg text-base">
            <strong>GlucoTrace</strong>{" "}
            {Hero.description.replace("GlucoTrace", "")}
          </p>
        </motion.section>

        {/* Laptop image */}
        <img
          src={mockup}
          alt=""
          className="lg:w-[500px] w-96 md:w-80 mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
