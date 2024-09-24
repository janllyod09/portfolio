import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { site } from "../assets";
import { itch } from "../assets";
import { youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// import { PumpkinCanvas } from "./canvas";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    site_link,
    //   source_code_link_itch,
    //   source_code_link_youtube,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-secondary-gradient p-5 rounded-2xl sm:w-[360px] w-full">
            {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'> */}
            <div className='relative w-full h-[230px]'>

                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />

                <div className='absolute right-0 top-0 flex justify-start m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(site_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={site}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>

                {/* <div className='absolute top-0 right-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link_youtube || source_code_link_itch, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={source_code_link_youtube ? youtube : itch}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div> */}
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        {tag.name}
                    </p>
                ))}
            </div>
            {/* </Tilt> */}
        </motion.div>

    );

};

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>IT Team</p>
                <h2 className={`${styles.sectionHeadText}`}>Wattsavers Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    As part of the IT Team at Wattsavers, here are all the websites we've made.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects1.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>

        </>
    );
};

{/* <PumpkinCanvas /> */ }

export default SectionWrapper(Projects, "");
