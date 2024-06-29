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
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] relative`}>
        <motion.div className="center-text" initial="hidden" animate="visible">
          <p className={styles.sectionSubText}>Our</p>
          <h2 className={styles.sectionHeadText}>Events</h2>
        </motion.div>
      </div>

      <div className={`-mt-2 pb-5 ${styles.paddingX}`}>
        

        {/* Vertical Subsections */}
        <div className="flex flex-col gap-8">
          {/* Old */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-gray-300 font-semibold mb-4">Old</h4>
            {/* Slideshow of Old Events */}
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

          {/* Current */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-white font-bold mb-4">Current</h4>
            {/* Placeholder for Current section */}
            <div className="bg-black-200 rounded-3xl h-60 w-full"></div>
          </div>

          {/* Upcoming */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-gray-300 font-semibold mb-4">Upcoming</h4>
            {/* Placeholder for Upcoming section */}
            <div className="bg-black-200 rounded-3xl h-60 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
