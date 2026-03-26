"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const GraphicsSection = () => {
    const { isDark } = useTheme();

    return (
        <section 
            id="graphics-section" 
            className={`relative h-[100dvh] w-full snap-start shrink-0 overflow-hidden flex flex-col items-center justify-between py-12 sm:py-24 transition-colors duration-700 ${isDark ? 'bg-[#0F172A]' : 'bg-[#F8F8F8]'}`}
        >
            {/* Top Minimal Nav (Decoration) */}
            <div className={`w-full max-w-[1400px] px-8 sm:px-12 flex justify-between items-center z-10 transition-opacity duration-1000 ${isDark ? 'opacity-30' : 'opacity-20'}`}>
                <div className="flex gap-8 text-[10px] sm:text-[11px] font-black uppercase tracking-[3px]">
                    <span>works</span>
                    <span>about</span>
                </div>
                <div className={`border-[1.5px] ${isDark ? 'border-white' : 'border-black'} rounded-full px-4 py-1.5 text-[12px] font-black tracking-tight`}>ABC</div>
                <div className="flex gap-8 text-[10px] sm:text-[11px] font-black uppercase tracking-[3px] items-center">
                    <span className="hidden sm:inline">book us</span>
                    <div className="flex flex-col gap-1.5">
                        <div className={`h-[2px] w-6 ${isDark ? 'bg-white' : 'bg-black'}`} />
                        <div className={`h-[2px] w-6 ${isDark ? 'bg-white' : 'bg-black'}`} />
                    </div>
                </div>
            </div>

            {/* Floating Voxel Graphics Area */}
            <div className="relative w-full max-w-7xl h-full flex items-center justify-center pointer-events-none px-4">
                
                {/* Voxel Ghost */}
                <motion.div 
                    animate={{ 
                        y: [0, -25, 0],
                        rotate: [-15, -10, -15],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[5%] top-[15%] sm:left-[10%] sm:top-[20%] w-[140px] sm:w-[240px] aspect-square drop-shadow-2xl"
                >
                    <Image src="/assets/voxel_ghost.png" alt="3D Ghost" fill className="object-contain" priority />
                </motion.div>

                {/* Voxel Smiley */}
                <motion.div 
                    animate={{ 
                        y: [0, 30, 0],
                        rotate: [10, 18, 10],
                        scale: [0.95, 1, 0.95]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute left-[35%] top-[8%] sm:top-[5%] w-[120px] sm:w-[200px] aspect-square drop-shadow-2xl"
                >
                    <Image src="/assets/voxel_smiley.png" alt="3D Smiley" fill className="object-contain" priority />
                </motion.div>

                {/* Voxel YES Bubble */}
                <motion.div 
                    animate={{ 
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-[25%] top-[25%] sm:top-[30%] w-[160px] sm:w-[280px] aspect-square drop-shadow-2xl"
                >
                    <Image src="/assets/voxel_yes.png" alt="3D YES Bubble" fill className="object-contain" priority />
                </motion.div>

                {/* Voxel Bee */}
                <motion.div 
                    animate={{ 
                        y: [-25, 0, -25],
                        x: [10, 0, 10],
                        rotate: [12, 8, 12]
                    }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute right-[-2%] top-[12%] sm:right-[5%] sm:top-[15%] w-[130px] sm:w-[250px] aspect-square drop-shadow-2xl"
                >
                    <Image src="/assets/voxel_bee.png" alt="3D Bee" fill className="object-contain" priority />
                </motion.div>
            </div>

            {/* Bottom Header Content */}
            <div className="w-full max-w-[1400px] px-8 sm:px-12 flex flex-col sm:flex-row justify-between items-end gap-10 sm:gap-16 z-10 mt-auto mb-12 sm:mb-20">
                <div className="flex-1 w-full text-center sm:text-left">
                    <motion.h2 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={`${bricolage.className} text-[44px] sm:text-[80px] lg:text-[110px] font-[500] leading-[0.85] tracking-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}
                    >
                        Fresh & bold<br />graphics
                    </motion.h2>
                </div>

                <div className="w-full sm:max-w-[450px] space-y-8 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <p className={`${poppins.className} text-[14px] sm:text-[17px] leading-[1.6] ${isDark ? 'text-white/50' : 'text-black/50'} font-medium`}>
                        Each piece is thoughtfully crafted to work with current UI patterns like floating elements, layered compositions, and dynamic micro-interactions.
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`border-[2px] rounded-full px-12 py-4 text-[11px] font-black uppercase tracking-[3px] transition-all ${
                            isDark 
                                ? 'border-white text-white hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                                : 'border-black text-black hover:bg-black hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                        }`}
                    >
                        EXPLORE MORE
                    </motion.button>
                </div>
            </div>

            {/* Footer Attribute Line */}
            <div className={`w-full py-10 border-t ${isDark ? 'border-white/5' : 'border-black/5'} flex justify-center`}>
                <p className={`${poppins.className} text-[10px] font-black uppercase tracking-[4px] ${isDark ? 'text-white/20' : 'text-black/20'}`}>
                    Perfect for: Portfolios, Stories, Presentations
                </p>
            </div>
        </section>
    );
};
