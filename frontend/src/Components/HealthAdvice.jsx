import React, { useState } from "react";
import { healthAdvice } from "./Constants";
import { motion } from "framer-motion";

const HealthAdvice = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center relative"
      style={{
        backgroundImage: isImageLoaded
          ? "url('/diabeticBG.webp')"
          : "url('/blurBG.png')",
        transition: "background-image 0.5s ease-out",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Image tag to load the background image and trigger onLoad */}
      <img
        src="/diabeticBG.webp"
        alt="Background"
        className="hidden"
        onLoad={handleImageLoad}
      />

      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-black text-white text-center flex flex-col justify-center items-center bg-opacity-65 px-8 py-8 rounded-xl gap-4 lg:mx-40 md:mx-20 mx-8"
      >
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
      </motion.div>
    </section>
  );
};

export default HealthAdvice;
