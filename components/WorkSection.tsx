"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

import shoppinP1 from "@/public/assets/shoppin-p1.png";
import shoppinP2 from "@/public/assets/shoppin-p2.png";
import shoppinP3 from "@/public/assets/shoppin-p3.png";
import shoppinP4 from "@/public/assets/shoppin-p4.png";
import shoppinP5 from "@/public/assets/shoppin-p5.png";
import shoppinP6 from "@/public/assets/shoppin-p6.png";
import shoppinP7 from "@/public/assets/shoppin-p7.png";

import zoffersP1 from "@/public/assets/zoffers-p1.png";
import zoffersP2 from "@/public/assets/zoffers-p2.png";
import zoffersP3 from "@/public/assets/zoffers-p3.png";
import zoffersP4 from "@/public/assets/zoffers-p4.png";
import zoffersP5 from "@/public/assets/zoffers-p5.png";
import zoffersP6 from "@/public/assets/zoffers-p6.png";
import zoffersP7 from "@/public/assets/zoffers-p7.png";
import zoffersP8 from "@/public/assets/zoffers-p8.png";
import rabbitP1 from "@/public/assets/rabbit-p1.png";
import rabbitP2 from "@/public/assets/rabbit-p2.png";
import rabbitP3 from "@/public/assets/rabbit-p3.png";
import rabbitP4 from "@/public/assets/rabbit-p4.png";
import rabbitP5 from "@/public/assets/rabbit-p5.png";
import rabbitP6 from "@/public/assets/rabbit-p6.png";
import rabbitP7 from "@/public/assets/rabbit-p7.png";

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
    const tiltClass = tiltDirection === "left"
        ? "hover:-rotate-[1.5deg]"
        : "hover:rotate-[1.5deg]";

    return (
        <div
            onClick={() => src && onZoom?.(src)}
            className={`relative bg-gray-100/40 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${src ? `cursor-pointer ${tiltClass} hover:scale-[1.03] hover:shadow-2xl hover:z-10` : ''} ${containerClassName}`}
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
    const Component = href ? "a" : "button" as any;
    const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    if (primary) {
        return (
            <Component {...componentProps} className="border-t border-b-4 border-l border-r border-[#dca500] bg-white hover:bg-[#fffef7] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(220,165,0,0.2)] active:scale-95 active:translate-y-0 active:shadow-none transition-all duration-200 h-[46px] px-[16px] rounded-[16px] flex items-center justify-center gap-2 group cursor-pointer inline-flex">
                <span className="font-semibold text-[#b38900] text-[16px] tracking-[-0.32px] whitespace-nowrap">
                    {text}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#b38900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Component>
        );
    }
    return (
        <Component {...componentProps} className="border-t border-b-4 border-l border-r border-[#969696] bg-white hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(150,150,150,0.15)] active:scale-95 active:translate-y-0 active:shadow-none transition-all duration-200 h-[46px] px-[16px] rounded-[16px] flex items-center justify-center gap-2 group cursor-pointer inline-flex">
            <span className="font-semibold text-[#747474] text-[16px] tracking-[-0.32px] whitespace-nowrap">
                {text}
            </span>
            <ArrowUpRight className="w-5 h-5 text-[#747474] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Component>
    );
}

