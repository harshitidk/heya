"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenLine, Rocket, Mail, Check } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface CTAItemProps {
    label: string;
    icon: React.ElementType;
    href?: string;
    onClick?: () => void;
    showStatus?: boolean;
}

function CTAItem({ label, icon: Icon, href, onClick, showStatus }: CTAItemProps) {
    const { isDark } = useTheme();

    const content = (
        <motion.div
            whileHover={{ y: -2 }}
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer group transition-all ${isDark ? 'text-white/40 hover:text-white' : 'text-black/30 hover:text-black font-semibold'}`}
        >
            <AnimatePresence mode="wait">
                {showStatus ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={16} className="text-green-500" />
                    </motion.div>
                ) : (
                    <motion.div key="icon" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className={`text-[14px] lowercase tracking-tight ${poppins.className}`}>
                {showStatus ? "copied!" : label}
            </span>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} target={href.startsWith('http') ? '_blank' : undefined} className="outline-none">
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className="outline-none">
            {content}
        </button>
    );
}

export function HeroCTAs() {
    const { isDark } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleGuestbookClick = () => {
        window.dispatchEvent(new CustomEvent("open-guestbook"));
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("iamharshit.idk@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 sm:mt-6 sm:mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-6 pointer-events-auto bg-transparent border-none shadow-none"
        >
            <CTAItem 
                label="stick a note" 
                icon={PenLine} 
                onClick={handleGuestbookClick}
            />
            
            <CTAItem 
                label="current project" 
                icon={Rocket} 
                href="https://crescendo-mu.vercel.app/" 
            />
            
            <CTAItem 
                label="get in touch" 
                icon={Mail} 
                onClick={handleCopyEmail}
                showStatus={copied}
            />
        </motion.div>
    );
}
