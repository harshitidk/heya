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

            // Handle production basePath /heya
            const isProd = process.env.NODE_ENV === 'production';
            const basePath = isProd ? '/heya' : '';
            
            try {
                // Use URL constructor to handle normalization
                const url = new URL(href, window.location.origin);
                let cleanPath = url.pathname;
                
                // Strip basePath if present
                if (basePath && cleanPath.startsWith(basePath)) {
                    cleanPath = cleanPath.slice(basePath.length) || '/';
                }
                
                // Ensure starting slash
                if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

                // For the 'destination' we use the relative path for router.push
                const fullDestination = cleanPath + url.search + url.hash;
                const isSamePageHash = (cleanPath === pathname && url.hash !== "");

                if (!isSamePageHash && cleanPath !== pathname) {
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
