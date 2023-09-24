import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <ComputersCanvas className="z-1" />
      <div className="absolute inset-0 bottom-36 max-w-7xl mx-auto flex flex-column items-end justify-center gap-5">
        <div className="z-2 text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>MOHD LUTFI</h1>
          <p className={`${styles.heroSubText} sm:mt-8 text-white`}>
            Front-end Developer & UI/UX Designer
          </p>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Hero;
