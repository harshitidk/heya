"use client";
import React from "react";
import { motion } from "framer-motion";
import { Poppins, Bricolage_Grotesque, Nanum_Pen_Script } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { Target, Layout, Zap, Smile } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface ServiceCardProps {
    title: string;
    items: string[];
    color: string;
    rotation: number;
    delay: number;
    icon: React.ReactNode;
    stickerColor: string;
    isDark: boolean;
    href: string;
}

const ServiceCard = ({ title, items, color, rotation, delay, icon, stickerColor, isDark, href }: ServiceCardProps) => {
    return (
        <Link href={href} className="block">
            <motion.div
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
                whileHover={{ 
                    y: -15, 
                    rotate: rotation * 0.5, 
                    scale: 1.02,
                    zIndex: 20,
                    transition: { duration: 0.3 } 
                }}
                className={`relative w-[250px] sm:w-[320px] min-h-[350px] sm:min-h-[400px] p-6 sm:p-8 rounded-[32px] shadow-xl flex flex-col gap-4 sm:gap-6 cursor-pointer group transition-shadow hover:shadow-2xl active:scale-[0.98]`}
                style={{ backgroundColor: color }}
            >
                {/* Sticker Icon */}
                <div 
                    className={`absolute -top-6 -right-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-10`}
                    style={{ backgroundColor: stickerColor }}
                >
                    <div className="text-white transform group-hover:scale-110 transition-transform scale-[0.8] sm:scale-100">
                        {icon}
                    </div>
                    {/* Hand-drawn scribble look around sticker (SVG) */}
                    <svg className="absolute -inset-2 w-[120%] h-[120%] pointer-events-none opacity-40" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                </div>

                <h3 className={`${bricolage.className} text-[28px] sm:text-[38px] font-black leading-none text-white tracking-tight`}>
                    {title}
                </h3>

                <ul className="flex flex-col gap-2 sm:gap-3 mt-2">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 group-hover:text-white transition-colors">
                            <span className="mt-0.5 text-[12px] opacity-40 group-hover:opacity-100 transition-opacity">◆</span>
                            <span className={`${poppins.className} text-[14px] sm:text-[15px] font-medium leading-[1.3]`}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Subtle Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay rounded-[32px] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:12px_12px]" />
                </div>
            </motion.div>
        </Link>
    );
};

export const ServicesSection = () => {
    const { isDark } = useTheme();

    const services = [
        {
            title: "product",
            items: ["Product Strategy", "UX Flows & Systems", "Interaction Design", "Prototyping", "Iteration & Testing", "Shipping Features"],
            color: "#2D6A4F", // Emerald Green
            stickerColor: "#1B4332",
            rotation: -4,
            delay: 0.2,
            icon: <Target size={28} />,
            href: "/work"
        },
        {
            title: "web",
            items: ["Website Design", "Responsive Systems", "Frontend Build (No-code / Code)", "Micro-interactions", "Performance & UX", "Landing Pages"],
            color: "#5C7BD9", // Royal Blue
            stickerColor: "#3D52A0",
            rotation: 2,
            delay: 0.4,
            icon: <Layout size={28} />,
            href: "/projects"
        },
        {
            title: "experiments",
            items: ["Creative Coding", "Interactive Experiences", "AI + Design Explorations", "Rapid Prototypes", "Visual Experiences", "Story-driven Interfaces"],
            color: "#FF7F50", // Coral
            stickerColor: "#E76F51",
            rotation: -2,
            delay: 0.6,
            icon: <Zap size={28} />,
            href: "/projects"
        }
    ];

    return (
        <section 
            id="services-section" 
            className={`relative h-auto min-h-[100dvh] w-full shrink-0 py-24 sm:py-32 flex flex-col items-center justify-center transition-colors duration-700 ${
                isDark ? 'bg-[#0f172a]' : 'bg-[#F9F6F0]'
            }`}
        >
            {/* Corner Details - Sticky Volume Hub */}
            <div className="absolute inset-x-0 top-0 pointer-events-none h-full z-[100]">
                <div className={`sticky top-12 ml-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>
                    Specialized Execution // Vol.03
                </div>
            </div>

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-1000 ${isDark ? 'invert' : ''}`}
                style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
                }}
            />

            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
                {/* Header Container */}
                <div className="relative mb-20 sm:mb-24 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${bricolage.className} text-[44px] sm:text-[72px] font-[800] leading-none tracking-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}
                    >
                        stuff i <span className="relative inline-block">
                            do
                            <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-5 text-current opacity-40" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M5 15 Q 50 5, 95 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </motion.h2>
                    
                    {/* Floating Decorative Elements */}
                    <motion.div 
                        animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-8 -right-8 hidden md:block"
                    >
                        <Smile size={48} className="text-yellow-400 opacity-40 rotate-12" />
                    </motion.div>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 w-full mt-4">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            {...service}
                            isDark={isDark}
                        />
                    ))}
                </div>

                {/* Bottom Scribble Decoration */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`mt-20 flex flex-col items-center gap-4 ${nanum.className} text-[22px] sm:text-[28px] ${isDark ? 'text-white/40' : 'text-black/30'}`}
                >
                    <div className="h-[2px] w-48 bg-current rounded-full opacity-20" />
                    <p>always looking for exciting challenges</p>
                </motion.div>
            </div>
        </section>
    );
};
