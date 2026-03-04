"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import profilePic from "@/public/assets/card-center.png";

export function NavBar() {
    return (
        <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">

            {/* ----------------- DESKTOP LAYOUT (Hidden on Mobile) ----------------- */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "bg-white border-2 border-black border-solid items-center justify-between p-[16px] relative rounded-[24px]",
                    "w-[90%] max-w-[1400px] h-[78px] pointer-events-auto shadow-xl",
                    "hidden md:flex"
                )}
            >
                {/* Left Section: Profile & Socials */}
                <div className="flex gap-[15px] items-center shrink-0">
                    <Link href="/" className="flex gap-[12px] items-center shrink-0 hover:opacity-80 transition-opacity">
                        <div className="bg-[#f5f5f5] border-2 border-black border-solid overflow-hidden relative rounded-[23px] shrink-0 size-[42px]">
                            <Image src={profilePic} alt="Profile" fill className="object-cover" />
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[20px] tracking-[-0.4px]">
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
                <div className="flex items-center justify-between shrink-0 w-[258px]">
                    <Link href="#work" className="flex items-center justify-center shrink-0 hover:text-black/70 transition-colors">
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[20px] tracking-[-0.4px]">
                            work
                        </p>
                    </Link>

                    <Link href="mailto:contact@example.com">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, y: 2 }}
                            className="bg-[#ffc739] border-b-4 border-black border-l border-r border-t border-solid flex h-[46px] items-center justify-center px-[24px] py-[4px] relative rounded-[16px] shrink-0 w-[164px] cursor-pointer"
                        >
                            <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[20px] text-black tracking-[-0.4px]">
                                hire him
                            </p>
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
                    "bg-white border-2 border-black border-solid flex flex-col gap-[8px] p-[10px] relative rounded-[20px]",
                    "w-full pointer-events-auto shadow-xl",
                    "flex md:hidden"
                )}
            >
                {/* Top Row: Profile & Menu Button */}
                <div className="flex items-center justify-between w-full">
                    {/* Profile */}
                    <div className="flex items-center gap-[10px]">
                        <div className="bg-[#f5f5f5] border border-black border-solid overflow-hidden relative rounded-[18px] shrink-0 size-[34px]">
                            <Image src={profilePic} alt="Profile" fill className="object-cover" />
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                            harshit heya
                        </p>
                    </div>

                    {/* Menu Button */}
                    <button className="flex items-center gap-[4px] px-2 py-1 hover:bg-black/5 rounded-lg transition-colors cursor-pointer">
                        {/* Menu Icon */}
                        <div className="relative shrink-0 size-[24px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 8H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 16H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                            menu
                        </p>
                    </button>
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-black/10 shrink-0" />

                {/* Bottom: Hire Him CTA */}
                <Link href="mailto:contact@example.com" className="w-full">
                    <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#ffc739] border-b-4 border-black border-l border-r border-t border-solid flex h-[48px] items-center justify-center px-[24px] py-[4px] relative rounded-[16px] shrink-0 w-full cursor-pointer"
                    >
                        <p className="font-semibold leading-[1.64] lowercase shrink-0 text-[16px] text-black tracking-[-0.32px]">
                            hire him
                        </p>
                    </motion.div>
                </Link>
            </motion.div>

        </div>
    );
}
