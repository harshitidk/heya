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
            const target = (e.target as Element).closest("a");
            if (!target) return;

            // Get the raw href from the anchor tag
            const href = target.getAttribute("href");
            // Only intercept internal links that aren't purely hashes or external
            if (!href || href.startsWith("http") || target.getAttribute("target") === "_blank" || href.startsWith("#")) return;

            // Sync check: Don't transition if already on that page
            const url = new URL(href, window.location.origin);
            if (url.pathname === window.location.pathname) return;

            // Stop default behavior to show our transition
            e.preventDefault();
            e.stopPropagation();

            // 1. Trigger the "Exit" animation (fade-in the overlay)
            setDestination(href);
            setIsNavigating(true);

            // 2. Schedule the mandatory page load after animation
            // We use the raw 'href' because Next.js already prefixed it correctly
            setTimeout(() => {
                window.location.assign(href);
            }, 600); // Slightly longer than the 0.5s transition to ensure visibility
        };

        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
    }, []);

    return (
        <>
            <AnimatePresence>
                {isNavigating && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`fixed inset-0 z-[99999] pointer-events-none ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'}`}
                    />
                )}
            </AnimatePresence>

            {/* Entrance Animation Overlay (Always runs on mount) */}
            <motion.div
                key={pathname + "-enter"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                onAnimationComplete={() => {
                    setIsNavigating(false);
                    setDestination(null);
                }}
                className={`fixed inset-0 z-[99998] pointer-events-none ${isDark ? 'bg-[#0A0E17]' : 'bg-[#FDFDFD]'}`}
            />

            <main className="w-full flex-1">
                {children}
            </main>
        </>
    );
};
