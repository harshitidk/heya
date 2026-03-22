"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PenLine, Sparkles, Smile, Trash2, RotateCw, CloudUpload } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { Poppins, Nanum_Pen_Script } from "next/font/google";
import { supabase } from "@/lib/supabase";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const nanum = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

interface Note {
    id: string;
    name: string;
    comment: string;
    created_at: string;
    rotation: number;
}

export function GuestbookWidget() {
    const { isDark } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showWall, setShowWall] = useState(false);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notes, setNotes] = useState<Note[]>([]);
    const [ownNoteIds, setOwnNoteIds] = useState<string[]>([]);
    const [hasOldNotes, setHasOldNotes] = useState(false);

    const accentGradient = "bg-gradient-to-br from-[#FFC739] via-[#EB3B14] to-[#FFC310]";

    useEffect(() => {
        const handleOpen = () => setIsExpanded(true);
        window.addEventListener("open-guestbook", handleOpen);
        fetchNotes();
        
        // Load own note IDs from localStorage
        const saved = localStorage.getItem("my_guestbook_notes");
        if (saved) {
            try {
                setOwnNoteIds(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load own note IDs", e);
            }
        }

        return () => window.removeEventListener("open-guestbook", handleOpen);
    }, []);

    useEffect(() => {
        // Check if there are any old local-only notes to sync
        const oldNotes = localStorage.getItem("visitor_notes");
        if (oldNotes) {
            try {
                const parsed = JSON.parse(oldNotes);
                if (parsed && Array.isArray(parsed) && parsed.length > 0) {
                    setHasOldNotes(true);
                }
            } catch (e) {}
        }
    }, [showWall]);

    const fetchNotes = async () => {
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error("Error fetching notes:", error);
        } else {
            setNotes(data || []);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setIsSubmitting(true);
        
        const rotation = (Math.random() * 6) - 3;
        const newNote = {
            name: name.trim() || "Anonymous",
            comment: comment.trim(),
            rotation,
        };

        const { data, error } = await supabase
            .from('guestbook')
            .insert([newNote])
            .select();

        if (error) {
            console.error("Error sticking note:", error);
            alert("Failed to stick the note. Make sure you've created the 'guestbook' table in Supabase!");
        } else if (data) {
            const insertedNote = data[0] as Note;
            setNotes([insertedNote, ...notes]);
            
            // Save this note ID as "ours"
            const updatedOwnIds = [...ownNoteIds, insertedNote.id];
            setOwnNoteIds(updatedOwnIds);
            localStorage.setItem("my_guestbook_notes", JSON.stringify(updatedOwnIds));

            setName("");
            setComment("");
            setIsExpanded(false);
            setShowWall(true);
        }
        
        setIsSubmitting(false);
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase
            .from('guestbook')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error("Error deleting note:", error);
            alert("Failed to delete note.");
        } else {
            // Update UI
            setNotes(notes.filter(n => n.id !== id));
            const updatedOwnIds = ownNoteIds.filter(oid => oid !== id);
            setOwnNoteIds(updatedOwnIds);
            localStorage.setItem("my_guestbook_notes", JSON.stringify(updatedOwnIds));
        }
    };

    const syncOldNotes = async () => {
        const oldNotesStr = localStorage.getItem("visitor_notes");
        if (!oldNotesStr) return;

        try {
            const oldNotes = JSON.parse(oldNotesStr);
            setIsSubmitting(true);
            
            const toInsert = oldNotes.map((n: any) => ({
                name: n.name || "Anonymous",
                comment: n.comment || "",
                rotation: n.rotation || 0,
            }));

            const { data, error } = await supabase
                .from('guestbook')
                .insert(toInsert)
                .select();

            if (error) {
                alert("Sync failed: " + error.message);
            } else if (data) {
                // Remove the old local storage key after successful sync
                localStorage.removeItem("visitor_notes");
                setHasOldNotes(false);
                
                // Add the new IDs to our "own notes" list so we can delete them if needed
                const syncedIds = (data as any[]).map(n => n.id);
                const updatedOwnIds = [...ownNoteIds, ...syncedIds];
                setOwnNoteIds(updatedOwnIds);
                localStorage.setItem("my_guestbook_notes", JSON.stringify(updatedOwnIds));
                
                fetchNotes();
                alert(`Successfully synced ${toInsert.length} notes to the backend!`);
            }
        } catch (e) {
            console.error("Sync error:", e);
        } finally {
            setIsSubmitting(false);
        }
    };

    const glassyBg = isDark ? "bg-[#0A0E17]/40" : "bg-white/40";
    const glassyBorder = isDark ? "border-white/10" : "border-white/60";
    const textColor = isDark ? "text-white" : "text-[#1a1a1a]";

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
    };

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
                                        className={`flex-1 ${accentGradient} text-white py-4.5 rounded-[22px] font-black uppercase tracking-[1px] text-[13px] flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all disabled:opacity-30`}
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
                            className={`relative w-full max-w-[1240px] h-full max-h-[92vh] sm:max-h-[88vh] rounded-[32px] sm:rounded-[56px] p-6 sm:p-16 flex flex-col overflow-hidden transition-all duration-700 ${glassyBg} backdrop-blur-[60px] border ${glassyBorder} shadow-[0_60px_150px_-30px_rgba(0,0,0,0.4)]`}
                        >
                            <Sparkles className="absolute -top-10 -right-10 w-60 h-60 opacity-[0.02] rotate-45 pointer-events-none" />

                            <div className="flex justify-between items-start mb-16 shrink-0">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 sm:w-12 h-[3px] sm:h-[4px] rounded-full ${accentGradient}`} />
                                        <span className={`text-[10px] sm:text-[12px] font-black uppercase tracking-[3px] sm:tracking-[4px] opacity-30 ${textColor}`}>Guestbook</span>
                                    </div>
                                    <h2 className={`${poppins.className} text-[32px] sm:text-[44px] lg:text-[64px] font-[800] leading-[0.9] tracking-[-0.04em] ${textColor}`}>
                                        the note wall.
                                    </h2>
                                    <p className={`text-[12px] sm:text-[14px] font-[600] opacity-40 lowercase ${textColor}`}>[vibe check: passed successfully]</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <AnimatePresence>
                                        {hasOldNotes && (
                                            <motion.button
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: 20, opacity: 0 }}
                                                onClick={syncOldNotes}
                                                disabled={isSubmitting}
                                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-black uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-500/20 disabled:opacity-50`}
                                            >
                                                <CloudUpload size={18} />
                                                Sync Local Notes
                                            </motion.button>
                                        )}
                                    </AnimatePresence>

                                    <motion.button 
                                        whileHover={{ rotate: 180, scale: 1.1 }}
                                        onClick={fetchNotes}
                                        className={`p-4 sm:p-6 rounded-[20px] sm:rounded-[28px] transition-all border ${glassyBorder} ${isDark ? 'bg-white/5 text-white/40 hover:text-white' : 'bg-black/5 text-black/40 hover:text-black'}`}
                                        title="Refresh wall"
                                    >
                                        <RotateCw size={20} className={`sm:w-6 sm:h-6 ${isSubmitting ? "animate-spin" : ""}`} />
                                    </motion.button>

                                    <motion.button 
                                        whileHover={{ rotate: 90, scale: 1.1 }}
                                        onClick={() => setShowWall(false)} 
                                        className={`p-4 sm:p-6 rounded-[20px] sm:rounded-[28px] transition-all border ${glassyBorder} ${isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'} hover:shadow-2xl`}
                                    >
                                        <X size={22} className="sm:w-7 sm:h-7" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar pb-12">
                                {notes.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full opacity-20">
                                        <p className={`${nanum.className} text-[32px] ${textColor}`}>no notes yet. be the first?</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                                        {notes.map((note) => (
                                            <motion.div
                                                key={note.id} 
                                                initial={{ opacity: 0, scale: 0.9 }} 
                                                animate={{ opacity: 1, scale: 1, rotate: note.rotation }}
                                                whileHover={{ y: -15, rotate: 0, scale: 1.05, zIndex: 10, transition: { type: "spring", stiffness: 300 } }}
                                                className={`group relative p-6 sm:p-10 rounded-[24px] sm:rounded-[44px] border transition-all cursor-default flex flex-col min-h-[220px] sm:min-h-[260px] ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/95 border-white/60 text-[#1a1a1a] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]'}`}
                                            >
                                                <div className="absolute top-8 left-8 w-8 h-8 rounded-full bg-current opacity-[0.03] group-hover:opacity-10 transition-opacity" />
                                                
                                                {/* Delete Button (Only for own notes) */}
                                                {ownNoteIds.includes(note.id) && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1, color: "#ef4444" }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDelete(note.id);
                                                        }}
                                                        className="absolute top-8 right-8 z-20 p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 dark:bg-white/5 rounded-full text-current/40"
                                                    >
                                                        <Trash2 size={16} />
                                                    </motion.button>
                                                )}

                                                <div className="flex-1 flex flex-col items-center justify-center text-center">
                                                    <p className={`${nanum.className} text-[24px] sm:text-[28px] leading-tight mb-8 opacity-90`}>{note.comment}</p>
                                                </div>
                                                
                                                <div className="mt-auto flex flex-col items-center">
                                                    <div className={`w-10 h-[2px] ${accentGradient} opacity-20 group-hover:opacity-100 transition-all rounded-full mb-6`} />
                                                    <p className={`${poppins.className} text-[16px] font-[800] tracking-tighter uppercase`}>{note.name}</p>
                                                    <p className="text-[10px] font-black opacity-30 uppercase tracking-[2px] mt-2">{formatDate(note.created_at)}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
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
