import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import GlucoTrace from "/GlucoTraceDark.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-2xl mx-2 mb-2 text-white py-8 px-6 selection:bg-amber-400 selection:text-indigo-800">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={GlucoTrace}
          alt="GlucoTrace"
          loading="lazy"
          className="w-40 md:w-56"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap justify-center lg:flex-row lg:justify-around items-start gap-8">
        {/* Navigation */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg mb-2">Navigation</h1>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg mb-2">Stay Connected</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <a
                href="mailto:contact.monkebytes@gmail.com"
                className="hover:underline"
              >
                Email
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              <a
                href="https://github.com/not-aLi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-lg" />
              <a
                href="https://linkedin.com/in/notali"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="text-center sm:text-left max-w-sm w-full sm:w-auto sm:mt-4">
          <h1 className="font-bold text-lg mb-2">Disclaimer</h1>
          <p className="text-sm">
            This website is for informational purposes only and is not a
            substitute for professional medical advice. Please consult your
            doctor for health-related questions.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm text-gray-300">
        © 2025 GlucoTrace. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
