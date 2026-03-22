"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Nanum_Pen_Script } from "next/font/google";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
    id: string;
    comment: string;
}

interface ScribbleProps {
    id: string;
    text: string;
    top: number;
    left: number;
    rotate: number;
    opacity: number;
}

export function ScribbledNotes() {
    const [scribbles, setScribbles] = useState<ScribbleProps[]>([]);

    useEffect(() => {
        const fetchScribbles = async () => {
            const { data, error } = await supabase
                .from('guestbook')
                .select('id, comment')
                .limit(15) // Limiting to 15 scribbles for performance and aesthetic
                .order('created_at', { ascending: false });

            if (!error && data) {
                const mapped = data.map((note: Note) => ({
                    id: note.id,
                    text: note.comment,
                    // Random positions and rotations
                    top: Math.random() * 80 + 10, // 10% to 90%
                    left: Math.random() * 80 + 10, // 10% to 90%
                    rotate: Math.random() * 20 - 10, // -10 to 10 deg
                    opacity: Math.random() * 0.4 + 0.2, // 0.2 to 0.6
                }));
                setScribbles(mapped);
            }
        };

        fetchScribbles();
    }, []);

    if (scribbles.length === 0) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            {scribbles.map((s) => (
                <motion.div
                    key={s.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: s.opacity }}
                    transition={{ duration: 1, delay: Math.random() * 2 }}
                    className={`${nanum.className} absolute text-[12px] sm:text-[14px] text-current lowercase whitespace-pre-wrap max-w-[150px] leading-tight`}
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        rotate: `${s.rotate}deg`,
                        color: "inherit", // inherits from theme-aware parent
                    }}
                >
                    {s.text}
                </motion.div>
            ))}
        </div>
    );
}
