import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { PumpkinCanvas } from "./canvas";
import { ChessCanvas } from "./canvas";
import { PlantsCanvas } from "./canvas";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Models = ({
  index,
}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Using Blender</p>
        <h2 className={`${styles.sectionHeadText}`}>3D Models.</h2>
      </motion.div>

      <section className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center w-full`}>
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="inline-block items-center bg-secondary-gradient p-5 rounded-2xl relative w-full h-[400px]">
          <p className={`${styles.sectionSubText} `}>Pumpkin</p>
          <PumpkinCanvas />
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="inline-block items-center bg-secondary-gradient p-5 rounded-2xl relative w-full h-[400px]">
          <p className={`${styles.sectionSubText} `}>Chess</p>
          <ChessCanvas />
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="inline-block items-center bg-secondary-gradient p-5 rounded-2xl relative w-full h-[400px]">
          <p className={`${styles.sectionSubText} `}>Plant</p>
          <PlantsCanvas />
        </motion.div>
      </section>
    </>
  );
};

export default SectionWrapper(Models, "");
