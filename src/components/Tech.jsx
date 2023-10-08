import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>TECH-STACK</p>
        {/*{<"ABOUT ME/>"} */}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
