"use client";

import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section className="relative min-h-[40vh] flex items-center bg-estate-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-4"
          >
           <div className="font-bold"> Discover The{" "}</div>
            <span className="font-italic" style={{ color: '#C41E3A' }}>
              Newest Real Estate Offerings
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-base sm:text-lg"
          >
            Stay ahead with our newest real estate opportunities.
          </motion.p>
        </div>

        {/* Decorative Logo - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-8 right-8 hidden lg:block"
        >
          <div className="relative w-32 h-32">
            {/* Geometric Logo Shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-estate-red to-gray-800 rounded-tl-[40%] rounded-br-[40%] transform rotate-12 opacity-90" />
            <div className="absolute inset-2 bg-white rounded-tl-[38%] rounded-br-[38%] transform rotate-12" />
            <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-estate-dark rounded-tl-[35%] rounded-br-[35%] transform rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}