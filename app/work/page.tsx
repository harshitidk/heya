import Image from "next/image";
import { WorkSection } from "@/components/WorkSection";
import workBg from "@/public/assets/artwork.png";

export default function WorkPage() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-start">
            {/* Fixed Background Image */}
            <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
                <Image
                    src={workBg}
                    alt="Work Section Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="w-full relative z-10">
                <WorkSection />
            </div>
        </main>
    );
}
