import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Orbit from "./canvas/Orbit";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>{"<ABOUT ME/>"}</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-white lg:text-[42px] sm:text-[32px] xs:text-[20px] text-[42px] max-w-3xl lg:leading-[56px] sm:leading-[34px] xs:leading-[22px] leading-[56px] font-semibold"
        >
          I am a univeristy student who is passoinate about front-end dev and
          UI/UX design. I yearn to create the perfect design for everyone
          anytime.
        </motion.p>

        <Orbit />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
