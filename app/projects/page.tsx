"use client";
import Image from "next/image";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";
import workBgNight1 from "@/public/assets/work-bg-night-1.png";
import workBgNight2 from "@/public/assets/work-bg-night-2.png";

export default function ProjectsPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 bg-transparent`}>
            {/* Background Layers */}
            <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none`}>
                {/* Light Mode Artwork */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src={workBg}
                        alt="Background Light"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                {/* Dark Mode Artwork (Night Version) */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={workBgNight1}
                        alt="Background Night"
                        fill
                        className="object-cover"
                        priority
                    />
                    <Image
                        src={workBgNight2}
                        alt="Background Clouds"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </div>

            <div className="w-full relative z-10 flex flex-col pt-0 pb-20">
                {/* Curiosity Section / Experiments */}
                <div className="w-full -mt-4 sm:-mt-8">
                    <ExperimentsSection isDark={isDark} />
                </div>

                {/* Projects Section */}
                <div className="w-full mt-24 sm:mt-44">
                    <ProjectsSection isDark={isDark} />
                </div>
            </div>
        </main>
    );
}