function ShoppinCollage({ onZoom }: { onZoom: (src: string | StaticImageData) => void }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-[12.6px] items-center justify-center w-full px-4 md:px-0">
            {/* Left Card */}
            <div className="bg-white p-6 md:p-[35px] rounded-[26.7px] flex justify-center w-full max-w-[300px] md:max-w-none md:w-auto shrink-0">
                <MockupImage
                    src={shoppinP1}
                    onZoom={onZoom}
                    tiltDirection="left"
                    containerClassName="w-full md:w-[218.6px] aspect-[218.6/473.8] md:aspect-auto md:h-[473.8px] rounded-[16px] shadow-[0_2px_19px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0"
                />
            </div>

            {/* Center Cards */}
            <div className="flex flex-col gap-4 md:gap-[18.9px] w-full max-w-[380px] md:max-w-none md:w-[379.3px] shrink-0">
                <div className="bg-white p-5 md:p-[25.2px] flex gap-4 md:gap-[22.4px] rounded-[19.3px] items-center justify-center w-full">
                    <MockupImage src={shoppinP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-1/2 md:w-[153.2px] aspect-[153.2/341] md:aspect-auto md:h-[341px] rounded-[11.4px] shadow-[0_1.4px_13.5px_0_rgba(0,0,0,0.15)] border-[1.8px] border-white shrink-0" />
                    <MockupImage src={shoppinP3} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 md:w-[153.2px] aspect-[153.2/341] md:aspect-auto md:h-[341px] rounded-[11.4px] shadow-[0_1.4px_13.5px_0_rgba(0,0,0,0.15)] border-[1.8px] border-white shrink-0" />
                </div>
                <div className="bg-white p-4 md:p-[18.4px] flex gap-4 md:gap-[18.4px] rounded-[13.8px] items-center justify-center w-full">
                    <MockupImage src={shoppinP4} onZoom={onZoom} tiltDirection="left" containerClassName="w-[58%] md:w-[190.8px] aspect-[190.8/96.6] md:aspect-auto md:h-[96.6px] rounded-[9.3px] shadow-[0_1.2px_11px_0_rgba(0,0,0,0.15)] border-[1.2px] border-white shrink-0" />
                    <MockupImage src={shoppinP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-[42%] md:w-[133.2px] aspect-[133.2/96.6] md:aspect-auto md:h-[96.6px] rounded-[9.3px] shadow-[0_1.2px_11px_0_rgba(0,0,0,0.15)] border-[1.2px] border-white shrink-0" />
                </div>
            </div>

            {/* Right Cards */}
            <div className="bg-white px-6 md:px-[35px] py-8 md:py-[32px] flex flex-col gap-4 md:gap-[16px] rounded-[24px] items-center justify-center w-full max-w-[280px] md:max-w-none md:w-auto shrink-0">
                <MockupImage src={shoppinP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-full md:w-[145.7px] aspect-[145.7/252.6] md:aspect-auto md:h-[252.6px] rounded-[6.4px] shadow-[0_1.7px_16.2px_0_rgba(0,0,0,0.15)] border-2 border-white shrink-0" />
                <MockupImage src={shoppinP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-full md:w-[145.6px] aspect-[145.6/210] md:aspect-auto md:h-[210px] rounded-[12.1px] shadow-[0_1.7px_16.2px_0_rgba(0,0,0,0.15)] border-[2.1px] border-white shrink-0" />
            </div>
        </div>
    );
}

function ZoffersCollage({ onZoom }: { onZoom: (src: string | StaticImageData) => void }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-[10px] items-center md:items-start justify-center w-full px-4 md:px-0">
            {/* Left Card */}
            <div className="bg-white overflow-hidden p-6 md:px-[28px] md:py-[35px] rounded-[26.7px] w-full max-w-[300px] md:max-w-none md:w-auto flex items-center justify-center shrink-0">
                <MockupImage src={zoffersP1} onZoom={onZoom} tiltDirection="left" containerClassName="w-full md:w-[218.6px] aspect-[218.6/473.8] md:aspect-auto md:h-[473.8px] rounded-[16px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0" />
            </div>

            {/* Center Container  */}
            <div className="flex flex-col gap-4 md:gap-[9px] w-full max-w-[460px] md:max-w-none md:w-[448px] md:h-[544px] shrink-0">
                <div className="bg-white overflow-hidden p-5 md:px-[36px] md:py-[22px] rounded-[26px] flex items-center md:items-start justify-center w-full md:h-[235px]">
                    <MockupImage src={zoffersP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-full md:w-[385px] aspect-[385/628] md:aspect-auto md:h-[628px] rounded-[12px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] border-[2.5px] border-white shrink-0" />
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full md:h-[300px] gap-4 md:gap-0">
                    <div className="bg-white overflow-hidden p-4 md:px-[18px] md:py-[19.8px] flex gap-3 md:gap-[11px] rounded-[24.6px] md:rounded-[20px] items-center justify-center w-full md:w-[288px] md:h-full shrink-0">
                        <MockupImage src={zoffersP3} onZoom={onZoom} tiltDirection="left" containerClassName="w-1/2 md:w-[114.7px] aspect-[114.7/255.3] md:aspect-auto md:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                        <MockupImage src={zoffersP4} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 md:w-[114.7px] aspect-[114.7/255.3] md:aspect-auto md:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                    </div>
                    <div className="bg-white overflow-hidden p-4 md:px-[18px] md:py-[19.8px] flex items-center justify-center w-full md:w-auto md:h-full rounded-[24.6px] md:rounded-[20px] shrink-0">
                        <MockupImage src={zoffersP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-full md:w-[114.7px] max-w-[150px] md:max-w-none aspect-[114.7/255.3] md:aspect-auto md:h-[255.3px] rounded-[10.3px] shadow-[0_2px_19.3px_0_rgba(0,0,0,0.15)] border-[2px] border-white shrink-0" />
                    </div>
                </div>
            </div>

            {/* Right Container */}
            <div className="flex flex-col gap-4 md:gap-0 justify-between items-center w-full max-w-[300px] md:max-w-none md:w-[164px] md:h-[544px] shrink-0">
                <div className="bg-white overflow-hidden p-6 md:px-[12px] md:py-[19px] rounded-[24px] flex items-center justify-center w-full shrink-0">
                    <MockupImage src={zoffersP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] md:w-[139.4px] aspect-[139.4/141.8] md:aspect-auto md:h-[141.8px] rounded-[12px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="bg-white overflow-hidden p-6 md:px-[12px] md:py-[25px] flex flex-col gap-4 md:gap-[22px] rounded-[24px] items-center justify-center w-full md:h-[351px] shrink-0">
                    <MockupImage src={zoffersP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] md:w-full aspect-[173/202] rounded-[10px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                    <MockupImage src={zoffersP8} onZoom={onZoom} tiltDirection="right" containerClassName="w-[80%] md:w-full aspect-[702/490] rounded-[12px] shadow-[0_2px_16px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>
        </div>
    );
}

function RabbitCollage({ onZoom }: { onZoom: (src: string | StaticImageData) => void }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-[18px] items-center md:items-stretch justify-center w-full px-4 md:px-0">
            {/* Left Card */}
            <div className="bg-white p-6 md:p-[35px] rounded-[16px] flex items-center justify-start w-full max-w-[300px] md:max-w-none md:w-[330px] md:h-[544px] shrink-0 overflow-hidden">
                <MockupImage src={rabbitP1} onZoom={onZoom} tiltDirection="left" containerClassName="w-[250%] max-w-none md:w-[887px] aspect-[887/473] md:aspect-auto md:h-[473px] rounded-[16px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0 origin-left" />
            </div>

            {/* Center Cards */}
            <div className="flex flex-col gap-4 md:gap-[12px] w-full max-w-[300px] md:max-w-none md:w-[269px] shrink-0">
                <div className="bg-white overflow-hidden p-6 md:p-[20px] rounded-[16px] flex flex-col items-center justify-center w-full shrink-0">
                    <MockupImage src={rabbitP2} onZoom={onZoom} tiltDirection="left" containerClassName="w-full md:w-[148px] aspect-[148/143] md:aspect-auto md:h-[143px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="bg-white overflow-hidden p-6 md:p-[20px] rounded-[16px] flex items-start justify-center w-full md:h-[349px] shrink-0">
                    <MockupImage src={rabbitP3} onZoom={onZoom} tiltDirection="right" containerClassName="w-full md:w-[206px] aspect-[206/317] md:aspect-auto md:h-[317px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-4 md:gap-[11px] w-full max-w-[300px] md:max-w-none md:w-[274px] shrink-0">
                <div className="bg-white overflow-hidden p-4 md:p-[16px] rounded-[14px] flex gap-3 md:gap-[9px] items-center justify-center w-full md:h-[174px] shrink-0">
                    <MockupImage src={rabbitP4} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 md:w-[103px] aspect-[103/144] md:aspect-auto md:h-[144px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                    <MockupImage src={rabbitP5} onZoom={onZoom} tiltDirection="right" containerClassName="w-1/2 md:w-[120px] aspect-[120/144] md:aspect-auto md:h-[144px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="bg-white overflow-hidden p-4 md:p-[16px] rounded-[14px] flex flex-col items-start w-full shrink-0">
                    <MockupImage src={rabbitP6} onZoom={onZoom} tiltDirection="right" containerClassName="w-full aspect-[1374/892] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
                <div className="bg-white overflow-hidden p-4 md:p-[16px] rounded-[14px] flex flex-col items-start w-full shrink-0">
                    <MockupImage src={rabbitP7} onZoom={onZoom} tiltDirection="right" containerClassName="w-full md:w-[247px] aspect-[247/126] md:aspect-auto md:h-[126px] shadow-[0_2px_18.8px_0_rgba(0,0,0,0.15)] shrink-0" />
                </div>
            </div>
        </div>
    );
}

// Rabbit Invest mapping removed.

export function WorkSection() {
    const [zoomedImage, setZoomedImage] = useState<string | StaticImageData | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="work" className="w-full flex flex-col items-center gap-12 sm:gap-24 mb-32 px-4 md:px-8 pt-16 md:pt-32">
            {/* Title */}
            <div className="flex flex-col gap-2 items-center text-center w-full max-w-2xl px-4">
                <h2 className="font-bold text-[#353535] text-[24px] uppercase tracking-[-0.48px]">
                    Selected Work
                </h2>
                <p className="font-medium text-[#b0b0b0] text-[16px] tracking-[0.32px] sm:max-w-md max-w-sm">
                    Interfaces built, tested, questioned, and occasionally rebuilt from scratch.
                </p>
            </div>

            <div className="w-full max-w-[1200px] flex flex-col gap-16 md:gap-24 items-center">
                {/* Shoppin' */}
                <div className="w-full flex flex-col gap-[38px] items-center">
                    <ShoppinCollage onZoom={setZoomedImage} />
                    <div className="w-full max-w-[884px] flex flex-col gap-4 md:gap-[24px] items-center md:items-start text-center md:text-left px-4">
                        <h3 className="font-semibold text-[26px] md:text-[30px] leading-[1.64] text-[#2e2e2e] tracking-[-0.6px] lowercase">
                            shoppin’ 🍓
                        </h3>
                        <div className="flex flex-col gap-3 md:gap-[20px] font-medium text-[15px] md:text-[16px] text-[#656565] leading-[1.64] tracking-[0.32px] w-full text-justify md:text-left">
                            <p>
                                Shoppin’ was my first product design internship, where I worked
                                across multiple problem spaces - from improving core interactions
                                to redesigning the Virtual Try-On experience that helps users make
                                quicker decisions while shopping online.
                            </p>
                            <p>
                                Interestingly, one of the features I later implemented was originally
                                a project I had built before joining Shoppin’ - the same project
                                that got me the internship in the first place. You can read that{" "}
                                <span className="italic">case study</span> here.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-[13px] items-center mt-2">
                            <CaseStudyButton text="Virtual try-on case study" primary href="https://medium.com/@iamharshit.idk/reducing-the-dropoff-by-13-on-virutal-try-on-a99fa0cff09e" />
                            <CaseStudyButton text="Feature case study" href="https://drive.google.com/file/d/1FEvfHVQDax6kwxezrFE1-l5THiQj0goV/view?usp=sharing" />
                        </div>
                    </div>
                </div>


                {/* Zoffers */}
                <div className="w-full flex flex-col gap-[38px] items-center">
                    <ZoffersCollage onZoom={setZoomedImage} />
                    <div className="w-full max-w-[884px] flex flex-col gap-4 md:gap-[24px] items-center md:items-start text-center md:text-left px-4">
                        <h3 className="font-semibold text-[26px] md:text-[30px] leading-[1.64] text-[#2e2e2e] tracking-[-0.6px]">
                            Zoffers
                        </h3>
                        <div className="flex flex-col gap-3 md:gap-[20px] font-medium text-[15px] md:text-[16px] text-[#656565] leading-[1.64] tracking-[0.32px] w-full text-justify md:text-left">
                            <p>
                                Zoffers is like UNiDAYS for Indian students — a platform
                                connecting brands with students through exclusive offers and
                                campaigns. I designed the responsive web app from scratch, laying
                                the product’s core design foundations.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-[13px] items-center mt-2">
                            <CaseStudyButton text="Visit Zoffers" primary href="https://zoffers.in/" />
                        </div>
                    </div>
                </div>

                {/* Rabbit Invest Section */}
                <div className="w-full flex flex-col gap-[38px] items-center relative z-[20]">
                    <RabbitCollage onZoom={setZoomedImage} />

                    <div className="w-full max-w-[884px] flex flex-col gap-4 md:gap-[24px] items-center md:items-start text-center md:text-left px-4">
                        <h3 className="font-semibold text-[26px] md:text-[30px] leading-[1.64] text-[#2e2e2e] tracking-[-0.6px]">
                            Rabbit Invest
                        </h3>
                        <p className="font-medium text-[#656565] text-[15px] md:text-[16px] tracking-[0.32px] leading-[1.64] w-full text-justify md:text-left">
                            Rabbit Invest is a fintech platform that works with mutual fund distributors, helping them manage their clients while giving investors a way to track and manage their funds. I designed a CRM tool tailored for distributors to efficiently manage customers and their investments.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-[13px] w-full mt-2 pb-16">
                            <CaseStudyButton text="View Work" primary href="https://drive.google.com/file/d/1OzrCVp-937ZCp__33DdNR-8JCS55zlRR/view?usp=sharing" />
                            <CaseStudyButton text="Read documentation" href="https://rabbitinvest.com/how-to-initiate-purchase-with-rabbit-invest/" />
                        </div>
                    </div>
                </div>

            </div>

            {mounted && zoomedImage && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 md:px-12 py-12 cursor-zoom-out animate-in fade-in duration-300 pointer-events-auto"
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
        </section>
    );
}
