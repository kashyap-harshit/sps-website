import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import logo from "../assets/IEEE/logo2.png"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>IEEE - SPS</p>
        <h2 className={`${styles.sectionHeadText}`}>About Us</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <span className="font-bold">Signal Processing Society (SPS),</span>{" "}
          founded in 1948 under IEEE, is the premier global organization for
          signal processing professionals. The IEEE-SPS VIT Chapter, based at
          VIT University, hosts a range of educational events like webinars and
          hands-on sessions, fostering community outreach in Vellore. The
          chapter aims to create an empowering environment for engineers to
          explore signal processing, nurturing innovation and practical
          projects. It hosts global conferences to showcase the latest signal
          processing advancements and encourages member involvement in
          international roles. Members collaborate within regional chapters to
          drive innovation in signal processing. SPS provides leading
          publications, conferences, education, and leadership opportunities to
          keep members informed and contribute to society.
        </motion.p>
        <motion.img variants={fadeIn("", "", 0.1, 1)} className="about-logo" src={logo}/>
      </div>
    </>
  );
};

export default SectionWrapper(AboutUs, "");
