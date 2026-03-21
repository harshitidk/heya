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
            // Skip external links, target blank, or simple anchor links
            if (!href || href.startsWith("http") || target.getAttribute("target") === "_blank" || href.startsWith("#")) return;

            try {
                // IMPORTANT: Stop Next.js and others from handling this click instantly
                e.preventDefault();
                e.stopPropagation();

                // Use URL constructor for consistent parsing
                const url = new URL(href, window.location.origin);
                let cleanPath = url.pathname;
                
                // DYNAMIC BASE PATH DETECTION
                const fullPath = window.location.pathname;
                const hookPath = pathname || "/";
                
                let detectedBasePath = "";
                if (fullPath.includes(hookPath) && hookPath !== "/") {
                    detectedBasePath = fullPath.substring(0, fullPath.indexOf(hookPath));
                } else if (fullPath !== hookPath && hookPath === "/") {
                    detectedBasePath = fullPath.endsWith("/") ? fullPath.slice(0, -1) : fullPath;
                }

                // Strip detected basePath before pushing to router
                if (detectedBasePath && cleanPath.startsWith(detectedBasePath)) {
                    cleanPath = cleanPath.slice(detectedBasePath.length);
                }
                
                if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

                // Normalize trailing slash
                let targetPathOnly = cleanPath;
                if (!targetPathOnly.endsWith('/') && !targetPathOnly.includes('.')) {
                    targetPathOnly += '/';
                }
                
                const fullDestination = targetPathOnly + url.search + url.hash;

                // Check if we are already on this page to avoid unnecessary transitions
                if (targetPathOnly !== hookPath) {
                    setDestination(fullDestination);
                    setIsNavigating(true);
                }
            } catch (err) {
                console.error("Navigation error:", err);
            }
        };

        // Use capture phase to intercept before Next.js Link handlers
        document.addEventListener("click", handleClick, { capture: true });
        return () => document.removeEventListener("click", handleClick, { capture: true });
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
                                // Now we only push manually after the transition overlay is full
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
