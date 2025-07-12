import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Update eye rotation based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen bg-[#CDEA68] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center justify-center w-full h-full text-center"
      >
        {/* Text and Eyes */}
        <div className="text-black text-[6vw] font-extrabold leading-none font-['Founders_Grotesk_X-Condensed'] uppercase z-10">
          <div>Ready</div>
          <div className="flex justify-center items-center gap-4">
            TO
            {/* Eyes */}
            <div className="flex gap-6 mx-4">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-[7vw] h-[7vw] bg-white rounded-full flex justify-center items-center"
                >
                  <div className="relative w-2/3 h-2/3 bg-black rounded-full">
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                      }}
                      className="absolute top-1/2 left-1/2 w-full h-10 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            START
          </div>
          <div>SKILLSWAPPING & CONTRIBUTING?</div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-10 bg-black text-white rounded-full px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          START SKILLSWAPPING
          <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Eyes;


