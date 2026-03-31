"use client";
import React, { useRef, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';

import anthroImg from "@/public/assets/polymathy-anthropology.png";
import cogImg from "@/public/assets/polymathy-cognitive.png";
import philImg from "@/public/assets/polymathy-philosophy.png";
import techImg from "@/public/assets/polymathy-tech.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// --- Pretext Flow Logic ---
const DynamicHeadline = ({ text, font, containerWidth, isDark, occlusions }: any) => {
  const prepared = useMemo(() => {
    try {
      return prepareWithSegments(text, font);
    } catch (e) {
      console.warn("Pretext prepare failed", e);
      return null;
    }
  }, [text, font]);

  if (!prepared || containerWidth <= 0) return null;

  const lineHeight = 46; // 42px * 1.1 roughly
  const fragments: any[] = [];
  let cursor = { segmentIndex: 0, graphemeIndex: 0 };
  let currentY = 0;
  
  // Simple layout loop
  while (currentY < 300) { // Limit height to avoid infinite loops if any
    // Map of available horizontal segments for this Y line
    let availableX = 0;
    const regions: { x: number, w: number }[] = [];
    
    // Find collisions with cards for this specific line band
    const activeOcclusions = occlusions
      .filter((o: any) => currentY + lineHeight > o.y && currentY < o.y + o.h)
      .sort((a: any, b: any) => a.x - b.x);

    let currentX = 0;
    activeOcclusions.forEach((occ: any) => {
      if (occ.x > currentX) {
        regions.push({ x: currentX, w: occ.x - currentX });
      }
      currentX = Math.max(currentX, occ.x + occ.w);
    });
    
    if (currentX < containerWidth) {
      regions.push({ x: currentX, w: containerWidth - currentX });
    }

    // Attempt to fill regions for this row
    let rowHasText = false;
    for (const region of regions) {
      if (region.w < 20) continue; // Too narrow for anything useful
      
      const line = layoutNextLine(prepared, cursor, region.w);
      if (line) {
        fragments.push({
          text: line.text,
          x: region.x + (region.w - line.width) / 2, // Center within available region
          y: currentY,
          width: line.width,
          cursor: { ...cursor }
        });
        cursor = line.end;
        rowHasText = true;
      }
    }

    if (!rowHasText && regions.length > 0) {
      // If we couldn't fit any text in any region, we might be exhausted 
      // or the regions are too narrow. If cursor hasn't moved, the paragraph is done.
      break; 
    }
    
    currentY += lineHeight;
    if (cursor.segmentIndex >= (prepared as any).segments.length) break;
  }

  return (
    <div className="relative w-full h-full text-center">
      {fragments.map((f, i) => {
        // Find if highlight word "disciplines" is in this fragment
        const parts = f.text.split(/(disciplines)/);
        
        return (
          <div 
            key={i} 
            className="absolute whitespace-pre leading-none"
            style={{ 
              left: `${f.x}px`, 
              top: `${f.y}px`, 
              font: font 
            }}
          >
            {parts.map((p: string, j: number) => (
              p === "disciplines" ? (
                <span key={j} className="relative inline-block px-1 mx-1">
                  <span className={`absolute inset-x-[-4px] bottom-1 h-[75%] -z-10 
                    ${isDark ? 'bg-[#8B5CF6]/40' : 'bg-[#FDE047]/60'} 
                    -rotate-1 skew-x-[-10deg] rounded-sm blur-[0.5px]
                  `} />
                  {p}
                </span>
              ) : p
            ))}
          </div>
        );
      })}
    </div>
  );
};

export const PolymathySection = () => {
  const { isDark } = useTheme();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Track card states for occlusion calculation
  const [occlusions, setOcclusions] = useState<Record<string, any>>({});
  const [containerWidth, setContainerWidth] = useState(0);

  // Resize listener for headline container
  useEffect(() => {
    const updateSize = () => {
      if (headlineRef.current) setContainerWidth(headlineRef.current.offsetWidth);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDrag = (id: string, e: any, info: any) => {
    if (!headlineRef.current) return;
    const hRect = headlineRef.current.getBoundingClientRect();
    
    // Use either the event target or a specific ref if needed, but here target should work
    const target = e.target as HTMLElement;
    const cardRect = target?.closest('.draggable-card')?.getBoundingClientRect();
    
    if (cardRect) {
      setOcclusions(prev => ({
        ...prev,
        [id]: {
          x: cardRect.left - hRect.left,
          y: cardRect.top - hRect.top,
          w: cardRect.width,
          h: cardRect.height
        }
      }));
    }
  };

  const cardProps = (id: string) => ({
    drag: true,
    dragConstraints: constraintsRef,
    dragMomentum: false,
    dragElastic: 0.1,
    whileDrag: { scale: 1.1, rotate: 0, zIndex: 100, cursor: "grabbing" },
    onDrag: (e: any, info: any) => handleDrag(id, e, info),
    className: "draggable-card absolute z-20 group pointer-events-auto cursor-grab"
  });

  const font = `500 42px ${bricolage.style.fontFamily}`;
  const text = "I connect disciplines to solve problems";

  const occlusionList = useMemo(() => Object.values(occlusions), [occlusions]);

  return (
    <section 
      ref={constraintsRef}
      id="polymathy-section" 
      className={`relative h-[100dvh] w-full shrink-0 flex items-center justify-center transition-colors duration-700 ${isDark ? 'bg-[#0A0E17]' : 'bg-white'}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${isDark ? '#1e293b' : '#e5e7eb'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Corner Details - Sticky Volume Hub */}
      <div className="absolute inset-x-0 top-0 pointer-events-none h-full z-[100]">
        <div className={`sticky top-12 ml-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>
          Cross-Disciplinary Study // Vol.01
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 150, -50, 0], y: [0, 80, 150, 0], scale: [1, 1.3, 0.8, 1], opacity: [0, 0.08, 0.05, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[5%] left-[5%] w-[45%] h-[45%] rounded-full blur-[130px] ${isDark ? 'bg-[#ff5f10]' : 'bg-[#ff5f10]'}`}
        />
        <motion.div 
          animate={{ x: [0, -120, 100, 0], y: [0, -100, -50, 0], scale: [1, 0.9, 1.2, 1], opacity: [0, 0.06, 0.03, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className={`absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full blur-[110px] ${isDark ? 'bg-[#108fff]' : 'bg-[#108fff]'}`}
        />
      </div>

      <div className="relative w-full max-w-6xl h-full flex items-center justify-center px-4 pointer-events-none">
        
        {/* Central Dynamic Headline */}
        <div 
          ref={headlineRef}
          className={`${bricolage.className} ${isDark ? 'text-white' : 'text-black'} text-[28px] sm:text-[42px] font-medium leading-[1.1] w-full max-w-[700px] h-[150px] z-10 transition-colors duration-700 pointer-events-none`}
        >
          {/* Dynamic "Connecting Web" SVG */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute inset-0 -z-10 pointer-events-none" 
            style={{ width: containerWidth }}
          >
            <svg className="w-full h-full overflow-visible">
              {occlusionList.map((o: any, idx: number) => {
                const cardCx = o.x + o.w / 2;
                const cardCy = o.y + o.h / 2;
                const headCx = containerWidth / 2;
                const headCy = 75; // h-150 / 2
                
                return (
                  <motion.path
                    key={idx}
                    d={`M ${cardCx} ${cardCy} L ${headCx} ${headCy}`}
                    stroke={isDark ? "white" : "black"}
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.12 }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Interaction Instruction - Subtle Nudge (Positioned Behind Text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.25, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
              className={`${poppins.className} text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'} opacity-25 text-center mt-12 sm:mt-16`}
            >
              ( try to drag cards on text )
            </motion.div>
          </div>

          <DynamicHeadline 
            text={text} 
            font={font} 
            containerWidth={containerWidth} 
            isDark={isDark} 
            occlusions={occlusionList} 
          />
        </div>

        {/* Floating Cards */}
        <motion.div 
          {...cardProps('anthro')}
          initial={{ opacity: 0, x: -100, y: -50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
          style={{ left: "5%", top: "20%" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-12, -10, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#ff5f10]/85 backdrop-blur-md border border-white/40 p-[10px] rounded-[21px] shadow-2xl w-[130px] flex flex-col gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="border border-white/50 h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5">
              <Image src={anthroImg} alt="Anthropology" fill className="object-cover pointer-events-none" />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[14px] drop-shadow-sm`}>anthropology</p>
          </motion.div>
        </motion.div>

        <motion.div 
          {...cardProps('cog')}
          initial={{ opacity: 0, y: -100, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6.56 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
          style={{ right: "15%", top: "8%" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [6.56, 8, 6.56] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#009e05]/85 backdrop-blur-md border border-white/40 p-[10px] rounded-[21px] shadow-2xl w-[130px] flex flex-col gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="border border-white/50 h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5">
              <Image src={cogImg} alt="Cognitive Science" fill className="object-cover pointer-events-none" />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[14px] drop-shadow-sm`}>cognitive sci.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          {...cardProps('phil')}
          initial={{ opacity: 0, x: 100, y: -20, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 14.98 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          style={{ right: "5%", top: "350px" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [14.98, 13, 14.98] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#ffcb10]/85 backdrop-blur-md border border-white/40 p-[10px] rounded-[21px] shadow-2xl w-[130px] flex flex-col gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="border border-white/50 h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5">
              <Image src={philImg} alt="Philosophy" fill className="object-cover pointer-events-none" />
            </div>
            <p className={`${poppins.className} text-[#715100] font-semibold text-[14px] drop-shadow-sm`}>philosophy</p>
          </motion.div>
        </motion.div>

        <motion.div 
          {...cardProps('tech')}
          initial={{ opacity: 0, y: 100, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 15.79 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          style={{ left: "20%", bottom: "10%" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [15.79, 17, 15.79] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#108fff]/85 backdrop-blur-md border border-white/40 p-[10px] rounded-[21px] shadow-2xl w-[130px] flex flex-col gap-[11px] items-center relative overflow-hidden group-hover:scale-105 transition-transform"
          >
            <div className="border border-white/50 h-[125px] w-full overflow-hidden rounded-[13px] relative bg-white/5">
              <Image src={techImg} alt="Technology" fill className="object-cover pointer-events-none" />
            </div>
            <p className={`${poppins.className} text-white font-semibold text-[14px] drop-shadow-sm`}>technology</p>
          </motion.div>
        </motion.div>

        {/* Ambient Bubbles */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-4.89, -3, -4.89] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[8%] sm:left-[22%] sm:top-[15%] hidden sm:block pointer-events-auto"
        >
          <div className="bg-[#f8f8f8] dark:bg-white/5 border border-black/[0.03] p-[10px] sm:p-[14px] rounded-[17px] max-w-[220px]">
            <p className={`${poppins.className} text-[#737373] dark:text-gray-400 text-[11px] sm:text-[12px] leading-[1.5]`}>
              connecting ideas that don’t usually meet
            </p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [3.53, 5, 3.53] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[18%] top-[14%] sm:left-[30%] sm:top-[22%] hidden lg:block pointer-events-auto"
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
          className="absolute right-[12%] bottom-[20%] sm:right-[22%] bottom-[32%] hidden sm:block pointer-events-auto"
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
          className="absolute right-[8%] bottom-[8%] sm:right-[15%] bottom-[15%] z-30 pointer-events-auto hidden sm:block"
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

