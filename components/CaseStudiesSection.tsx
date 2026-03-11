import Image from "next/image";
import { Poppins } from "next/font/google";

import micOff from "@/public/assets/mic_off.png";
import chatHistory from "@/public/assets/chat_history.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export function CaseStudiesSection() {
    return (
        <section className="relative w-full max-w-[1250px] mx-auto py-24 px-4 md:px-8 z-10 flex flex-col items-center">

            {/* Background container red/orange */}
            <div className="w-full relative rounded-[60px] md:rounded-[100px] overflow-hidden bg-gradient-to-b from-[#ff6655] via-[#ff3a3a] to-[#e71f00] p-8 py-16 md:p-24 shadow-[0px_-6px_32px_0px_rgba(255,63,63,0.22)] border-[10px] md:border-[16px] border-[#ff8181]">

                {/* Title */}
                <div className="flex flex-col items-center justify-center text-center text-white mb-16 md:mb-24 z-10 relative">
                    <p className={`text-[#fde3e3] text-[18px] md:text-[24px] lg:text-[26px] tracking-tight ${poppins.className}`}>
                        solved a few problems
                    </p>
                    <h2 className={`font-bold text-[32px] md:text-[42px] lg:text-[48px] tracking-tight ${poppins.className}`}>
                        Fictional Case studies
                    </h2>
                </div>

                {/* Content Box */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">

                    {/* Card 1 */}
                    <div className="flex flex-col items-center gap-4 group cursor-pointer">
                        <div className="w-[280px] md:w-[350px] lg:w-[400px] h-[180px] md:h-[220px] bg-gradient-to-b from-white to-[#ff5252] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0px_34px_48px_0px_rgba(0,0,0,0.24)] border-2 border-white relative transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-300">
                            {/* mic_off image */}
                            <Image src={micOff} fill className="object-contain" alt="mic off preview" />
                        </div>
                        <p className={`font-semibold text-white tracking-tight text-[16px] md:text-[18px] lowercase ${poppins.className}`}>
                            mic_off.pdf
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center gap-4 group cursor-pointer mt-0 lg:mt-16">
                        <div className="w-[280px] md:w-[350px] lg:w-[400px] h-[180px] md:h-[220px] bg-gradient-to-b from-white to-[#ff5252] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0px_34px_48px_0px_rgba(0,0,0,0.24)] border-2 border-white relative transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-300">
                            {/* chat history image */}
                            <Image src={chatHistory} fill className="object-contain" alt="chat history preview" />
                        </div>
                        <p className={`font-semibold text-white tracking-tight text-[16px] md:text-[18px] lowercase ${poppins.className}`}>
                            chat_history.pdf
                        </p>
                    </div>

                </div>



            </div>

        </section>
    );
}
