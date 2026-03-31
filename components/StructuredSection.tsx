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
            className={`relative h-[100dvh] w-full shrink-0 flex flex-col items-center justify-center transition-colors duration-700 ${isDark ? 'bg-[#0f1118]' : 'bg-[#fcfdfd]'}`}
        >
            {/* Corner Details - Sticky Volume Hub */}
            <div className="absolute inset-x-0 top-0 pointer-events-none h-full z-[100]">
                <div className={`sticky top-12 ml-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>
                    Visual Logic System // Vol.02
                </div>
            </div>

            {/* 1. Backdrop Pattern - Sophisticated Grid & Logic System */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* SVG Blueprint Grid - Soft Tinted Ink */}
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `linear-gradient(${isDark ? '#818CF8' : '#6366F1'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#818CF8' : '#6366F1'} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
                
                {/* Dotted Plus Pattern at Intersections */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#818CF8' : '#6366F1'} 1.5px, transparent 0)`,
                        backgroundSize: '80px 80px',
                        backgroundPosition: '-0.5px -0.5px'
                    }}
                />

                {/* Floating Geometric Elements - Soft Logic Pieces */}
                <div className="absolute inset-0 opacity-[0.4]">
                    {/* Top Left - Geometric Cluster */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ rotate: 360, y: [0, -20, 0] }}
                        transition={{ 
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            y: { duration: 25, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 1 },
                            scale: { duration: 1 }
                        }}
                        className={`absolute top-[12%] left-[8%] w-40 h-40 border-[0.5px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'} rounded-full`}
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ rotate: -360, x: [0, 20, 0] }}
                        transition={{ 
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            x: { duration: 30, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 1, delay: 0.2 },
                            scale: { duration: 1, delay: 0.2 }
                        }}
                        className={`absolute top-[16%] left-[10%] w-32 h-32 border-[0.5px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'} rounded-lg`}
                    />

                    {/* Bottom Right - Technical Detail */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{ opacity: [0.03, 0.07, 0.03], y: [0, 40, 0] }}
                        transition={{ 
                            opacity: { duration: 15, repeat: Infinity },
                            y: { duration: 15, repeat: Infinity },
                            x: { duration: 1 }
                        }}
                        className={`absolute bottom-[10%] right-[10%] ${isDark ? 'text-indigo-400/20' : 'text-indigo-600/20'} font-mono text-[10px] uppercase tracking-[4px] hidden md:block`}
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Precision Core System // Ver 2.0.4
                    </motion.div>
                </div>

                {/* Corner Brackets - Blueprint Aesthetic */}
                <motion.div 
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 0.15, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className={`absolute top-20 left-20 w-12 h-12 border-t-[1px] border-l-[1px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'}`} />
                    <div className={`absolute top-20 right-20 w-12 h-12 border-t-[1px] border-r-[1px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'}`} />
                    <div className={`absolute bottom-20 left-20 w-12 h-12 border-b-[1px] border-l-[1px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'}`} />
                    <div className={`absolute bottom-20 right-20 w-12 h-12 border-b-[1px] border-r-[1px] ${isDark ? 'border-indigo-400/10' : 'border-indigo-500/15'}`} />
                </motion.div>
            </div>

            {/* 2. Background Flower - Floating & Parallax */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ y: flowerY, rotate: flowerRotate }}
                className="absolute inset-0 z-0 flex items-center justify-center p-8 sm:p-24 pointer-events-none"
            >
                <div className="relative w-full h-full max-w-5xl">
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

            {/* 3. Centered Typography - High Aesthetic with Project Collage */}
            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center gap-6">
                
                {/* Visual Kickliner */}
                <motion.div 
                    initial={{ opacity: 0, letterSpacing: "10px" }}
                    whileInView={{ opacity: 1, letterSpacing: "5px" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 mb-4"
                >
                    <span className={`${poppins.className} text-[10px] sm:text-[11px] font-black uppercase ${isDark ? 'text-white/40' : 'text-black/30'}`}>making sense of it all</span>
                    <div className={`h-[1px] w-24 bg-gradient-to-r from-transparent ${isDark ? 'via-white/20' : 'via-black/20'} to-transparent`} />
                </motion.div>

                <div className="relative flex flex-col items-center w-full min-h-[350px] sm:min-h-[450px] pt-12 sm:pt-20">
                    {/* Collaged Project Images - Scattered Around Headline */}
                    
                    {/* 1. Shoppin Main (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, rotate: -15, y: 30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -12, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                        className="absolute left-[-10%] md:left-[-12%] top-[20%] sm:top-[25%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#shoppin" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[60px] md:w-[90px] lg:w-[110px] p-1 rounded-lg border-[2px] shadow-xl transition-all duration-500 ${isDark ? 'bg-white/10 border-white/20 group-hover:border-cyan-400/50' : 'bg-white border-white/80 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/shoppin-p1.webp" alt="Shoppin" width={110} height={160} className="rounded-md object-cover !w-full !h-auto pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* 2. Rabbit Main (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, rotate: 15, y: 30, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 12, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 1, type: "spring", stiffness: 200 }}
                        className="absolute right-[-10%] md:right-[-12%] top-[20%] sm:top-[25%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#rabbit-invest" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[65px] md:w-[100px] lg:w-[120px] p-1 rounded-lg border-[2px] shadow-xl transition-all duration-500 ${isDark ? 'bg-white/10 border-white/20 group-hover:border-cyan-400/50' : 'bg-white border-white/80 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/rabbit-p1.webp" alt="Rabbit" width={120} height={80} className="rounded-md object-cover !w-full !h-auto pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* 3. Zoffers (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotate: 10, scale: 0.5 }}
                        whileInView={{ opacity: 0.6, y: 0, rotate: 8, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            opacity: 1,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                        className="absolute right-[5%] md:right-[8%] top-[-12%] sm:top-[-18%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#zoffers" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[45px] md:w-[65px] p-0.5 rounded-md border shadow-lg transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-cyan-400/50' : 'bg-white/80 border-white/30 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/zoffers-p1.webp" alt="Zoffers" width={65} height={90} className="rounded-sm object-cover pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* 4. Shoppin Small (Top Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotate: -10, scale: 0.5 }}
                        whileInView={{ opacity: 0.6, y: 0, rotate: -8, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            opacity: 1,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                        className="absolute left-[5%] md:left-[8%] top-[-12%] sm:top-[-18%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#shoppin" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[40px] md:w-[60px] p-0.5 rounded-md border shadow-lg transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-cyan-400/50' : 'bg-white/80 border-white/30 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/shoppin-p2.webp" alt="Shoppin Small" width={60} height={85} className="rounded-sm object-cover pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* 5. Rabbit Technical (Bottom Center Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.0, rotate: 5 }}
                        whileInView={{ opacity: 0.8, scale: 1, rotate: -5 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                        className="absolute left-[2%] md:left-[5%] bottom-[0%] sm:bottom-[-5%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#rabbit-invest" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[50px] md:w-[75px] p-0.5 rounded-md border shadow-lg transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-cyan-400/50' : 'bg-white/80 border-white/30 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/rabbit-p3.webp" alt="Rabbit Technical" width={75} height={100} className="rounded-sm object-cover pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* 6. Zoffers Alternative (Bottom Center Left) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.0, rotate: -5 }}
                        whileInView={{ opacity: 0.8, scale: 1, rotate: 5 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.15, 
                            rotate: 0, 
                            zIndex: 100,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                            filter: "brightness(1.05)"
                        }}
                        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                        className="absolute right-[2%] md:right-[5%] bottom-[0%] sm:bottom-[-5%] z-10 pointer-events-auto cursor-pointer touch-none group"
                    >
                        <Link href="/work#zoffers" className="block relative focus:outline-none" draggable={false}>
                            <div className={`w-[50px] md:w-[70px] p-0.5 rounded-md border shadow-lg transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-cyan-400/50' : 'bg-white/80 border-white/30 group-hover:border-pink-400'}`}>
                                <NextImage src="/assets/zoffers-p3.webp" alt="Zoffers Alt" width={70} height={95} className="rounded-sm object-cover pointer-events-none" />
                            </div>
                        </Link>
                    </motion.div>


                    <motion.h2 
                        className={`${bricolage.className} text-[32px] sm:text-[48px] lg:text-[60px] font-[600] leading-[1.02] text-center max-w-[1050px] tracking-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'} relative z-30 pointer-events-none`}
                    >
                        {"and then i turn those ideas into products with ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.01, delay: i * 0.02 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <span className="relative inline-block px-2">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                className={`italic font-normal opacity-90 text-transparent bg-clip-text bg-gradient-to-br ${isDark ? 'from-purple-300 via-purple-400 to-indigo-500' : 'from-orange-400 to-amber-600'} pr-5`}
                            >
                                personality.
                            </motion.span>
                            
                            {/* Calligraphic Swash Underline (Artistic Brush Stroke) */}
                            <motion.div 
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.6, duration: 1.5, ease: "circOut" }}
                                className="absolute -bottom-2 -left-4 -right-2 scale-[1.1]"
                            >
                                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={`w-full h-[16px] sm:h-[24px] ${isDark ? 'opacity-50 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]' : 'opacity-30'}`}>
                                    {/* Calligraphic Swash - Elegant Tapered Stroke */}
                                    <path 
                                        d="M2,15 C20,12 50,18 75,14 C90,11 98,13 95,15" 
                                        fill="none" 
                                        stroke={isDark ? "#A855F7" : "#F59E0B"} 
                                        strokeWidth="3.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="opacity-80"
                                    />
                                    {/* Subtle secondary trace for 'ink sheen' style */}
                                    <path 
                                        d="M5,16 C25,13 55,19 80,15" 
                                        fill="none" 
                                        stroke={isDark ? "#D8B4FE" : "#FBBF24"} 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        className="opacity-40"
                                    />
                                </svg>
                            </motion.div>
                        </span>
                    </motion.h2>

                    {/* SEE MY WORK LINK */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.2, duration: 0.4 }}
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

                    {/* Minimalist Scroll Indicator */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.5, duration: 0.4 }}
                        className="mt-12 sm:mt-16 flex flex-col items-center gap-4 opacity-40"
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

        </section>
    );
};
