import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700", "800"] });

export function WatermarkText({ text, top, isDark }: { text: string; top?: boolean; isDark?: boolean }) {
    return (
        <div className={`w-full flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 flex flex-col justify-center ${top ? 'md:-mb-32' : 'my-12 md:my-32'}`}>
            <p
                className={`font-bold text-[80px] md:text-[200px] lg:text-[280px] tracking-tighter lowercase leading-none opacity-[0.2] ${poppins.className} transition-all duration-700`}
                style={{
                    backgroundImage: isDark ? "linear-gradient(to bottom, #6ad2ff, transparent)" : "linear-gradient(to bottom, #ff751f, transparent)",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                }}
            >
                {text}
            </p>
        </div>
    );
}
