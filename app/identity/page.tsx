"use client";
import React from "react";
import Image from "next/image";
import { IdentitySection } from "@/components/IdentitySection";
import { PurposeSection } from "@/components/PurposeSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/identity-bg-light.jpg";
import workBgNight from "@/public/assets/identity-bg-night.jpg";

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
                        src={workBgNight}
                        alt="Work Background Night"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay layer to create more depth and focus */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                </div>
            </div>

            <div className="w-full relative z-10 flex flex-col pb-24 sm:pb-32">
                <div className="w-full">
                    <WatermarkText text="identity" top isDark={isDark} />
                    <IdentitySection isDark={isDark} />
                </div>
                <div className="w-full mt-12 sm:mt-24">
                    <WatermarkText text="purpose" top isDark={isDark} />
                    <PurposeSection />
                </div>
            </div>
        </main>
    );
}
