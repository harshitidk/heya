import Image from "next/image";
import { ImageCards } from "@/components/ImageCards";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WorkSection } from "@/components/WorkSection";
import backgroundSvg from "@/public/assets/background.svg";
import cardLeft from "@/public/assets/card-left.png";
import cardRight from "@/public/assets/card-right.png";
import cardCenter from "@/public/assets/card-center.png";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-start gap-12 pt-24">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src={backgroundSvg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <ImageCards
        variant="frame19"
        className="scale-[0.96]"
        images={{
          left: cardLeft,
          right: cardRight,
          center: cardCenter,
        }}
      />

      {/* Text Content */}
      <div className="flex flex-col items-center gap-3 text-center scale-[0.8] -mt-12">
        <p className="font-semibold text-[62px] leading-none tracking-[-1.24px] lowercase">
          <span className="text-[#dca500]">hii, i’m </span>
          <span className="text-[#ba8b00]">harshit saidaniya</span>
        </p>
        <p className="font-semibold text-[24px] leading-[1.64] tracking-[-0.48px] uppercase text-[#828282]">
          product designer
        </p>
      </div>

      {/* Company Logos */}
      <div className="w-full flex flex-col items-center gap-0">
        <p className="text-[12px] uppercase tracking-[2px] text-[#aaa] font-medium relative top-5">startups i have contributed to</p>
        <LogoMarquee />
      </div>

      <WorkSection />
    </main>
  );
}
