"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

import workBgNight1 from "@/public/assets/work-bg-night-1.png";
import workBgNight2 from "@/public/assets/work-bg-night-2.png";
import selectedWorkNight from "@/public/assets/selected-work-pill.png";

import shoppinP1 from "@/public/assets/shoppin-p1.webp";
import shoppinP2 from "@/public/assets/shoppin-p2.webp";
import shoppinP3 from "@/public/assets/shoppin-p3.webp";
import shoppinP4 from "@/public/assets/shoppin-p4.webp";
import shoppinP5 from "@/public/assets/shoppin-p5.webp";
import shoppinP6 from "@/public/assets/shoppin-p6.webp";
import shoppinP7 from "@/public/assets/shoppin-p7.webp";

import zoffersP1 from "@/public/assets/zoffers-p1.webp";
import zoffersP2 from "@/public/assets/zoffers-p2.webp";
import zoffersP3 from "@/public/assets/zoffers-p3.webp";
import zoffersP4 from "@/public/assets/zoffers-p4.webp";
import zoffersP5 from "@/public/assets/zoffers-p5.webp";
import zoffersP6 from "@/public/assets/zoffers-p6.webp";
import zoffersP7 from "@/public/assets/zoffers-p7.webp";
import zoffersP8 from "@/public/assets/zoffers-p8.webp";
import rabbitP1 from "@/public/assets/rabbit-p1.webp";
import rabbitP2 from "@/public/assets/rabbit-p2.webp";
import rabbitP3 from "@/public/assets/rabbit-p3.webp";
import rabbitP4 from "@/public/assets/rabbit-p4.webp";
import rabbitP5 from "@/public/assets/rabbit-p5.webp";
import rabbitP6 from "@/public/assets/rabbit-p6.webp";
import rabbitP7 from "@/public/assets/rabbit-p7.webp";

