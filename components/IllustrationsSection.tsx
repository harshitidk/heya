"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { ArrowUpRight } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const IllustrationsSection = () => {
    const { isDark } = useTheme();

    return (
        <section 
            id="illustrations-section" 
            className={`relative h-[100dvh] w-full snap-start shrink-0 flex items-center justify-center transition-colors duration-700 overflow-hidden ${isDark ? 'bg-[#101218]' : 'bg-[#F2F2F2]'}`}
        >
            <div className="w-full max-w-7xl px-8 sm:px-12 flex flex-col md:flex-row items-center gap-16 sm:gap-24 relative z-10">
                
                {/* Left Side - Sticker Artwork Grid UI */}
                <div className="relative flex-1 w-full flex justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-square max-w-[480px] rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] group bg-white p-4"
                    >
                        <Image 
                            src="/assets/sticker_artwork.png" 
                            alt="Sticker Illustrations Grid" 
                            fill 
                            className="object-contain p-6 group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                    
                    {/* Atmospheric Glow */}
                    <div className="absolute -z-10 w-[120%] h-[120%] blur-[120px] opacity-20 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500 animate-pulse" />
                </div>

                {/* Right Side - Information Content */}
                <div className="flex-1 flex flex-col items-start gap-8 sm:gap-14 max-w-[550px]">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Minimal Header */}
                        <div className="flex items-center gap-4">
                            <div className={`h-[1px] w-12 ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                            <span className={`${poppins.className} text-[11px] font-black uppercase tracking-[4px] ${isDark ? 'text-white/40' : 'text-black/30'}`}>Curated Vol. 01</span>
                        </div>

                        <h2 className={`${bricolage.className} text-[38px] sm:text-[48px] lg:text-[52px] font-[500] leading-[1.05] tracking-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                            High-quality <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">illustrations</span> gathered in one place for your next creation.
                        </h2>
                        
                        <p className={`${poppins.className} text-[15px] sm:text-[17px] leading-[1.7] ${isDark ? 'text-white/50' : 'text-black/50'} font-medium`}>
                            This is a system that allows you to get premium visual assets designed for speed and playfulness. Crafted to make your interfaces feel truly unique.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 w-full">
                        {/* Circle Action Button */}
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                                isDark ? 'bg-white text-black hover:shadow-[0_0_30px_white]' : 'bg-black text-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
                            }`}
                        >
                            <ArrowUpRight size={32} strokeWidth={2.5} />
                        </motion.button>
                        
                        <div className="flex flex-col gap-1">
                            <a href="#" className={`group flex items-center gap-2 ${poppins.className} transition-opacity hover:opacity-100 opacity-60`}>
                                <span className={`text-[12px] font-black uppercase tracking-[3px] ${isDark ? 'text-white' : 'text-black'}`}>Explore full pack</span>
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                            </a>
                            <div className={`h-[1.5px] w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'invert' : ''}`}
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/white-diamond-dark.png")` }}
            />
        </section>
    );
};
