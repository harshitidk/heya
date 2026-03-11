"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate progress while actual assets load
        const startTime = Date.now();
        const minDuration = 1800; // faster loader duration (under 2s)

        let progressInterval: NodeJS.Timeout;
        let finished = false;

        // Animate progress from 0 to ~90 quickly, then slow down
        progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90 && !finished) return prev + 0.3;
                if (prev >= 100) return 100;
                // Ease-out progress curve
                const increment = Math.max(0.5, (100 - prev) * 0.08);
                return Math.min(prev + increment, finished ? 100 : 92);
            });
        }, 30);

        // Wait for all images and assets to load
        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minDuration - elapsed);

            setTimeout(() => {
                finished = true;
                // Quickly finish to 100
                const finishInterval = setInterval(() => {
                    setProgress((prev) => {
                        if (prev >= 100) {
                            clearInterval(finishInterval);
                            setTimeout(() => setIsLoading(false), 300);
                            return 100;
                        }
                        return prev + 4;
                    });
                }, 20);
            }, remaining);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearInterval(progressInterval);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="preloader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFDFD]"
                    >
                        {/* Static subtle background gradients for performance instead of animated extreme blurs */}
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none"
                            style={{ background: "radial-gradient(circle, #FFC739 0%, transparent 70%)" }} />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.05] pointer-events-none"
                            style={{ background: "radial-gradient(circle, #FF6666 0%, transparent 70%)" }} />

                        {/* Main content */}
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Animated logo / name */}
                            <motion.div
                                className="flex flex-col items-center gap-2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Static elegant dots replacing complex math animations for performance */}
                                <div className="flex gap-2 mb-4">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{ background: `linear-gradient(135deg, #FFC739, #EB3B14)` }}
                                            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>

                                <h2
                                    className="text-[20px] md:text-[24px] font-bold tracking-tight"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(100.496deg, rgb(255, 199, 57) 8.3744%, rgb(235, 59, 20) 49.999%, rgb(255, 195, 16) 107.26%)",
                                        color: "transparent",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                    }}
                                >
                                    harshit.
                                </h2>
                            </motion.div>

                            {/* Progress bar */}
                            <motion.div
                                className="relative w-48 md:w-56 h-[3px] rounded-full overflow-hidden"
                                style={{ background: "rgba(21, 21, 21, 0.06)" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.2,
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-out"
                                    style={{
                                        background: "linear-gradient(90deg, #FFC739 0%, #EB3B14 50%, #FFC310 100%)",
                                        width: `${progress}%`,
                                    }}
                                />
                            </motion.div>

                            {/* Percentage */}
                            <motion.p
                                className="text-[11px] tracking-[3px] uppercase font-medium"
                                style={{ color: "rgba(21, 21, 21, 0.3)" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                {Math.round(progress)}%
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Always render children so assets start loading immediately */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: isLoading ? 0 : 1,
                    y: isLoading ? 20 : 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: isLoading ? 0 : 0.1,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default Preloader;
