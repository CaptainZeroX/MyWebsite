import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>{"<ABOUT ME/>"}</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[42px] max-w-3xl leading-[52px] font-semibold"
      >
        I am A Univeristy Student who is passoinate about Front-end dev and
        UI/UX design. i yearn to creat the perfect design for everyone anytime.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
