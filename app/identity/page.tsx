"use client";
import React from "react";
import Image from "next/image";
import { IdentitySection } from "@/components/IdentitySection";
import { PurposeSection } from "@/components/PurposeSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";
import workBgNight1 from "@/public/assets/work-bg-night-1.png";
import workBgNight2 from "@/public/assets/work-bg-night-2.png";

export default function IdentityPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 bg-transparent`}>
            {/* Background Image Layers */}
            <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none`}>
                {/* Light Mode Artwork */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src={workBg}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark Mode Artwork (Night Version) */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={workBgNight1}
                        alt="Work Background Night"
                        fill
                        className="object-cover"
                        priority
                    />
                    <Image
                        src={workBgNight2}
                        alt="Work Background Clouds"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
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
