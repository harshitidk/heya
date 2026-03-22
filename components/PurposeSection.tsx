"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
                            className={`group flex items-center gap-2 mt-4 sm:mt-8 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden relative shadow-[0_5px_15px_-5px_rgba(235,59,20,0.15)] ${isDark ? 'bg-white/5 border-white/10 hover:border-white/30 text-white hover:text-white' : 'bg-black/5 border-orange-500/20 hover:border-orange-500/40 text-orange-600 hover:text-orange-700'}`}
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ y: 1, scale: 0.98 }}
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-orange-400 to-red-500`} />
                            <span className="font-extrabold text-[14px] sm:text-[16px] lowercase tracking-[1px] relative z-10">
                                get in touch
                            </span>
                            <motion.div 
                                className="relative z-10 flex items-center"
                                initial={{ x: 0 }}
                                animate={{ x: 0 }}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <ArrowRight size={18} strokeWidth={3} className="ml-1" />
                            </motion.div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
