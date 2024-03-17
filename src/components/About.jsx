import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Orbit from "./canvas/Orbit";
import profile from "../assets/profile.png";
import cloud from "../assets/cloud.png";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>ABOUT ME</p>{" "}
        {/*{<"ABOUT ME/>"} */}
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              className="z-10 "
            >
              <motion.img
                src={cloud}
                alt="cloud"
                className="w-[105px] h-[105px] z-10 my-[-45px] "
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                animate={{
                  y: [11, 15, 18, 15, 11],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              ></motion.img>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              className="z-10 "
            >
              <motion.img
                src={cloud}
                alt="cloud"
                className="w-[115px] h-[115px] z-10 my-[-9px] "
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                animate={{
                  y: [12, 10, 15, 18, 12],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              ></motion.img>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="">
            {/* bg-purple-500 hover:bg-transparent hover:ease-in-out duration-300 */}
            <motion.div
              className=" rounded-2xl w-[210px] h-[225px] relative"
              drag
            >
              <motion.img
                src={profile}
                alt="profile-picture"
                className=" w-[215px] h-[230px] object-cover rounded-2xl absolute  z-9"
                drag
                dragSnapToOrigin={true}
              ></motion.img>
              {/* opacity-30 hover:opacity-100 transition duration-200 ease-in-out */}
            </motion.div>
          </motion.div>
        </div>

        {/* <Orbit className="" /> */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
