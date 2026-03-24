"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImagePlus, Paperclip } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

export const AISection = () => {
  const { isDark } = useTheme();
  const [value, setValue] = React.useState("");
  const [response, setResponse] = React.useState<React.ReactNode>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);

  // Typewriter effect simulation
  const autoTypeQuestion = (text: string) => {
    if (value || isTyping || isLoading) return;
    
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setValue(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40); 
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!value.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null); 
    
    // Hardcoded response as per user request
    const staticResponse = (
      <>
        <strong>Harshit</strong> starts with <strong>ChatGPT</strong> to think, explore, and push ideas around. Once something clicks, he jumps to <strong>Gemini (Nano Banana)</strong> or <strong>Stitch</strong> to bring those ideas to life quickly. For development, it is mostly <strong>Antigravity</strong> with <strong>Gemini 3 Flash</strong>, fast, flexible, and easy to iterate on. <strong>Notion</strong> keeps everything documented and organized, while <strong>Figma</strong> is where the final craft comes together.
      </>
    );

    // Artificial delay to simulate "AI processing"
    setTimeout(() => {
      setResponse(staticResponse);
      setIsLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setResponse(null);
    setValue("");
    setIsLoading(false);
  };

  const starPath = "M436.5 0L539.5 333.5H873L603.25 539.5L706.25 873L436.5 667L166.75 873L269.75 539.5L0 333.5H333.5L436.5 0Z";

  return (
    <section id="ai-section" 
      className={`relative h-[100dvh] w-full snap-start shrink-0 overflow-hidden flex flex-col items-center justify-center px-4 transition-all duration-700 ${
        isDark 
          ? 'bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e1b4b]' 
          : 'bg-gradient-to-b from-[#ff6655] via-[#ff3a3a] to-[#e71f00]'
      }`}
    >
      {/* 1. Illustration removed as per user request */}

      {/* 2. Focused Top Blur (Creating Depth of Field) - Kept for atmospheric transition */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[6px]"
        style={{ 
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)'
        }}
      />

      {/* 2. Moving Background Gradients (AI Marketing Aura) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ contain: 'strict' }}>
        <motion.div 
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 mix-blend-screen bg-gradient-to-r ${isDark ? 'from-blue-600/30 to-indigo-600/20' : 'from-pink-400/20 to-orange-400/10'} will-change-transform`}
          style={{ transform: 'translate3d(0,0,0)' }}
        />
        <motion.div 
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 60, -60, 0],
            scale: [1, 0.95, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className={`absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 mix-blend-screen bg-gradient-to-r ${isDark ? 'from-emerald-500/20 to-cyan-500/10' : 'from-yellow-300/10 to-white/5'} will-change-transform`}
          style={{ transform: 'translate3d(0,0,0)' }}
        />
        <motion.div 
          animate={{
            x: [-40, 40, -40],
            y: [80, -80, 80],
            scale: [1.1, 0.9, 1.1],
            rotate: [0, 360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[40%] right-[30%] w-[450px] h-[450px] rounded-full blur-[100px] opacity-25 mix-blend-screen bg-gradient-to-r from-amber-400/20 via-orange-500/15 to-transparent will-change-transform`}
          style={{ transform: 'translate3d(0,0,0)' }}
        />
      </div>

      {/* 4. Background Stars Decorations */}
      <div className="absolute right-[-10%] top-[10%] w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] opacity-10 pointer-events-none z-0">
          <svg viewBox="0 0 873 873" fill={isDark ? "#3b82f6" : "white"} xmlns="http://www.w3.org/2000/svg" className="w-full h-full blur-[80px] transition-colors duration-700">
            <path d={starPath} />
          </svg>
      </div>
      <div className="absolute left-[-15%] bottom-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] opacity-10 pointer-events-none z-0">
          <svg viewBox="0 0 873 873" fill={isDark ? "#3b82f6" : "white"} xmlns="http://www.w3.org/2000/svg" className="w-full h-full blur-[100px] transition-colors duration-700">
            <path d={starPath} />
          </svg>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-16 sm:gap-14 px-4 sm:px-12">
        {/* Headline */}
        <div className="flex flex-col gap-3 sm:gap-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-[24px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-normal font-bricolage tracking-tight lowercase"
          >
            everytime a new ai tool drops,
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-[24px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-extrabold font-bricolage tracking-tight lowercase"
          >
            i get a little more excited.
          </motion.h2>
        </div>

        {/* Chat Box Container with Aura */}
        <div className="w-full sm:max-w-[677px] flex flex-col gap-6 relative px-2 sm:px-0">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full group"
          >
            {/* Diffused "Smoky" Gradient Haze around borders (Orange/Yellow - No Blue) */}
            <motion.div 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[3px] rounded-[31px] bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 bg-[length:200%_auto] opacity-50 group-hover:opacity-80 blur-[10px] z-0"
            />
            
            {/* Soft Diffuse Shadow Layer (Secondary Smoke) */}
            <div className="absolute inset-0 rounded-[20px] sm:rounded-[30px] shadow-[0px_35px_100px_rgba(0,0,0,0.4)] blur-[2px] z-0" />

            {/* Main Content Box (Compact Height) */}
            <div className="relative z-10 w-full bg-[#fffff4]/95 backdrop-blur-lg rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 border border-white/20 shadow-inner overflow-hidden">
              <input 
                type="text" 
                value={value}
                readOnly={true}
                onChange={() => {}}
                onClick={() => !value && !response && !isTyping && autoTypeQuestion("what tools do harshit use?")}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={isLoading || isTyping ? "..." : "Ask anything"}
                disabled={isLoading}
                className="w-full bg-transparent border-none outline-none text-[#6b6b56] text-[15px] sm:text-[19px] font-medium placeholder:text-[#6b6b56]/60 relative z-10 h-[22px] sm:h-[26px] flex items-center cursor-pointer"
              />
              <div className="flex justify-between items-end relative z-10">
                <div className="flex gap-4">
                  <ImagePlus className="w-5 h-5 text-[#6b6b56]/40 cursor-pointer hover:text-[#6b6b56] transition-colors" />
                  <Paperclip className="w-5 h-5 text-[#6b6b56]/40 cursor-pointer hover:text-[#6b6b56] transition-colors" />
                </div>
                
                {/* Original Pill-Style Button */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`relative group active:scale-[0.97] transition-all
                    ${isLoading ? 'opacity-50 grayscale' : 'opacity-100'}
                  `}
                >
                  <div className="bg-[#ff5141] px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full shadow-[0px_4px_16px_rgba(255,81,65,0.4)] hover:shadow-[0px_10px_30px_rgba(255,81,65,0.6)] transition-all flex items-center justify-center">
                    {isLoading ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </motion.form>

          {/* AI Response Box (Smoky Border too) */}
          <AnimatePresence>
            {response && (
              <div className="relative w-full">
                {/* Soft Response Haze (Yellow/Orange - No Blue) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  className="absolute -inset-[5px] rounded-[33px] bg-gradient-to-r from-yellow-400/30 via-orange-500/20 to-amber-600/10 blur-[15px] z-0"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="relative z-10 w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-7 text-white text-sm sm:text-base leading-relaxed text-left max-h-[35dvh] overflow-y-auto custom-scrollbar shadow-[0px_20px_60px_rgba(0,0,0,0.5)]"
                >
                  <button 
                    onClick={handleReset}
                    className="absolute top-5 right-5 text-white/40 hover:text-white/80 transition-colors text-[10px] tracking-widest uppercase font-bold"
                  >
                    reset
                  </button>
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-[10px] font-bold">AI</span>
                    </div>
                    <div className="flex-1 opacity-90 font-medium">
                      {response}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Subtext */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="max-w-[550px] text-white/70 text-[12px] sm:text-[15px] leading-[1.8] lowercase font-medium px-4"
        >
          <span className={`bg-gradient-to-r ${isDark ? 'from-[#bfdbfe] to-[#60a5fa]' : 'from-[#ffcbcb] to-[#ffdede]'} bg-clip-text text-transparent duration-700 transition-all font-semibold tracking-wide`}>
            Not because it’s new, but because it expands what I can become. I can build faster, explore more, and think across disciplines in ways that weren’t possible before.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
