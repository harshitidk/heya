import Image from "next/image";
import { Bowlby_One_SC, Poppins, Nanum_Pen_Script } from "next/font/google";
import { ImageCards } from "@/components/ImageCards";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WorkSection } from "@/components/WorkSection";
import backgroundSvg from "@/public/assets/background.svg";
import cardLeft from "@/public/assets/card-left.png";
import cardRight from "@/public/assets/card-right.png";
import cardCenter from "@/public/assets/card-center.png";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

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
      <div className="relative">
        <ImageCards
          variant="frame19"
          className="scale-[0.96]"
          images={{
            left: cardLeft,
            right: cardRight,
            center: cardCenter,
          }}
        />

      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center -gap-[0px] text-center -mt-8 z-10 px-4 w-full relative">
        <h1
          data-text="HII, I’M HARSHIT SAIDANIYA"
          className={`${bowlby.className} relative leading-[1.02] text-[40px] md:text-[48px] text-center -tracking-[0px] drop-shadow-[0px_5px_11.8px_rgba(255,102,102,0.52)] uppercase before:content-[attr(data-text)] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-[-1] before:text-transparent before:[-webkit-text-stroke:2px_white]`}
          style={{
            backgroundImage: "linear-gradient(100.496deg, rgb(255, 199, 57) 8.3744%, rgba(235, 20, 20, 1) 49.999%, rgb(255, 195, 16) 107.26%)",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          HII, I’M HARSHIT SAIDANIYA
        </h1>
        <div className="relative inline-block mx-auto mt-2">
          {/* Desktop Version */}
          <img
            src="/assets/frame90.svg"
            alt="and i am a product designer who vibe codes for fun."
            width={541}
            height={92}
            className="w-full hidden md:inline-block w-[541px] h-auto"
          />
          {/* Mobile Version */}
          <img
            src="/assets/frame90-md.svg"
            alt="and i am a product designer who vibe codes for fun."
            width={541}
            height={92}
            className="w-full max-w-[340px] inline-block md:hidden h-auto"
          />


        </div>
      </div>
      <div
        className="w-full relative z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #f9f9f9 150px, #f9f9f9 100%)' }}
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
