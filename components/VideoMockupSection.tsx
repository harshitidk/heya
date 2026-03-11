import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export function VideoMockupSection() {
    return (
        <section className="relative w-full max-w-[1000px] mx-auto px-4 z-20 flex justify-center mt-[-4rem] md:mt-2 mb-12">
            <div className="w-[850px] max-w-full aspect-[16/10] bg-white rounded-[24px] md:rounded-[38px] border-8 md:border-[15px] border-white shadow-[0px_10px_50px_rgba(0,0,0,0.1)] overflow-hidden relative">
                <div className="w-full h-full bg-[#f3f3f3] flex flex-col items-center justify-center rounded-[16px] md:rounded-[24px]">
                    <p className={`text-[#888] text-[18px] md:text-[24px] ${poppins.className}`}>
                        [ Video Placeholder: Design Vid 1 ]
                    </p>
                    <p className={`text-[#aaa] text-[14px] mt-2 ${poppins.className}`}>
                        Replace this placeholder with your actual `&lt;video&gt;` tag
                    </p>
                </div>
            </div>
        </section>
    );
}
