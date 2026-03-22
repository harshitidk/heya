"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useTheme } from "@/components/ThemeContext";
import { Poppins, Nanum_Pen_Script } from "next/font/google";
import { ArrowLeft, Sparkles, RotateCw, Trash2 } from "lucide-react";
import Link from "next/link";
import workBg from "@/public/assets/identity-bg-light.jpg";
import workBgNight from "@/public/assets/identity-bg-night.jpg";

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
    
    const accentGradient = "bg-gradient-to-br from-[#FFC739] via-[#EB3B14] to-[#FFC310]";
    const textColor = isDark ? "text-white" : "text-[#1a1a1a]";
    const glassBg = isDark ? "bg-[#0A0E17]/40" : "bg-white/40";
    const glassBorder = isDark ? "border-white/10" : "border-white/60";

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
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden transition-colors duration-700">
            {/* Background Image Layers */}
            <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none`}>
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    <Image src={workBg} alt="Background" fill className="object-cover" priority />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    <Image src={workBgNight} alt="Background Night" fill className="object-cover" priority />
                </div>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] px-6 sm:px-12 pt-10 sm:pt-16 pb-32">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-16 sm:mb-24">
                    <div className="space-y-4">
                        <Link href="/" className={cn("group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all mb-4", textColor)}>
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[12px] font-black uppercase tracking-[2px]">back home</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-[4px] rounded-full ${accentGradient}`} />
                            <span className={`text-[12px] font-black uppercase tracking-[4px] opacity-30 ${textColor}`}>community</span>
                        </div>
                        <h1 className={`${poppins.className} text-[48px] sm:text-[84px] font-[800] leading-[0.85] tracking-[-0.04em] ${textColor}`}>
                            the note <br /><span className="opacity-40">wall.</span>
                        </h1>
                        <p className={`text-[14px] sm:text-[16px] font-[600] opacity-40 lowercase ${textColor}`}>[total vibes recorded: {notes.length}]</p>
                    </div>

                    <div className="flex gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={fetchNotes}
                            className={cn("p-5 rounded-[28px] border transition-all flex items-center gap-3", glassBg, glassBorder, textColor)}
                        >
                            <RotateCw size={20} className={isLoading ? "animate-spin" : ""} />
                            <span className="text-[12px] font-bold uppercase tracking-[1px] hidden sm:inline">refresh wall</span>
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.dispatchEvent(new Event("open-guestbook"))}
                            className={cn("px-8 py-5 rounded-[28px] font-black uppercase tracking-[1px] text-[13px] text-white shadow-xl hover:shadow-2xl transition-all", accentGradient)}
                        >
                            stick a note
                        </motion.button>
                    </div>
                </div>

                {/* Wall Content */}
                {isLoading && notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40 opacity-20">
                        <RotateCw size={48} className="animate-spin mb-4" />
                        <p className={`${nanum.className} text-[32px] ${textColor}`}>loading the wall...</p>
                    </div>
                ) : notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40 opacity-20">
                        <p className={`${nanum.className} text-[48px] ${textColor} text-center`}>the wall is empty.<br />be the first to stick a note!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {notes.map((note, idx) => (
                                <motion.div
                                    key={note.id}
                                    layout
                                    initial={{ opacity: 0, y: 20, scale: 0.9, rotate: note.rotation * 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1, rotate: note.rotation }}
                                    whileHover={{ 
                                        y: -15, 
                                        rotate: 0, 
                                        scale: 1.05, 
                                        zIndex: 20,
                                        transition: { type: "spring", stiffness: 300, damping: 20 } 
                                    }}
                                    className={cn(
                                        "group relative p-10 rounded-[44px] border transition-all cursor-default flex flex-col min-h-[300px]",
                                        isDark 
                                            ? "bg-[#0A0E17]/60 border-white/10 text-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]" 
                                            : "bg-white/80 border-white/60 text-[#1a1a1a] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]",
                                        "backdrop-blur-xl"
                                    )}
                                >
                                    <Sparkles className="absolute -top-4 -right-4 w-20 h-20 opacity-[0.03] rotate-12 pointer-events-none group-hover:opacity-[0.08] transition-opacity" />
                                    
                                    {ownNoteIds.includes(note.id) && (
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            className="absolute top-8 right-8 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    )}

                                    <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
                                        <p className={`${nanum.className} text-[28px] sm:text-[32px] leading-tight mb-8 opacity-90 group-hover:opacity-100 transition-opacity`}>
                                            "{note.comment}"
                                        </p>
                                    </div>
                                    
                                    <div className="mt-auto flex flex-col items-center">
                                        <div className={`w-12 h-[3px] ${accentGradient} opacity-20 group-hover:opacity-100 transition-all rounded-full mb-6`} />
                                        <p className={`${poppins.className} text-[18px] font-[800] tracking-tighter uppercase mb-1`}>
                                            {note.name}
                                        </p>
                                        <p className="text-[10px] font-black opacity-30 uppercase tracking-[3px]">{formatDate(note.created_at)}</p>
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
