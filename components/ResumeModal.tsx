"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import projSpotifyResume from "@/public/assets/proj-spotify-resume.png";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    resumeLink?: string;
    resumeImage?: string | StaticImageData;
}

export function ResumeModal({ 
    isOpen, 
    onClose, 
    resumeLink = "https://drive.google.com/file/d/1bH31bh2zGYQScjkHK_QEjQ7BlIDO0fBB/view?usp=sharing",
    resumeImage = projSpotifyResume
}: ResumeModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 sm:px-12 py-8 cursor-zoom-out"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-[10000] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors rounded-full p-2 cursor-pointer"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <motion.div
                        className="relative w-full max-w-[700px] h-[85vh] sm:h-[90vh] flex flex-col gap-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-1 w-full">
                            <Image
                                src={resumeImage}
                                alt="Spotify Style Resume - Harshit Heya"
                                fill
                                className="object-contain rounded-[20px]"
                                sizes="(max-width: 768px) 100vw, 700px"
                                priority
                            />
                        </div>
                        
                        <a 
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-center flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl mb-4"
                        >
                            <FileText size={18} />
                            view pdf
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
