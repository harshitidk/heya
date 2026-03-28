"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";

export default function WorkPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 ${isDark ? 'bg-[#161b2e]' : 'bg-[#F5F0E8]'}`}>
            {/* Wall Background Layer */}
            <div 
                className={`fixed inset-0 z-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-100'}`}
                style={{
                    backgroundImage: isDark 
                        ? `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.05) 1.5px, transparent 0)` 
                        : `radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.06) 1.5px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }} 
            />

            {/* Subtle Texture/Grain */}
            <div
                className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
                }}
            />

            <div className="w-full relative z-10 flex flex-col pt-0 pb-20">
                {/* Original Work Section (Selected Work) */}
                <div className="w-full">
                    <WorkSection />
                </div>

                {/* Experience Section */}
                <div className="w-full mt-24 sm:mt-44">
                    <ExperienceSection isDark={isDark} />
                </div>
            </div>
        </main>
    );
}
