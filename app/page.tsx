import Image from "next/image";
import { ImageCards } from "@/components/ImageCards";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start gap-12 pt-24">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src="/assets/background.svg"
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
          left: "/assets/card-left.png",
          right: "/assets/card-right.png",
          center: "/assets/card-center.png",
        }}
      />

      {/* Text Content */}
      <div className="flex flex-col items-center gap-3 text-center scale-[0.8] -mt-12">
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
