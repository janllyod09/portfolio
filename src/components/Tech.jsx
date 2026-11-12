import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div
          variants={fadeIn("up", "spring", (index % 5) * 0.06, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.45 }}
          className='w-28 h-28 rounded-full bg-white/80 border-4 border-white/20 shadow-lg flex flex-col items-center justify-center gap-1 transition-transform duration-200 hover:scale-105'
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt=""
            loading="lazy"
            decoding="async"
            className='w-14 h-14 object-contain'
          />
          <span className='text-[10px] text-primary font-semibold text-center leading-tight px-2'>
            {technology.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
