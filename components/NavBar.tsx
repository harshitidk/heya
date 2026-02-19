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

                    <div className="flex gap-[6px] items-center shrink-0">
                        {/* Icon 1 */}
                        <div className="relative shrink-0 size-[24px] cursor-pointer hover:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
                                <path d="M2 12H22" stroke="black" strokeWidth="2" />
                                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                        {/* Icon 2 */}
                        <div className="relative shrink-0 size-[24px] cursor-pointer hover:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2" />
                                <path d="M12 8V16" stroke="black" strokeWidth="2" />
                                <path d="M8 12H16" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
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
