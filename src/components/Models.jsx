import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const PumpkinCanvas = lazy(() => import("./canvas/Pumpkin"));
const ChessCanvas = lazy(() => import("./canvas/Chess"));
const PlantsCanvas = lazy(() => import("./canvas/Plants"));

const ModelViewer = ({ label, children, delay }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.55)}
      className="inline-block items-center bg-secondary-gradient p-5 rounded-2xl relative w-full h-[400px]"
    >
      <p className={`${styles.sectionSubText}`}>{label}</p>
      {isActive ? (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-secondary">Loading 3D model…</div>}>
          {children}
        </Suspense>
      ) : (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          className="absolute inset-5 top-16 rounded-xl border border-cyan-300/50 bg-primary/60 text-white flex flex-col items-center justify-center gap-3 hover:bg-primary/80 transition-colors"
        >
          <span className="text-4xl" aria-hidden="true">◇</span>
          <span className="font-semibold">Load interactive 3D model</span>
          <span className="text-secondary text-xs">Loads only when requested</span>
        </button>
      )}
    </motion.div>
  );
};

const Models = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Using Blender</p>
        <h2 className={`${styles.sectionHeadText}`}>3D Models.</h2>
      </motion.div>

      <section className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center w-full`}>
        <ModelViewer label="Pumpkin" delay={0}><PumpkinCanvas /></ModelViewer>
        <ModelViewer label="Chess" delay={0.08}><ChessCanvas /></ModelViewer>
        <ModelViewer label="Plant" delay={0.16}><PlantsCanvas /></ModelViewer>
      </section>
    </>
  );
};

export default SectionWrapper(Models, "");
