"use client";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { ArrowUpRight } from "lucide-react";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const StructuredSection = () => {
    const { isDark } = useTheme();
    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const flowerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const flowerRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section 
            id="structured-section" 
            ref={sectionRef}
            className={`relative h-[100dvh] w-full snap-start shrink-0 overflow-hidden flex flex-col items-center justify-center transition-colors duration-700 ${isDark ? 'bg-[#0f1118]' : 'bg-[#fcfdfd]'}`}
        >
            {/* 1. Backdrop Pattern - Sophisticated Grid & Noise */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]">
                {/* SVG Blueprint Grid */}
                <div 
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
                    style={{ 
                        backgroundImage: `linear-gradient(${isDark ? 'white' : 'black'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'white' : 'black'} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                {/* Subtle Grain Texture Overly */}
                <div 
                    className={`absolute inset-0 opacity-[0.06] ${isDark ? 'invert' : ''}`}
                    style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }}
                />
            </div>

            {/* 2. Background Flower - Floating & Parallax */}
            <motion.div 
                style={{ y: flowerY, rotate: flowerRotate }}
                className="absolute inset-0 z-0 flex items-center justify-center p-8 sm:p-24 pointer-events-none"
            >
                <div className={`relative w-full h-full max-w-5xl transition-opacity duration-1000 ${isDark ? 'opacity-[0.3] sm:opacity-[0.25]' : 'opacity-[0.12] sm:opacity-[0.1]'}`}>
                    <motion.div
                        animate={{ y: [0, -25, 0], scale: [1, 1.02, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        <NextImage 
                            src="/assets/flower_background.png" 
                            alt="Flower Art" 
                            fill 
                            className={`object-contain ${isDark ? 'grayscale invert contrast-150 brightness-[2.5]' : ''} transition-all duration-1000`}
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* 3. Centered Typography - High Aesthetic with Marker Underline */}
            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center gap-6">
                
                {/* Visual Kickliner */}
                <motion.div 
                    initial={{ opacity: 0, letterSpacing: "10px" }}
                    whileInView={{ opacity: 1, letterSpacing: "5px" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 mb-4"
                >
                    <span className={`${poppins.className} text-[10px] sm:text-[11px] font-black uppercase ${isDark ? 'text-white/40' : 'text-black/30'}`}>Narrative Sequence</span>
                    <div className={`h-[1px] w-24 bg-gradient-to-r from-transparent ${isDark ? 'via-white/20' : 'via-black/20'} to-transparent`} />
                </motion.div>

                <div className="relative flex flex-col items-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`${bricolage.className} text-[40px] sm:text-[72px] lg:text-[88px] font-[600] leading-[1.02] text-center max-w-[1150px] tracking-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}
                    >
                        I like turning unclear things into something {" "}
                        <span className="relative inline-block px-2">
                            <span className={`italic font-normal opacity-90 text-transparent bg-clip-text bg-gradient-to-br ${isDark ? 'from-cyan-300 via-blue-400 to-indigo-500' : 'from-orange-400 to-pink-500'} pr-5 transition-all duration-700`}>structured</span>
                            
                            {/* Hand-drawn marker underline aligned with website aesthetics */}
                            <motion.div 
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                                className="absolute -bottom-2 -left-2 -right-2 scale-[1.15]"
                            >
                                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-[8px] sm:h-[12px] opacity-40">
                                    <path 
                                        d="M2,8 Q25,2 50,8 T98,5" 
                                        fill="none" 
                                        stroke={isDark ? "white" : "black"} 
                                        strokeWidth="2.5" 
                                        strokeLinecap="round" 
                                    />
                                </svg>
                            </motion.div>
                        </span>
                        {" "} and clear.
                    </motion.h2>

                    {/* SEE MY WORK LINK */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="mt-8 flex items-center justify-center w-full relative z-50 pointer-events-auto"
                    >
                        <Link 
                            href="/work" 
                            className={`group flex items-center gap-3 px-8 py-3.5 rounded-full border shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${isDark ? 'bg-white border-white text-[#0f1118] hover:shadow-white/20' : 'bg-[#1a1a1a] border-[#1a1a1a] text-white hover:shadow-black/10'}`}
                        >
                            <span className={`${poppins.className} text-[13px] sm:text-[14px] font-bold uppercase tracking-[2px]`}>see my work</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    {/* Minimalist Sub-indicator */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="mt-12 sm:mt-16 flex flex-col items-center gap-4 opacity-40 group cursor-pointer"
                    >
                        <div className={`h-12 w-[1.5px] rounded-full overflow-hidden ${isDark ? 'bg-white/20' : 'bg-black/20'}`}>
                            <motion.div 
                                animate={{ y: [-48, 48] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className={`w-full h-full ${isDark ? 'bg-white' : 'bg-black'}`}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className={`absolute top-12 left-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block z-50 ${isDark ? 'text-white' : 'text-black'}`}>
                Visual Logic System // Vol.01
            </div>
        </section>
    );
};
