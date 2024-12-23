import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const taglines = [
  "The Classic T-Shirt Company holds high quality to the highest standards.",
  "Sustainability is woven into every fiber of our products.",
  "Designed for comfort, made for longevity.",
  "Ethical fashion, crafted with care.",
];

const Tagline = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) =>
        prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full h-28 mt-4 p-4 md:px-6">
      <div className="w-full md:flex md:justify-center my-4">
        {/* Animated Tagline */}
        <motion.h2
          key={currentTaglineIndex}
          className="text-center italic text-[#583B1F]  md:text-2xl md:w-1/2 md:px-0 px-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }} 
          transition={{ duration: 1 }} 
        >
          {taglines[currentTaglineIndex]}
        </motion.h2>
      </div>
    </div>
  );
};

export default Tagline;