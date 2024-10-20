import React from "react";
import { motion } from "framer-motion";
import ProductList from "../products/ProductList";
import Reviews from "../common/Reviews";

const HomePage = () => {
  // Variants for motion animation
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Stagger the animations with a delay
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="w-full h-screen p-4 md:px-6">
      <div className="w-full">
        <div
          className="w-full relative h-screen bg-cover bg-top"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/s/files/1/1368/3463/files/Stachehaus_E2_84_A2_Cuts_Fall24_LA-406_768x_crop_center@2x.progressive.jpg?v=1726605271')`,
          }}
        >
          {/* Animated content box */}
          <div className="content p-4 w-full h-auto bg-zinc-700 bg-opacity-50 absolute bottom-0 md:bottom-10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Title and tagline */}
            <motion.div
              custom={1} // Stagger order
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-white"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Inkredible
              </h1>
              <h2 className="text-lg md:text-2xl">The New Era of Fashion</h2>
            </motion.div>

            {/* Description text */}
            <motion.p
              custom={2} // Stagger order
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-white text-sm md:text-base md:text-right md:max-w-md"
            >
              Shop the latest trends,
              <br /> sustainable fabrics, and handcrafted
              <br /> crafts at Inkredible.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
