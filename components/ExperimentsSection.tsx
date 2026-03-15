"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

import exp1 from "@/public/assets/exp-1.png";
import exp2 from "@/public/assets/exp-2.png";
import exp3 from "@/public/assets/exp-3.png";
import exp4 from "@/public/assets/exp-4.png";
import exp5 from "@/public/assets/exp-5.png";
import exp6 from "@/public/assets/exp-6.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function ExperimentsSection({ isDark }: { isDark?: boolean }) {
    const [zoomedImage, setZoomedImage] = useState<string | StaticImageData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative w-full sm:w-[100vw] max-w-[100vw] sm:max-w-[900px] mx-auto flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden sm:overflow-visible z-10">
            <div className="relative w-full flex flex-col items-center justify-center">
                {/* Floating Images (Responsive positions and dimensions) */}

                {/* Top Left */}
                <motion.div
                    className="absolute -top-12 left-0 sm:-top-10 sm:left-12 w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-0 cursor-zoom-in"
                    initial={{ rotate: 10, y: 30, opacity: 0 }}
                    whileInView={{ rotate: 28, y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: 32, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp1)}
                >
                    <Image src={exp1} alt="Experiment 1" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Top Right */}
                <motion.div
                    className="absolute -top-20 right-0 sm:-top-16 sm:right-16 w-[140px] h-[190px] sm:w-[160px] sm:h-[200px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-0 cursor-zoom-in"
                    initial={{ rotate: -10, y: 30, opacity: 0 }}
                    whileInView={{ rotate: -29, y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: -33, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp2)}
                >
                    <Image src={exp2} alt="Experiment 2" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Center Left */}
                <motion.div
                    className="absolute top-[160px] sm:top-[120px] left-0 sm:-left-8 w-[150px] h-[200px] sm:w-[150px] sm:h-[190px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-20 cursor-zoom-in"
                    initial={{ rotate: -5, x: 30, opacity: 0 }}
                    whileInView={{ rotate: -5, x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: -9, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp3)}
                >
                    <Image src={exp3} alt="Experiment 3" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Center Right */}
                <motion.div
                    className="absolute top-[140px] sm:top-[130px] right-0 sm:-right-4 w-[150px] h-[200px] sm:w-[150px] sm:h-[190px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-20 cursor-zoom-in"
                    initial={{ rotate: 5, x: -30, opacity: 0 }}
                    whileInView={{ rotate: 8, x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: 12, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp4)}
                >
                    <Image src={exp4} alt="Experiment 4" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                    className="absolute top-[380px] sm:top-[300px] left-0 sm:left-20 w-[140px] h-[190px] sm:w-[150px] sm:h-[190px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-10 cursor-zoom-in"
                    initial={{ rotate: 0, y: -30, opacity: 0 }}
                    whileInView={{ rotate: 15, y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: 19, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp5)}
                >
                    <Image src={exp5} alt="Experiment 5" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                    className="absolute top-[400px] sm:top-[280px] right-0 sm:right-24 w-[150px] h-[200px] sm:w-[160px] sm:h-[200px] rounded-[14px] shadow-xl overflow-hidden border-2 border-white z-10 cursor-zoom-in"
                    initial={{ rotate: 0, y: -30, opacity: 0 }}
                    whileInView={{ rotate: -15, y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: -19, zIndex: 50, boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setZoomedImage(exp6)}
                >
                    <Image src={exp6} alt="Experiment 6" fill className="object-cover pointer-events-none" />
                </motion.div>

                {/* Central Text content */}
                <div className={`flex flex-col items-center justify-center text-center max-w-[450px] z-30 pt-32 pb-32 sm:py-32 h-[500px] sm:h-auto ${poppins.className}`}>
                    <h2
                        className="text-[15px] sm:text-[32px] leading-[1.2] tracking-tight mb-2 font-medium transition-all duration-700 capitalize"
                        style={{
                            backgroundImage: isDark ? "linear-gradient(123.812deg, rgb(255, 255, 255) 11.319%, rgb(197, 197, 197) 105.27%)" : "linear-gradient(93.5458deg, rgb(255, 199, 57) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 195, 16) 107.26%)",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                        }}
                    >
                        a place to display whatever<br />
                        <span className="font-bold text-[21px] sm:text-[42px] lowercase z-[35]">i make, and do.</span>
                    </h2>
                    <p className={`mt-2 tracking-[1.5px] text-[10px] sm:text-[14px] uppercase font-semibold transition-colors duration-700 ${isDark ? 'text-[#a4a4a4]' : 'text-[#bc5100]'}`}>
                        [Experiments]
                    </p>
                </div>
            </div>

            {/* Portal for zoomed image modal */}
            {mounted && zoomedImage && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 sm:px-12 py-12 cursor-zoom-out animate-in fade-in duration-300 pointer-events-auto"
                    onClick={() => setZoomedImage(null)}
                >
                    <div className="relative w-full max-w-lg sm:max-w-2xl h-[70vh] sm:h-[80vh]">
                        <Image
                            src={zoomedImage}
                            alt="Zoomed experiment"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}
