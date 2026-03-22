"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight, Flower2 } from "lucide-react";
import { useTheme } from "./ThemeContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function PurposeSection() {
    const { isDark } = useTheme();

    const gradientStyle = {
        backgroundImage: isDark
            ? "linear-gradient(123.812deg, rgb(255, 255, 255) 11.319%, rgb(197, 197, 197) 105.27%)"
            : "linear-gradient(91.223deg, rgb(255, 199, 57) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 195, 16) 107.26%)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
    };

    const highlightStyle = {
        backgroundImage: isDark
            ? "linear-gradient(123.812deg, rgb(255, 255, 255) 11.319%, rgb(255, 255, 255) 105.27%)"
            : "linear-gradient(91.223deg, rgb(255, 120, 0) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 80, 0) 107.26%)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
    };

    return (
        <section className={`relative w-full max-w-[1400px] mx-auto pt-24 pb-32 sm:pb-44 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden ${poppins.className}`}>
            <div className="relative w-full max-w-[850px] flex flex-col items-center text-center">
                {/* Description Body */}
                <motion.div 
                    className="flex flex-col gap-8 sm:gap-12 w-full items-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex flex-col gap-6 sm:gap-10 items-center">
                        <p 
                            className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.8] sm:leading-[1.94] font-medium lowercase"
                            style={gradientStyle}
                        >
                            i want to grow into a <span className="font-bold sm:font-extrabold" style={highlightStyle}>great product designer and a systems thinker,</span> i enjoy connecting dots across different fields, understanding how things work together, and turning those insights into thoughtful solutions. right now, i’m looking for places where i can make an impact, learn quickly, and help turn ideas into real products.
                        </p>

                        <p 
                            className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.8] sm:leading-[1.94] font-medium lowercase max-w-[700px]"
                            style={gradientStyle}
                        >
                            i thrive when i’m building toward a larger vision something meaningful to show up for every day. i tend to work best in two situations: when i fall deeply in love with the work, or when i’m given ownership of a problem and a clear goal to pursue.
                        </p>

                        <motion.a 
                            href="https://wa.link/60qsvx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center justify-center gap-2 mt-8 sm:mt-12 px-8 sm:px-10 py-4 sm:py-4 border-[1.5px] border-solid relative rounded-full transition-all duration-700 cursor-pointer overflow-hidden ${isDark ? 'bg-white border-white shadow-[0_12px_30px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.6)] text-[#1a1a1a]' : 'bg-gradient-to-r from-[#FF7A00] to-[#EB3B14] border-[#FF9C4D]/80 shadow-[0_12px_30px_-10px_rgba(235,59,20,0.6)] hover:shadow-[0_20px_40px_-15px_rgba(235,59,20,0.8)] text-white'}`}
                            whileHover={{ y: -5, scale: 1.03 }}
                            whileTap={{ y: 2, scale: 0.98 }}
                        >
                            {/* Inner Highlight Reflection */}
                            <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none z-20" />
                            
                            {/* Hover Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isDark ? 'bg-gradient-to-br from-orange-400/10 to-red-500/10' : 'bg-white/20'}`} />
                            
                            {/* Decorative Flowers */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex items-center justify-center -z-0">
                                <motion.div className="absolute left-2 top-0 text-white/40" whileHover={{ rotate: 90 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                                    <Flower2 size={28} />
                                </motion.div>
                                <motion.div className="absolute right-8 -bottom-1 text-white/40" whileHover={{ rotate: -90 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                                    <Flower2 size={20} />
                                </motion.div>
                                <motion.div className="absolute left-1/2 -top-2 text-white/30" whileHover={{ rotate: 180 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                                    <Flower2 size={24} />
                                </motion.div>
                            </div>
                            
                            <span className="font-bold text-[15px] sm:text-[17px] lowercase tracking-wide relative z-10 transition-colors duration-300">
                                get in touch
                            </span>
                            <motion.div 
                                className="relative z-10 flex items-center"
                                initial={{ x: 0 }}
                                animate={{ x: 0 }}
                                whileHover={{ x: 8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <ArrowRight size={20} strokeWidth={3} className="ml-1" />
                            </motion.div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
