"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeContext";
import { Sun } from "lucide-react";
import { Bowlby_One_SC, Poppins, Nanum_Pen_Script } from "next/font/google";
import { ImageCards } from "@/components/ImageCards";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { IdentitySection } from "@/components/IdentitySection";
import { PurposeSection } from "@/components/PurposeSection";
import { WatermarkText } from "@/components/WatermarkText";
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
    <main className={`relative w-full overflow-x-hidden ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'} transition-colors duration-700`}>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-start gap-12 pt-24">
        {/* View Toggle Button */}

        <div className="absolute top-10 left-0 w-full h-[90vh] flex items-center justify-center pointer-events-none z-0 select-none hidden">
          <h1
            className="text-[38vw] font-black text-[#151515] opacity-[0.03] tracking-tighter leading-none pt-24 sm:pt-0 transform translate-y-[32%] sm:translate-y-0"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
            }}
          >
            heya
          </h1>
        </div>

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

        <div className="relative z-10 w-full flex justify-center mt-12 sm:mt-0">
          <ImageCards
            variant="frame19"
            className="scale-[0.96] sm:scale-100"
            images={{
              left: isDark ? nightPhoto1 : cardCenter,
              center: isDark ? nightPhoto2 : cardLeft,
              right: isDark ? nightPhoto3 : cardRight,
            }}
          />


        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-[0px] text-center -mt-10 z-10 px-4 w-full relative transition-all duration-700">
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
          <div className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 mt-2 sm:mt-4 max-w-[300px] sm:max-w-none mx-auto ${poppins.className} transition-colors duration-700`}>
            <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
              and i am a
            </p>
            <div className={`border-[1px] sm:border-[1.5px] border-solid flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 relative rounded-full transition-colors duration-700 ${isDark ? 'bg-transparent border-white/60' : 'bg-white border-white'}`}>
              <p className={`font-semibold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
                product designer
              </p>
            </div>
            <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
              who
            </p>
            <div className={`border-[1px] sm:border-[1.5px] border-solid flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 relative rounded-full transition-colors duration-700 ${isDark ? 'bg-transparent border-white/60' : 'bg-white border-white'}`}>
              <p className={`font-semibold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6e6969]'}`}>
                vibe codes
              </p>
            </div>
            <p className={`font-bold leading-[1.02] lowercase text-[15px] sm:text-[20px] text-center tracking-[-0.3px] whitespace-nowrap transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#6b6b6b]'}`}>
              for fun.
            </p>
          </div>
        </div>
      </section>

      {/* Flowing Page Sections */}
      <div className="relative w-full z-10 flex flex-col pt-32 sm:pt-40 pb-32">
        <WatermarkText text="curiosity" top isDark={isDark} />
        <ExperimentsSection isDark={isDark} />
        <div className="mt-20 sm:mt-44">
          <ExperienceSection isDark={isDark} />
        </div>
        <div className="mt-20 sm:mt-44">
          <WatermarkText text="intuition" top isDark={isDark} />
          <ProjectsSection isDark={isDark} />
        </div>
        <div className="mt-20 sm:mt-44">
          <WatermarkText text="identity" top isDark={isDark} />
          <IdentitySection isDark={isDark} />
        </div>
        <div className="mt-0 pb-20">
          <WatermarkText text="purpose" top isDark={isDark} />
          <PurposeSection isDark={isDark} />
        </div>
      </div>
    </main >
  );
}
