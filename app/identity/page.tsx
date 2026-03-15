"use client";
import React from "react";
import Image from "next/image";
import { IdentitySection } from "@/components/IdentitySection";
import { PurposeSection } from "@/components/PurposeSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";

export default function IdentityPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'}`}>
            {/* Background Image (Same as Home/Work for consistency if needed, or stick to provided rules) */}
            <div className={`fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={workBg}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="w-full relative z-10 flex flex-col pt-12 sm:pt-20 pb-24 sm:pb-32">
                <div className="w-full">
                    <WatermarkText text="identity" top isDark={isDark} />
                    <IdentitySection isDark={isDark} />
                </div>
                <div className="w-full mt-12 sm:mt-24">
                    <WatermarkText text="purpose" top isDark={isDark} />
                    <PurposeSection isDark={isDark} />
                </div>
            </div>
        </main>
    );
}
