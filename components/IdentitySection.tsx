"use client";

import React from "react";
import Image from "next/image";
import { Poppins, Nanum_Pen_Script } from "next/font/google";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import avatarPic from "@/public/assets/identity-avatar.png";
import trait1 from "@/public/assets/trait-1.png";
import trait2 from "@/public/assets/trait-2.png";
import trait3 from "@/public/assets/trait-3.png";
import trait4 from "@/public/assets/trait-4.png";
import trait5 from "@/public/assets/trait-5.png";
import trait6 from "@/public/assets/trait-6.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

export function IdentitySection({ isDark }: { isDark?: boolean }) {
    const textColor = isDark ? "text-white" : "text-black";
    const subTextColor = isDark ? "text-gray-400" : "text-[#484848]";
    const borderColor = isDark ? "border-white/10" : "border-black/10";

    const traitImages = [trait1, trait2, trait3, trait4, trait5, trait6];

    return (
        <section className={`relative w-full max-w-[1280px] mx-auto py-24 sm:py-32 px-4 sm:px-8 flex flex-col items-center ${poppins.className}`}>
            
            <div className="flex flex-col items-center gap-14 w-full">
                {/* Profile Block */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-10 sm:gap-[41px] max-w-[800px]"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Avatar */}
                    <div className="relative w-[201px] h-[202px] rounded-full overflow-hidden border border-black/10 bg-gray-100 shrink-0">
                        <Image 
                            src={avatarPic} 
                            alt="Harshit Heya" 
                            fill 
                            className="object-cover"
                        />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col gap-[12px] text-center sm:text-left w-full sm:w-[364px] px-6 sm:px-0">
                        <div className="space-y-[12px]">
                            <h2 className={`text-[20px] sm:text-[24px] font-medium lowercase tracking-[-0.48px] leading-[1.02] ${textColor}`}>
                                Harshit heya
                            </h2>
                            <p className={`text-[14px] sm:text-[16px] font-medium capitalize tracking-[-0.32px] leading-[1.02] ${isDark ? 'text-white/80' : 'text-black'}`}>
                                Product Designer
                            </p>
                        </div>

                        <div className={`w-full h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                        <div className={`text-[13px] sm:text-[15px] leading-[1.6] tracking-[-0.48px] ${subTextColor} space-y-1`}>
                            <p>Working on building a great taste 🍓 in design</p>
                            <p>Building products that solve my own problems</p>
                        </div>

                        <div className="text-[13px] sm:text-[15px] leading-[1.6] tracking-[-0.48px]">
                            <span className={subTextColor}>Final Sem - </span>
                            <span className="text-[#009c3e] font-medium">Open for a full time role</span>
                        </div>

                        <div className={`w-full h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'} my-1`} />

                        <div className="flex items-center justify-center sm:justify-start gap-2 text-[#afafaf] text-[13px] sm:text-[15px] leading-[1.6] tracking-[-0.48px]">
                            <MapPin size={18} />
                            <span>delhi but looking to come blr</span>
                        </div>
                    </div>
                </motion.div>

                {/* Core Traits Grid */}
                <div className="flex flex-col items-center gap-14 w-full">
                    <motion.p 
                        className="text-[14px] font-semibold tracking-[1.68px] uppercase text-[#858585]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Core Traits
                    </motion.p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[26px] w-full max-w-[800px] justify-items-center">
                        {traitImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                className="relative size-[215px] rounded-[16px] overflow-hidden group border border-black/5 shadow-sm"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Image 
                                    src={img} 
                                    alt={`Trait ${idx + 1}`} 
                                    fill 
                                    className="object-cover transition-all duration-500"
                                />

                                {/* Decorative text from Figma */}
                                {idx === 0 && (
                                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center ${nanum.className} text-white text-[37px] leading-[1.02] pointer-events-none opacity-90 tracking-[-1.11px]`}>
                                        <p>lizard</p>
                                        <p>lizard</p>
                                        <p>lizard</p>
                                    </div>
                                )}
                                {idx === 5 && (
                                    <div className={`absolute inset-0 flex items-start justify-center pt-[23px] ${nanum.className} ${isDark ? 'text-white' : 'text-[#272727]'} text-[29px] pointer-events-none opacity-90 tracking-[-0.87px]`}>
                                        <p>moving fast</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
