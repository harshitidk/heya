import { Bowlby_One_SC, Poppins } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useTheme } from "./ThemeContext";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type ExperienceRowProps = {
    company: string;
    role: string;
    roleType: "product" | "freelance" | "graphic";
    duration: string;
    timeline: string;
    isDark?: boolean;
    showArrow?: boolean;
    href?: string;
};


function ExperienceRow({ company, role, roleType, duration, timeline, isDark, showArrow, href }: ExperienceRowProps) {
    
    // Styles based on role type
    const typeStyles = isDark ? {
        product: { bg: "bg-[#362600]", text: "text-[#d59202]" },
        freelance: { bg: "bg-[#001f5a]", text: "text-[#4eb8ff]" },
        graphic: { bg: "bg-[#082a00]", text: "text-[#03a300]" },
    } : {
        product: { bg: "bg-[#fff9eb]", text: "text-[#d59202]" },
        freelance: { bg: "bg-[#ebf2ff]", text: "text-[#0062a3]" },
        graphic: { bg: "bg-[#efffeb]", text: "text-[#03a300]" },
    };

    const currentStyles = typeStyles[roleType];

    const content = (
        <div className={cn(
            "w-full group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between",
            "border-b-2 py-6 px-4 sm:px-8 gap-4 sm:gap-4 sm:gap-0 transition-all duration-300 rounded-[16px]",
            "hover:shadow-sm hover:scale-[1.02] hover:-translate-y-1",
            isDark ? "border-[#002277] hover:bg-[#07132b]" : "border-[#fff5f5] hover:bg-[#fffcfc]",
            poppins.className
        )}>
            {/* Company Name */}
            <div className="flex items-center gap-2 w-full sm:w-[40%] shrink-0 min-w-0">

                <h3 className={cn(
                    "text-[18px] sm:text-[24px] lg:text-[28px] font-medium tracking-tight transition-colors duration-700 whitespace-nowrap overflow-hidden text-ellipsis",
                    isDark ? 'text-[#f6f6f6]' : 'text-[#eb502d]'
                )}>
                    {company}
                </h3>
                {showArrow !== false && (
                    <ArrowUpRight className={cn(
                        "w-5 h-5 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0",
                        isDark ? 'text-white' : 'text-[#eb502d]'
                    )} />
                )}
            </div>

            {/* Role Pill */}
            <div className="w-full sm:w-[25%] flex justify-start sm:justify-center min-w-0">
                <div className={cn("px-4 py-2 rounded-full", currentStyles.bg)}>
                    <p className={cn(
                        "font-medium text-[13px] sm:text-[18px] lg:text-[20px] tracking-tight whitespace-nowrap",
                        currentStyles.text
                    )}>
                        {role}
                    </p>
                </div>
            </div>

            {/* Timing Details */}
            <div className={cn(
                "flex items-center justify-start sm:justify-end gap-3 sm:gap-6 w-full sm:w-[35%] min-w-0 opacity-90 transition-colors duration-700",
                isDark ? 'text-[#dcdcdc]' : 'text-[#787878]'
            )}>

                <p className="font-bold text-[12px] sm:text-[18px] lg:text-[20px] tracking-tight whitespace-nowrap">
                    {duration}
                </p>
                <div className={cn(
                    "w-[1px] sm:w-[20px] h-[16px] sm:h-[1px] shrink-0",
                    isDark ? 'bg-[#555]' : 'bg-[#ddd]'
                )} />
                <p className="font-medium text-[12px] sm:text-[18px] lg:text-[20px] tracking-tight whitespace-nowrap">
                    {timeline}
                </p>
            </div>
        </div>
    );

    return (
        <Link href={href || "/work"} className="w-full block" scroll={true}>
            {content}
        </Link>
    );
}

export function ExperienceSection({ isDark }: { isDark?: boolean }) {
    const experiences: ExperienceRowProps[] = [
        { company: "Share Right", role: "Product Design Intern", roleType: "product", duration: "3 months", timeline: "nov 25' - jan 26'", showArrow: false },
        { company: "Ology Studios", role: "Freelance Designer", roleType: "freelance", duration: "2 months", timeline: "oct - dec 25'", showArrow: false },
        { company: "Zoffers", role: "Product Design Intern", roleType: "product", duration: "2 month", timeline: "aug - sept 25'", href: "/work#zoffers" },
        { company: "Shoppin", role: "Product Design Intern", roleType: "product", duration: "2 month", timeline: "june - july 25'", href: "/work#shoppin" },
        { company: "Rabbit Invest", role: "Product Design Intern", roleType: "product", duration: "2 month", timeline: "feb - march 25'", href: "/work#rabbit-invest" },
        { company: "Content Led Labs", role: "Freelance Designer", roleType: "freelance", duration: "3 month", timeline: "april - june 24'", showArrow: false },
        { company: "Urvann", role: "Graphic Design Intern", roleType: "graphic", duration: "2 month", timeline: "feb - march 24'", showArrow: false },
    ];
    return (
        <section className="relative w-full max-w-[1200px] mx-auto py-24 px-4 sm:px-8 z-10 flex flex-col items-center">

            {/* Section Title */}
            <div className="flex flex-col items-center justify-center text-center mb-16 hover:scale-105 transition-transform duration-500 cursor-default">
                <h2
                    className={`${bowlby.className} text-[32px] sm:text-[50px] lg:text-[60px] text-white tracking-wide uppercase transition-all duration-700`}
                    style={{
                        textShadow: isDark ? "4px 8px 0px #043edc" : "4px 8px 0px #ab3603",
                        WebkitTextStroke: isDark ? "0px transparent" : "2px #dc4504"
                    }}
                >
                    EXPERIENCE
                </h2>
                <p
                    className={`mt-2 font-medium text-[12px] sm:text-[16px] tracking-[2px] uppercase ${poppins.className} transition-all duration-700`}
                    style={isDark ? { color: "#abb8f0" } : {
                        backgroundImage: "linear-gradient(90deg, #e4741f, #bc5100)",
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                    }}
                >
                    [every place where i moved a pixel]
                </p>
            </div>

            {/* Experience List */}
            <div className="w-full flex flex-col">
                {experiences.map((exp, idx) => (
                    <ExperienceRow key={idx} {...exp} isDark={isDark} />
                ))}
            </div>


        </section>
    );
}
