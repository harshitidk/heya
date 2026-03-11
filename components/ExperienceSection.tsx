import { Bowlby_One_SC, Poppins } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
};

function ExperienceRow({ company, role, roleType, duration, timeline, isDark, showArrow }: ExperienceRowProps) {
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
        <div className={`w-full group cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 ${isDark ? 'border-[#002277] hover:bg-[#07132b]' : 'border-[#fff5f5] hover:bg-[#fffcfc]'} py-6 px-4 md:px-8 gap-4 md:gap-0 hover:shadow-sm hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 rounded-[16px] ${poppins.className}`}>
            {/* Company Name */}
            <div className="flex items-center gap-2 md:w-[40%] shrink-0">
                <h3 className={`${isDark ? 'text-[#f6f6f6]' : 'text-[#eb502d]'} text-[20px] md:text-[24px] lg:text-[28px] font-medium tracking-tight transition-colors duration-700 whitespace-nowrap`}>
                    {company}
                </h3>
                {showArrow !== false && (
                    <ArrowUpRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#eb502d]'} opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0`} />
                )}
            </div>

            {/* Role Pill */}
            <div className="md:w-[25%] flex justify-start md:justify-center shrink-0">
                <div className={`px-4 py-2 rounded-full ${currentStyles.bg}`}>
                    <p className={`font-medium text-[14px] md:text-[18px] lg:text-[20px] tracking-tight ${currentStyles.text} whitespace-nowrap`}>
                        {role}
                    </p>
                </div>
            </div>

            {/* Timing Details */}
            <div className={`flex items-center justify-start md:justify-end gap-3 md:gap-6 md:w-[35%] shrink-0 ${isDark ? 'text-[#dcdcdc]' : 'text-[#787878]'} opacity-90 transition-colors duration-700`}>
                <p className="font-bold text-[14px] md:text-[18px] lg:text-[20px] tracking-tight whitespace-nowrap">
                    {duration}
                </p>
                <div className={`w-[1px] md:w-[20px] h-[16px] md:h-[1px] shrink-0 ${isDark ? 'bg-[#555]' : 'bg-[#ddd]'}`} />
                <p className="font-medium text-[14px] md:text-[18px] lg:text-[20px] tracking-tight whitespace-nowrap">
                    {timeline}
                </p>
            </div>
        </div>
    );

    if (showArrow !== false) {
        return (
            <Link href="/work" className="w-full block" scroll={true}>
                {content}
            </Link>
        );
    }

    return content;
}

export function ExperienceSection({ isDark }: { isDark?: boolean }) {
    const experiences: ExperienceRowProps[] = [
        { company: "Share Right", role: "Product Design Intern", roleType: "product", duration: "3 months", timeline: "nov 25' - jan 26'" },
        { company: "Ology Studios", role: "Freelance Designer", roleType: "freelance", duration: "2 months", timeline: "oct - dec 25'", showArrow: false },
        { company: "Shoppin", role: "Product Design Intern", roleType: "product", duration: "2 month", timeline: "june - july 25'" },
        { company: "Rabbit Invest", role: "Product Design Intern", roleType: "product", duration: "2 month", timeline: "feb - march 25'" },
        { company: "Content Led Labs", role: "Freelance Designer", roleType: "freelance", duration: "3 month", timeline: "april - june", showArrow: false },
        { company: "Urvann", role: "Graphic Design Intern", roleType: "graphic", duration: "2 month", timeline: "feb - march 24'", showArrow: false },
    ];

    return (
        <section className="relative w-full max-w-[1200px] mx-auto py-24 px-4 md:px-8 z-10 flex flex-col items-center">

            {/* Section Title */}
            <div className="flex flex-col items-center justify-center text-center mb-16 hover:scale-105 transition-transform duration-500 cursor-default">
                <h2
                    className={`${bowlby.className} text-[36px] md:text-[50px] lg:text-[60px] text-white tracking-wide uppercase transition-all duration-700`}
                    style={{
                        textShadow: isDark ? "4px 8px 0px #043edc" : "4px 8px 0px #ab3603",
                        WebkitTextStroke: isDark ? "0px transparent" : "2px #dc4504"
                    }}
                >
                    EXPERIENCE
                </h2>
                <p
                    className={`mt-2 font-medium text-[12px] md:text-[16px] tracking-[2px] uppercase ${poppins.className} transition-all duration-700`}
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

            {/* Go to Work Section Button */}
            <Link href="/work" scroll={true} className={`mt-16 ${isDark ? 'bg-[#001c57] hover:bg-[#00277a] shadow-none' : 'bg-[#fff4f4] hover:bg-[#ffeaea] shadow-[0_4px_14px_0_rgba(255,102,102,0.39)] hover:shadow-[0_6px_20px_rgba(255,102,102,0.5)]'} hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer px-8 py-3 rounded-full flex items-center justify-center gap-2 group`}>
                <p className={`font-medium ${isDark ? 'text-[#dde8ff]' : 'text-[#ff2828]'} text-[16px] tracking-tight lowercase ${poppins.className} transition-colors duration-700`}>
                    Go to work section
                </p>
                <ArrowUpRight className={`w-4 h-4 ${isDark ? 'text-[#dde8ff]' : 'text-[#ff2828]'} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300`} />
            </Link>

        </section>
    );
}
