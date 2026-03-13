"use client";

import { Bowlby_One_SC, Poppins } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import projCrescendoMain from "@/public/assets/proj-crescendo-main.png";
import projCrescendoLeft from "@/public/assets/proj-crescendo-left.png";
import projCrescendoCenter from "@/public/assets/proj-crescendo-center.png";
import projCrescendoRight from "@/public/assets/proj-crescendo-right.png";
import projOlogyLeft from "@/public/assets/proj-ology-left.png";
import projOlogyRight from "@/public/assets/proj-ology-right.png";
import projOlogyMain from "@/public/assets/proj-ology-main.png";
import projSpotifyResume from "@/public/assets/proj-spotify-resume.png";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type FloatingImage = {
    src: string | StaticImageData;
    width: number;
    height: number;
    hiddenRotate: number;
    hiddenTop: number;
    hiddenLeft: number;
    hiddenScale: number;
    revealedRotate: number;
    revealedTop: number;
    revealedLeft: number;
    revealedScale: number;
    borderRadius: number;
    borderColor: string;
    zIndex?: number;
};

type ClickAction =
    | { type: "link"; url: string }
    | { type: "modal"; modalContent: "resume" }
    | { type: "none" };

type ProjectCardProps = {
    title: string;
    subtitle: string;
    bgColor: string;
    borderColor: string;
    shadowColor: string;
    gradientFrom: string;
    gradientTo: string;
    gradientBorderColor: string;
    subtitleColor: string;
    floatingImages: FloatingImage[];
    clickAction: ClickAction;
    onResumeClick?: () => void;
};

