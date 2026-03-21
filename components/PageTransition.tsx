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
            if (!href || href.startsWith("http") || target.getAttribute("target") === "_blank") return;
            try {
                // Detect and strip the base path if it exists
                const basePath = '/heya';
                const url = new URL(href, window.location.origin);
                let cleanPath = url.pathname;
                
                if (cleanPath.startsWith(basePath)) {
                    cleanPath = cleanPath.slice(basePath.length);
                }
                
                // Ensure starts with /
                if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

                // Normalize trailing slash to match next.config settings
                let pathOnly = cleanPath;
                if (!pathOnly.endsWith('/') && !pathOnly.includes('.')) {
                    pathOnly += '/';
                }
                
                const fullDestination = pathOnly + url.search + url.hash;

                // Only navigate if it's a different page and not a simple same-page hash link
                if (pathOnly !== pathname && !href.startsWith("#")) {
                    e.preventDefault();
                    setDestination(fullDestination);
                    setIsNavigating(true);
                }
            } catch (err) {
                // Not a valid URL or other error, let default behavior happen
                console.error("Navigation error:", err);
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [pathname]);

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
                                router.push(destination);
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
