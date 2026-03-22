"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PenLine, Rocket, Mail, LayoutGrid, Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export function SidePanel() {
    const { isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("iamharshit.idk@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleGuestbookClick = () => {
        window.dispatchEvent(new CustomEvent("open-guestbook"));
        setIsOpen(false);
    };

    const glassBg = isDark ? "bg-[#0A0E17]/40" : "bg-white/40";
    const glassBorder = isDark ? "border-white/10" : "border-white/60";
    const textColor = isDark ? "text-white" : "text-[#1a1a1a]";
    const accentGradient = "bg-gradient-to-br from-[#FFC739] via-[#EB3B14] to-[#FFC310]";

    return (
        <>
            {/* Aesthetic Floating Trigger */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed top-8 left-8 z-[150] w-14 h-14 flex items-center justify-center border shadow-[0_8px_32px_rgba(0,0,0,0.1)] group overflow-hidden pointer-events-auto",
                    "rounded-[22px] backdrop-blur-xl",
                    glassBg,
                    glassBorder
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <LayoutGrid size={22} className={cn(`${textColor} opacity-60 group-hover:opacity-100 transition-all group-hover:rotate-12`)} />
                
                {/* Visual pulse indicator */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#EB3B14] animate-pulse" />
            </motion.button>

            {/* Fun & Aesthetic Side Panel */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-start p-6 pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 cursor-pointer bg-white/5 backdrop-blur-[8px]"
                        />

                        <motion.div
                            initial={{ x: -100, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: -100, opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", damping: 20, stiffness: 120 }}
                            className={cn(
                                "relative w-full max-w-[340px] h-[calc(100vh-48px)] flex flex-col p-10 overflow-hidden shadow-[0_32px_120px_-20px_rgba(0,0,0,0.2)]",
                                "rounded-[44px] backdrop-blur-3xl border",
                                glassBg,
                                glassBorder
                            )}
                        >
                            {/* Decorative Sparkle */}
                            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 opacity-[0.03] rotate-12 pointer-events-none" />

                            <div className="flex justify-between items-center mb-14">
                                <div className="space-y-1">
                                    <h3 className={cn("text-[22px] uppercase tracking-tighter leading-none", textColor, `${poppins.className} font-[800]`)}>
                                        Explore
                                    </h3>
                                    <div className={cn("h-[3px] w-8 rounded-full", accentGradient)} />
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className={cn("p-3 transition-all opacity-40 hover:opacity-100", textColor, "rounded-2xl bg-black/5 dark:bg-white/5")}
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>

                            <div className="flex flex-col gap-3">
                                <motion.button
                                    whileHover={{ x: 8 }}
                                    onClick={handleGuestbookClick}
                                    className={cn("group flex items-center gap-5 p-5 transition-all border border-transparent", textColor, "rounded-[28px] hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5")}
                                >
                                    <div className={cn("w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 text-white", accentGradient, "rounded-2xl shadow-lg")}>
                                        <PenLine size={20} />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className={cn("text-[16px] tracking-tight lowercase", `${poppins.className} font-bold`)}>stick a note</span>
                                        <span className="text-[11px] opacity-40 lowercase tracking-wide font-medium">community wall</span>
                                    </div>
                                </motion.button>

                                <motion.a
                                    whileHover={{ x: 8 }}
                                    href="https://crescendo-mu.vercel.app/"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className={cn("group flex items-center gap-5 p-5 transition-all border border-transparent", textColor, "rounded-[28px] hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5")}
                                >
                                    <div className={cn("w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110", textColor, "bg-black/5 dark:bg-white/10 rounded-2xl shadow-lg")}>
                                        <Rocket size={20} className="opacity-70 group-hover:opacity-100" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className={cn("text-[16px] tracking-tight lowercase", `${poppins.className} font-bold`)}>current project</span>
                                        <span className="text-[11px] opacity-40 lowercase tracking-wide font-medium">now building</span>
                                    </div>
                                </motion.a>

                                <motion.button
                                    whileHover={{ x: 8 }}
                                    onClick={handleCopyEmail}
                                    className={cn("group flex items-center gap-5 p-5 transition-all border border-transparent", textColor, "rounded-[28px] hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5")}
                                >
                                    <div className={cn("w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110", textColor, "bg-black/5 dark:bg-white/10 rounded-2xl shadow-lg")}>
                                        <Mail size={20} className="opacity-70 group-hover:opacity-100" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className={cn("text-[16px] tracking-tight lowercase", `${poppins.className} font-bold`)}>
                                            {copied ? "copied mail" : "get in touch"}
                                        </span>
                                        <span className="text-[11px] opacity-40 lowercase tracking-wide font-medium">collaborate</span>
                                    </div>
                                </motion.button>
                            </div>

                            <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                                <Link 
                                    href="/identity" 
                                    onClick={() => setIsOpen(false)}
                                    className={cn("p-4 transition-all text-center group border", glassBorder, "rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10")}
                                >
                                    <span className={cn("text-[10px] tracking-[2px] opacity-60 group-hover:opacity-100", textColor, "font-black uppercase")}>identity</span>
                                </Link>
                                <Link 
                                    href="/work" 
                                    onClick={() => setIsOpen(false)}
                                    className={cn("p-4 transition-all text-center group border", glassBorder, "rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10")}
                                >
                                    <span className={cn("text-[10px] tracking-[2px] opacity-60 group-hover:opacity-100", textColor, "font-black uppercase")}>work</span>
                                </Link>
                            </div>

                            <div className={cn("mt-6 text-center text-[10px] tracking-[4px] opacity-10", textColor, "font-bold uppercase")}>
                                Harshit Saidaniya © 2026
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
