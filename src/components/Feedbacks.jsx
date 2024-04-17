import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] relative">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] relative`}>
        {/* <motion.div variants={textVariant()} initial="hidden" animate="visible"> */}
        <motion.div  className="center-text" initial="hidden" animate="visible">
          <p className={styles.sectionSubText}>Our</p>
          <h2 className={styles.sectionHeadText}>Activities</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <h3 className="text-white font-bold text-lg mb-6">Our Activities</h3>
        <div className="flex gap-7 relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="flex"
              style={{
                width: `${testimonials.length * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-black-200 rounded-3xl xs:w-[320px] w-full overflow-hidden"
                  style={{ marginRight: index !== testimonials.length - 1 ? "20px" : 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={`feedback_by-${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