function ProjectCard({
    title,
    subtitle,
    bgColor,
    borderColor,
    shadowColor,
    gradientFrom,
    gradientTo,
    gradientBorderColor,
    subtitleColor,
    floatingImages,
    clickAction,
    onResumeClick,
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (clickAction.type === "link") {
            window.open(clickAction.url, "_blank", "noopener,noreferrer");
        } else if (clickAction.type === "modal" && onResumeClick) {
            onResumeClick();
        }
    };

    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="project-card-container"
        >
            <div
                className={cn("block group", clickAction.type !== "none" ? "cursor-pointer" : "cursor-default")}
                onClick={handleClick}
            >
                <div
                    className="relative rounded-[44px] w-[220px] h-[180px] sm:w-[337px] sm:h-[270px] overflow-visible transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-2"
                    style={{
                        backgroundColor: bgColor,
                        border: `2px solid ${borderColor}`,
                        boxShadow: `0px 25px 56px 0px ${shadowColor}`,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Floating Images Container */}
                    <div className="absolute pointer-events-none w-[337px] h-[270px] top-0 left-[-58.5px] sm:left-0 scale-[0.55] sm:scale-100 origin-top">
                        {floatingImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                className="absolute pointer-events-none floating-image-wrapper"
                                style={{
                                    zIndex: img.zIndex ?? 0,
                                    // @ts-ignore
                                    "--revealed-top": `${img.revealedTop}px`,
                                    "--revealed-left": `${img.revealedLeft}px`,
                                    "--revealed-rotate": `${img.revealedRotate}deg`,
                                    "--revealed-scale": img.revealedScale,
                                } as any}
                                initial={{
                                    top: img.hiddenTop,
                                    left: img.hiddenLeft,
                                    rotate: img.hiddenRotate,
                                    scale: img.hiddenScale,
                                    opacity: 0.7,
                                }}
                                animate={{
                                    top: isHovered ? img.revealedTop : img.hiddenTop,
                                    left: isHovered ? img.revealedLeft : img.hiddenLeft,
                                    rotate: isHovered ? img.revealedRotate : img.hiddenRotate,
                                    scale: isHovered ? img.revealedScale : img.hiddenScale,
                                    opacity: isHovered ? 1 : 0.7,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 22,
                                    mass: 0.8,
                                    delay: isHovered ? idx * 0.06 : 0,
                                }}
                            >
                                <div
                                    className="overflow-hidden shadow-lg border-2 border-white transition-opacity duration-300"
                                    style={{
                                        width: img.width,
                                        height: img.height,
                                        borderRadius: img.borderRadius,
                                        borderColor: img.borderColor,
                                    }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={`${title} preview ${idx + 1}`}
                                        width={img.width}
                                        height={img.height}
                                        className="object-cover w-full h-full pointer-events-none"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Gradient Bottom Label */}
                    <div
                        className={cn(
                            "absolute bottom-0 left-[-2px] right-0 rounded-[30px] sm:rounded-[45px] overflow-hidden flex items-center justify-center z-20",
                            "w-[calc(100%+4px)] h-[140px] sm:h-[208px]"
                        )}
                        style={{
                            background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
                            border: `2px solid ${gradientBorderColor}`,
                        }}
                    >
                        <div className={`text-center ${poppins.className}`}>
                            <p className="text-white text-[15px] sm:text-[24px] font-semibold tracking-tight leading-relaxed">
                                {title}
                            </p>
                            <p
                                className="text-[12px] sm:text-[20px] font-medium tracking-tight leading-relaxed"
                                style={{ color: subtitleColor }}
                            >
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @media (max-width: 767px) {
                    :global(.floating-image-wrapper) {
                        top: var(--revealed-top) !important;
                        left: var(--revealed-left) !important;
                        transform: rotate(var(--revealed-rotate)) scale(var(--revealed-scale)) !important;
                        opacity: 1 !important;
                    }
                }
            `}</style>
        </motion.div>
    );
}

// Full-screen resume modal
function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 sm:px-12 py-8 cursor-zoom-out"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={projSpotifyResume}
                            alt="Spotify Style Resume - Harshit Heya"
                            fill
                            className="object-contain rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 700px"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

const crescendoImages: FloatingImage[] = [
    {
        src: projCrescendoMain,
        width: 279, height: 157,
        hiddenRotate: 3, hiddenTop: -15, hiddenLeft: 30, hiddenScale: 0.55,
        revealedRotate: 6.7, revealedTop: -10, revealedLeft: 18, revealedScale: 1,
        borderRadius: 18, borderColor: "#a2cffb",
    },
    {
        src: projCrescendoLeft,
        width: 100, height: 223,
        hiddenRotate: -8, hiddenTop: -10, hiddenLeft: 30, hiddenScale: 0.35,
        revealedRotate: -24.5, revealedTop: -43, revealedLeft: -17, revealedScale: 1,
        borderRadius: 9, borderColor: "#bbe3ff",
    },
    {
        src: projCrescendoCenter,
        width: 100, height: 223,
        hiddenRotate: 2, hiddenTop: -20, hiddenLeft: 126, hiddenScale: 0.35,
        revealedRotate: -0.1, revealedTop: -59, revealedLeft: 126, revealedScale: 1,
        borderRadius: 9, borderColor: "#bbe3ff", zIndex: 1,
    },
    {
        src: projCrescendoRight,
        width: 100, height: 223,
        hiddenRotate: 10, hiddenTop: -8, hiddenLeft: 220, hiddenScale: 0.35,
        revealedRotate: 38.7, revealedTop: -34, revealedLeft: 190, revealedScale: 1,
        borderRadius: 9, borderColor: "#bbe3ff",
    },
];

const ologyImages: FloatingImage[] = [
    {
        src: projOlogyLeft,
        width: 88, height: 190,
        hiddenRotate: -5, hiddenTop: -10, hiddenLeft: 20, hiddenScale: 0.35,
        revealedRotate: -14.3, revealedTop: -63, revealedLeft: -18, revealedScale: 1,
        borderRadius: 10, borderColor: "#ffd9d9",
    },
    {
        src: projOlogyRight,
        width: 88, height: 190,
        hiddenRotate: 5, hiddenTop: -10, hiddenLeft: 240, hiddenScale: 0.35,
        revealedRotate: 15.6, revealedTop: -69, revealedLeft: 255, revealedScale: 1,
        borderRadius: 10, borderColor: "#ffd9d9",
    },
    {
        src: projOlogyMain,
        width: 232, height: 151,
        hiddenRotate: 1, hiddenTop: -12, hiddenLeft: 55, hiddenScale: 0.55,
        revealedRotate: 2.7, revealedTop: -40, revealedLeft: 50, revealedScale: 1,
        borderRadius: 16, borderColor: "#ffd9d9", zIndex: 1,
    },
];

const spotifyImages: FloatingImage[] = [
    {
        src: projSpotifyResume,
        width: 185, height: 262,
        hiddenRotate: 4, hiddenTop: -18, hiddenLeft: 80, hiddenScale: 0.42,
        revealedRotate: 11.9, revealedTop: -68, revealedLeft: 84, revealedScale: 1,
        borderRadius: 15, borderColor: "#006200", zIndex: 1,
    },
];

export function ProjectsSection({ isDark }: { isDark?: boolean }) {
    const [showResume, setShowResume] = useState(false);

    return (
        <section className="relative w-full max-w-[1200px] mx-auto pt-16 sm:pt-28 pb-24 px-4 sm:px-8 z-10 flex flex-col items-center">
            {/* Section Title */}
            <motion.div
                className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 hover:scale-105 transition-transform duration-500 cursor-default"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    className={`${bowlby.className} text-[36px] sm:text-[50px] lg:text-[60px] text-white tracking-wide uppercase transition-all duration-700`}
                    style={{
                        textShadow: isDark ? "4px 8px 0px #043edc" : "4px 8px 0px #ab3603",
                        WebkitTextStroke: isDark ? "0px transparent" : "2px #dc4504",
                    }}
                >
                    Projects
                </h2>
                <p
                    className={`mt-2 font-medium text-[12px] sm:text-[16px] tracking-[2px] uppercase ${poppins.className} transition-all duration-700`}
                    style={
                        isDark
                            ? { color: "#abb8f0" }
                            : {
                                  backgroundImage: "linear-gradient(90deg, #e4741f, #bc5100)",
                                  color: "transparent",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                              }
                    }
                >
                    [isn&apos;t this tuffff?]
                </p>
            </motion.div>

            {/* Project Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-24 sm:gap-[50px] w-full pt-12 sm:pt-16">
                <ProjectCard
                    title="Crescendo Website"
                    subtitle="(College Fest)"
                    bgColor="#3870d2"
                    borderColor="#c8d8ff"
                    shadowColor="rgba(32,28,255,0.29)"
                    gradientFrom="#dba5ff"
                    gradientTo="#0024f3"
                    gradientBorderColor="#8686ff"
                    subtitleColor="#c6d4ff"
                    floatingImages={crescendoImages}
                    clickAction={{ type: "link", url: "https://www.figma.com/design/2QSCTA0rNfCfPwqJLQTvQG/Crescendo--Starry-Nights-?node-id=555-1176" }}
                />
                <ProjectCard
                    title="Ology Studios"
                    subtitle="(Agency Website)"
                    bgColor="#9f2b2b"
                    borderColor="#ffb6b6"
                    shadowColor="rgba(231,0,0,0.29)"
                    gradientFrom="#f2ac5c"
                    gradientTo="#fd0000"
                    gradientBorderColor="#ffc0c0"
                    subtitleColor="#ffc6c6"
                    floatingImages={ologyImages}
                    clickAction={{ type: "none" }}
                />
                <ProjectCard
                    title="Spotify Style Resume"
                    subtitle="(Fun Project)"
                    bgColor="#074b16"
                    borderColor="#1a6218"
                    shadowColor="rgba(15,113,0,0.29)"
                    gradientFrom="#a0ff1c"
                    gradientTo="#006003"
                    gradientBorderColor="#00cf80"
                    subtitleColor="#deffc6"
                    floatingImages={spotifyImages}
                    clickAction={{ type: "modal", modalContent: "resume" }}
                    onResumeClick={() => setShowResume(true)}
                />
            </div>

            <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
        </section>
    );
}
