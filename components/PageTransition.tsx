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
            if (!href) return;

            // Handle production basePath /heya
            const isProd = process.env.NODE_ENV === 'production';
            const basePath = isProd ? '/heya' : '';
            
            // Get the path relative to the base path for router and comparison
            let cleanPath = href;
            if (basePath && href.startsWith(basePath)) {
                cleanPath = href.slice(basePath.length) || '/';
            }
            if (!cleanPath.startsWith('/') && !cleanPath.startsWith('#')) {
                cleanPath = '/' + cleanPath;
            }

            // Extract just the path part for comparison (strip hash)
            const [pathOnly] = cleanPath.split('#');

            // Only intercept internal links that aren't purely hashes on the same page
            const isInternal = href.startsWith("/") || (basePath && href.startsWith(basePath));
            const isTargetBlank = target.getAttribute("target") === "_blank";
            const isSamePageHash = href.startsWith("#") || (pathOnly === pathname && href.includes("#"));

            if (isInternal && !isTargetBlank && !isSamePageHash && pathOnly !== pathname) {
                e.preventDefault();
                setDestination(cleanPath);
                setIsNavigating(true);
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
                            // Once the screen is purely black (fade out is complete), navigate!
                            if (isNavigating) {
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
