"use client";

import { Bowlby_One_SC, Poppins } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import projCrescendoMain from "@/public/assets/proj-crescendo-main.png";
import projCrescendoLeft from "@/public/assets/proj-crescendo-left.png";
import projCrescendoCenter from "@/public/assets/proj-crescendo-center.png";
import projCrescendoRight from "@/public/assets/proj-crescendo-right.png";
import projOlogyLeft from "@/public/assets/proj-ology-left.png";
import projOlogyRight from "@/public/assets/proj-ology-right.png";
import projOlogyMain from "@/public/assets/proj-ology-main.png";
import projSpotifyResume from "@/public/assets/proj-spotify-resume.png";
import projChatHistory from "@/public/assets/make_my_fit.png";
import projMicOff from "@/public/assets/chat_history.png";
import projMakeMyFit from "@/public/assets/make_my_fit_2.png";
import projVirtualTryOnFinal from "@/public/assets/virtual_try_on_final.png";
import projFriendlyInvoice from "@/public/assets/friendly-invoice.png";
import projFriendlyInvoice2 from "@/public/assets/friendly-invoice-2.png";
import projFriendlyInvoicePreview from "@/public/assets/friendly-invoice-preview.png";

import { useTheme } from "./ThemeContext";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"] });
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
    description: string;
    floatingImages: FloatingImage[];
    clickAction: ClickAction;
    onResumeClick?: () => void;
    isDark?: boolean;
    category: "case-studies" | "design-projects";
};


