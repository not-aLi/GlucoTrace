import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import HealthAdvice from "./HealthAdvice";
import MainSection from "./MainSection";

const MainLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header isSticky={isSticky} />
      <HeroSection heroRef={heroRef} />
      <HealthAdvice />
      <MainSection/>
    </>
  );
};

export default MainLayout;