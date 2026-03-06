"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import profilePic from "@/public/assets/card-center.png";

export function NavBar() {
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
        <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">

            {/* ----------------- DESKTOP LAYOUT (Hidden on Mobile) ----------------- */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "backdrop-blur-[4px] bg-white/40 border border-white/60 items-center justify-between p-[16px] relative rounded-[28px]",
                    "w-[90%] max-w-[1400px] h-[78px] pointer-events-auto",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06)]",
                    "hidden md:flex"
                )}
            >
                {/* Left Section: Profile & Socials */}
                <div className="flex gap-[15px] items-center shrink-0">
                    <Link href="/" className="flex gap-[12px] items-center shrink-0 hover:opacity-80 transition-opacity">
                        <div className="bg-white/50 border border-white/80 overflow-hidden relative rounded-[23px] shrink-0 size-[42px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                            <Image src={profilePic} alt="Profile" fill className="object-cover" />
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px]">
                            harshit heya
                        </p>
                    </Link>

                    <div className="flex gap-[8px] items-center shrink-0 ml-2">
                        {/* Icon 1: LinkedIn */}
                        <Link href="https://www.linkedin.com/in/harshitheya/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] cursor-pointer hover:scale-110 hover:-translate-y-0.5 transition-transform text-black flex items-center justify-center">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        {/* Icon 2: X (Twitter) */}
                        <Link href="https://x.com/harshitheya" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[24px] cursor-pointer hover:scale-110 hover:-translate-y-0.5 transition-transform text-black flex items-center justify-center pt-[2px]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Section: Work & CTA */}
                <div className="flex items-center gap-6 shrink-0">
                    <Link
                        href="/work"
                        onClick={handleWorkClick}
                        className="flex items-center justify-center shrink-0 hover:bg-black/5 px-4 py-2 rounded-[14px] active:scale-95 transition-all duration-200 cursor-pointer gap-2"
                    >
                        {isWorkLoading && <Loader2 className="w-[18px] h-[18px] text-black animate-spin" />}
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#1a1a1a] text-[20px] tracking-[-0.4px]">
                            work
                        </p>
                    </Link>

                    <a href="https://wa.me/917303908292" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, y: 2 }}
                            className="bg-[#6d3ef3] border-[2px] border-[#9c7aff] border-solid flex h-[46px] items-center justify-center px-[24px] relative rounded-[16px] shrink-0 cursor-pointer shadow-[0px_6px_34.9px_0px_rgba(72,11,196,0.42)] overflow-hidden"
                        >
                            <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[20px] text-[#f8f8fa] tracking-[-0.4px] whitespace-nowrap relative z-10">
                                let’s talk
                            </p>
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_20.8px_0px_#3000b5]" />
                        </motion.div>
                    </a>
                </div>
            </motion.div>

            {/* ----------------- MOBILE LAYOUT (Hidden on Desktop) ----------------- */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "backdrop-blur-xl bg-white/40 border border-white/60 flex flex-col gap-[8px] p-[10px] relative rounded-[24px]",
                    "w-full pointer-events-auto",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.06)]",
                    "flex md:hidden"
                )}
            >
                {/* Top Row: Profile & Menu Button */}
                <div className="flex items-center justify-between w-full">
                    {/* Profile */}
                    <Link href="/" className="flex items-center gap-[10px] hover:opacity-80 transition-opacity active:scale-[0.98]">
                        <div className="bg-white/50 border border-white/80 overflow-hidden relative rounded-[18px] shrink-0 size-[34px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                            <Image src={profilePic} alt="Profile" fill className="object-cover" />
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                            harshit heya
                        </p>
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={handleMenuClick}
                        className="flex items-center gap-[4px] px-2 py-1 hover:bg-black/5 rounded-lg transition-colors cursor-pointer group active:scale-95 transition-all duration-200"
                    >
                        {/* Menu Icon */}
                        <div className="relative shrink-0 size-[24px] flex items-center justify-center">
                            {isMenuOpen ? (
                                <svg className="group-hover:scale-110 transition-transform duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <svg className="group-hover:scale-110 transition-transform duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 8H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 16H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[12px] tracking-[-0.32px] group-hover:opacity-80 transition-opacity">
                            {isMenuOpen ? "close" : "menu"}
                        </p>
                    </button>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/10 shrink-0" />

                {/* Expandable Menu Area */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="flex flex-col gap-[8px] overflow-hidden w-full mb-1"
                        >
                            <Link href="/work" onClick={() => setIsMenuOpen(false)} className="w-full bg-[#f4f4f4] hover:bg-[#ebebeb] border border-black/5 flex items-center justify-center h-[46px] rounded-[16px] transition-colors active:scale-95">
                                <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[#1a1a1a] text-[15px] tracking-[-0.32px]">work</span>
                            </Link>
                            <div className="flex gap-[8px] w-full">
                                <Link href="https://x.com/harshitheya" target="_blank" rel="noopener noreferrer" className="w-1/2 bg-[#f4f4f4] hover:bg-[#ebebeb] border border-black/5 flex gap-2 items-center justify-center h-[46px] rounded-[16px] transition-colors active:scale-95 text-black">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[#1a1a1a] text-[14px] tracking-[-0.32px]">x</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/harshitheya/" target="_blank" rel="noopener noreferrer" className="w-1/2 bg-[#f4f4f4] hover:bg-[#ebebeb] border border-black/5 flex gap-2 items-center justify-center h-[46px] rounded-[16px] transition-colors active:scale-95 text-black">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="font-semibold leading-[1.64] lowercase pb-[1px] text-[#1a1a1a] text-[14px] tracking-[-0.32px]">linkedin</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom: Hire Him CTA */}
                <a href="https://wa.me/917303908292" target="_blank" rel="noopener noreferrer" className="w-full relative z-20">
                    <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#6d3ef3] border-[3px] border-[#9c7aff] border-solid flex h-[48px] items-center justify-center px-[24px] relative rounded-[16px] shrink-0 w-full cursor-pointer shadow-[0px_6px_34.9px_0px_rgba(72,11,196,0.42)] overflow-hidden"
                    >
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[12px] text-[#f8f8fa] tracking-[-0.32px] relative z-10">
                            let’s talk
                        </p>
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_20.8px_0px_#3000b5]" />
                    </motion.div>
                </a>
            </motion.div>

        </div>
    );
}
