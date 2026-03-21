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
            if (!href || href.startsWith("http") || target.getAttribute("target") === "_blank" || href.startsWith("#")) return;

            // Block default to handle transition
            e.preventDefault();
            e.stopPropagation();

            try {
                const url = new URL(href, window.location.origin);
                let path = url.pathname;
                
                // CRITICAL: Next.js App Router prepends basePath to everything passed to router.push.
                // Since the DOM already has the basePath, we MUST strip it completely.
                const prefix = "/heya";
                
                // Remove prefix regardless of trailing slash or double slashes
                if (path.startsWith(prefix)) {
                    path = path.slice(prefix.length);
                }
                
                // Ensure starts with /
                if (!path.startsWith("/")) path = "/" + path;
                
                // Ensure trailing slash for static export consistency (trailingSlash: true)
                if (!path.endsWith("/") && !path.includes(".")) {
                    path += "/";
                }

                const finalDestination = path + url.search + url.hash;

                // Only navigate if it's a different page
                const currentPath = pathname || "/";
                const normalizedCurrent = currentPath.endsWith("/") ? currentPath : currentPath + "/";
                
                if (finalDestination !== normalizedCurrent) {
                    setDestination(finalDestination);
                    setIsNavigating(true);
                }
            } catch (err) {
                console.error("Navigation error:", err);
                // Fallback to native navigation if parsing fails
                window.location.assign(href);
            }
        };

        // Use capture phase to ensure we intercept first
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
                                // Important: Back to router.push for SPA feel,
                                // but with the prefix already stripped.
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
}
