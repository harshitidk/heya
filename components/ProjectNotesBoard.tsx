"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { X } from "lucide-react";

import projCrescendoMain from "@/public/assets/proj-crescendo-main.png";
import projOlogyMain from "@/public/assets/proj-ology-main.png";
import projSpotifyResume from "@/public/assets/proj-spotify-resume.png";
import projChatHistory from "@/public/assets/make_my_fit.png";
import projMicOff from "@/public/assets/chat_history.png";
import projMakeMyFit from "@/public/assets/make_my_fit_2.png";
import projVirtualTryOnFinal from "@/public/assets/virtual_try_on_final.png";
import projFriendlyInvoicePreview from "@/public/assets/friendly-invoice-preview.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

interface NoteProject {
    id: string;
    number: number;
    title: string;
    subtitle: string;
    description: string;
    noteColor: string;
    tapeColor: string;
    image: StaticImageData;
    rotation: number;
    href?: string;
    modalType?: "resume";
}

const noteProjects: NoteProject[] = [
    {
        id: "crescendo",
        number: 1,
        title: "Crescendo",
        subtitle: "College Fest",
        description: "Arcade-inspired fest website built around immersive, game-like navigation.",
        noteColor: "#F0F5E0",
        tapeColor: "#8B9A3B",
        image: projCrescendoMain,
        rotation: -3,
        href: "https://crescendo-mu.vercel.app/",
    },
    {
        id: "chatgpt",
        number: 2,
        title: "ChatGPT History",
        subtitle: "Case Study",
        description: "Conceptualized a prompt history feature to track progress within conversations.",
        noteColor: "#FCE4EC",
        tapeColor: "#E91E63",
        image: projMicOff,
        rotation: 2.5,
        href: "https://drive.google.com/file/d/1BAI_V8u4KkZwq1xTw4kZ7XQgziRfTFOi/view?usp=sharing",
    },
    {
        id: "ology",
        number: 3,
        title: "Ology Studios",
        subtitle: "Agency Website",
        description: "Designed a complete website system for a modern branding studio.",
        noteColor: "#E0F2F1",
        tapeColor: "#26A69A",
        image: projOlogyMain,
        rotation: -1.5,
    },
    {
        id: "virtual-try-on",
        number: 4,
        title: "Virtual Try-On",
        subtitle: "Case Study",
        description: "Reduced drop-off by 13% in the virtual try-on flow by aligning it with real user behavior.",
        noteColor: "#FFF8E1",
        tapeColor: "#FFB300",
        image: projVirtualTryOnFinal,
        rotation: 3,
        href: "https://medium.com/@iamharshit.idk/reducing-the-dropoff-by-13-on-virutal-try-on-a99fa0cff09e",
    },
    {
        id: "spotify",
        number: 5,
        title: "Spotify Resume",
        subtitle: "Fun Project",
        description: "Explored applying Spotify's design language to a structured resume format.",
        noteColor: "#E8F5E9",
        tapeColor: "#4CAF50",
        image: projSpotifyResume,
        rotation: -2,
        modalType: "resume",
    },
    {
        id: "zoom",
        number: 6,
        title: "Zoom Scary UX",
        subtitle: "Case Study",
        description: "UX case study on missing consent and unexpected exposure in live sessions.",
        noteColor: "#E3F2FD",
        tapeColor: "#42A5F5",
        image: projChatHistory,
        rotation: 1.5,
        href: "https://drive.google.com/file/d/1pzCj94_BhSX7jiOWJhS_8BagbVFPDo54/view?usp=sharing",
    },
    {
        id: "makemyfit",
        number: 7,
        title: "Make My Fit",
        subtitle: "Shoppin Feature",
        description: "Designed a \"Make My Fit\" feature to recommend clothing based on users' existing wardrobe.",
        noteColor: "#FCE4EC",
        tapeColor: "#EC407A",
        image: projMakeMyFit,
        rotation: -2.5,
        href: "https://drive.google.com/file/d/1FEvfHVQDax6kwxezrFE1-l5THiQj0goV/view?usp=sharing",
    },
    {
        id: "friendly-invoice",
        number: 8,
        title: "Friendly Invoice",
        subtitle: "Web App",
        description: "Built an invoice maker that you can send your friends if they owe you money.",
        noteColor: "#F3E5F5",
        tapeColor: "#AB47BC",
        image: projFriendlyInvoicePreview,
        rotation: 2,
        href: "https://harshitidk.github.io/invoice/",
    },
];

// Deterministic tape rotations per note
const tapeRotations = [8, -5, 6, -8, 4, -6, 7, -4];