function MockupImage({
    className = "",
    containerClassName = "",
    src,
    alt = "Mockup",
    objectFit = "cover",
    onZoom,
    tiltDirection = "left"
}: {
    className?: string;
    containerClassName?: string;
    src?: string | StaticImageData;
    alt?: string;
    objectFit?: "cover" | "contain";
    onZoom?: (src: string | StaticImageData) => void;
    tiltDirection?: "left" | "right";
}) {
    const { isDark } = useTheme();
    const tiltClass = tiltDirection === "left"
        ? "hover:-rotate-[1.5deg]"
        : "hover:rotate-[1.5deg]";

    return (
        <div
            onClick={() => src && onZoom?.(src)}
            className={`relative bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${src ? `cursor-pointer ${tiltClass} hover:scale-[1.03] hover:shadow-2xl hover:z-10` : ''} ${containerClassName}`}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-${objectFit} pointer-events-none ${className}`}
                />
            ) : (
                <div className={`w-full h-full border border-gray-200/50 ${className}`}>
                    {/* Placeholder for the actual image */}
                </div>
            )}
        </div>
    );
}

function CaseStudyButton({ text, primary, href }: { text: string; primary?: boolean; href?: string }) {
    const { isDark } = useTheme();
    const Component = href ? "a" : "button" as any;
    const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    const baseStyles = "relative h-[48px] px-6 rounded-full flex items-center justify-center gap-2 group cursor-pointer transition-all duration-500 hover:-translate-y-1 active:scale-[0.97] border focus:outline-none inline-flex";

    if (primary) {
        return (
            <Component 
                {...componentProps} 
                className={`${baseStyles} ${
                    isDark 
                    ? "bg-white border-white/10 text-black shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.15)]" 
                    : "bg-[#0A0A0A] border-black/10 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]"
                }`}
            >
                <span className="font-semibold text-[15px] tracking-tight whitespace-nowrap relative z-10">
                    {text}
                </span>
                <ArrowUpRight className={`w-[18px] h-[18px] transition-all duration-300 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark ? "text-black/60 group-hover:text-black" : "text-white/60 group-hover:text-white"
                }`} />
            </Component>
        );
    }
    return (
        <Component 
            {...componentProps} 
            className={`${baseStyles} ${
                isDark 
                ? "bg-white/5 backdrop-blur-md border-white/10 text-white/80 hover:bg-white/10 hover:text-white shadow-sm" 
                : "bg-black/5 backdrop-blur-md border-black/5 text-black/60 hover:bg-black/10 hover:text-black shadow-sm"
            }`}
        >
            <span className="font-medium text-[15px] tracking-tight whitespace-nowrap relative z-10">
                {text}
            </span>
            <ArrowUpRight className={`w-[18px] h-[18px] transition-all duration-300 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isDark ? "text-white/40 group-hover:text-white/70" : "text-black/30 group-hover:text-black/60"
            }`} />
        </Component>
    );
}

function ShoppinCollage({ onZoom, isDark }: { onZoom: (src: string | StaticImageData) => void; isDark: boolean }) {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-[12.6px] items-center justify-center w-full px-4 sm:px-0">
            {/* Left Card */}
            <div className="p-6 sm:p-[35px] rounded-[26.7px] flex justify-center w-full max-w-[300px] sm:max-w-none sm:w-auto shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                <MockupImage
                    src={shoppinP1}
                    onZoom={onZoom}
                    tiltDirection="left"
                    containerClassName="w-full sm:w-[218.6px] aspect-[218.6/473.8] sm:aspect-auto sm:h-[473.8px] rounded-[16px] shadow-[0_2px_19px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0"
                />
            </div>

            {/* Center Cards */}
            <div className="flex flex-col gap-4 sm:gap-[18.9px] w-full max-w-[380px] sm:max-w-none sm:w-[379.3px] shrink-0">
                <div className="p-5 sm:p-[25.2px] flex gap-4 sm:gap-[22.4px] rounded-[19.3px] items-center justify-center w-full transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={shoppinP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-1/2 sm:w-[153.2px] aspect-[153.2/341] sm:aspect-auto sm:h-[341px] rounded-[11.4px] shadow-[0_1.4px_13.5px_0_rgba(0,0,0,0.15)] border-[1.8px] border-white shrink-0" />
                    <MockupImage src={shoppinP3} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 sm:w-[153.2px] aspect-[153.2/341] sm:aspect-auto sm:h-[341px] rounded-[11.4px] shadow-[0_1.4px_13.5px_0_rgba(0,0,0,0.15)] border-[1.8px] border-white shrink-0" />
                </div>
                <div className="p-4 sm:p-[18.4px] flex gap-4 sm:gap-[18.4px] rounded-[13.8px] items-center justify-center w-full transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={shoppinP4} onZoom={onZoom} tiltDirection="left" containerClassName="w-[58%] sm:w-[190.8px] aspect-[190.8/96.6] sm:aspect-auto sm:h-[96.6px] rounded-[9.3px] shadow-[0_1.2px_11px_0_rgba(0,0,0,0.15)] border-[1.2px] border-white shrink-0" />
                    <MockupImage src={shoppinP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-[42%] sm:w-[133.2px] aspect-[133.2/96.6] sm:aspect-auto sm:h-[96.6px] rounded-[9.3px] shadow-[0_1.2px_11px_0_rgba(0,0,0,0.15)] border-[1.2px] border-white shrink-0" />
                </div>
            </div>

            {/* Right Cards */}
            <div className="px-6 sm:px-[35px] py-8 sm:py-[32px] flex flex-col gap-4 sm:gap-[16px] rounded-[24px] items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                <MockupImage src={shoppinP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-full sm:w-[145.7px] aspect-[145.7/252.6] sm:aspect-auto sm:h-[252.6px] rounded-[6.4px] shadow-[0_1.7px_16.2px_0_rgba(0,0,0,0.15)] border-2 border-white shrink-0" />
                <MockupImage src={shoppinP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-full sm:w-[145.6px] aspect-[145.6/210] sm:aspect-auto sm:h-[210px] rounded-[12.1px] shadow-[0_1.7px_16.2px_0_rgba(0,0,0,0.15)] border-[2.1px] border-white shrink-0" />
            </div>
        </div>
    );
}

function ZoffersCollage({ onZoom, isDark }: { onZoom: (src: string | StaticImageData) => void; isDark: boolean }) {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-[10px] items-center sm:items-start justify-center w-full px-4 sm:px-0">
            {/* Left Card */}
            <div className="overflow-hidden p-6 sm:px-[28px] sm:py-[35px] rounded-[26.7px] w-full max-w-[300px] sm:max-w-none sm:w-auto flex items-center justify-center shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                <MockupImage src={zoffersP1} onZoom={onZoom} tiltDirection="left" containerClassName="w-full sm:w-[218.6px] aspect-[218.6/473.8] sm:aspect-auto sm:h-[473.8px] rounded-[16px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0" />
            </div>

            {/* Center Container  */}
            <div className="flex flex-col gap-4 sm:gap-[9px] w-full max-w-[460px] sm:max-w-none sm:w-[448px] sm:h-[544px] shrink-0">
                <div className="overflow-hidden p-5 sm:px-[36px] sm:py-[22px] rounded-[26px] flex items-center sm:items-start justify-center w-full sm:h-[235px] transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={zoffersP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-full sm:w-[385px] aspect-[385/628] sm:aspect-auto sm:h-[628px] rounded-[12px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0" />
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full sm:h-[300px] gap-4 sm:gap-0">
                    <div className="overflow-hidden p-4 sm:px-[18px] sm:py-[19.8px] flex gap-3 sm:gap-[11px] rounded-[24.6px] sm:rounded-[20px] items-center justify-center w-full sm:w-[288px] sm:h-full shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                        <MockupImage src={zoffersP3} onZoom={onZoom} tiltDirection="left" containerClassName="w-1/2 sm:w-[114.7px] aspect-[114.7/255.3] sm:aspect-auto sm:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                        <MockupImage src={zoffersP4} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 sm:w-[114.7px] aspect-[114.7/255.3] sm:aspect-auto sm:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                    </div>
                    <div className="overflow-hidden p-4 sm:px-[18px] sm:py-[19.8px] flex items-center justify-center w-full sm:w-auto sm:h-full rounded-[24.6px] sm:rounded-[20px] shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                        <MockupImage src={zoffersP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-full sm:w-[114.7px] max-w-[150px] sm:max-w-none aspect-[114.7/255.3] sm:aspect-auto sm:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                    </div>
                </div>
            </div>

            {/* Right Container */}
            <div className="flex flex-col gap-4 sm:gap-0 justify-between items-center w-full max-w-[300px] sm:max-w-none sm:w-[164px] sm:h-[544px] shrink-0">
                <div className="overflow-hidden p-6 sm:px-[12px] sm:py-[19px] rounded-[24px] flex items-center justify-center w-full shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={zoffersP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] sm:w-[139.4px] aspect-[139.4/141.8] sm:aspect-auto sm:h-[141.8px] rounded-[12px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="overflow-hidden p-6 sm:px-[12px] sm:py-[25px] flex flex-col gap-4 sm:gap-[22px] rounded-[24px] items-center justify-center w-full sm:h-[351px] shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={zoffersP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] sm:w-full aspect-[173/202] rounded-[10px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                    <MockupImage src={zoffersP8} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] sm:w-full aspect-[702/490] rounded-[12px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>
        </div>
    );
}

function RabbitCollage({ onZoom, isDark }: { onZoom: (src: string | StaticImageData) => void; isDark: boolean }) {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-[18px] items-center sm:items-stretch justify-center w-full px-4 sm:px-0">
            {/* Left Card */}
            <div className="p-6 sm:p-[35px] rounded-[16px] flex items-center justify-start w-full max-w-[300px] sm:max-w-none sm:w-[330px] sm:h-[544px] shrink-0 overflow-hidden transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                <MockupImage src={rabbitP1} onZoom={onZoom} tiltDirection="left" containerClassName="w-[250%] max-w-none sm:w-[887px] aspect-[887/473] sm:aspect-auto sm:h-[473px] rounded-[16px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0 origin-left" />
            </div>

            {/* Center Cards */}
            <div className="flex flex-col gap-4 sm:gap-[12px] w-full max-w-[300px] sm:max-w-none sm:w-[269px] shrink-0">
                <div className="overflow-hidden p-6 sm:p-[20px] rounded-[16px] flex flex-col items-center justify-center w-full shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={rabbitP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-full sm:w-[148px] aspect-[148/143] sm:aspect-auto sm:h-[143px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="overflow-hidden p-6 sm:p-[20px] rounded-[16px] flex items-start justify-center w-full sm:h-[349px] shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={rabbitP3} onZoom={onZoom} tiltDirection="right" containerClassName="w-full sm:w-[206px] aspect-[206/317] sm:aspect-auto sm:h-[317px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-4 sm:gap-[11px] w-full max-w-[300px] sm:max-w-none sm:w-[274px] shrink-0">
                <div className="overflow-hidden p-4 sm:p-[16px] rounded-[14px] flex gap-3 sm:gap-[9px] items-center justify-center w-full sm:h-[174px] shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={rabbitP4} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 sm:w-[103px] aspect-[103/144] sm:aspect-auto sm:h-[144px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                    <MockupImage src={rabbitP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 sm:w-[120px] aspect-[120/144] sm:aspect-auto sm:h-[144px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="overflow-hidden p-4 sm:p-[16px] rounded-[14px] flex flex-col items-start w-full shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={rabbitP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-full aspect-[1374/892] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="overflow-hidden p-4 sm:p-[16px] rounded-[14px] flex flex-col items-start w-full shrink-0 transition-all duration-700 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <MockupImage src={rabbitP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-full sm:w-[247px] aspect-[247/126] sm:aspect-auto sm:h-[126px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>
        </div>
    );
}

// Rabbit Invest mapping removed.

export function WorkSection() {
    const { isDark } = useTheme();
    const [zoomedImage, setZoomedImage] = useState<string | StaticImageData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="work" className={`relative overflow-hidden w-full flex flex-col items-center gap-12 sm:gap-16 mb-0 pt-20 sm:pt-20 pb-24 sm:pb-40 transition-colors duration-700 [clip-path:inset(0)] bg-transparent`}>
            {/* Backgrounds removed to allow page background to show through */}


            <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-16 sm:gap-24 items-center">
                {/* Title */}
                <div className="flex flex-col gap-0 items-center text-center w-full max-w-2xl px-4 relative z-10">
                    {isDark ? (
                        <Image src={selectedWorkNight} alt="Selected Work" className="w-[220px] sm:w-[289px] h-auto drop-shadow-2xl" />
                    ) : (
                        <svg className="w-[220px] sm:w-[289px] h-auto -ml-2" width="289" height="92" viewBox="0 0 289 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Selected Work">
                            <g filter="url(#filter0_di_213_349)">
                                <rect x="20.5996" y="8.6001" width="247" height="50" rx="25" fill="url(#paint0_linear_213_349)" />
                                <rect x="22.0996" y="10.1001" width="244" height="47" rx="23.5" stroke="url(#paint1_linear_213_349)" strokeWidth="3" />
                                <g clipPath="url(#clip0_213_349)">
                                    <path d="M71.556 23.6571C71.911 23.7811 72.385 24.0321 72.859 24.4531C73.516 25.0222 73.9561 25.8008 74.105 26.6571C74.278 27.6461 74.058 28.5511 73.586 29.3401L73.463 29.5341C73.3983 29.6321 73.333 29.7228 73.267 29.8061C73.311 29.9621 73.35 30.1191 73.384 30.2771C73.5573 30.1585 73.739 30.0561 73.929 29.9701C74.78 29.5811 75.656 29.5281 76.456 29.6641C76.6067 29.6908 76.722 29.7161 76.802 29.7401C76.9688 29.7887 77.12 29.88 77.2409 30.0048C77.3617 30.1297 77.4479 30.2838 77.491 30.4521L77.52 30.5821C77.53 30.6355 77.54 30.6955 77.55 30.7621C77.6844 31.608 77.5719 32.4746 77.226 33.2581C76.8738 34.0453 76.2731 34.6952 75.516 35.1081L75.274 35.2281C74.5748 35.545 73.8025 35.6657 73.04 35.5771C72.9136 35.927 72.7657 36.2686 72.597 36.6001C72.967 36.6161 73.345 36.6931 73.725 36.8401C74.457 37.1201 75.024 37.5981 75.436 38.2071C75.7712 38.6895 75.9946 39.2405 76.09 39.8201C76.1147 39.9907 76.0949 40.1648 76.0325 40.3254C75.9702 40.4861 75.8673 40.6279 75.734 40.7371C75.5125 40.9109 75.2723 41.0594 75.018 41.1801C74.085 41.6351 73.04 41.7681 71.975 41.3591L71.943 41.3441L71.738 41.2581C71.2154 41.0135 70.7592 40.6469 70.408 40.1891L70.265 39.9921C70.1693 39.8534 70.0824 39.7088 70.005 39.5591C69.7116 39.7564 69.4014 39.9274 69.078 40.0701C69.198 40.2448 69.3103 40.4315 69.415 40.6301C69.7079 41.1823 69.9296 41.7693 70.075 42.3771C70.131 42.6347 70.0832 42.9039 69.9418 43.1263C69.8004 43.3488 69.5769 43.5064 69.3199 43.5649C69.0629 43.6234 68.7932 43.5781 68.5694 43.4388C68.3457 43.2995 68.186 43.0776 68.125 42.8211L68.097 42.7111C67.9868 42.3158 67.8364 41.9328 67.648 41.5681C67.306 40.9231 66.938 40.6001 66.6 40.6001C66.262 40.6001 65.894 40.9231 65.552 41.5691C65.4052 41.8496 65.2824 42.142 65.185 42.4431L65.103 42.7121L65.075 42.8221C65.014 43.0786 64.8543 43.3005 64.6305 43.4398C64.4068 43.5791 64.1371 43.6244 63.8801 43.5659C63.6231 43.5074 63.3996 43.3498 63.2582 43.1273C63.1168 42.9049 63.0689 42.6357 63.125 42.3781C63.2693 41.7699 63.4911 41.1828 63.785 40.6311C63.8903 40.4325 64.0027 40.2455 64.122 40.0701C63.7985 39.9268 63.4874 39.7569 63.192 39.5621C63.1157 39.7107 63.0302 39.8543 62.936 39.9921C62.57 40.5331 62.081 40.9721 61.463 41.2591L61.225 41.3591C60.231 41.7411 59.255 41.6511 58.37 41.2681L58.182 41.1811C57.9276 41.0604 57.6875 40.9119 57.466 40.7381C57.3327 40.6289 57.2298 40.4871 57.1674 40.3264C57.1051 40.1658 57.0853 39.9917 57.11 39.8211C57.2053 39.2415 57.4288 38.6905 57.764 38.2081C58.1781 37.5856 58.7758 37.1075 59.474 36.8401C59.854 36.6941 60.232 36.6171 60.604 36.6001C60.4346 36.2687 60.286 35.927 60.159 35.5771C59.3969 35.6658 58.625 35.5455 57.926 35.2291C57.5953 35.0761 57.2872 34.8786 57.01 34.6421L56.803 34.4511C56.5133 34.1643 56.2691 33.8348 56.079 33.4741L55.974 33.2581C55.584 32.3762 55.491 31.3915 55.709 30.4521C55.7522 30.2837 55.8385 30.1295 55.9595 30.0046C56.0805 29.8797 56.232 29.7886 56.399 29.7401C56.4783 29.7161 56.5933 29.6908 56.744 29.6641C57.545 29.5291 58.422 29.5821 59.274 29.9721C59.4627 30.0581 59.6443 30.1595 59.819 30.2761C59.851 30.1195 59.8883 29.9628 59.931 29.8061C59.8633 29.7177 59.7986 29.6269 59.737 29.5341C59.181 28.7021 58.907 27.7281 59.095 26.6571L59.145 26.4151C59.3109 25.7295 59.6669 25.1046 60.172 24.6121L60.341 24.4531C60.7202 24.1066 61.1626 23.8363 61.644 23.6571C61.808 23.5995 61.9841 23.5856 62.1551 23.6168C62.3261 23.6481 62.486 23.7233 62.619 23.8351C62.819 24.0031 63.081 24.2811 63.338 24.6651C63.894 25.4981 64.168 26.4721 63.98 27.5431C63.8311 28.3995 63.391 29.1781 62.734 29.7471C62.431 30.0171 62.127 30.2171 61.855 30.3571C61.6829 30.9999 61.5972 31.6627 61.6 32.3281C61.6 35.8301 63.885 38.6001 66.6 38.6001C69.315 38.6001 71.6 35.8301 71.6 32.3241C71.6019 31.6602 71.5169 30.9989 71.347 30.3571C71.029 30.1913 70.7331 29.9864 70.466 29.7471C69.809 29.1781 69.3688 28.3995 69.22 27.5431C69.032 26.4731 69.306 25.4981 69.862 24.6661C70.119 24.2811 70.382 24.0031 70.582 23.8351C70.7149 23.7235 70.8746 23.6483 71.0454 23.6171C71.2162 23.5859 71.3922 23.5997 71.556 23.6571ZM66.6 28.6001C67.0455 28.6001 67.4828 28.7192 67.8669 28.9449C68.2509 29.1706 68.5676 29.4949 68.7843 29.8841C69.001 30.2733 69.1098 30.7133 69.0993 31.1587C69.0889 31.604 68.9597 32.0385 68.725 32.4171L68.6 32.6001L68.619 32.6241C68.892 32.9961 69.064 33.4471 69.096 33.9361L69.101 34.1001C69.101 34.4285 69.0363 34.7537 68.9106 35.0571C68.7849 35.3605 68.6007 35.6361 68.3684 35.8683C68.1361 36.1004 67.8604 36.2845 67.557 36.4101C67.2536 36.5357 66.9284 36.6003 66.6 36.6001H65.1C64.8348 36.6001 64.5804 36.4948 64.3929 36.3072C64.2053 36.1197 64.1 35.8654 64.1 35.6001C64.1 35.3349 64.2053 35.0806 64.3929 34.893C64.5804 34.7055 64.8348 34.6001 65.1 34.6001H66.6C66.7326 34.6001 66.8598 34.5475 66.9535 34.4537C67.0473 34.3599 67.1 34.2327 67.1 34.1001C67.1 33.9675 67.0473 33.8403 66.9535 33.7466C66.8598 33.6528 66.7326 33.6001 66.6 33.6001H65.6L65.467 33.5931C64.268 33.4641 64.313 31.6001 65.6 31.6001H66.6L66.69 31.5921C66.8129 31.5699 66.9231 31.5024 66.9988 31.403C67.0744 31.3035 67.1102 31.1794 67.0989 31.055C67.0876 30.9305 67.0301 30.8148 66.9378 30.7306C66.8454 30.6465 66.7249 30.5999 66.6 30.6001H65.1C64.8348 30.6001 64.5804 30.4948 64.3929 30.3072C64.2053 30.1197 64.1 29.8654 64.1 29.6001C64.1 29.3349 64.2053 29.0806 64.3929 28.893C64.5804 28.7055 64.8348 28.6001 65.1 28.6001H66.6Z" fill="#EF8A1E" />
                                </g>
                                <g filter="url(#filter1_d_213_349)">
                                    <path d="M94.9224 39.8521C94.1424 39.8521 93.4404 39.7741 92.8164 39.6181C92.2044 39.4741 91.6764 39.2521 91.2324 38.9521C90.8004 38.6401 90.4584 38.2561 90.2064 37.8001C89.9664 37.3321 89.8284 36.7981 89.7924 36.1981L92.0604 35.4601C92.0844 36.0001 92.2164 36.4501 92.4564 36.8101C92.7084 37.1701 93.0624 37.4341 93.5184 37.6021C93.9744 37.7701 94.4844 37.8541 95.0484 37.8541C95.5884 37.8541 96.0444 37.7881 96.4164 37.6561C96.7884 37.5241 97.0704 37.3501 97.2624 37.1341C97.4544 36.9061 97.5504 36.6601 97.5504 36.3961C97.5504 36.0841 97.4304 35.8321 97.1904 35.6401C96.9504 35.4481 96.6204 35.2861 96.2004 35.1541C95.7924 35.0221 95.3244 34.8961 94.7964 34.7761C94.2084 34.6441 93.6264 34.4941 93.0504 34.3261C92.4864 34.1581 91.9704 33.9421 91.5024 33.6781C91.0464 33.4141 90.6804 33.0721 90.4044 32.6521C90.1404 32.2321 90.0084 31.7041 90.0084 31.0681C90.0084 30.3361 90.1884 29.7061 90.5484 29.1781C90.9204 28.6381 91.4604 28.2181 92.1684 27.9181C92.8764 27.6181 93.7284 27.4681 94.7244 27.4681C95.7324 27.4681 96.5904 27.6181 97.2984 27.9181C98.0184 28.2061 98.5764 28.6201 98.9724 29.1601C99.3684 29.6881 99.5844 30.3181 99.6204 31.0501L97.2804 31.6981C97.2804 31.3261 97.2204 31.0021 97.1004 30.7261C96.9804 30.4501 96.8124 30.2221 96.5964 30.0421C96.3804 29.8501 96.1104 29.7061 95.7864 29.6101C95.4744 29.5141 95.1144 29.4661 94.7064 29.4661C94.2384 29.4661 93.8304 29.5261 93.4824 29.6461C93.1464 29.7661 92.8884 29.9281 92.7084 30.1321C92.5404 30.3361 92.4564 30.5761 92.4564 30.8521C92.4564 31.1761 92.5884 31.4461 92.8524 31.6621C93.1284 31.8661 93.4884 32.0341 93.9324 32.1661C94.3884 32.2981 94.8864 32.4241 95.4264 32.5441C95.9424 32.6521 96.4644 32.7901 96.9924 32.9581C97.5324 33.1141 98.0304 33.3241 98.4864 33.5881C98.9544 33.8401 99.3264 34.1881 99.6024 34.6321C99.8904 35.0641 100.034 35.6101 100.034 36.2701C100.034 36.9901 99.8424 37.6201 99.4584 38.1601C99.0744 38.7001 98.4984 39.1201 97.7304 39.4201C96.9744 39.7081 96.0384 39.8521 94.9224 39.8521ZM101.715 39.6001V27.7201H104.325V39.6001H101.715ZM103.515 39.6001V37.4941H110.877V39.6001H103.515ZM103.515 34.5601V32.6341H109.977V34.5601H103.515ZM103.515 29.8081V27.7201H110.841V29.8081H103.515ZM112.534 39.6001V27.7201H115.126V39.6001H112.534ZM113.074 39.6001V37.4221H120.148V39.6001H113.074ZM121.315 39.6001V27.7201H123.925V39.6001H121.315ZM123.115 39.6001V37.4941H130.477V39.6001H123.115ZM123.115 34.5601V32.6341H129.577V34.5601H123.115ZM123.115 29.8081V27.7201H130.441V29.8081H123.115ZM137.325 39.8521C136.401 39.8521 135.573 39.7261 134.841 39.4741C134.121 39.2101 133.503 38.8261 132.987 38.3221C132.483 37.8061 132.099 37.1701 131.835 36.4141C131.571 35.6581 131.439 34.7821 131.439 33.7861C131.439 32.7781 131.571 31.8841 131.835 31.1041C132.111 30.3241 132.501 29.6641 133.005 29.1241C133.521 28.5721 134.127 28.1581 134.823 27.8821C135.519 27.6061 136.293 27.4681 137.145 27.4681C137.805 27.4681 138.417 27.5581 138.981 27.7381C139.545 27.9061 140.031 28.1521 140.439 28.4761C140.847 28.8001 141.165 29.1961 141.393 29.6641C141.633 30.1321 141.759 30.6601 141.771 31.2481L139.377 31.8781C139.377 31.3741 139.263 30.9541 139.035 30.6181C138.819 30.2821 138.531 30.0301 138.171 29.8621C137.823 29.6821 137.451 29.5921 137.055 29.5921C136.707 29.5921 136.359 29.6641 136.011 29.8081C135.675 29.9401 135.363 30.1681 135.075 30.4921C134.799 30.8041 134.571 31.2181 134.391 31.7341C134.223 32.2501 134.139 32.8801 134.139 33.6241C134.139 34.5961 134.277 35.3821 134.553 35.9821C134.841 36.5821 135.231 37.0261 135.723 37.3141C136.215 37.5901 136.767 37.7281 137.379 37.7281C138.039 37.7281 138.549 37.5961 138.909 37.3321C139.281 37.0561 139.545 36.7081 139.701 36.2881C139.869 35.8561 139.959 35.4001 139.971 34.9201L142.239 35.2981C142.227 35.9341 142.131 36.5341 141.951 37.0981C141.771 37.6501 141.489 38.1361 141.105 38.5561C140.721 38.9641 140.217 39.2821 139.593 39.5101C138.969 39.7381 138.213 39.8521 137.325 39.8521ZM146.23 39.6001V27.7201H148.822V39.6001H146.23ZM142.72 29.8981V27.7201H152.332V29.8981H142.72ZM153.633 39.6001V27.7201H156.243V39.6001H153.633ZM155.433 39.6001V37.4941H162.795V39.6001H155.433ZM155.433 34.5601V32.6341H161.895V34.5601H155.433ZM155.433 29.8081V27.7201H162.759V29.8081H155.433ZM165.695 39.6001V37.4941H169.151C169.823 37.4941 170.381 37.3501 170.825 37.0621C171.269 36.7621 171.605 36.3301 171.833 35.7661C172.061 35.2021 172.175 34.5121 172.175 33.6961C172.175 33.0241 172.103 32.4481 171.959 31.9681C171.815 31.4761 171.599 31.0741 171.311 30.7621C171.035 30.4501 170.681 30.2161 170.249 30.0601C169.829 29.9041 169.331 29.8261 168.755 29.8261H165.695V27.7201H168.665C170.105 27.7201 171.281 27.9541 172.193 28.4221C173.105 28.8901 173.777 29.5621 174.209 30.4381C174.641 31.3021 174.857 32.3401 174.857 33.5521C174.857 34.4641 174.749 35.2561 174.533 35.9281C174.317 36.6001 174.023 37.1701 173.651 37.6381C173.291 38.1061 172.871 38.4841 172.391 38.7721C171.911 39.0601 171.401 39.2701 170.861 39.4021C170.321 39.5341 169.775 39.6001 169.223 39.6001H165.695ZM164.453 39.6001V27.7201H167.045V39.6001H164.453ZM182.267 39.6001L179.585 27.7201H182.411L184.175 37.3861H184.373L186.461 27.7201H189.755L191.843 37.3861H192.059L193.823 27.7201H196.505L193.787 39.6001H190.169L188.153 29.9341H187.991L185.975 39.6001H182.267ZM202.798 39.8521C201.934 39.8521 201.16 39.7201 200.476 39.4561C199.792 39.1801 199.204 38.7841 198.712 38.2681C198.232 37.7401 197.86 37.0981 197.596 36.3421C197.344 35.5741 197.218 34.6981 197.218 33.7141C197.218 32.3101 197.464 31.1521 197.956 30.2401C198.448 29.3161 199.12 28.6261 199.972 28.1701C200.836 27.7021 201.808 27.4681 202.888 27.4681C203.728 27.4681 204.49 27.6061 205.174 27.8821C205.858 28.1461 206.44 28.5421 206.92 29.0701C207.412 29.5861 207.79 30.2341 208.054 31.0141C208.318 31.7821 208.45 32.6641 208.45 33.6601C208.45 34.6801 208.318 35.5741 208.054 36.3421C207.79 37.1101 207.406 37.7581 206.902 38.2861C206.41 38.8021 205.816 39.1921 205.12 39.4561C204.424 39.7201 203.65 39.8521 202.798 39.8521ZM202.87 37.7821C203.506 37.7821 204.04 37.6261 204.472 37.3141C204.904 37.0021 205.234 36.5521 205.462 35.9641C205.69 35.3761 205.804 34.6561 205.804 33.8041C205.804 32.9161 205.684 32.1601 205.444 31.5361C205.216 30.9121 204.88 30.4381 204.436 30.1141C203.992 29.7781 203.452 29.6101 202.816 29.6101C202.192 29.6101 201.658 29.7721 201.214 30.0961C200.782 30.4081 200.446 30.8641 200.206 31.4641C199.978 32.0641 199.864 32.8081 199.864 33.6961C199.864 34.3441 199.93 34.9261 200.062 35.4421C200.206 35.9461 200.404 36.3721 200.656 36.7201C200.908 37.0681 201.22 37.3321 201.592 37.5121C201.964 37.6921 202.39 37.7821 202.87 37.7821ZM210.281 39.6001V27.7201H215.105C215.753 27.7201 216.341 27.7741 216.869 27.8821C217.397 27.9781 217.865 28.1221 218.273 28.3141C218.681 28.5061 219.023 28.7461 219.299 29.0341C219.587 29.3101 219.803 29.6341 219.947 30.0061C220.091 30.3661 220.163 30.7681 220.163 31.2121C220.163 31.6321 220.097 32.0161 219.965 32.3641C219.833 32.7001 219.635 32.9941 219.371 33.2461C219.107 33.4981 218.777 33.7081 218.381 33.8761C217.985 34.0321 217.523 34.1401 216.995 34.2001V34.4701C217.607 34.5301 218.093 34.6741 218.453 34.9021C218.825 35.1181 219.113 35.4121 219.317 35.7841C219.533 36.1561 219.719 36.6181 219.875 37.1701L220.595 39.6001H217.733L217.175 37.3501C217.067 36.8701 216.911 36.4981 216.707 36.2341C216.503 35.9581 216.245 35.7661 215.933 35.6581C215.621 35.5381 215.243 35.4781 214.799 35.4781H212.873V39.6001H210.281ZM212.873 33.5341H214.925C215.741 33.5341 216.371 33.3781 216.815 33.0661C217.259 32.7541 217.481 32.2681 217.481 31.6081C217.481 30.9601 217.271 30.4861 216.851 30.1861C216.443 29.8741 215.825 29.7181 214.997 29.7181H212.873V33.5341ZM222.137 39.6001V27.7201H224.729V33.0301C225.341 32.7781 225.911 32.4601 226.439 32.0761C226.979 31.6801 227.459 31.2421 227.879 30.7621C228.299 30.2821 228.659 29.7841 228.959 29.2681C229.259 28.7521 229.475 28.2361 229.607 27.7201H232.577C232.409 28.3081 232.151 28.8961 231.803 29.4841C231.467 30.0601 231.065 30.6061 230.597 31.1221C230.129 31.6381 229.631 32.1001 229.103 32.5081C228.587 32.9041 228.065 33.2161 227.537 33.4441V33.7141C228.089 33.7141 228.581 33.7801 229.013 33.9121C229.457 34.0321 229.847 34.2301 230.183 34.5061C230.531 34.7701 230.837 35.1001 231.101 35.4961C231.365 35.8921 231.599 36.3661 231.803 36.9181L232.757 39.6001H229.823L229.193 37.4401C229.025 36.8521 228.803 36.3841 228.527 36.0361C228.251 35.6761 227.897 35.4181 227.465 35.2621C227.033 35.0941 226.469 35.0101 225.773 35.0101H224.729V39.6001H222.137Z" fill="#EF8A1E" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_di_213_349" x="-0.000391006" y="9.72748e-05" width="288.2" height="91.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="12" />
                                    <feGaussianBlur stdDeviation="10.3" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.700346 0 0 0 0 0.536932 0 0 0 0 0 0 0 0 0.39 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_349" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_349" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="5.3" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_213_349" />
                                </filter>
                                <filter id="filter1_d_213_349" x="76.592" y="18.2683" width="169.366" height="38.7838" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="6.6" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_349" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_213_349" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_213_349" x1="-55.6798" y1="-34.821" x2="339.034" y2="64.8518" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FEE9B7" />
                                    <stop offset="0.510435" stopColor="#FBF3E7" />
                                    <stop offset="1" stopColor="#FFE9B1" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_213_349" x1="144.1" y1="8.6001" x2="144.1" y2="58.6001" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#FFC739" />
                                </linearGradient>
                                <clipPath id="clip0_213_349">
                                    <rect width="24" height="24" fill="white" transform="translate(54.5996 21.6001)" />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                    <p className={`font-semibold text-[16px] tracking-[0.32px] mt-2 sm:-mt-2 transition-colors duration-700 ${isDark ? 'text-white/90' : 'text-[#6B6B6B]'}`}>
                        A selection of work from my internships and freelance projects.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-16 sm:gap-24 items-center relative z-10 px-4 sm:px-8">
                    {/* Shoppin' */}
                    <div id="shoppin" className="w-full flex flex-col gap-[38px] items-center">
                        <ShoppinCollage onZoom={setZoomedImage} isDark={isDark} />
                        <div className="w-full max-w-[884px] flex flex-col gap-4 sm:gap-[24px] items-center sm:items-start text-center sm:text-left px-4">
                            <h3 className={`font-semibold text-[26px] sm:text-[30px] leading-[1.64] tracking-[-0.6px] transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#2e2e2e]'}`}>
                                Shoppin : Designing for decision-making, not just browsing
                            </h3>
                            <div className={`flex flex-col gap-3 sm:gap-[20px] font-medium text-[12px] sm:text-[16px] transition-colors duration-700 leading-[1.64] tracking-[0.32px] w-full text-justify sm:text-left ${isDark ? 'text-white/80' : 'text-[#656565]'}`}>
                                <p>
                                    Most users don’t drop off because they don’t like a product—they drop off because they’re unsure.
                                </p>
                                <p>
                                    At Shoppin, I focused on reducing this uncertainty.
                                </p>
                                <p>
                                    I designed a <strong className="font-bold">virtual try-on experience</strong> to help users better judge fit and style before purchase. By restructuring the flow around how users actually evaluate products, this led to a <strong className="font-bold">13% drop in user drop-offs</strong> at a critical decision point.
                                </p>
                                <p>
                                    I also worked on improving <strong className="font-bold">product discovery</strong>, redesigning parts of the search experience and integrating <em className="italic">“Make My Fit”</em>—a feature that guides users toward more relevant clothing based on contextual product inputs.
                                </p>
                                <p>
                                    The goal wasn’t just better UI—it was to make choosing feel easier, faster, and more confident.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-[13px] items-center mt-2">
                                <CaseStudyButton text="Virtual try-on case study" primary href="https://medium.com/@iamharshit.idk/reducing-the-dropoff-by-13-on-virutal-try-on-a99fa0cff09e" />
                                <CaseStudyButton text="Feature case study" href="https://drive.google.com/file/d/1FEvfHVQDax6kwxezrFE1-l5THiQj0goV/view?usp=sharing" />
                            </div>
                        </div>
                    </div>


                    {/* Zoffers */}
                    <div id="zoffers" className="w-full flex flex-col gap-[38px] items-center">
                        <ZoffersCollage onZoom={setZoomedImage} isDark={isDark} />
                        <div className="w-full max-w-[884px] flex flex-col gap-4 sm:gap-[24px] items-center sm:items-start text-center sm:text-left px-4">
                            <h3 className={`font-semibold text-[26px] sm:text-[30px] leading-[1.64] tracking-[-0.6px] transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#2e2e2e]'}`}>
                                Zoffers : Designing a student discount platform from scratch
                            </h3>
                            <div className={`flex flex-col gap-3 sm:gap-[20px] font-medium text-[12px] sm:text-[16px] transition-colors duration-700 leading-[1.64] tracking-[0.32px] w-full text-justify sm:text-left ${isDark ? 'text-white/80' : 'text-[#656565]'}`}>
                                <p>
                                    Zoffers connects students looking for discounts with brands seeking access to a student audience.
                                </p>
                                <p>
                                    I worked on building both the <strong className="font-bold">product identity and the web experience from the ground up</strong>, designing an end-to-end platform covering onboarding, browsing, and offer discovery.
                                </p>
                                <p>
                                    The focus was to create a system that feels <strong className="font-bold">trustworthy for brands and effortless for students</strong>, balancing two different user needs within a simple, clear experience.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-[13px] items-center mt-2">
                                <CaseStudyButton text="Visit Zoffers" primary href="https://zoffers.in/" />
                            </div>
                        </div>
                    </div>

                    {/* Rabbit Invest Section */}
                    <div id="rabbit-invest" className="w-full flex flex-col gap-[38px] items-center relative z-[20]">
                        <RabbitCollage onZoom={setZoomedImage} isDark={isDark} />

                        <div className="w-full max-w-[884px] flex flex-col gap-4 sm:gap-[24px] items-center sm:items-start text-center sm:text-left px-4">
                            <h3 className={`font-semibold text-[26px] sm:text-[30px] leading-[1.64] tracking-[-0.6px] transition-colors duration-700 ${isDark ? 'text-white' : 'text-[#2e2e2e]'}`}>
                                Rabbit Invest : Designing for non-tech-savvy financial distributors
                            </h3>
                            <div className={`flex flex-col gap-3 sm:gap-[20px] font-medium text-[12px] sm:text-[16px] transition-colors duration-700 leading-[1.64] tracking-[0.32px] w-full text-justify sm:text-left ${isDark ? 'text-white/80' : 'text-[#656565]'}`}>
                                <p>
                                    At Rabbit Invest, I worked on two core products focused on mutual fund distributors, many of whom were <strong className="font-bold whitespace-nowrap">older users (45+) with low digital familiarity</strong>.
                                </p>
                                <p>
                                    I designed a <strong className="font-bold">CRM platform from scratch</strong> to help distributors manage their customers, focusing on simplifying workflows, reducing cognitive load, and making complex financial tasks easier to navigate.
                                </p>
                                <p>
                                    I also translated the company’s <strong className="font-bold">mobile app into a web experience</strong>, adapting interactions and layouts to better suit desktop usage while maintaining consistency in identity and usability.
                                </p>
                                <p>
                                    This work required designing for clarity over complexity—ensuring the product remained intuitive for users who are not naturally comfortable with digital tools.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-[13px] w-full mt-2 pb-16">
                                <CaseStudyButton text="View Work" primary href="https://drive.google.com/file/d/1OzrCVp-937ZCp__33DdNR-8JCS55zlRR/view?usp=sharing" />
                                <CaseStudyButton text="Read documentation" href="https://rabbitinvest.com/how-to-initiate-purchase-with-rabbit-invest/" />
                            </div>
                        </div>
                    </div>

                </div>

                {mounted && zoomedImage && createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 sm:px-12 py-12 cursor-zoom-out animate-in fade-in duration-300 pointer-events-auto"
                        onClick={() => setZoomedImage(null)}
                    >
                        <div className="relative w-full max-w-2xl h-[70vh]">
                            <Image
                                src={zoomedImage}
                                alt="Zoomed view"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
}
