import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
