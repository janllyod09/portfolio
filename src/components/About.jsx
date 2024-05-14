import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { services3 } from "../constants";
import { services4 } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, skills }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
      >
        <h3 className='text-cyan-300 text-[20px] font-normal text-center mb-5'>
          {skills}
        </h3>

        <h3 className='text-white text-[15px] font-normal text-center list-none'>
          {title.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ServiceCard3 = ({ index, language, languages }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center flex-col'
      >
        <h3 className='text-cyan-300 text-[20px] font-normal text-center mb-5'>
          {language}
        </h3>

        <h3 className='text-white text-[15px] font-normal text-center list-none'>
          {languages.map((languages, index) => (
            <li key={index}>{languages}</li>
          ))}
        </h3>

      </div>
    </motion.div>
  </Tilt>
);

const ServiceCard4 = ({ index, hobby, hobbies }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center flex-col'
      >
        <h3 className='text-cyan-300 text-[20px] font-normal text-center mb-5'>
          {hobby}
        </h3>
        <h3 className='text-white text-[15px] font-normal text-center list-none'>
          {hobbies.map((hobbies, index) => (
            <li key={index}>{hobbies}</li>
          ))}
        </h3>

      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an enthusiastic learner, passionate about both web development and 3D game design.
        With a solid background in software development, I'm eager to expand my skills in these areas.
        I thrive on challenges and am committed to mastering the intricacies of website development and game design.
        I look forward to embarking on this journey of growth and discovery!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.skills} index={index} {...service} />
        ))}

        {services3.map((service, index) => (
          <ServiceCard3 key={service.language} index={index} {...service} />
        ))}

        {services4.map((service, index) => (
          <ServiceCard4 key={service.hobby} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");