function ProjectCard({
    title,
    subtitle,
    description,
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
    isDark,
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
                    className={cn(
                        "relative rounded-[40px] w-[190px] h-[160px] sm:w-[280px] sm:h-[235px] overflow-visible transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2",
                        "backdrop-blur-[20px]"
                    )}
                    style={{
                        backgroundColor: `${bgColor}40`, // 25% opacity
                        border: `1.5px solid ${borderColor}66`, // 40% opacity
                        boxShadow: `0 16px 40px -8px ${shadowColor}, inset 0 2px 20px 0 ${borderColor}33, inset 0 1px 1px 0 rgba(255,255,255,${isDark ? 0.1 : 0.4})`
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Floating Images Container */}
                    <div className="absolute pointer-events-none w-[337px] h-[270px] top-0 left-1/2 -ml-[168.5px] scale-[0.5] sm:scale-[0.8] origin-top">
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
                                    className={cn(
                                        "overflow-hidden border-2 border-white transition-all duration-300",
                                        isHovered ? "shadow-2xl" : "shadow-none"
                                    )}
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

                    {/* Gradient Bottom Label (Front Folder Flap) */}
                    <div
                        className={cn(
                            "absolute bottom-0 left-[-2px] right-0 rounded-[30px] sm:rounded-[36px] overflow-hidden flex items-center justify-center z-20",
                            "w-[calc(100%+4px)] h-[125px] sm:h-[185px]",
                            "backdrop-blur-[30px] shadow-[0_-8px_24px_rgba(0,0,0,0.06)]"
                        )}
                        style={{
                            background: `linear-gradient(to bottom, ${gradientFrom}33 0%, ${gradientTo}CC 100%)`, // 20% to 80%
                            border: `1.5px solid ${gradientBorderColor}99`, // 60% opacity
                            borderTop: `1.5px solid rgba(255,255,255,${isDark ? 0.15 : 0.5})`, // Strong top highlight
                            boxShadow: `inset 0 1px 2px 0 rgba(255,255,255,${isDark ? 0.1 : 0.4})`
                        }}
                    >
                        <div className={`text-center flex flex-col items-center justify-center px-3 sm:px-6 w-full ${poppins.className}`}>
                            <p className="text-white text-[13px] sm:text-[18px] font-semibold tracking-tight leading-tight">
                                {title}
                            </p>
                            <p
                                className="text-[9px] sm:text-[13px] font-medium tracking-tight leading-tight mt-[1px] sm:mt-0.5"
                                style={{ color: subtitleColor }}
                            >
                                {subtitle}
                            </p>
                            <p className="text-[9px] sm:text-[12px] font-medium leading-[1.3] sm:leading-[1.4] tracking-tight mt-1 sm:mt-3 opacity-95 text-[#f5f5f5] line-clamp-3 sm:line-clamp-4 max-w-[95%]">
                                {description}
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
                        className="relative w-full max-w-[700px] h-[85vh] sm:h-[90vh] flex flex-col gap-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-1 w-full">
                            <Image
                                src={projSpotifyResume}
                                alt="Spotify Style Resume - Harshit Heya"
                                fill
                                className="object-contain rounded-[20px]"
                                sizes="(max-width: 768px) 100vw, 700px"
                                priority
                            />
                        </div>
                        
                        <a 
                            href="https://drive.google.com/file/d/1bH31bh2zGYQScjkHK_QEjQ7BlIDO0fBB/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-center flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl mb-4"
                        >
                            <FileText size={18} />
                            view pdf
                        </a>
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
        width: 140, height: 136,
        hiddenRotate: -8, hiddenTop: -10, hiddenLeft: 30, hiddenScale: 0.35,
        revealedRotate: -24.5, revealedTop: -43, revealedLeft: -17, revealedScale: 1,
        borderRadius: 9, borderColor: "#bbe3ff",
    },
    {
        src: projCrescendoCenter,
        width: 150, height: 95,
        hiddenRotate: 2, hiddenTop: -20, hiddenLeft: 126, hiddenScale: 0.35,
        revealedRotate: -0.1, revealedTop: -59, revealedLeft: 126, revealedScale: 1,
        borderRadius: 9, borderColor: "#bbe3ff", zIndex: 1,
    },
    {
        src: projCrescendoRight,
        width: 130, height: 98,
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

const chatGPTImages: FloatingImage[] = [
    {
        src: projChatHistory,
        width: 270, height: 160,
        hiddenRotate: -2, hiddenTop: -10, hiddenLeft: 35, hiddenScale: 0.5,
        revealedRotate: -5, revealedTop: -55, revealedLeft: 40, revealedScale: 1,
        borderRadius: 20, borderColor: "#c9f8ff", zIndex: 1,
    },
];

const zoomImages: FloatingImage[] = [
    {
        src: projMicOff,
        width: 270, height: 160,
        hiddenRotate: 5, hiddenTop: -8, hiddenLeft: 55, hiddenScale: 0.5,
        revealedRotate: 8, revealedTop: -55, revealedLeft: 50, revealedScale: 1,
        borderRadius: 20, borderColor: "#b6d9ff", zIndex: 1,
    },
];

const makeMyFitImages: FloatingImage[] = [
    {
        src: projMakeMyFit,
        width: 270, height: 151,
        hiddenRotate: -3, hiddenTop: -12, hiddenLeft: 50, hiddenScale: 0.5,
        revealedRotate: -8, revealedTop: -60, revealedLeft: 45, revealedScale: 1,
        borderRadius: 20, borderColor: "#ffc6c6", zIndex: 1,
    },
];

const virtualTryOnImages: FloatingImage[] = [
    {
        src: projVirtualTryOnFinal,
        width: 270, height: 152,
        hiddenRotate: 3, hiddenTop: -12, hiddenLeft: 55, hiddenScale: 0.5,
        revealedRotate: 5, revealedTop: -60, revealedLeft: 50, revealedScale: 0.9,
        borderRadius: 20, borderColor: "#fcf1d1", zIndex: 1,
    },
];

const friendlyInvoiceImages: FloatingImage[] = [
    {
        src: projFriendlyInvoicePreview,
        width: 270, height: 160,
        hiddenRotate: 2, hiddenTop: -10, hiddenLeft: 35, hiddenScale: 0.5,
        revealedRotate: 4, revealedTop: -55, revealedLeft: 40, revealedScale: 1,
        borderRadius: 20, borderColor: "#d4d4d4", zIndex: 1,
    },
];

type ProjectItem = Omit<ProjectCardProps, 'onResumeClick' | 'isDark'> & { id: string };

const allProjects: ProjectItem[] = [
    {
        id: "crescendo",
        title: "Crescendo",
        subtitle: "(College Fest)",
        description: "Arcade-inspired fest website built around immersive, game-like navigation.",
        bgColor: "#3870d2",
        borderColor: "#c8d8ff",
        shadowColor: "rgba(32,28,255,0.29)",
        gradientFrom: "#dba5ff",
        gradientTo: "#0024f3",
        gradientBorderColor: "#8686ff",
        subtitleColor: "#c6d4ff",
        floatingImages: crescendoImages,
        clickAction: { type: "link", url: "https://crescendo-mu.vercel.app/" },
        category: "design-projects"
    },
    {
        id: "ology",
        title: "Ology Studios",
        subtitle: "(Agency Website)",
        description: "Designed a complete website system for a modern branding studio.",
        bgColor: "#9f2b2b",
        borderColor: "#ffb6b6",
        shadowColor: "rgba(231,0,0,0.29)",
        gradientFrom: "#f2ac5c",
        gradientTo: "#fd0000",
        gradientBorderColor: "#ffc0c0",
        subtitleColor: "#ffc6c6",
        floatingImages: ologyImages,
        clickAction: { type: "none" },
        category: "design-projects"
    },
    {
        id: "spotify",
        title: "Spotify Resume",
        subtitle: "(Fun Project)",
        description: "Explored applying Spotify’s design language to a structured resume format.",
        bgColor: "#074b16",
        borderColor: "#1a6218",
        shadowColor: "rgba(15,113,0,0.29)",
        gradientFrom: "#a0ff1c",
        gradientTo: "#006003",
        gradientBorderColor: "#00cf80",
        subtitleColor: "#deffc6",
        floatingImages: spotifyImages,
        clickAction: { type: "modal", modalContent: "resume" },
        category: "design-projects"
    },
    {
        id: "chatgpt",
        title: "ChatGPT History",
        subtitle: "(Case Study)",
        description: "Conceptualized a prompt history feature to track progress within conversations.",
        bgColor: "#328783",
        borderColor: "#c9f8ff",
        shadowColor: "rgba(28,255,236,0.29)",
        gradientFrom: "#1ff1e0",
        gradientTo: "#02886b",
        gradientBorderColor: "#cafdff",
        subtitleColor: "#e4ffc6",
        floatingImages: chatGPTImages,
        clickAction: { type: "link", url: "https://drive.google.com/file/d/1BAI_V8u4KkZwq1xTw4kZ7XQgziRfTFOi/view?usp=sharing" },
        category: "case-studies"
    },
    {
        id: "zoom",
        title: "Zoom Scary UX",
        subtitle: "(Case Study)",
        description: "UX case study on missing consent and unexpected exposure in live sessions.",
        bgColor: "#4387c5",
        borderColor: "#b6d9ff",
        shadowColor: "rgba(0,108,231,0.29)",
        gradientFrom: "#5cb6f2",
        gradientTo: "#0054fd",
        gradientBorderColor: "#e8f5fd",
        subtitleColor: "#dae8f5",
        floatingImages: zoomImages,
        clickAction: { type: "link", url: "https://drive.google.com/file/d/1pzCj94_BhSX7jiOWJhS_8BagbVFPDo54/view?usp=sharing" },
        category: "case-studies"
    },
    {
        id: "makemyfit",
        title: "Make My Fit",
        subtitle: "(Converted Shoppin)",
        description: "Designed a “Make My Fit” feature to recommend clothing based on users’ existing wardrobe.",
        bgColor: "#e46b86",
        borderColor: "#ff8d84",
        shadowColor: "rgba(113,0,0,0.29)",
        gradientFrom: "#ff4369",
        gradientTo: "#a6003d",
        gradientBorderColor: "#ffb8b8",
        subtitleColor: "#ffc6c6",
        floatingImages: makeMyFitImages,
        clickAction: { type: "link", url: "https://drive.google.com/file/d/1FEvfHVQDax6kwxezrFE1-l5THiQj0goV/view?usp=sharing" },
        category: "case-studies"
    },
    {
        id: "virtual-try-on",
        title: "Virtual try on",
        subtitle: "(Case study)",
        description: "Reduced drop-off by 13% in the virtual try-on flow by aligning it with real user behavior.",
        bgColor: "#8a7b00",
        borderColor: "#fcf1d1",
        shadowColor: "rgba(184, 134, 11, 0.29)",
        gradientFrom: "#ffdf00",
        gradientTo: "#b8860b",
        gradientBorderColor: "#fcf1d1",
        subtitleColor: "#fcf1d1",
        floatingImages: virtualTryOnImages,
        clickAction: { type: "link", url: "https://medium.com/@iamharshit.idk/reducing-the-dropoff-by-13-on-virutal-try-on-a99fa0cff09e" },
        category: "case-studies"
    },
    {
        id: "friendly-invoice",
        title: "Friendly Invoice",
        subtitle: "(Invoice Maker)",
        description: "Built a invoice maker that you can send your friends if they owe you money.",
        bgColor: "#000000",
        borderColor: "#ffffff",
        shadowColor: "rgba(0,0,0,0.5)",
        gradientFrom: "#404040", // Deep gray for text contrast
        gradientTo: "#000000",   // True black
        gradientBorderColor: "#ffffff",
        subtitleColor: "rgba(255,255,255,0.6)",
        floatingImages: friendlyInvoiceImages,
        clickAction: { type: "link", url: "https://harshitidk.github.io/invoice/" },
        category: "design-projects"
    }
];

export function ProjectsSection({ isDark }: { isDark?: boolean }) {
    const [showResume, setShowResume] = useState(false);
    const [activeTab, setActiveTab] = useState<"all" | "case-studies" | "design-projects">("all");

    const filteredProjects = allProjects.filter(project => 
        activeTab === "all" ? true : project.category === activeTab
    );

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
                    [isn't this tuffff?]
                </p>
            </motion.div>

            {/* Tab Switcher */}
            <motion.div 
                className={cn(
                    "flex p-1.5 gap-1 rounded-full mb-12 sm:mb-16 backdrop-blur-[24px] border transition-colors duration-500",
                    isDark 
                        ? "bg-white/5 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                        : "bg-black/5 border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                )}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                {(["all", "case-studies", "design-projects"] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "relative px-4 sm:px-8 py-2 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 capitalize whitespace-nowrap",
                            activeTab === tab 
                                ? "text-white" 
                                : isDark ? "text-white/40 hover:text-white/70" : "text-black/50 hover:text-black/80"
                        )}
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 rounded-full z-0 shadow-lg"
                                style={{
                                    background: "linear-gradient(135deg, #FF4D00 0%, #FF9500 100%)", // Red-Orange Gradient
                                    boxShadow: "0 4px 15px rgba(255, 77, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
                                }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{tab.replace("-", " ")}</span>
                    </button>
                ))}
            </motion.div>

            {/* Project Cards Grid */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 sm:gap-y-32 gap-x-12 sm:gap-x-16 pt-8 sm:pt-12 items-start justify-items-center w-full"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                        >
                            <ProjectCard
                                {...project}
                                isDark={isDark}
                                onResumeClick={project.id === "spotify" ? () => setShowResume(true) : undefined}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
        </section>
    );
}
