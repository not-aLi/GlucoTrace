import React, { useState } from "react";
import glucoTrace from "/GlucoTraceDark.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ isSticky }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${
        isSticky ? "sticky top-0" : "relative"
      } bg-indigo-900 h-[93px] md:h-[96px] lg:h-[93px] flex font-roboto md:selection:bg-amber-400 selection:bg-indigo-800 selection:text-amber-300 md:selection:text-indigo-800`}
    >
      <div className="w-full flex items-center md:justify-around justify-between mx-6">
        <img src={glucoTrace} alt="GlucoTrace" className="w-56" />

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBarsStaggered className="text-white text-2xl cursor-pointer" />
        </div>

        {/* Slide-in Menu */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-72 bg-amber-300 h-full transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <IoCloseSharp className="text-indigo-800 text-3xl" />
          </div>

          {/* Mobile Navigation */}
          <ul className="flex flex-col items-start text-slate-700 text-lg font-medium p-6 space-y-6 mt-4">
            <li className="relative group cursor-pointer">
              <span className="relative inline-block">
                <Link to="/">Home</Link>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-800 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></span>
              </span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="relative inline-block">
                <a href="#features">Features</a>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-800 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></span>
              </span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="relative inline-block">
                <a href="#contact">Contact</a>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-800 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"></span>
              </span>
            </li>
            <button className="bg-indigo-800 text-slate-200 hover:opacity-90 hover:transition-all hover:duration-300 rounded-sm text-base font-medium w-24 p-1 selection:bg-amber-400 selection:text-indigo-800">
              Sign Up
            </button>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-12 space-y-6 md:space-y-0 md:relative md:flex-row flex-col md:items-center md:text-gray-100 text-slate-700 text-lg p-6 font-medium">
          <ul className="flex space-x-12">
            <li className="relative group cursor-pointer">
              <span className="before:scale-x-0 group-hover:opacity-90 before:absolute before:top-8 md:before:bg-amber-300 before:bg-indigo-800 before:h-[2px] before:content-[''] group-hover:before:scale-x-100 before:w-full before:origin-center before:transition-transform before:duration-300">
                <Link to="/">Home</Link>
              </span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="before:scale-x-0 before:absolute before:top-8 md:before:bg-amber-300 before:bg-indigo-800 group-hover:opacity-90 before:h-[2px] before:content-[''] group-hover:before:scale-x-100 before:w-full before:origin-center before:transition-transform before:duration-300">
                <a href="#features">Features</a>
              </span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="before:scale-x-0 group-hover:opacity-90 before:absolute before:top-8 md:before:bg-amber-300 before:bg-indigo-800 before:h-[2px] before:content-[''] group-hover:before:scale-x-100 before:w-full before:origin-center before:transition-transform before:duration-300">
                <a href="#contact">Contact</a>
              </span>
            </li>
            <button className="md:bg-amber-400 bg-indigo-800 text-slate-200 hover:opacity-90 hover:transition-all hover:duration-300 rounded-sm md:text-slate-700 text-base font-medium w-24 p-1 selection:bg-indigo-800 selection:text-amber-300">
              Sign Up
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
