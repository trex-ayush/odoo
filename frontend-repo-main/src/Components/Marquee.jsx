import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-10 bg-green-900 rounded-tl-3xl rounded-tr-3xl">
      <div className="text overflow-hidden tracking-tighter border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap">
        {/* Scrolling Text */}
        <motion.div
          className="flex gap-2"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(4)].map((_, index) => (
            <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
              key={index}
              className="text-[13vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-8 mr-20"
            >
              we are skillswap
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;



