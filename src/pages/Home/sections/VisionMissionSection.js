import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaEye, 
  FaHandshake, 
  FaUsers, 
  FaBullseye, 
  FaHeadset
} from "react-icons/fa";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const coreValues = [
    {
      icon: FaEye,
      title: "Our Vision",
      description: "We aim to emerge as the strongest organization for an ethical business approach. Another very important facet of India Spiritualist is to achieve corporate supremacy by providing incomparable services to our clients.",
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: FaHandshake,
      title: "Our Commitment",
      description: "It is our firm commitment to give best services at all times to our valued clients. We stand by it.",
      gradient: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "Our sole objective is to set a new benchmark by presenting a competitive, quality focused and result-driven human capital service.",
      gradient: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
  ];

  return (
    <section ref={ref} className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {coreValues.slice(0, 3).map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl ${value.bgColor} border ${value.borderColor} p-8 group hover:shadow-xl transition-all duration-500`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{value.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${value.gradient} opacity-10 rounded-tl-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Two Cards - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreValues.slice(3).map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl ${value.bgColor} border ${value.borderColor} p-8 group hover:shadow-xl transition-all duration-500`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{value.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${value.gradient} opacity-10 rounded-tl-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;