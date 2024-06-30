import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import logo from "../assets/IEEE/logo2.png";

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
        <motion.img
          variants={fadeIn("", "", 0.1, 1)}
          className="about-logo"
          src={logo}
          alt="IEEE Logo"
        />
      </div>

      {/* Testimonials Subsection */}
      <motion.div variants={textVariant()} className="mt-12">
        <h2 className={`${styles.sectionHeadText} mb-6`}>Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimony 1 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "Joining IEEE-SPS VIT Chapter opened doors to a world of cutting-edge signal processing technologies. The webinars and workshops have been invaluable in deepening my understanding. It's a vibrant community where innovation thrives!"
            </p>
            <p className="text-gray-400 mt-3">- Ovia S</p>
          </div>

          {/* Testimony 2 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "Being part of IEEE-SPS VIT Chapter has been transformative. From hands-on sessions to global conferences, every experience has enhanced my skills. It's a platform that fuels both personal growth and professional development."
            </p>
            <p className="text-gray-400 mt-3">- Elakshmi Narayanan</p>
          </div>

          {/* Testimony 3 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "IEEE-SPS VIT Chapter isn't just about learning; it's about forging connections. Through this platform, I've collaborated with peers globally, exchanging ideas that push the boundaries of signal processing. Truly inspiring!"
            </p>
            <p className="text-gray-400 mt-3">- Nikil R</p>
          </div>

          {/* Testimony 4 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "The educational events organized by IEEE-SPS VIT Chapter have been instrumental in bridging theory with practical applications. They've equipped me with real-world skills crucial for my career in signal processing. Highly recommended!"
            </p>
            <p className="text-gray-400 mt-3">- Tanisha Chaudhari </p>
          </div>

          {/* Testimony 5 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "IEEE-SPS VIT Chapter has empowered me to lead and innovate in signal processing. The leadership opportunities and mentorship available have been pivotal in shaping my career trajectory. It's more than a chapter; it's a pathway to success."
            </p>
            <p className="text-gray-400 mt-3">- Utkarsh Rajput</p>
          </div>

          {/* Testimony 6 */}
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-white text-sm">
              "IEEE-SPS VIT Chapter has been pivotal in shaping my academic journey. The chapter's focus on practical projects and hands-on sessions has complemented my coursework, giving me a holistic understanding of signal processing. It's been a game-changer for me!"
            </p>
            <p className="text-gray-400 mt-3">- L.Sai Varshit</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(AboutUs, "");
