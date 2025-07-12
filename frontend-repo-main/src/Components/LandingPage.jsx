import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen bg-zinc-900 pt-1">
      {/* Main Heading Section */}
      <div className="textStructure mt-48 px-20">
        {["Swap what you know,", "learn what you don't."].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center gap-4">
              {/* Green Box for the Second Line */}
              {index === 1 && 
              <motion.div initial={{width:0}}
               animate={{width:"9vw"}} 
               transition={{ease:[0.76,0,0.24,1],duration:1}} 
               className="w-[6vw] h-[5vw] bg-green-200"></motion.div>}
              <h1 className='uppercase text-[5vw] leading-[4.5vw] tracking-tighter font-["Founders_Grotesk_X_Condensed"] font-semibold'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Subtext Section */}
      <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "Connect with global learners",
          "Share skills, grow together",
        ].map((item, index) => (
          <p
            className="text-lg font-light tracking-tight leading-snug text-zinc-300"
            key={index}
          >
            {item}
          </p>
        ))}

        {/* Start Button with Icon */}
        <div className="start flex items-center gap-5">
          {/* Button Text */}
          <div className="px-6 py-3 border-[1px] text-white font-light text-md uppercase border-zinc-500 rounded-full cursor-pointer hover:bg-zinc-700 transition-all">
            Get Started
          </div>

          {/* Arrow Icon */}
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 text-white rounded-full cursor-pointer hover:bg-zinc-700 transition-all">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;





