"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function PurposeSection({ isDark }: { isDark?: boolean }) {
    const gradientStyle = {
        backgroundImage: isDark
            ? "linear-gradient(123.812deg, rgb(255, 255, 255) 11.319%, rgb(197, 197, 197) 105.27%)"
            : "linear-gradient(91.223deg, rgb(255, 199, 57) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 195, 16) 107.26%)",
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
    };

    return (
        <section className={`relative w-full max-w-[1200px] mx-auto pt-24 pb-24 sm:pb-32 px-12 sm:px-8 flex flex-col items-center justify-center ${poppins.className}`}>
            <div className="relative w-full max-w-[900px] flex flex-col items-center text-center">
                
                {/* Description Body */}
                <motion.div 
                    className="flex flex-col gap-6 sm:gap-8 max-w-[800px] text-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p 
                        className="text-[10px] sm:text-[13px] lg:text-[16px] leading-[1.94] font-medium lowercase whitespace-pre-wrap"
                        style={gradientStyle}
                    >
                        {`i thrive when i’m building toward a larger vision something meaningful to show up for every day. i tend to work best in two situations: when i fall deeply in love with the work, or when i’m given ownership of a problem and a clear goal to pursue.\n\ni want to grow into a great product designer and a systems thinker i enjoy connecting dots across different fields, understanding how things work together, and turning those insights into thoughtful solutions.\n\nright now, i’m looking for places where i can make an impact, learn quickly, and help turn ideas into real products.`}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
