"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";

import anthroImg from "@/public/assets/polymathy-anthropology.png";
import cogImg from "@/public/assets/polymathy-cognitive.png";
import philImg from "@/public/assets/polymathy-philosophy.png";
import techImg from "@/public/assets/polymathy-tech.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const PolymathySection = () => {
  const { isDark } = useTheme();
  const constraintsRef = useRef(null);

  const cardProps = {
    drag: true,
    dragConstraints: constraintsRef,
    dragMomentum: false,
    dragElastic: 0.1,
    whileDrag: { scale: 1.1, rotate: 0, zIndex: 100, cursor: "grabbing" },
  };

  return (
    <section 
      ref={constraintsRef}
      id="polymathy-section" 
      className={`relative h-[100dvh] w-full snap-start shrink-0 overflow-hidden flex items-center justify-center transition-colors duration-700 ${isDark ? 'bg-[#0A0E17]' : 'bg-white'}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#1e293b' : '#e5e7eb'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center px-4 pointer-events-none">
        
        {/* Central Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${bricolage.className} ${isDark ? 'text-[#ffcb10]' : 'text-[#ff4040]'} text-[24px] sm:text-[27px] font-medium text-center leading-[1.3] max-w-[500px] z-10 transition-colors duration-700 -translate-y-8 pointer-events-auto`}
        >
          I’ve always been drawn to the idea of{' '}
          <span className="relative inline-block px-1 mx-1">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className={`absolute inset-x-[-6px] bottom-1 h-[75%] -z-10 
                ${isDark ? 'bg-[#ff4040]/30' : 'bg-[#ffcb10]/50'} 
                -rotate-1 skew-x-[-10deg]
                rounded-sm blur-[0.5px]
              `}
            />
            polymathy
          </span>{' '}
          // not being limited to one way of thinking.
        </motion.div>

        {/* Floating Cards - Dragging Container */}
        
        {/* Anthropology */}
        <motion.div 
          {...cardProps as any}
          initial={{ opacity: 0, x: -100, y: -50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          className="absolute left-[5%] top-[25%] sm:left-[10%] sm:top-[25%] z-20 group pointer-events-auto cursor-grab"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-12, -10, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#ff5f10]/85 backdrop-blur-md border border-white/40 p-[8px] sm:p-[10px] rounded-[21px] shadow-[0px_4px_34.8px_0px_rgba(255,95,16,0.25)] w-[110px] sm:w-[130px] flex flex-col gap-[8px] sm:gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="border border-white/50 h-[100px] sm:h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5 shadow-inner">
              <Image 
                src={anthroImg} 
                alt="Anthropology" 
                fill 
                className="object-cover pointer-events-none"
              />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[12px] sm:text-[14px] drop-shadow-sm pointer-events-none`}>anthropology</p>
          </motion.div>
        </motion.div>

        {/* Cognitive Science */}
        <motion.div 
          {...cardProps as any}
          initial={{ opacity: 0, y: -100, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6.56 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
          className="absolute right-[20%] top-[10%] sm:right-[30%] sm:top-[8%] z-20 group pointer-events-auto cursor-grab"
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [6.56, 8, 6.56] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#009e05]/85 backdrop-blur-md border border-white/40 p-[8px] sm:p-[10px] rounded-[21px] shadow-[0px_4px_34.8px_0px_rgba(0,158,5,0.25)] w-[110px] sm:w-[130px] flex flex-col gap-[8px] sm:gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="border border-white/50 h-[100px] sm:h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5 shadow-inner">
              <Image 
                src={cogImg} 
                alt="Cognitive Science" 
                fill 
                className="object-cover pointer-events-none"
              />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[12px] sm:text-[14px] drop-shadow-sm pointer-events-none`}>cognitive sci.</p>
          </motion.div>
        </motion.div>

        {/* Philosophy */}
        <motion.div 
          {...cardProps as any}
          initial={{ opacity: 0, x: 100, y: -20, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 14.98 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          className="absolute right-[5%] top-[30%] sm:right-[10%] sm:top-[30%] z-20 group pointer-events-auto cursor-grab"
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [14.98, 13, 14.98] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#ffcb10]/85 backdrop-blur-md border border-white/40 p-[8px] sm:p-[10px] rounded-[21px] shadow-[0px_4px_34.8px_0px_rgba(255,203,16,0.25)] w-[110px] sm:w-[130px] flex flex-col gap-[8px] sm:gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="border border-white/50 h-[100px] sm:h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5 shadow-inner">
              <Image 
                src={philImg} 
                alt="Philosophy" 
                fill 
                className="object-cover pointer-events-none"
              />
            </div>
            <p className={`${poppins.className} text-[#715100] font-semibold text-[12px] sm:text-[14px] drop-shadow-sm pointer-events-none`}>philosophy</p>
          </motion.div>
        </motion.div>

        {/* Technology */}
        <motion.div 
          {...cardProps as any}
          initial={{ opacity: 0, y: 100, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 15.79 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          className="absolute left-[30%] bottom-[10%] sm:left-[35%] sm:bottom-[15%] z-20 group pointer-events-auto cursor-grab"
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [15.79, 17, 15.79] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#108fff]/85 backdrop-blur-md border border-white/40 p-[8px] sm:p-[10px] rounded-[21px] shadow-[0px_4px_34.8px_0px_rgba(16,143,255,0.25)] w-[110px] sm:w-[130px] flex flex-col gap-[8px] sm:gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="border border-white/50 h-[100px] sm:h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5 shadow-inner">
              <Image 
                src={techImg} 
                alt="Technology" 
                fill 
                className="object-cover pointer-events-none"
              />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[12px] sm:text-[14px] drop-shadow-sm pointer-events-none`}>technology</p>
          </motion.div>
        </motion.div>

        {/* Floating Text Bubbles - Also set to interactive if needed */}
        
        {/* connecting ideas that don’t usually meet */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-4.89, -3, -4.89] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[15%] top-[10%] sm:left-[23%] sm:top-[12%] hidden sm:block pointer-events-auto"
        >
          <div className="bg-[#f8f8f8] dark:bg-white/5 border border-black/[0.03] p-[10px] sm:p-[14px] rounded-[17px] max-w-[220px]">
            <p className={`${poppins.className} text-[#737373] dark:text-gray-400 text-[11px] sm:text-[12px] leading-[1.5]`}>
              connecting ideas that don’t usually meet
            </p>
          </div>
        </motion.div>

        {/* not by going deeper in isolation... */}
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [3.53, 5, 3.53] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] top-[25%] sm:left-[32%] sm:top-[20%] hidden lg:block pointer-events-auto"
        >
          <div className="bg-[#cbff10] p-[10px] sm:p-[14px] rounded-[17px] max-w-[250px] shadow-lg shadow-[#cbff10]/10">
            <p className={`${poppins.className} text-[#737373] text-[11px] sm:text-[12px] leading-[1.5]`}>
              not by going deeper in isolation, but by seeing how everything fits together
            </p>
          </div>
        </motion.div>

        {/* Because most interesting problems... */}
        <motion.div 
          animate={{ x: [0, 10, 0], rotate: [6.1, 4, 6.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[20%] bottom-[20%] sm:right-[20%] sm:bottom-[30%] hidden sm:block pointer-events-auto"
        >
          <div className="bg-[#f8f8f8] dark:bg-white/5 border border-black/[0.03] p-[10px] sm:p-[14px] rounded-[17px] max-w-[230px]">
            <p className={`${poppins.className} text-[#737373] dark:text-gray-400 text-[11px] sm:text-[12px] leading-[1.5]`}>
              Because most interesting problems don’t belong to one field
            </p>
          </div>
        </motion.div>

        {/* They sit in the overlap... */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [-4.04, -6, -4.04] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[10%] bottom-[10%] sm:right-[15%] sm:bottom-[15%] z-30 pointer-events-auto hidden sm:block"
        >
          <div className="bg-[#ff4040] p-[12px] sm:p-[16px] rounded-[17px] shadow-xl shadow-red-500/20 max-w-[200px] sm:max-w-[260px]">
            <p className={`${poppins.className} text-white font-medium text-[11px] sm:text-[12px] leading-[1.5]`}>
              They sit in the overlap,<br />
              where different ways of thinking collide.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
