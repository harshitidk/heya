import Image from "next/image";
import { ImageCards } from "@/components/ImageCards";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-12 -mt-20">
      <Image
        src="/background.svg"
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <ImageCards
        variant="frame19"
        className="scale-[0.96]"
        images={{
          left: "/card-left.png",
          right: "/card-right.png",
          center: "/card-center.png",
        }}
      />

      {/* Text Content */}
      <div className="flex flex-col items-center gap-3 text-center scale-[0.8]">
        <p className="font-semibold text-[62px] leading-none tracking-[-1.24px] lowercase">
          <span className="text-[#dca500]">hii, i’m </span>
          <span className="text-[#ba8b00]">harshit saidaniya</span>
        </p>
        <p className="font-semibold text-[24px] leading-[1.64] tracking-[-0.48px] uppercase text-[#828282]">
          a product designer
        </p>
      </div>
    </main>
  );
}
