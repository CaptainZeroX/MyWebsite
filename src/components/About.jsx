import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Orbit from "./canvas/Orbit";
import profile from "../assets/profile.jpg";
import cloud from "../assets/cloud.png";
import Draggable from "react-draggable";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>{"<ABOUT ME/>"}</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} sm:pt-6 pt-0`}
        >
          I am a <a className="text-purple-400">univeristy student</a> who is
          passoinate about <a className="text-yellow-500">front-end dev</a> &{" "}
          <a className="text-red-300">UI/UX design</a> I yearn to create the
          perfect design for everyone
        </motion.p>

        <div className="mx-auto relative">
          <div className="flex flex-wrap my-[-50px] gap-7 z-1 invisible sm:visible md:visible">
            <Draggable>
              <img
                src={cloud}
                alt="cloud"
                className="w-[105px] h-[105px] z-10 my-[-50px] "
              ></img>
            </Draggable>
            <Draggable>
              <img
                src={cloud}
                alt="cloud"
                className="w-[115px] h-[115px] z-10 my-[-5px] "
              ></img>
            </Draggable>
          </div>

          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="">
            {/* bg-purple-500 hover:bg-transparent hover:ease-in-out duration-300 */}
            <div className=" rounded-2xl w-[210px] h-[225px] relative">
              <img
                src={profile}
                alt="profile-picture"
                className=" w-[210px] h-[225px] object-cover rounded-2xl absolute  z-0"
              ></img>
              {/* opacity-30 hover:opacity-100 transition duration-200 ease-in-out */}
            </div>
          </motion.div>
        </div>

        {/* <Orbit className="" /> */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