function StickyNote({
    project,
    isDark,
    onResumeClick,
    index,
    noteRef,
}: {
    project: NoteProject;
    isDark: boolean;
    onResumeClick?: () => void;
    index: number;
    noteRef: React.RefObject<HTMLDivElement | null>;
}) {
    const handleClick = () => {
        if (project.modalType === "resume" && onResumeClick) {
            onResumeClick();
        } else if (project.href) {
            window.open(project.href, "_blank", "noopener,noreferrer");
        }
    };

    const isClickable = project.href || project.modalType;

    return (
        <motion.div
            ref={noteRef}
            className="relative"
            initial={{ y: 50, opacity: 0, rotate: 0 }}
            whileInView={{ y: 0, opacity: 1, rotate: project.rotation }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Tape */}
            <div
                className="absolute -top-[14px] sm:-top-[18px] left-1/2 z-20 w-[40px] sm:w-[52px] h-[22px] sm:h-[28px] rounded-[3px]"
                style={{
                    backgroundColor: project.tapeColor,
                    transform: `translateX(-50%) rotate(${tapeRotations[index % tapeRotations.length]}deg)`,
                    opacity: 0.85,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
            />

            {/* Note Card */}
            <div
                onClick={isClickable ? handleClick : undefined}
                className={`relative w-[260px] sm:w-[300px] rounded-[16px] sm:rounded-[20px] overflow-hidden transition-all duration-500 group ${
                    isClickable ? "cursor-pointer hover:-translate-y-2 hover:shadow-2xl" : "cursor-default"
                }`}
                style={{
                    backgroundColor: isDark ? `${project.noteColor}15` : project.noteColor,
                    border: isDark ? `1.5px solid ${project.noteColor}30` : `1.5px solid rgba(0,0,0,0.06)`,
                    boxShadow: isDark
                        ? "0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.15)"
                        : "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    backdropFilter: isDark ? "blur(16px)" : "none",
                }}
            >
                {/* Content */}
                <div className={`p-5 sm:p-6 ${poppins.className}`}>
                    {/* Number tag */}
                    <span
                        className={`inline-block text-[12px] sm:text-[13px] font-bold mb-2 ${
                            isDark ? "text-white/50" : "text-black/30"
                        }`}
                    >
                        {`{${project.number}}`}
                    </span>

                    {/* Title */}
                    <h3
                        className={`${bricolage.className} text-[20px] sm:text-[24px] font-[800] leading-[1.1] tracking-tight mb-1 ${
                            isDark ? "text-white" : "text-[#1a1a1a]"
                        }`}
                    >
                        {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                        className={`text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1px] mb-3 ${
                            isDark ? "text-white/40" : "text-black/40"
                        }`}
                    >
                        {project.subtitle}
                    </p>

                    {/* Description */}
                    <p
                        className={`text-[12px] sm:text-[13px] font-medium leading-[1.5] mb-4 ${
                            isDark ? "text-white/60" : "text-[#555]"
                        }`}
                    >
                        {project.description}
                    </p>

                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] rounded-[10px] sm:rounded-[12px] overflow-hidden border border-black/5">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="300px"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 sm:px-12 py-8 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[10000] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors rounded-full p-2 cursor-pointer"
            >
                <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
                className="relative w-full max-w-[700px] h-[85vh] sm:h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={projSpotifyResume}
                    alt="Spotify Style Resume"
                    fill
                    className="object-contain rounded-[20px]"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                />
            </motion.div>
        </motion.div>,
        document.body
    );
}

// Thread/connector SVG that draws dynamic curves between note centers
function ThreadConnector({
    containerRef,
    noteRefs,
    isDark,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
    noteRefs: React.RefObject<(HTMLDivElement | null)[]>;
    isDark: boolean;
}) {
    const [paths, setPaths] = useState<string>("");
    const [dims, setDims] = useState({ w: 0, h: 0 });

    const computePaths = useCallback(() => {
        const container = containerRef.current;
        const refs = noteRefs.current;
        if (!container || !refs) return;

        const containerRect = container.getBoundingClientRect();
        const w = containerRect.width;
        const h = containerRect.height;
        setDims({ w, h });

        const centers: { x: number; y: number }[] = [];
        for (const ref of refs) {
            if (!ref) continue;
            const r = ref.getBoundingClientRect();
            centers.push({
                x: r.left + r.width / 2 - containerRect.left,
                y: r.top + r.height / 2 - containerRect.top,
            });
        }

        if (centers.length < 2) return;

        // Build a smooth cubic bezier path through all note centers
        let d = `M ${centers[0].x} ${centers[0].y}`;
        for (let i = 0; i < centers.length - 1; i++) {
            const curr = centers[i];
            const next = centers[i + 1];
            // Control points: horizontal pull toward midpoint
            const midX = (curr.x + next.x) / 2;
            const cp1x = midX;
            const cp1y = curr.y;
            const cp2x = midX;
            const cp2y = next.y;
            d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
        }
        setPaths(d);
    }, [containerRef, noteRefs]);

    useEffect(() => {
        // Compute after layout settles
        const timer = setTimeout(computePaths, 800);
        window.addEventListener("resize", computePaths);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", computePaths);
        };
    }, [computePaths]);

    if (!paths || dims.w === 0) return null;

    const strokeColor = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            fill="none"
            preserveAspectRatio="none"
            style={{ width: dims.w, height: dims.h }}
        >
            <path
                d={paths}
                stroke={strokeColor}
                strokeWidth="2"
                strokeDasharray="10 8"
                strokeLinecap="round"
                fill="none"
            />
            {/* Small dots at each note center */}
            {noteRefs.current?.map((ref, i) => {
                if (!ref || !containerRef.current) return null;
                const containerRect = containerRef.current.getBoundingClientRect();
                const r = ref.getBoundingClientRect();
                const cx = r.left + r.width / 2 - containerRect.left;
                const cy = r.top + r.height / 2 - containerRect.top;
                return (
                    <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}
                    />
                );
            })}
        </svg>
    );
}

