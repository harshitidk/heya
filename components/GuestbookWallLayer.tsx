"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { Nanum_Pen_Script } from "next/font/google";
import { useTheme } from "@/components/ThemeContext";

const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
    id: string;
    comment: string;
    name: string;
    rotation: number;
}

interface PositionedNote extends Note {
    top: string;
    left: string;
    fontSize: string;
    baseOpacity: number;
    delay: number;
}

export function GuestbookWallLayer() {
    const { isDark } = useTheme();
    const [notes, setNotes] = useState<PositionedNote[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from('guestbook')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(30);
            
            if (error || !data) return;

            // Pick 6-12 notes randomly
            const numNotes = Math.floor(Math.random() * 7) + 6; 
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, numNotes);

            // Regions that strictly avoid the center (hero content area)
            const regions = [
                { t: [5, 20], l: [2, 25] },   // Top-Left
                { t: [5, 20], l: [75, 98] },  // Top-Right
                { t: [30, 70], l: [2, 12] },  // Left Edge
                { t: [30, 70], l: [88, 98] }, // Right Edge
                { t: [80, 95], l: [2, 25] },  // Bottom-Left
                { t: [80, 95], l: [75, 98] }, // Bottom-Right
            ];

            const positioned = selected.map((note) => {
                const region = regions[Math.floor(Math.random() * regions.length)];
                
                const top = Math.random() * (region.t[1] - region.t[0]) + region.t[0];
                const left = Math.random() * (region.l[1] - region.l[0]) + region.l[0];
                
                const baseFontSize = Math.floor(Math.random() * (18 - 14 + 1)) + 14; // 14px to 18px base
                const baseOpacity = Math.random() * (0.45 - 0.25) + 0.25; // 25% to 45% opacity
                
                const delay = Math.random() * 2;
                const rotation = (Math.random() * 16) - 8; // -8 to +8 rotation

                return {
                    ...note,
                    top: `${top}%`,
                    left: `${left}%`,
                    fontSize: `${baseFontSize}px`,
                    baseOpacity,
                    delay,
                    rotation
                };
            });
            
            setNotes(positioned);
        };
        
        fetchNotes();
        
        // Listen for new notes being added to refetch
        const handleRefresh = () => fetchNotes();
        window.addEventListener("refresh-guestbook-layer", handleRefresh);
        return () => window.removeEventListener("refresh-guestbook-layer", handleRefresh);
    }, []);

    if (!mounted) return null;

    const handleNoteClick = () => {
        window.dispatchEvent(new Event("open-guestbook"));
    };

    return (
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden" aria-hidden="true">
            {notes.map((note) => (
                <motion.div
                    key={note.id}
                    initial={{ opacity: 0, scale: 0.9, rotate: note.rotation, y: 10 }}
                    animate={{ 
                        opacity: isDark ? note.baseOpacity * 0.8 : note.baseOpacity, 
                        scale: 1, 
                        rotate: note.rotation,
                        y: 0 
                    }}
                    whileHover={{ 
                        opacity: 1, 
                        scale: 1.08, 
                        zIndex: 50,
                        rotate: 0,
                    }}
                    onClick={handleNoteClick}
                    transition={{ 
                        opacity: { duration: 1.5, delay: note.delay },
                        scale: { duration: 1.5, delay: note.delay },
                        y: { duration: 1.5, delay: note.delay },
                        rotate: { duration: 0 }
                    }}
                    className={`absolute pointer-events-auto cursor-pointer flex flex-col items-center ${nanum.className} 
                        ${isDark ? 'text-white/60 hover:text-white' : 'text-slate-700/60 hover:text-slate-900'}
                        transition-colors duration-300`}
                    style={{
                        top: note.top,
                        left: note.left,
                        fontSize: `clamp(10px, 1.2vw, ${note.fontSize})`,
                        textShadow: isDark ? '0 4px 12px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.05)',
                        transformOrigin: 'center center'
                    }}
                >
                    <span className="leading-tight text-center max-w-[140px] sm:max-w-[220px] break-words">
                        "{note.comment}"
                    </span>
                    <span className="text-[0.65em] opacity-70 mt-1 uppercase tracking-widest font-sans font-bold">
                        - {note.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
