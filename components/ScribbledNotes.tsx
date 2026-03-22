"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Nanum_Pen_Script } from "next/font/google";
import { supabase } from "@/lib/supabase";
import { useTheme } from "./ThemeContext";

const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
  id: string;
  comment: string;
}

interface ScribblePos {
  id: string;
  text: string;
  top: string;
  left: string;
  rotate: number;
  scale: number;
  opacity: number;
}

export function ScribbledNotes() {
  const { isDark } = useTheme();
  const [scribbles, setScribbles] = useState<ScribblePos[]>([]);

  useEffect(() => {
    async function fetchScribbles() {
      const { data, error } = await supabase
        .from('guestbook')
        .select('id, comment')
        .order('created_at', { ascending: false })
        .limit(15);

      if (!error && data) {
        const mapped = data.map((note: Note) => ({
          id: note.id,
          text: note.comment.length > 50 ? note.comment.substring(0, 47) + "..." : note.comment,
          // Random positioning logic
          top: `${Math.floor(Math.random() * 80) + 10}%`,
          left: `${Math.floor(Math.random() * 80) + 10}%`,
          rotate: (Math.random() * 40) - 20,
          scale: 0.8 + (Math.random() * 0.5),
          opacity: 0.3 + (Math.random() * 0.3),
        }));
        setScribbles(mapped);
      }
    }

    fetchScribbles();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {scribbles.map((scribble) => (
        <motion.div
          key={scribble.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: scribble.opacity, scale: scribble.scale }}
          transition={{ duration: 1.5, delay: Math.random() * 2 }}
          style={{
            position: "absolute",
            top: scribble.top,
            left: scribble.left,
            rotate: `${scribble.rotate}deg`,
          }}
          className={`${nanum.className} ${isDark ? 'text-white/40' : 'text-black/20'} text-[18px] sm:text-[24px] whitespace-nowrap`}
        >
          {scribble.text}
        </motion.div>
      ))}
    </div>
  );
}
