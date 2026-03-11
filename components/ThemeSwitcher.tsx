"use client";

import React from "react";
import { useTheme } from "@/components/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export function ThemeSwitcher() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div
            onClick={() => setIsDark(!isDark)}
            className={`fixed top-6 right-6 md:top-8 md:right-12 z-[100] cursor-pointer hover:scale-105 border border-solid flex items-center rounded-[100px] shadow-lg ${poppins.className} w-[115px] h-[39px] overflow-hidden transition-all duration-700 ${isDark ? 'border-transparent' : 'border-black/10'}`}
            style={{
                backgroundImage: isDark
                    ? "linear-gradient(168.525deg, rgb(62, 62, 62) 14.436%, rgb(6, 6, 6) 114.44%)"
                    : "linear-gradient(128.414deg, rgba(255, 255, 255, 0.8) 3.633%, rgba(237, 237, 237, 0.8) 97.528%)",
                backdropFilter: isDark ? "none" : "blur(11.75px)"
            }}
        >
            <div className={`absolute flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'translate-x-[14px]' : 'translate-x-[42px]'}`}>
                <p className={`font-medium leading-[1.02] lowercase shrink-0 text-[14px] tracking-[-0.28px] whitespace-nowrap bg-clip-text text-[transparent] transition-colors duration-700 bg-gradient-to-r ${isDark ? 'from-white to-[#c5c5c5]' : 'from-[#4f4f4f] to-[#262626]'}`}>
                    {isDark ? "nightime" : "daylight"}
                </p>
            </div>
            <div className={`absolute flex items-center justify-center rounded-full shrink-0 w-[31px] h-[31px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0px_2.296px_14.696px_0px_rgba(0,0,0,0.19)] ${isDark ? 'translate-x-[80px] bg-[#1c1c1c] border-[#353535] border-[0.86px] shadow-[0px_2.296px_14.696px_0px_rgba(0,0,0,0.49)]' : 'translate-x-[4px] bg-white border-[#f4f4f4] border-[0.86px]'}`}>
                {isDark ? <Moon className="w-[14px] h-[14px] text-white/90" strokeWidth={2.5} /> : <Sun className="w-[14px] h-[14px] text-[#1a1a1a]" strokeWidth={2.5} />}
            </div>
        </div>
    );
}
