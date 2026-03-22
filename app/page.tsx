"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Bowlby_One_SC, Poppins, Nanum_Pen_Script } from "next/font/google";
import { ImageCards } from "@/components/ImageCards";
import { GuestbookWallLayer } from "@/components/GuestbookWallLayer";
import { Moon } from "lucide-react";
import cardLeft from "@/public/assets/photo-left.jpg";
import cardRight from "@/public/assets/photo-right.jpg";
import cardCenter from "@/public/assets/photo-center.jpg";
import drawLeft from "@/public/assets/draw-left.png";
import drawRight from "@/public/assets/draw-right.png";
import drawCenter from "@/public/assets/draw-center.png";
import arrowLine1 from "@/public/assets/arrow-line1.svg";
import arrowLine2 from "@/public/assets/arrow-line2.svg";
import artBg from "@/public/assets/artbg.svg";
import lightBg from "@/public/assets/light-bg.png";
import nightBg1 from "@/public/assets/night-bg-1.png";
import nightBg2 from "@/public/assets/night-bg-2.png";
import nightPhoto1 from "@/public/assets/night-photo-left-new.jpg";
import nightPhoto2 from "@/public/assets/night-photo-2.jpg";
import nightPhoto3 from "@/public/assets/night-photo-3.jpg";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const { isDark, setIsDark } = useTheme();

  return (
    <main className={`relative w-full h-screen overflow-hidden ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'} transition-colors duration-700`}>
      {/* Hero Section */}
      <section id="hero" className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none transition-opacity duration-1000">
          {/* Light Mode Layer */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-0 overflow-hidden">
              <Image src={lightBg} alt="Background artwork" fill className="absolute !h-[102%] !left-[-0.04%] !w-[100.08%] object-cover max-w-none top-0" priority />
            </div>
          </div>

          {/* Dark Mode Specific Layers */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 overflow-hidden">
              <Image src={nightBg1} alt="Night Sky" fill className="absolute !h-[102%] !left-[-0.04%] !w-[100.08%] object-cover max-w-none top-0" priority />
            </div>
            <Image src={nightBg2} alt="Night Sky Layer 2" fill className="object-cover absolute max-w-none" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        {/* Ambient Note Wall */}
        <GuestbookWallLayer />

        <div className="relative z-10 w-full flex flex-col items-center -mt-24 sm:-mt-32">
            <div className="w-full flex justify-center">
              <ImageCards
                variant="frame19"
                className="scale-[0.75] sm:scale-[0.9]"
                images={{
                  left: isDark ? nightPhoto1 : cardCenter,
                  center: isDark ? nightPhoto2 : cardLeft,
                  right: isDark ? nightPhoto3 : cardRight,
                }}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-[0px] text-center -mt-2 sm:-mt-4 z-10 px-4 w-full relative transition-all duration-700">
              <h1
                data-text="HEY, I'M HARSHIT SAIDANIYA"
                className={`${bowlby.className} relative leading-[1.3] text-[32px] sm:text-[48px] lg:text-[56px] text-center uppercase before:content-[attr(data-text)] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:-z-10 before:text-white tracking-[1.2px] ${isDark ? "before:[-webkit-text-stroke:1.5px_white] before:[text-shadow:0px_4px_4px_rgba(0,0,0,0.5)] text-[rgba(255, 255, 255, 0.05)]" : "before:[-webkit-text-stroke:4px_white] before:[text-shadow:0px_7px_11.8px_rgba(255,102,102,0.7)] text-transparent"} transition-all duration-700`}
                style={isDark ? { WebkitTextStroke: "1.5px white" } : {
                  backgroundImage: "linear-gradient(100.496deg, rgb(255, 199, 57) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 195, 16) 107.26%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                HEY, I'M HARSHIT SAIDANIYA
              </h1>
              <div className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 mt-1 sm:mt-2 max-w-[300px] sm:max-w-none mx-auto ${poppins.className} transition-colors duration-700`}>
                <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
                  and i am a
                </p>
                <motion.div 
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: isDark ? "0 0 35px rgba(168, 85, 247, 0.5)" : "0 15px 40px rgba(168, 85, 247, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    backgroundImage: isDark ? "radial-gradient(rgba(255,255,255,0.08) 0.5px, transparent 0)" : "radial-gradient(rgba(0,0,0,0.02) 0.5px, transparent 0)",
                    backgroundSize: "6px 6px"
                  }}
                  className={`border-[1px] sm:border-[1.5px] border-solid flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 relative rounded-full transition-all duration-500 cursor-default group overflow-hidden backdrop-blur-xl shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/60 border-white shadow-lg shadow-black/[0.03]'}`}
                >
                  {/* Iridescent Highlight Overlay */}
                  <div className={`absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10`} />
                  
                  <p className={`font-semibold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-all duration-300 relative z-10 ${isDark ? 'text-white' : 'text-[#6b6b6b] group-hover:text-purple-600'}`}>
                    product designer
                  </p>
                </motion.div>
                <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
                  who
                </p>
                <motion.div 
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: isDark ? "0 0 35px rgba(235, 59, 20, 0.5)" : "0 15px 40px rgba(235, 59, 20, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    backgroundImage: isDark ? "radial-gradient(rgba(255,255,255,0.08) 0.5px, transparent 0)" : "radial-gradient(rgba(0,0,0,0.02) 0.5px, transparent 0)",
                    backgroundSize: "6px 6px"
                  }}
                  className={`border-[1px] sm:border-[1.5px] border-solid flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 relative rounded-full transition-all duration-500 cursor-default group overflow-hidden backdrop-blur-xl shadow-[inset_0_0_12px_rgba(255,255,255,0.1)] ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/60 border-white shadow-lg shadow-black/[0.03]'}`}
                >
                  {/* Iridescent Highlight Overlay */}
                  <div className={`absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10`} />
                  
                  <p className={`font-semibold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-all duration-300 relative z-10 ${isDark ? 'text-white' : 'text-[#6e6969] group-hover:text-orange-600'}`}>
                    vibe codes
                  </p>
                </motion.div>
                <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
                  for fun.
                </p>
              </div>
            </div>
        </div>
      </section>

    </main>
  );
}
