"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import cardLeftImg from "@/public/assets/photo-left.jpg";
import cardRightImg from "@/public/assets/photo-right.jpg";
import cardCenterImg from "@/public/assets/photo-center.jpg";

interface ImageCardsProps {
    className?: string;
    variant?: "frame19" | "frame20";
    images?: {
        left: string | StaticImageData;
        right: string | StaticImageData;
        center: string | StaticImageData;
    };
}

export function ImageCards({
    className,
    variant = "frame19",
    images = {
        left: cardLeftImg,
        right: cardRightImg,
        center: cardCenterImg,
    },
}: ImageCardsProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Toggle state on hover: if frame19 -> become frame20, if frame20 -> become frame19
    const effectiveVariant = isHovered
        ? (variant === "frame19" ? "frame20" : "frame19")
        : variant;

    const isFrame20 = effectiveVariant === "frame20";

    return (
        <div
            className={cn(
                "relative transition-all duration-500 ease-in-out cursor-pointer",
                // Frame 19 width reduced from 410 to 220
                // Frame 20 width reduced from 412 to 331
                isFrame20 ? "w-[398px] h-[206px]" : "w-[264px] h-[206px]",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left Card */}
            <div
                className={cn(
                    "absolute flex items-center justify-center transition-all duration-500 ease-in-out",
                    isFrame20
                        ? "left-[0px] top-0 w-[200px] h-[206px]"
                        : "left-[0px] top-[0px] w-[178px] h-[194px]"
                )}
            >
                <div
                    className={cn(
                        "flex-none relative overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out border-[2px] border-black",
                        isFrame20 ? "shadow-[0px_4px_45.3px_0px_rgba(0,0,0,0.53)]" : "shadow-[0px_4px_28px_0px_rgba(0,0,0,0.35)]",
                        isFrame20 ? "-rotate-[34.08deg]" : "-rotate-[19deg]",
                        "w-[134px] h-[158px]"
                    )}
                >
                    <div className="absolute inset-0">
                        <Image
                            src={images.left}
                            alt="Card Left"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Right Card */}
            <div
                className={cn(
                    "absolute flex items-center justify-center transition-all duration-500 ease-in-out",
                    isFrame20
                        ? "left-[197px] top-0 w-[200px] h-[206px]"
                        : "left-[86px] top-[0px] w-[178px] h-[194px]"
                )}
            >
                <div
                    className={cn(
                        "flex-none relative overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out border-[2px] border-black",
                        isFrame20 ? "shadow-[0px_4px_45.3px_0px_rgba(0,0,0,0.53)]" : "shadow-[0px_4px_28px_0px_rgba(0,0,0,0.35)]",
                        isFrame20 ? "-rotate-[145.92deg]" : "-rotate-[161deg]",
                        "w-[134px] h-[158px]"
                    )}
                >
                    <div className="absolute inset-0 -scale-y-100">
                        <Image
                            src={images.right}
                            alt="Card Right"
                            fill
                            className="object-cover object-top scale-[1.2]"
                        />
                    </div>
                </div>
            </div>

            {/* Center Card */}
            <div
                className={cn(
                    "absolute top-0 w-[134px] h-[158px] overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out border-[2px] border-black",
                    isFrame20 ? "shadow-[0px_4px_28px_0px_rgba(0,0,0,0.22)]" : "",
                    isFrame20 ? "left-[130px]" : "left-[64px]"
                )}
            >
                <div className="absolute inset-0">
                    <Image
                        src={images.center}
                        alt="Card Center"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div >
    );
}
