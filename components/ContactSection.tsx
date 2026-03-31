"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Poppins, Bricolage_Grotesque } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import avatar1 from "@/public/assets/contact-avatars/cat-cool.png";
import avatar2 from "@/public/assets/contact-avatars/cat-peace.jpg";
import avatar3 from "@/public/assets/contact-avatars/cat-coding.png";
import avatar4 from "@/public/assets/contact-avatars/girl-money.png";
import avatar5 from "@/public/assets/contact-avatars/gojo-chibi.png";
import avatar6 from "@/public/assets/contact-avatars/boy-cat.png";
import avatar7 from "@/public/assets/contact-avatars/cat-lightning.png";
import avatar8 from "@/public/assets/contact-avatars/cat-box.png";
import coffeeEmoji from "@/public/assets/coffee-emoji.png";
import rocketEmoji from "@/public/assets/rocket-emoji.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/* ─── Floating Orbit Item ─── */
interface OrbitItemProps {
    children: React.ReactNode;
    angle: number;
    radius: number;
    size: number;
    delay: number;
    floatY?: number;
}

function OrbitItem({ children, angle, radius, size, delay, floatY = 8 }: OrbitItemProps) {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    return (
        <motion.div
            className="absolute z-20 pointer-events-none"
            style={{
                left: `calc(50% + ${x}%)`,
                top: `calc(50% + ${y}%)`,
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
        >
            <motion.div
                animate={{ y: [0, -floatY, 0] }}
                transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

/* ─── Profile Bubble ─── */
function ProfileBubble({ src, size, borderColor }: { src: any; size: number; borderColor: string }) {
    return (
        <div
            className="rounded-full overflow-hidden shadow-lg"
            style={{
                width: size,
                height: size,
                border: `3px solid ${borderColor}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
        >
            <Image src={src} alt="Profile" width={size} height={size} className="object-cover w-full h-full" />
        </div>
    );
}

/* ─── Main Section ─── */
export function ContactSection() {
    const { isDark } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            ref={sectionRef}
            id="contact-section"
            className={`relative w-full shrink-0 flex flex-col items-center justify-center transition-colors duration-700 pb-40 ${
                isDark ? "bg-[#0A0E17]" : "bg-[#FDFDFD]"
            }`}
            style={{ minHeight: "110dvh" }}
        >
            {/* Corner Details - Sticky Volume Hub */}
            <div className="absolute inset-x-0 top-0 pointer-events-none h-full z-[100]">
                <div className={`sticky top-12 ml-32 ${poppins.className} text-[9px] font-bold uppercase tracking-[4px] opacity-20 hidden md:block ${isDark ? 'text-white' : 'text-black'}`}>
                    Get In Touch // Vol.05
                </div>
            </div>

            {/* Content wrapper - vertically centered with navbar clearance */}
            <div className="w-full flex flex-col items-center justify-center flex-1 pt-40 md:pt-48">

                {/* ─── Orbit Rings ─── */}
                <div className="relative w-full max-w-[640px] h-[350px] sm:h-[420px] mx-auto flex items-center justify-center">
                    {/* Concentric circles */}
                    {[30, 42, 54].map((r, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full border ${
                                isDark ? "border-white/[0.06]" : "border-black/[0.06]"
                            }`}
                            style={{
                                width: `${r * 2}%`,
                                height: `${r * 2}%`,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                        />
                    ))}

                    {/* ─── Floating Items on Orbits ─── */}
                    {/* Cat avatars and characters */}
                    <OrbitItem angle={-65} radius={65} size={60} delay={0.5}>
                        <ProfileBubble src={avatar1} size={60} borderColor={isDark ? "#1f2838" : "#ffffff"} />
                    </OrbitItem>
                    <OrbitItem angle={195} radius={68} size={54} delay={0.7}>
                        <ProfileBubble src={avatar2} size={54} borderColor={isDark ? "#1f2838" : "#ffffff"} />
                    </OrbitItem>
                    <OrbitItem angle={75} radius={72} size={52} delay={0.8}>
                        <ProfileBubble src={avatar3} size={52} borderColor={isDark ? "#1f2838" : "#ffffff"} />
                    </OrbitItem>
                    <OrbitItem angle={25} radius={75} size={48} delay={0.9}>
                        <ProfileBubble src={avatar4} size={48} borderColor={isDark ? "#1f2838" : "#ffffff"} />
                    </OrbitItem>
                    <OrbitItem angle={155} radius={78} size={46} delay={1.1}>
                        <ProfileBubble src={avatar5} size={46} borderColor={isDark ? "#1f2838" : "#ffffff"} />
                    </OrbitItem>
                    <OrbitItem angle={-125} radius={70} size={54} delay={0.6} floatY={12}>
                        <div className="w-full h-full rounded-2xl overflow-hidden drop-shadow-lg border-2 border-white/20">
                            <Image src={avatar6} alt="Character" width={54} height={54} className="object-cover" />
                        </div>
                    </OrbitItem>
                    <OrbitItem angle={115} radius={74} size={50} delay={0.8} floatY={10}>
                        <div className="w-full h-full rounded-2xl overflow-hidden drop-shadow-lg border-2 border-white/20">
                            <Image src={avatar7} alt="Character" width={50} height={50} className="object-cover" />
                        </div>
                    </OrbitItem>
                    <OrbitItem angle={260} radius={80} size={48} delay={1.0} floatY={6}>
                        <div className="w-full h-full rounded-2xl overflow-hidden drop-shadow-lg border-2 border-white/20">
                            <Image src={avatar8} alt="Character" width={48} height={48} className="object-cover" />
                        </div>
                    </OrbitItem>
                    <OrbitItem angle={-30} radius={55} size={32} delay={1.2} floatY={5}>
                        <span className="text-[24px] drop-shadow-md select-none">✨</span>
                    </OrbitItem>

                    {/* ─── Center Message Bubble ─── */}
                    <motion.div
                        className={`relative z-10 w-[92%] max-w-[440px] rounded-[24px] p-6 sm:p-8 ${
                            isDark
                                ? "bg-gradient-to-br from-[#1a2744]/90 to-[#0f1a2e]/95 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
                                : "bg-gradient-to-br from-[#2D6A4F]/85 to-[#1B4332]/90 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]"
                        } backdrop-blur-xl`}
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Noise texture overlay */}
                        <div
                            className="absolute inset-0 rounded-[24px] opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                            }}
                        />

                        <div className="relative z-10 flex flex-col gap-5">
                            <p className={`${poppins.className} text-white text-[14px] sm:text-[16px] font-semibold leading-[1.6] tracking-tight`}>
                                I&apos;m not interested in staying within the lines of design. I like fast environments, messy problems, and stepping into domains beyond my role. I think in systems, how users behave, how products are positioned, and where things quietly break.
                            </p>
                            <p className={`${poppins.className} text-white/80 text-[13px] sm:text-[15px] font-normal leading-[1.6]`}>
                                Startups excite me because they&apos;re built by people reshaping their corner of the world. I want to contribute as someone who questions deeply and sees patterns before they become obvious.
                            </p>
                        </div>

                        {/* Bubble tail */}
                        <div
                            className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rotate-45 rounded-[3px] ${
                                isDark
                                    ? "bg-[#0f1a2e]/95"
                                    : "bg-[#1B4332]/90"
                            }`}
                        />
                    </motion.div>
                </div>

                {/* ─── CTA Button ─── */}
                <motion.div
                    className="mt-6 sm:mt-10 flex flex-col items-center gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a
                        href="https://wa.link/60qsvx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03, boxShadow: isDark ? "0 0 40px rgba(255,255,255,0.1)" : "0 12px 40px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-[18px] rounded-full cursor-pointer transition-all duration-500 ${
                                isDark
                                    ? "bg-white text-[#0A0E17] shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                                    : "bg-[#1a1a1a] text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                            }`}
                        >
                            <span className={`${poppins.className} text-[15px] sm:text-[16px] font-semibold tracking-[-0.3px]`}>
                                Let&apos;s Talk
                            </span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </a>

                    {/* Sub-links */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        <Link
                            href="https://www.linkedin.com/in/harshitheya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 group transition-all duration-300 ${
                                isDark ? "text-white/40 hover:text-white/80" : "text-black/40 hover:text-black/80"
                            }`}
                        >
                            <Linkedin className="w-4 h-4" />
                            <span className={`${poppins.className} text-[13px] sm:text-[14px] font-medium tracking-[-0.2px] group-hover:underline underline-offset-4`}>
                                LinkedIn
                            </span>
                        </Link>

                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("iamharshit.idk@gmail.com");
                            }}
                            className={`flex items-center gap-2 group transition-all duration-300 cursor-pointer ${
                                isDark ? "text-white/40 hover:text-white/80" : "text-black/40 hover:text-black/80"
                            }`}
                        >
                            <Mail className="w-4 h-4" />
                            <span className={`${poppins.className} text-[13px] sm:text-[14px] font-medium tracking-[-0.2px] group-hover:underline underline-offset-4`}>
                                Copy Email
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* ─── Footer Text ─── */}
                <motion.div
                    className="mt-16 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className={`w-px h-12 bg-gradient-to-b from-transparent ${isDark ? 'to-white/20' : 'to-black/10'}`} />
                    <div className="flex flex-col items-center gap-1.5 opacity-60">
                        <p className={`${poppins.className} text-[9px] font-bold uppercase tracking-[5px] ${isDark ? 'text-white/30' : 'text-black/20'}`}>
                            crafted with passion
                        </p>
                        <p className={`${poppins.className} text-[11px] sm:text-[12px] font-medium tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                            designed & built by <span className="font-bold">harshit heya</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
