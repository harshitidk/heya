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

            // Stop native and Next.js handlers
            e.preventDefault();
            e.stopPropagation();

            // We need to parse the URL to handle base path correctly
            try {
                const url = new URL(href, window.location.origin);
                let path = url.pathname;

                // CRITICAL: Handle production subfolder prefix
                // If it starts with /heya, we MUST strip it before router.push
                const prefix = "/heya";
                if (path === prefix || path.startsWith(prefix + "/")) {
                    path = path.slice(prefix.length);
                }

                // Ensure path starts with / after stripping
                if (!path.startsWith("/")) {
                    path = "/" + path;
                }

                // Ensure trailing slash for consistency (trailingSlash: true)
                if (!path.endsWith("/") && !path.includes(".")) {
                    path += "/";
                }

                const finalDestination = path + url.search + url.hash;

                // Sync with current path to avoid redundant transitions
                const currentPath = pathname || "/";
                const normalizedCurrent = currentPath.endsWith("/") ? currentPath : currentPath + "/";

                if (finalDestination !== normalizedCurrent) {
                    setDestination(finalDestination);
                    setIsNavigating(true);
                }
            } catch (err) {
                console.error("Link parsing error:", err);
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
