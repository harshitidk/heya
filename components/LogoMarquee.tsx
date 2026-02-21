import Image from "next/image";

import boxology from "@/public/assets/logo/boxology.png";
import ology from "@/public/assets/logo/ology.png";
import rabbit from "@/public/assets/logo/rabbit.png";
import shareright from "@/public/assets/logo/shareright.png";
import shoppin from "@/public/assets/logo/shoppin.jpg";
import urvann from "@/public/assets/logo/urvann.png";
import zoffers from "@/public/assets/logo/zoffers-full.webp";

const logos = [
    { src: boxology, alt: "Boxology", height: 140 },
    { src: ology, alt: "Ology", height: 44 },
    { src: rabbit, alt: "Rabbit", height: 27 },
    { src: shareright, alt: "ShareRight", height: 36 },
    { src: shoppin, alt: "Shoppin", height: 34 },
    { src: urvann, alt: "Urvann", height: 38 },
    { src: zoffers, alt: "Zoffers", height: 70 },
];

export function LogoMarquee() {
    return (
        <div className="w-full overflow-hidden py-2">
            <div className="flex animate-marquee w-max items-center gap-16">
                {/* Render logos twice for seamless loop */}
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center flex-shrink-0"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            height={logo.height}
                            width={Math.round(logo.height * 3)}
                            style={{ height: logo.height, width: "auto" }}
                            className="object-contain opacity-70 grayscale"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
