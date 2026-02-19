"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageCardsProps {
    className?: string;
    variant?: "frame19" | "frame20";
    images?: {
        left: string;
        right: string;
        center: string;
    };
}

export function ImageCards({
    className,
    variant = "frame19",
    images = {
        left: "/assets/card-left.png",
        right: "/assets/card-right.png",
        center: "/assets/card-center.png",
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
                isFrame20 ? "w-[331px] h-[172px]" : "w-[220px] h-[172px]",
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
                        ? "left-[0px] top-0 w-[166.73px] h-[172.09px]" // Shifted -42px
                        : "left-[0px] top-[0.03px] w-[148.87px] h-[161.27px]" // Shifted -95px
                )}
            >
                <div
                    className={cn(
                        "flex-none relative overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out",
                        isFrame20 ? "-rotate-[34.08deg]" : "-rotate-[19deg]",
                        "w-[112px] h-[132px]"
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
                        ? "left-[164px] top-0 w-[166.73px] h-[172.09px]" // Shifted -42px
                        : "left-[71px] top-[0.41px] w-[148.87px] h-[161.27px]" // Shifted -95px
                )}
            >
                <div
                    className={cn(
                        "flex-none relative overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out",
                        isFrame20 ? "-rotate-[145.92deg]" : "-rotate-[161deg]",
                        "w-[112px] h-[132px]"
                    )}
                >
                    <div className="absolute inset-0 -scale-y-100">
                        <Image
                            src={images.right}
                            alt="Card Right"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Center Card */}
            <div
                className={cn(
                    "absolute top-0 w-[112px] h-[132px] overflow-clip rounded-[16px] bg-[#ebebeb] transition-all duration-500 ease-in-out",
                    isFrame20 ? "left-[108px]" : "left-[53px]" // Shifted -42px and -95px
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
        </div>
    );
}
