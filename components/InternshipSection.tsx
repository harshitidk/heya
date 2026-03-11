import Image from "next/image";
import { Poppins } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

import makeMyFit from "@/public/assets/make_my_fit.png";
import linkedinPost from "@/public/assets/linkedin_post.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function InternshipSection() {
    return (
        <section className="relative w-full max-w-[1250px] mx-auto py-24 px-4 md:px-8 z-10 flex flex-col items-center">

            {/* Background container red/orange */}
            <div className="w-full relative rounded-[60px] md:rounded-[100px] overflow-hidden bg-gradient-to-b from-[#ff6655] via-[#ff3a3a] to-[#e71f00] pt-16 pb-24 px-6 md:pt-24 md:pb-32 md:px-24 shadow-[0px_-6px_32px_0px_rgba(255,63,63,0.22)] border-[10px] md:border-[16px] border-[#ff8181] flex flex-col items-center">

                {/* Title */}
                <div className="flex flex-col items-center justify-center text-center text-white mb-20 z-10 relative">
                    <p className={`text-[#fde3e3] text-[18px] md:text-[24px] lg:text-[26px] tracking-tight ${poppins.className}`}>
                        from Pitching an idea to
                    </p>
                    <h2 className={`font-bold text-[32px] md:text-[42px] lg:text-[48px] tracking-tight ${poppins.className}`}>
                        getting a summer internship
                    </h2>
                </div>

                {/* Content Top */}
                <div className="flex flex-col items-center gap-6 mb-24 md:mb-32 relative z-10 w-full md:max-w-[550px]">
                    <div className="w-full aspect-[16/9] bg-white rounded-[20px] md:rounded-[36px] overflow-hidden shadow-2xl border-4 md:border-8 border-white relative cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        <Image src={makeMyFit} fill className="object-cover absolute inset-0" alt="Make my fit preview" />
                    </div>
                    <p className={`font-semibold text-white tracking-tight text-[16px] md:text-[18px] lowercase ${poppins.className}`}>
                        make_my_fit.pdf
                    </p>
                </div>

                {/* Content Bottom */}
                <div className="flex flex-col items-center gap-8 relative z-10 w-full lg:max-w-[850px]">
                    <div className="w-full relative rounded-[20px] md:rounded-[32px] border-4 md:border-8 border-[#ffb8b8] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Force to layout responsive by making a relatively contained div */}
                        <div className="relative w-full pb-[30%]">
                            {/* Adjust PB depending on image ratio, assuming the linkedin post is wide */}
                            <Image src={linkedinPost} fill className="object-cover" alt="LinkedIn Post preview" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <p className={`font-semibold text-white tracking-tight text-[16px] md:text-[20px] lowercase ${poppins.className}`}>
                            Linkedin post where it all began
                        </p>
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </div>

            </div>

        </section>
    );
}
