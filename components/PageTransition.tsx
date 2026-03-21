"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeContext";

export function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { isDark } = useTheme();
    const [isNavigating, setIsNavigating] = useState(false);
    const [destination, setDestination] = useState<string | null>(null);

    useEffect(() => {
        // As soon as the pathname changes, we are on the new page.
        // So we should fade the overlay out.
        setIsNavigating(false);
        setDestination(null);
    }, [pathname]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Find the closest anchor tag
            const target = (e.target as Element).closest("a");
            if (!target) return;

            const href = target.getAttribute("href");
            // Only intercept internal links that aren't purely hashes
            if (!href || href.startsWith("http") || target.getAttribute("target") === "_blank" || href.startsWith("#")) return;

            // Stop default behavior and Next.js internal handlers
            e.preventDefault();
            e.stopPropagation();

            // Store the raw href as the destination
            setDestination(href);
            setIsNavigating(true);
        };

        // Use capture phase to ensure we intercept first
        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, []); // Removed pathname dependency as the listener doesn't need it

    return (
        <>
            <AnimatePresence>
                {isNavigating && destination && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onAnimationComplete={() => {
                            if (isNavigating && destination) {
                                // USE NATIVE NAVIGATION
                                // This solves all basePath duplication issues because we use the href 
                                // that Next.js rendered directly in the DOM (which already has /heya/)
                                window.location.assign(destination);
                            }
                        }}
                        className={`fixed inset-0 z-[99999] pointer-events-none ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'}`}
                    />
                )}
            </AnimatePresence>

            {/* Entrance Animation Overlay */}
            <motion.div
                key={pathname + "-enter"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className={`fixed inset-0 z-[99998] pointer-events-none ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'}`}
            />

            <main className="w-full flex-1">
                {children}
            </main>
        </>
    );
}
