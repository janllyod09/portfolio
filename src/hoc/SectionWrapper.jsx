import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={{
          ...staggerContainer(0.08, 0.04),
          hidden: { opacity: 0, y: 44 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.72,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.08,
              delayChildren: 0.04,
            },
          },
        }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.01, margin: "0px 0px -8% 0px" }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
