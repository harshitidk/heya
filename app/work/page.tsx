"use client";
import Image from "next/image";
import { WorkSection } from "@/components/WorkSection";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";

export default function WorkPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 ${isDark ? 'bg-[#0A0E17]' : 'bg-transparent'}`}>
            {/* Fixed Background Image */}
            <div className={`fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={workBg}
                    alt="Work Section Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="w-full relative z-10">
                <WorkSection />
            </div>
        </main>
    );
}
