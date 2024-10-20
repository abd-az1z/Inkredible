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
    // Change the tagline every 3 seconds
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) =>
        prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust time interval as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container w-full h-28 mt-6 p-4 md:px-6">
      <div className="w-full md:flex md:justify-center my-4">
        {/* Animated Tagline */}
        <motion.h2
          key={currentTaglineIndex}
          className="text-center md:text-2xl md:w-1/2 md:px-0 px-8"
          initial={{ opacity: 0, y: 20 }} // Start below with opacity 0
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          exit={{ opacity: 0, y: 20 }} // Fade out and slide up
          transition={{ duration: 1 }} // Animation duration
        >
          {taglines[currentTaglineIndex]}
        </motion.h2>
      </div>
    </div>
  );
};

export default Tagline;