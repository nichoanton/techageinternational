import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import techEvolutionImg from "../../../assets/home_pics/home3.jpg";
import modernTechImg from "../../../assets/home_pics/home2.jpg";
import automationImg from "../../../assets/home_pics/home1.webp";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Embracing the{" "}
            <span className="text-orange-600">Tech Age International</span>
          </h2>
          <div className="w-56 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              <span className="font-semibold text-orange-600">Tech Age</span>{" "}
              International is a renowned consultancy specializing in manpower
              recruitment. We are a committed, all-in-one manpower recruitment
              agency based in India, offering comprehensive services including
              sourcing, selection, shortlisting, and recruitment for the
              Engineering, Petrochemical, Oil & Gas, and Offshore industries.
            </p>
          </motion.div>

          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src={techEvolutionImg}
              alt="Technology Evolution from Stone Age to Modern Era"
              className="rounded-lg shadow-2xl w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-orange-600 opacity-10 rounded-lg"></div>
          </motion.div>
        </div>

        {/* Second Content Grid - Reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative lg:order-2"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our sincere and prompt efforts have allowed us to establish
              ourselves as one of the most dependable and trustworthy
              organizations in India. We have successfully provided personnel
              with various skill levels, including highly skilled, skilled,
              semi-skilled, and unskilled, across diverse regions.
            </p>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 lg:order-1"
          >
            <img
              src={modernTechImg}
              alt="Modern Technological Developments"
              className="rounded-lg shadow-2xl w-full h-64 object-cover"
            />
            {/* <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div> */}
          </motion.div>
        </div>

        {/* Full Width Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={automationImg}
            alt="Automated Production Sectors"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Expert Manpower Deployment
            </h3>
            <p className="text-lg">
              Delivering skilled workforce for engineering and energy sectors
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
