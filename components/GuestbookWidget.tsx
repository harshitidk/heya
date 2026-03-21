"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquareText, PenLine, Sparkles, Smile } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { Poppins, Nanum_Pen_Script } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
    id: string;
    name: string;
    comment: string;
    date: string;
    rotation: number;
}

const DEFAULT_NOTES: Note[] = [];

export function GuestbookWidget() {
    const { isDark } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showWall, setShowWall] = useState(false);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notes, setNotes] = useState<Note[]>(DEFAULT_NOTES);

    const accentGradient = "bg-gradient-to-br from-[#FFC739] via-[#EB3B14] to-[#FFC310]";

    useEffect(() => {
        const handleOpen = () => setIsExpanded(true);
        window.addEventListener("open-guestbook", handleOpen);
        return () => window.removeEventListener("open-guestbook", handleOpen);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem("visitor_notes");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setNotes(parsed);
            } catch (e) {
                console.error("Failed to load notes", e);
            }
        }
    }, []);

    const saveNotes = (newNotes: Note[]) => {
        const customNotes = newNotes;
        localStorage.setItem("visitor_notes", JSON.stringify(customNotes));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setIsSubmitting(true);
        
        const newNote: Note = {
            id: Date.now().toString(),
            name: name.trim() || "Anonymous",
            comment: comment.trim(),
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }),
            rotation: (Math.random() * 6) - 3,
        };

        setTimeout(() => {
            const updatedNotes = [newNote, ...notes];
            setNotes(updatedNotes);
            saveNotes(updatedNotes);
            
            setIsSubmitting(false);
            setName("");
            setComment("");
            setIsExpanded(false);
            setShowWall(true);
        }, 500);
    };

    const glassyBg = isDark ? "bg-[#0A0E17]/40" : "bg-white/40";
    const glassyBorder = isDark ? "border-white/10" : "border-white/60";
    const textColor = isDark ? "text-white" : "text-[#1a1a1a]";

    return (
        <>
            <div className="fixed bottom-24 right-6 sm:bottom-32 sm:right-10 z-[150] pointer-events-none">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            key="expanded"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={`pointer-events-auto backdrop-blur-3xl ${glassyBg} border ${glassyBorder} p-8 rounded-[40px] shadow-[0_32px_80px_-15px_rgba(0,0,0,0.3)] w-[320px] sm:w-[380px] flex flex-col gap-6 relative overflow-hidden`}
                        >
                            <Sparkles className="absolute -top-4 -right-4 w-20 h-20 opacity-[0.03] rotate-12 pointer-events-none" />
                            
                            <button 
                                onClick={() => setIsExpanded(false)}
                                className={`${textColor} absolute top-6 right-6 opacity-40 hover:opacity-100 transition-opacity p-2 rounded-xl bg-black/5 dark:bg-white/5`}
                            >
                                <X size={18} />
                            </button>

                            <div className="space-y-1">
                                <h4 className={`${poppins.className} text-[20px] font-black uppercase tracking-tighter ${textColor} leading-none`}>
                                    Sign the wall
                                </h4>
                                <div className={`h-[3px] w-8 rounded-full ${accentGradient}`} />
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="space-y-1.5">
                                    <span className={`text-[10px] font-black uppercase tracking-[2px] opacity-30 ml-2 ${textColor}`}>your name</span>
                                    <input
                                        type="text"
                                        placeholder="harshit"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={`w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-white/20 rounded-[20px] px-5 py-4 text-[15px] font-bold lowercase tracking-tight outline-none transition-all ${textColor}`}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <span className={`text-[10px] font-black uppercase tracking-[2px] opacity-30 ml-2 ${textColor}`}>your vibe</span>
                                    <textarea
                                        placeholder="write something fun..."
                                        rows={3}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className={`w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-white/20 rounded-[24px] px-5 py-4 text-[15px] font-bold lowercase tracking-tight outline-none transition-all resize-none ${textColor}`}
                                    />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting || !comment.trim()}
                                        className={`flex-1 ${accentGradient} text-white py-4.5 rounded-[22px] font-black uppercase tracking-[1px] text-[13px] flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all disabled:opacity-30 flex-1`}
                                    >
                                        {isSubmitting ? "sticking..." : "stick it"} <PenLine size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        onClick={() => setShowWall(true)}
                                        className={`p-4.5 rounded-[22px] border ${glassyBorder} ${isDark ? 'bg-white/5' : 'bg-black/5'} ${textColor} opacity-60 hover:opacity-100 transition-all`}
                                    >
                                        <Smile size={20} />
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Aesthetic Note Wall Overlay */}
            <AnimatePresence>
                {showWall && (
                    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-12 overflow-hidden pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowWall(false)}
                            className="absolute inset-0 bg-white/5 backdrop-blur-[12px] cursor-pointer"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }} 
                            animate={{ scale: 1, opacity: 1, y: 0 }} 
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 150 }}
                            className={`relative w-full max-w-[1240px] h-full max-h-[88vh] rounded-[56px] p-8 sm:p-16 flex flex-col overflow-hidden transition-all duration-700 ${glassyBg} backdrop-blur-[60px] border ${glassyBorder} shadow-[0_60px_150px_-30px_rgba(0,0,0,0.4)]`}
                        >
                            <Sparkles className="absolute -top-10 -right-10 w-60 h-60 opacity-[0.02] rotate-45 pointer-events-none" />

                            <div className="flex justify-between items-start mb-16 shrink-0">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-[4px] rounded-full ${accentGradient}`} />
                                        <span className={`text-[12px] font-black uppercase tracking-[4px] opacity-30 ${textColor}`}>Guestbook</span>
                                    </div>
                                    <h2 className={`${poppins.className} text-[44px] sm:text-[64px] font-[800] leading-[0.9] tracking-[-0.04em] ${textColor}`}>
                                        the note wall.
                                    </h2>
                                    <p className={`text-[14px] font-[600] opacity-40 lowercase ${textColor}`}>[vibe check: passed successfully]</p>
                                </div>
                                <motion.button 
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    onClick={() => setShowWall(false)} 
                                    className={`p-6 rounded-[28px] transition-all border ${glassyBorder} ${isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'} hover:shadow-2xl`}
                                >
                                    <X size={28} />
                                </motion.button>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar pb-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {notes.map((note) => (
                                        <motion.div
                                            key={note.id} 
                                            initial={{ opacity: 0, scale: 0.9 }} 
                                            animate={{ opacity: 1, scale: 1, rotate: note.rotation }}
                                            whileHover={{ y: -15, rotate: 0, scale: 1.05, zIndex: 10, transition: { type: "spring", stiffness: 300 } }}
                                            className={`group relative p-10 rounded-[44px] border transition-all cursor-default flex flex-col min-h-[260px] ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/95 border-white/60 text-[#1a1a1a] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]'}`}
                                        >
                                            <div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-current opacity-[0.03] group-hover:opacity-10 transition-opacity" />
                                            
                                            <div className="flex-1 flex flex-col items-center justify-center text-center">
                                                <p className={`${nanum.className} text-[24px] sm:text-[28px] leading-tight mb-8 opacity-90`}>{note.comment}</p>
                                            </div>
                                            
                                            <div className="mt-auto flex flex-col items-center">
                                                <div className={`w-10 h-[2px] ${accentGradient} opacity-20 group-hover:opacity-100 transition-all rounded-full mb-6`} />
                                                <p className={`${poppins.className} text-[16px] font-[800] tracking-tighter uppercase`}>{note.name}</p>
                                                <p className="text-[10px] font-black opacity-30 uppercase tracking-[2px] mt-2">{note.date}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}; }
            `}</style>
        </>
    );
}
