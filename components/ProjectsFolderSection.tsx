"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

interface FolderProject {
    id: string;
    title: string;
    subtitle: string;
    year: string;
    folderColor: string;
    tabColor: string;
    textColor: string;
    tabTextColor: string;
    tabPosition: "left" | "center" | "right";
    href?: string;
}

const folderProjects: FolderProject[] = [
    {
        id: "crescendo",
        title: "Crescendo",
        subtitle: "Arcade-inspired college fest website",
        year: "2025",
        folderColor: "#8B9A3B",   // Olive green
        tabColor: "#6B7A2B",
        textColor: "#F5F0E0",
        tabTextColor: "#F5F0E0",
        tabPosition: "left",
        href: "https://crescendo-mu.vercel.app/",
    },
    {
        id: "friendly-invoice",
        title: "Friendly Invoice",
        subtitle: "Invoice maker for friends who owe you",
        year: "web app",
        folderColor: "#2A2A2A",   // Dark/Black
        tabColor: "#1A1A1A",
        textColor: "#E8E0CC",
        tabTextColor: "#E8E0CC",
        tabPosition: "right",
    href: "https://harshitidk.github.io/invoice/",
    },
    {
        id: "spotify-resume",
        title: "Spotify Resume",
        subtitle: "Resume designed in Spotify's language",
        year: "fun.",
        folderColor: "#E8A0B0",   // Pink
        tabColor: "#D88898",
        textColor: "#F5F0E0",
        tabTextColor: "#F5F0E0",
        tabPosition: "left",
        href: "https://drive.google.com/file/d/1bH31bh2zGYQScjkHK_QEjQ7BlIDO0fBB/view?usp=sharing",
    },
];

function FolderCard({
    project,
    index,
    totalCount,
    isDark,
    onClick,
}: {
    project: FolderProject;
    index: number;
    totalCount: number;
    isDark: boolean;
    onClick?: () => void;
}) {
    const isLast = index === totalCount - 1;

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (project.href) {
            window.open(project.href, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <motion.div
            className="relative w-full"
            style={{
                zIndex: index + 1,
                marginTop: index === 0 ? 0 : -130,
            }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Folder Tab */}
            <div
                className={`absolute -top-[36px] sm:-top-[44px] ${
                    project.tabPosition === "left"
                        ? "left-[24px] sm:left-[40px]"
                        : project.tabPosition === "right"
                        ? "right-[24px] sm:right-[40px]"
                        : "left-1/2 -translate-x-1/2"
                }`}
                style={{ zIndex: index + 2 }}
            >
                <div
                    className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-t-[14px] sm:rounded-t-[18px] font-bold text-[13px] sm:text-[15px] tracking-wide"
                    style={{
                        backgroundColor: project.tabColor,
                        color: project.tabTextColor,
                        fontFamily: poppins.style.fontFamily,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='rgba(255,255,255,0.06)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                >
                    {project.year}
                </div>
            </div>

            {/* Folder Body */}
            <div
                onClick={handleClick}
                className={`relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden transition-transform duration-500 hover:translate-y-[-4px] group cursor-pointer ${
                    isLast ? "min-h-[240px] sm:min-h-[300px]" : "min-h-[240px] sm:min-h-[300px]"
                }`}
                style={{
                    backgroundColor: project.folderColor,
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 2px,
                            rgba(0,0,0,0.02) 2px,
                            rgba(0,0,0,0.02) 4px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 2px,
                            rgba(0,0,0,0.01) 2px,
                            rgba(0,0,0,0.01) 4px
                        )
                    `,
                    boxShadow: `
                        0 6px 24px rgba(0,0,0,0.12),
                        0 2px 8px rgba(0,0,0,0.08),
                        inset 0 1px 0 rgba(255,255,255,0.15)
                    `,
                }}
            >
                {/* Inner content */}
                <div className="relative z-10 flex flex-col justify-start h-full p-6 sm:p-10">
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                        <h3
                            className={`${bricolage.className} text-[24px] sm:text-[38px] font-[800] leading-[1.05] tracking-tight`}
                            style={{ color: project.textColor }}
                        >
                            {project.title}
                        </h3>
                        <p
                            className={`${poppins.className} text-[12px] sm:text-[15px] font-medium tracking-tight opacity-60 italic`}
                            style={{ color: project.textColor }}
                        >
                            {project.subtitle}
                        </p>
                    </div>
                </div>

                {/* Hover shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>
        </motion.div>
    );
}

export function ProjectsFolderSection() {
    const { isDark } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            id="projects-section"
            className={`relative h-auto min-h-[100dvh] w-full shrink-0 py-20 sm:py-28 flex flex-col items-center justify-center transition-colors duration-700 ${
                isDark ? "bg-[#0A0F1F]" : "bg-[#E8DCC8]"
            }`}
        >
            {/* Corner Details - Sticky Volume Hub */}
            <div className="absolute inset-x-0 top-0 pointer-events-none h-full z-[100]">
                <div className={`sticky top-12 ml-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>
                    Selected Projects // Vol.04
                </div>
            </div>

            {/* Background texture */}
            <div
                className={`absolute inset-0 opacity-[0.04] pointer-events-none ${isDark ? "invert" : ""}`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.15'%3E%3Cpath d='M0 0h1v1H0zM20 20h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 w-full max-w-[520px] sm:max-w-[580px] mx-auto px-6 sm:px-8 flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    className="w-full flex items-center justify-between mb-12 sm:mb-16"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <h2
                            className={`${bricolage.className} text-[36px] sm:text-[52px] font-[800] leading-none tracking-tight ${
                                isDark ? "text-[#F1F5F9]" : "text-[#2A2A1E]"
                            }`}
                        >
                            projects
                        </h2>
                        <p
                            className={`${poppins.className} text-[12px] sm:text-[14px] font-medium tracking-wide mt-1 ${
                                isDark ? "text-[#94A3B8]" : "text-[#8B7E5E]"
                            }`}
                        >
                            selected case studies & experiments
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-300 hover:scale-105 group ${
                            isDark
                                ? "bg-white/10 text-[#E8E0CC] hover:bg-white/15 border border-white/10"
                                : "bg-[#2A2A1E]/10 text-[#2A2A1E] hover:bg-[#2A2A1E]/15 border border-[#2A2A1E]/10"
                        } ${poppins.className}`}
                    >
                        view all
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* Stacked Folder Cards */}
                <div className="w-full flex flex-col pt-[44px] sm:pt-[48px]">
                    {folderProjects.map((project, index) => (
                        <FolderCard
                            key={project.id}
                            project={project}
                            index={index}
                            totalCount={folderProjects.length}
                            isDark={isDark}
                        />
                    ))}
                </div>

                {/* Bottom hint */}
                <motion.p
                    className={`mt-12 sm:mt-16 text-[11px] sm:text-[13px] font-medium tracking-[2px] uppercase ${
                        isDark ? "text-[#8B8570]/60" : "text-[#8B7E5E]/60"
                    } ${poppins.className}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    tap to explore →
                </motion.p>
            </div>
        </section>
    );
}
