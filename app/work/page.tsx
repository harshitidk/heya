"use client";
import Image from "next/image";
import { WorkSection } from "@/components/WorkSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";

export default function WorkPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 bg-transparent`}>
            {/* Fixed Background Image */}
            <div className={`fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 opacity-100`}>
                <Image
                    src={workBg}
                    alt="Work Section Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle dark overlay for dark mode to keep text readable */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'bg-black/60' : 'bg-transparent'}`} />
            </div>

            <div className="w-full relative z-10 flex flex-col pt-12 sm:pt-20 pb-20">
                {/* Curiosity Section */}
                <div className="w-full">
                    <WatermarkText text="curiosity" top isDark={isDark} />
                    <ExperimentsSection isDark={isDark} />
                </div>

                {/* Experience Section */}
                <div className="w-full mt-20 sm:mt-44">
                    <ExperienceSection isDark={isDark} />
                </div>

                {/* Projects Section */}
                <div className="w-full mt-20 sm:mt-44 mb-20 sm:mb-44">
                    <WatermarkText text="intuition" top isDark={isDark} />
                    <ProjectsSection isDark={isDark} />
                </div>

                {/* Original Work Section */}
                <div className="w-full">
                    <WorkSection />
                </div>
            </div>
        </main>
    );
}
