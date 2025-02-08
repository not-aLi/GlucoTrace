import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

import DiabetesAdvice from "../../layout/site/sections/adviceSection/DiabetesAdvice";
import HealthAdvice from "../../layout/site/sections/adviceSection/HealthAdvice";
import FeatureSection from "../../layout/site/sections/FeatureSection";
import HeroSection from "../../layout/site/sections/HeroSection";
import Contact from "../../layout/site/Contact";
import Header from "../../layout/site/Header";
import Footer from "../../layout/site/Footer";

const HomePage = () => {
  const headerRef = useRef(null);

  return (
    <div className="max-w-screen-2xl w-full flex flex-col mx-auto ">
      <Header headerRef={headerRef} />
      <HeroSection />
      <HealthAdvice />
      <FeatureSection />
      <DiabetesAdvice />
      <Contact />
      <Footer />
      <ScrollToTopButton headerRef={headerRef} />
    </div>
  );
};

const ScrollToTopButton = ({ headerRef }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-6 right-6 p-4 bg-indigo-900 text-white rounded-full shadow-lg 
                 hover:bg-blue-800 hover:-translate-y-1"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
