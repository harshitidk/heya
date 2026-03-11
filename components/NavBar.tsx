"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import profilePicDay from "@/public/assets/photo-left.jpg";
import profilePicNight from "@/public/assets/night-photo-2.jpg";
import { useTheme } from "@/components/ThemeContext";

export function NavBar() {
    const { isDark } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWorkLoading, setIsWorkLoading] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleWorkClick = () => {
        setIsWorkLoading(true);
        setTimeout(() => {
            setIsWorkLoading(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] md:bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">

            {/* ----------------- DESKTOP LAYOUT (Hidden on Mobile) ----------------- */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "backdrop-blur-[6px] items-center justify-between p-[16px] relative rounded-[28px] transition-colors duration-700",
                    "w-[90%] max-w-[1400px] h-[78px] pointer-events-auto",
                    isDark ? "bg-[#1f2838]/40 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]" :
                        "bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06)]",
                    "hidden md:flex"
                )}
            >
                {/* Left Section: Profile & Socials */}
                <div className="flex gap-[15px] items-center shrink-0">
                    <Link href="/" className="flex gap-[12px] items-center shrink-0 hover:opacity-80 transition-opacity">
                        <div className={`overflow-hidden relative rounded-[23px] shrink-0 size-[42px] transition-colors duration-700 ${isDark ? 'bg-black/50 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]' : 'bg-white/50 border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'}`}>
                            <Image src={isDark ? profilePicNight : profilePicDay} alt="Profile" fill className="object-cover scale-[1.15] translate-y-[8%] transition-all duration-700" />
                        </div>
                        <p className={`font-semibold leading-[1.64] lowercase shrink-0 text-[20px] tracking-[-0.4px] transition-colors duration-700 ${isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'}`}>
                            harshit heya
                        </p>
                    </Link>

                    <div className="flex gap-[8px] items-center shrink-0 ml-2">
                        {/* Icon 1: LinkedIn */}
                        <Link href="https://www.linkedin.com/in/harshitheya/" target="_blank" rel="noopener noreferrer" className={`relative shrink-0 size-[24px] cursor-pointer hover:scale-110 hover:-translate-y-0.5 transition-all duration-700 flex items-center justify-center ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        {/* Icon 2: X (Twitter) */}
                        <Link href="https://x.com/harshitheya" target="_blank" rel="noopener noreferrer" className={`relative shrink-0 size-[24px] cursor-pointer hover:scale-110 hover:-translate-y-0.5 transition-all duration-700 flex items-center justify-center pt-[2px] ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Section: Let's Talk, Resume & Work (Primary on Far Right) */}
                <div className="flex items-center gap-1.5 xl:gap-2 shrink-0">
                    <a href="https://wa.me/917303908292" target="_blank" rel="noopener noreferrer">
                        <div className={`flex items-center justify-center h-[40px] shrink-0 px-3.5 xl:px-5 rounded-[12px] md:rounded-[14px] active:scale-95 transition-all duration-500 cursor-pointer ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-black/5'}`}>
                            <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[14px] xl:text-[15px] tracking-[-0.2px] transition-colors duration-700">
                                let’s talk
                            </p>
                        </div>
                    </a>

                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className={`flex items-center justify-center h-[40px] shrink-0 px-3.5 xl:px-5 rounded-[12px] md:rounded-[14px] active:scale-95 transition-all duration-500 cursor-pointer ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-black/5'}`}
                    >
                        <p className={`font-semibold leading-[1.64] lowercase shrink-0 text-[14px] xl:text-[15px] tracking-[-0.2px] transition-colors duration-700`}>
                            resume
                        </p>
                    </Link>

                    <Link
                        href="/work"
                        onClick={handleWorkClick}
                        className="relative group ml-1"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, y: 2 }}
                            className={`border-[1.5px] border-solid flex h-[38px] items-center justify-center px-5 xl:px-7 relative rounded-[12px] md:rounded-[14px] shrink-0 cursor-pointer overflow-hidden transition-all duration-700 ${isDark ? 'bg-[#ffcc00] border-[#ffe680] shadow-[0px_4px_14px_0px_rgba(255,204,0,0.2)] text-[#1a1a1a]' : 'bg-[#6d3ef3] border-[#9c7aff] shadow-[0px_4px_18px_0px_rgba(72,11,196,0.3)] text-[#f8f8fa]'}`}
                        >
                            {isWorkLoading && <Loader2 className={`w-[14px] h-[14px] animate-spin mr-1.5 ${isDark ? 'text-black' : 'text-white'}`} />}
                            <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[15px] xl:text-[17px] tracking-[-0.3px] whitespace-nowrap relative z-10 transition-colors duration-700">
                                work
                            </p>
                            <div className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${isDark ? 'shadow-[inset_0px_0px_12px_0px_#e5b800]' : 'shadow-[inset_0px_0px_12px_0px_#3000b5]'}`} />
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* ----------------- MOBILE LAYOUT (Hidden on Desktop) ----------------- */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "backdrop-blur-xl flex flex-col gap-[8px] p-[10px] relative rounded-[24px] transition-colors duration-700",
                    isDark ? "bg-[#1f2838]/80 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]" :
                        "bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06)]",
                    "w-full pointer-events-auto",
                    "flex md:hidden"
                )}
            >
                {/* Top Row: Profile & Menu Button */}
                <div className="flex items-center justify-between w-full">
                    {/* Profile */}
                    <Link href="/" className="flex items-center gap-[10px] hover:opacity-80 transition-opacity active:scale-[0.98]">
                        <div className={`overflow-hidden relative rounded-[18px] shrink-0 size-[34px] transition-colors duration-700 ${isDark ? 'bg-black/50 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]' : 'bg-white/50 border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'}`}>
                            <Image src={isDark ? profilePicNight : profilePicDay} alt="Profile" fill className="object-cover scale-[1.15] translate-y-[8%] transition-all duration-700" />
                        </div>
                        <p className={`font-semibold leading-[1.64] lowercase shrink-0 text-[16px] tracking-[-0.32px] transition-colors duration-700 ${isDark ? 'text-[#f5f5f5]' : 'text-[#151515]'}`}>
                            harshit heya
                        </p>
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={handleMenuClick}
                        className={`flex items-center gap-[4px] px-2 py-1 rounded-lg transition-colors cursor-pointer group active:scale-95 duration-200 ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
                    >
                        {/* Menu Icon */}
                        <div className={`relative shrink-0 size-[24px] flex items-center justify-center transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
                            {isMenuOpen ? (
                                <svg className="group-hover:scale-110 transition-transform duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <svg className="group-hover:scale-110 transition-transform duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </div>
                        <p className={`font-semibold leading-[1.64] lowercase shrink-0 text-[12px] tracking-[-0.32px] group-hover:opacity-80 transition-all duration-700 ${isDark ? 'text-[#f5f5f5]' : 'text-[#151515]'}`}>
                            {isMenuOpen ? "close" : "menu"}
                        </p>
                    </button>
                </div>

                {/* Separator */}
                <div className={`w-full h-[1px] shrink-0 transition-colors duration-700 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                {/* Expandable Menu Area */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="flex flex-col gap-[8px] overflow-hidden w-full mb-1"
                        >
                            <div className="flex gap-[6px] w-full">
                                <a href="https://wa.me/917303908292" target="_blank" rel="noopener noreferrer" className={`w-1/2 flex items-center justify-center h-[38px] rounded-[12px] transition-colors active:scale-95 bg-black text-white hover:bg-black/90`}>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[14px] tracking-[-0.32px]">let's talk</span>
                                </a>
                                <Link href="/resume.pdf" target="_blank" onClick={() => setIsMenuOpen(false)} className={`w-1/2 flex items-center justify-center h-[38px] rounded-[12px] transition-colors active:scale-95 bg-black text-white hover:bg-black/90`}>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[14px] tracking-[-0.32px]">resume</span>
                                </Link>
                            </div>
                            <div className="flex gap-[6px] w-full">
                                <Link href="https://x.com/harshitheya" target="_blank" rel="noopener noreferrer" className={`w-1/2 flex gap-2 items-center justify-center h-[38px] rounded-[12px] transition-colors active:scale-95 ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-black/5'}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[13px] tracking-[-0.32px]">x</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/harshitheya/" target="_blank" rel="noopener noreferrer" className={`w-1/2 flex gap-2 items-center justify-center h-[38px] rounded-[12px] transition-colors active:scale-95 ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-black/5'}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[13px] tracking-[-0.32px]">linkedin</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom: Work Section CTA (Primary) */}
                <Link href="/work" onClick={() => { setIsMenuOpen(false); handleWorkClick(); }} className="w-full relative z-20 overflow-hidden rounded-[14px] active:scale-95 transition-all">
                    <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={`border-[1.5px] border-solid flex h-[42px] items-center justify-center px-6 relative rounded-[14px] shrink-0 w-full cursor-pointer transition-all duration-700 ${isDark ? 'bg-[#ffcc00] border-[#ffe680] shadow-[0px_4px_14px_0px_rgba(255,204,0,0.25)] text-[#1a1a1a]' : 'bg-[#6d3ef3] border-[#9c7aff] shadow-[0px_4px_18px_0px_rgba(72,11,196,0.3)] text-[#f8f8fa]'}`}
                    >
                        {isWorkLoading && <Loader2 className={`w-[14px] h-[14px] animate-spin mr-1.5 ${isDark ? 'text-black' : 'text-white'}`} />}
                        <p className={`font-semibold leading-[1.64] lowercase shrink-0 text-[13px] relative z-10 transition-colors duration-700 tracking-[-0.2px]`}>
                            work
                        </p>
                        <div className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${isDark ? 'shadow-[inset_0px_0px_12px_0px_#e5b800]' : 'shadow-[inset_0px_0px_12px_0px_#3000b5]'}`} />
                    </motion.div>
                </Link>
            </motion.div>

        </div>
    );
}
