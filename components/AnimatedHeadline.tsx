"use client";

import { Bowlby_One_SC } from "next/font/google";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });

const TEXT = "HII, I'M HARSHIT SAIDANIYA";

const comicStyle = {
    fill: {
        color: "#ffffff",
    } as React.CSSProperties,
    backdrop: {
        color: "#e82222",
        WebkitTextStroke: "6px #e82222",
        textShadow:
            "3px 3px 0px #e82222, -1px -1px 0 #e82222, 1px -1px 0 #e82222, -1px 1px 0 #e82222, 8px 8px 12px rgba(0,0,0,0.3)",
    } as React.CSSProperties,
};

export function AnimatedHeadline() {
    return (
        <div className="relative inline-block w-full text-center">
            {/* Invisible placeholder to reserve exact height/width */}
            <h1
                className={`${bowlby.className} leading-[1.3] text-[32px] md:text-[48px] -tracking-[0.5px] uppercase invisible opacity-0 pointer-events-none`}
            >
                {TEXT}
            </h1>

            {/* Static Headline */}
            <h1
                className={`${bowlby.className} absolute top-0 left-0 w-full h-full leading-[1.3] text-[32px] md:text-[48px] -tracking-[0.5px] uppercase`}
            >
                {TEXT.split(" ").map((word, i, arr) => (
                    <span key={i} className="inline-block whitespace-pre relative">
                        <span className="relative inline-block">
                            {/* Shadow / Stroke Layer (Behind) */}
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 -z-10"
                                style={comicStyle.backdrop}
                            >
                                {word}
                            </span>

                            {/* Fill Layer (Front) */}
                            <span
                                className="relative z-10"
                                style={comicStyle.fill}
                            >
                                {word}
                            </span>
                        </span>
                        {i !== arr.length - 1 && " "}
                    </span>
                ))}
            </h1>
        </div>
    );
}
