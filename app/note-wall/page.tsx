"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useTheme } from "@/components/ThemeContext";
import { Poppins, Nanum_Pen_Script } from "next/font/google";
import { Sparkles, Trash2, Plus } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
    id: string;
    name: string;
    comment: string;
    created_at: string;
    rotation: number;
}

export default function NoteWallPage() {
    const { isDark } = useTheme();
    const [notes, setNotes] = useState<Note[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ownNoteIds, setOwnNoteIds] = useState<string[]>([]);
    
    const accentGradient = isDark 
        ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" 
        : "bg-gradient-to-br from-[#FFC739] via-[#EB3B14] to-[#FFC310]";
    const textColor = isDark ? "text-white" : "text-[#1a1a1a]";

    useEffect(() => {
        fetchNotes();
        const saved = localStorage.getItem("my_guestbook_notes");
        if (saved) {
            try { setOwnNoteIds(JSON.parse(saved)); } catch (e) {}
        }
    }, []);

    const fetchNotes = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (!error && data) {
            setNotes(data);
        }
        setIsLoading(false);
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase.from('guestbook').delete().eq('id', id);
        if (!error) {
            setNotes(notes.filter(n => n.id !== id));
            const updatedOwnIds = ownNoteIds.filter(oid => oid !== id);
            setOwnNoteIds(updatedOwnIds);
            localStorage.setItem("my_guestbook_notes", JSON.stringify(updatedOwnIds));
        }
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
    };

    return (
        <main className={`relative min-h-screen w-full flex flex-col items-center overflow-x-hidden transition-colors duration-700 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
            {/* Background Pattern Layer */}
            <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000`}
                style={{
                    backgroundImage: isDark 
                        ? `radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.08) 1.5px, transparent 0)` 
                        : `radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.12) 1.5px, transparent 0)`,
                    backgroundSize: '28px 28px',
                    opacity: isDark ? 0.8 : 1.0
                }}
            />

            <div className="relative z-10 w-full max-w-[1500px] px-6 sm:px-12 pt-28 sm:pt-36 pb-32">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-12 sm:mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-[3px] rounded-full ${accentGradient}`} />
                            <span className={`text-[11px] font-black uppercase tracking-[3px] opacity-30 ${textColor}`}>community</span>
                        </div>
                        <h1 className={`${poppins.className} text-[44px] sm:text-[80px] font-[800] leading-[0.9] tracking-[-0.04em] ${textColor}`}>
                            the note wall.
                        </h1>
                        <p className={`text-[13px] sm:text-[15px] font-[600] opacity-40 lowercase ${textColor}`}>[total vibes recorded: {notes.length}]</p>
                    </div>

                    <div className="flex gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.dispatchEvent(new Event("open-guestbook"))}
                            className={cn("px-7 py-3.5 rounded-[20px] font-black uppercase tracking-[1px] text-[11px] text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5", accentGradient)}
                        >
                            stick a note <Plus size={16} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>

                {/* Wall Content */}
                {isLoading && notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40 opacity-20">
                        <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin mb-4" />
                        <p className={`${nanum.className} text-[28px] ${textColor}`}>loading the wall...</p>
                    </div>
                ) : notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40 opacity-20">
                        <p className={`${nanum.className} text-[40px] ${textColor} text-center`}>the wall is empty.<br />be the first to stick a note!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-10">
                        <AnimatePresence mode="popLayout">
                            {notes.map((note) => (
                                <motion.div
                                    key={note.id}
                                    layout
                                    initial={{ opacity: 0, y: 15, scale: 0.95, rotate: note.rotation * 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1, rotate: note.rotation }}
                                    whileHover={{ 
                                        y: -8, 
                                        rotate: 0, 
                                        scale: 1.02, 
                                        zIndex: 20,
                                        transition: { type: "spring", stiffness: 400, damping: 25 } 
                                    }}
                                    className={cn(
                                        "group relative p-8 rounded-[32px] border transition-all cursor-default flex flex-col min-h-[220px]",
                                        isDark 
                                            ? "bg-white/[0.06] border-white/10 text-white shadow-2xl" 
                                            : "bg-white/80 border-black/[0.04] text-[#1a1a1a] shadow-sm hover:shadow-md",
                                        "backdrop-blur-xl"
                                    )}
                                >
                                    <Sparkles className="absolute -top-3 -right-3 w-16 h-16 opacity-[0.02] rotate-12 pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
                                    
                                    {ownNoteIds.includes(note.id) && (
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            className="absolute top-6 right-6 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    )}

                                    <div className="flex-1 flex flex-col items-center justify-center text-center px-1">
                                        <p className={`${nanum.className} text-[22px] sm:text-[24px] leading-[1.3] mb-6 opacity-90 group-hover:opacity-100 transition-opacity`}>
                                            "{note.comment}"
                                        </p>
                                    </div>
                                    
                                    <div className="mt-auto flex flex-col items-center">
                                        <div className={`w-8 h-[2px] ${accentGradient} opacity-20 group-hover:opacity-100 transition-all rounded-full mb-5`} />
                                        <p className={`${poppins.className} text-[14px] font-[800] tracking-tighter uppercase mb-0.5`}>
                                            {note.name}
                                        </p>
                                        <p className="text-[9px] font-black opacity-30 uppercase tracking-[2.5px]">{formatDate(note.created_at)}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <style jsx global>{`
                body { overflow-x: hidden; }
            `}</style>
        </main>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
