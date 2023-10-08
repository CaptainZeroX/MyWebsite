import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import PhoneCanvas from "./canvas/Phone";
const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>CONTACT</p>
        <PhoneCanvas />

        <p> Hekllo</p>
        {/*{<"ABOUT ME/>"} */}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
