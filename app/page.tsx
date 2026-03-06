import Image from "next/image";
import { Bowlby_One_SC, Poppins, Nanum_Pen_Script } from "next/font/google";
import { ImageCards } from "@/components/ImageCards";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WorkSection } from "@/components/WorkSection";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import cardLeft from "@/public/assets/photo-left.jpg";
import cardRight from "@/public/assets/photo-right.jpg";
import cardCenter from "@/public/assets/photo-center.jpg";
import frame90Desktop from "@/public/assets/frame90.svg";
import frame90Mobile from "@/public/assets/frame90-md.svg";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-start gap-12 pt-24 bg-[#FDFDFD]">
      <div className="absolute top-10 left-0 w-full h-[90vh] flex items-center justify-center pointer-events-none z-0 select-none">
        <h1
          className="text-[38vw] font-black text-[#151515] opacity-[0.03] tracking-tighter leading-none pt-24 md:pt-0 transform translate-y-[32%] md:translate-y-0"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
          }}
        >
          heya
        </h1>
      </div>

      <div className="relative z-10">
        <ImageCards
          variant="frame19"
          className="scale-[0.96]"
          images={{
            left: cardLeft,
            center: cardCenter,
            right: cardRight,
          }}
        />

      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center -gap-[0px] text-center -mt-8 z-10 px-4 w-full relative">
        <AnimatedHeadline />
        <div className="relative inline-block mx-auto mt-2">
          {/* Desktop Version */}
          <img
            src={frame90Desktop.src}
            alt="and i am a product designer who vibe codes for fun."
            width={541}
            height={92}
            className="w-full hidden md:inline-block w-[541px] h-auto"
          />
          {/* Mobile Version */}
          <img
            src={frame90Mobile.src}
            alt="and i am a product designer who vibe codes for fun."
            width={541}
            height={92}
            className="w-full max-w-[340px] inline-block md:hidden h-auto"
          />


        </div>
      </div>
      <div
        className="w-full relative z-10"
      >
        {/* Company Logos
        <div className="w-full flex flex-col items-center gap-0 pt-16 md:pt-32 pb-4 md:pb-8">
          <p className="text-[12px] uppercase tracking-[2px] text-[#aaa] font-medium relative top-5">startups i have contributed to</p>
          <LogoMarquee />
        </div>
        */}

        <WorkSection />
      </div>
    </main>
  );
}
