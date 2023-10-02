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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-white lg:text-[36px] sm:text-[30px] xs:text-[20px] text-[24px]  lg:leading-[50px] sm:leading-[34px] xs:leading-[22px] leading-[30px] font-semibold sm:pt-6 pt-0"
        >
          I am a <a className="text-purple-400">univeristy student</a> who is
          passoinate about <a className="text-yellow-500">front-end dev</a> &{" "}
          <a className="text-red-300">UI/UX design</a> I yearn to create the
          perfect design for everyone
        </motion.p>

        <Orbit className="" />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