export function ProjectNotesBoard({ isDark }: { isDark?: boolean }) {
    const [showResume, setShowResume] = useState(false);
    const dark = isDark ?? false;
    const containerRef = useRef<HTMLDivElement>(null);
    const noteRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Arrange in zigzag pairs
    const rows: NoteProject[][] = [];
    for (let i = 0; i < noteProjects.length; i += 2) {
        rows.push(noteProjects.slice(i, i + 2));
    }

    return (
        <section
            className={`relative w-full min-h-screen transition-colors duration-700 ${
                dark ? "bg-[#111110]" : "bg-[#F5F0E8]"
            }`}
        >
            {/* Dot grid background pattern */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: dark
                        ? `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`
                        : `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Subtle grain texture */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.08] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
            />

            <div
                ref={containerRef}
                className={`relative w-full max-w-[1000px] mx-auto pt-24 sm:pt-36 pb-32 px-4 sm:px-8 z-10 ${poppins.className}`}
            >
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center text-center mb-16 sm:mb-24"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2
                        className={`${bricolage.className} text-[40px] sm:text-[56px] font-[800] leading-none tracking-tight ${
                            dark ? "text-white" : "text-[#1a1a1a]"
                        }`}
                    >
                        projects
                    </h2>
                    <p
                        className={`mt-3 text-[13px] sm:text-[15px] font-medium tracking-wide ${
                            dark ? "text-white/40" : "text-black/40"
                        }`}
                    >
                        case studies, experiments & side projects
                    </p>
                </motion.div>

                {/* Thread connector SVG */}
                <ThreadConnector containerRef={containerRef} noteRefs={noteRefs} isDark={dark} />

                {/* Note Rows */}
                <div className="relative z-10 flex flex-col gap-12 sm:gap-8">
                    {rows.map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className={`flex flex-col sm:flex-row items-center gap-8 sm:gap-0 w-full ${
                                rowIdx % 2 === 0 ? "sm:justify-between" : "sm:justify-between sm:flex-row-reverse"
                            }`}
                        >
                            {row.map((project, colIdx) => {
                                const globalIdx = rowIdx * 2 + colIdx;
                                const isLeft = (rowIdx % 2 === 0 && colIdx === 0) || (rowIdx % 2 !== 0 && colIdx === 1);
                                return (
                                    <div
                                        key={project.id}
                                        className={`relative ${
                                            isLeft ? "sm:ml-4 lg:ml-12" : "sm:mr-4 lg:mr-12"
                                        }`}
                                        style={{
                                            marginTop: colIdx === 1 ? `${rowIdx % 2 === 0 ? 48 : 32}px` : undefined,
                                        }}
                                    >
                                        <StickyNote
                                            project={project}
                                            isDark={dark}
                                            onResumeClick={project.id === "spotify" ? () => setShowResume(true) : undefined}
                                            index={globalIdx}
                                            noteRef={{
                                                get current() { return noteRefs.current[globalIdx]; },
                                                set current(el) { noteRefs.current[globalIdx] = el; },
                                            } as React.RefObject<HTMLDivElement | null>}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
        </section>
    );
}
