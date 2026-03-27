"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WatermarkText } from "@/components/WatermarkText";
import { useTheme } from "@/components/ThemeContext";
import workBg from "@/public/assets/artwork.png";
import workBgNight1 from "@/public/assets/work-bg-night-1.png";
import workBgNight2 from "@/public/assets/work-bg-night-2.png";

export default function WorkPage() {
    const { isDark } = useTheme();

    return (
        <main className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-start transition-colors duration-700 ${isDark ? 'bg-[#161b2e]' : 'bg-[#F5F0E8]'}`}>
            {/* Background Layers (Fixed Artwork) */}
            <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none`}>
                {/* Light Mode Artwork */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src={workBg}
                        alt="Background Light"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                {/* Dark Mode Artwork (Night Version) */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={workBgNight1}
                        alt="Background Night"
                        fill
                        className="object-cover"
                        priority
                    />
                    <Image
                        src={workBgNight2}
                        alt="Background Clouds"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </div>

            {/* Sky Background Layer - Semi-transparent to let artwork show through */}
            <div className="fixed inset-0 z-[1] pointer-events-none">
                {/* Light mode: warm tint overlay */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}
                     style={{ background: 'linear-gradient(180deg, rgba(245,230,210,0.35) 0%, rgba(240,220,200,0.25) 40%, rgba(245,225,205,0.3) 70%, rgba(250,235,215,0.4) 100%)' }} />
                {/* Dark mode: dark blue overlay to match portfolio theme */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}
                     style={{ background: 'linear-gradient(180deg, rgba(22,27,46,0.45) 0%, rgba(18,23,40,0.35) 50%, rgba(22,27,46,0.45) 100%)' }} />
                {/* Subtle grain */}
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
                    }}
                />
            </div>

            {/* Animated Sky Patterns */}
            <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">

                {/* ========== LIGHT MODE: Warm Sunset Sky ========== */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                    
                    {/* Vibrant red-yellow-orange gradient overlay - MORE INTENSE */}
                    <div className="absolute inset-0 transition-opacity duration-1000"
                         style={{ background: 'linear-gradient(135deg, rgba(230,80,50,0.18) 0%, rgba(255,180,50,0.15) 50%, rgba(255,120,40,0.2) 100%)' }} />

                    {/* Pulsing Sun Glow - top right, warm orange-gold */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(255,180,80,0.35) 0%, rgba(255,140,50,0.2) 30%, rgba(255,100,60,0.08) 55%, transparent 70%)' }}
                    />
                    
                    {/* Secondary warm glow - left side, softer red-orange */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.35, 0.2] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute top-[15%] -left-[8%] w-[500px] h-[500px] rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(255,100,60,0.18) 0%, rgba(255,160,100,0.1) 40%, transparent 70%)' }}
                    />

                    {/* Warm bottom glow - golden */}
                    <div className="absolute bottom-0 left-0 right-0 h-[40%]"
                         style={{ background: 'linear-gradient(to top, rgba(255,150,50,0.15) 0%, transparent 100%)' }} />

                    {/* ---- Drifting Clouds ---- */}
                    {[
                        { top: '3%', duration: 70, delay: 0, opacity: 0.45, width: 600, height: 200, reverse: false },
                        { top: '12%', duration: 85, delay: 5, opacity: 0.4, width: 500, height: 160, reverse: true },
                        { top: '28%', duration: 100, delay: 15, opacity: 0.35, width: 400, height: 120, reverse: false },
                        { top: '45%', duration: 75, delay: 25, opacity: 0.35, width: 550, height: 170, reverse: true },
                        { top: '60%', duration: 90, delay: 40, opacity: 0.3, width: 420, height: 130, reverse: false },
                        { top: '78%', duration: 95, delay: 10, opacity: 0.25, width: 650, height: 180, reverse: true },
                    ].map((cloud, i) => (
                        <motion.div
                            key={`cloud-${i}`}
                            animate={{ x: cloud.reverse ? ['115%', '-30%'] : ['-25%', '125%'] }}
                            transition={{ duration: cloud.duration, repeat: Infinity, ease: "linear", delay: cloud.delay }}
                            className="absolute"
                            style={{ 
                                top: cloud.top, 
                                width: cloud.width, 
                                height: cloud.height, 
                                opacity: cloud.opacity,
                                background: 'radial-gradient(ellipse at center, rgba(255,250,245,0.95) 0%, rgba(255,235,210,0.5) 40%, transparent 80%)'
                            }}
                        />
                    ))}

                    {/* ---- Moving Patterns: Wind Streaks ---- */}
                    {[
                        { top: '22%', duration: 12, delay: 0 },
                        { top: '42%', duration: 18, delay: 5 },
                        { top: '62%', duration: 15, delay: 2 },
                        { top: '82%', duration: 22, delay: 8 },
                    ].map((streak, i) => (
                        <motion.div
                            key={`streak-${i}`}
                            animate={{ x: ['-20%', '120%'], opacity: [0, 0.25, 0] }}
                            transition={{ duration: streak.duration, repeat: Infinity, ease: "linear", delay: streak.delay }}
                            className="absolute h-[1px] w-[500px]"
                            style={{ 
                                top: streak.top,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 50%, transparent)'
                            }}
                        />
                    ))}

                    {/* ---- Moving Patterns: Floating Logic Particles (Hexagons) ---- */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            animate={{ 
                                y: ['-10dvh', '110dvh'], 
                                x: ['-40px', '40px'],
                                rotate: [0, 360],
                                opacity: [0, 0.3, 0] 
                            }}
                            transition={{ 
                                duration: 15 + Math.random() * 20, 
                                repeat: Infinity, 
                                ease: "linear", 
                                delay: Math.random() * 10 
                            }}
                            className="absolute pointer-events-none"
                            style={{ 
                                left: `${5 + Math.random() * 90}%`,
                                top: '-50px',
                                width: `${15 + Math.random() * 20}px`,
                                height: `${15 + Math.random() * 20}px`,
                                border: '1px solid rgba(255,160,50,0.4)',
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                borderRadius: i % 3 === 0 ? '0' : '2px'
                            }}
                        />
                    ))}

                    {/* ---- Floating Warm Orbs ---- */}
                    <motion.div
                        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.08, 0.15, 0.08] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[60%] w-[250px] h-[250px] rounded-full blur-[80px]"
                        style={{ background: 'radial-gradient(circle, rgba(255,120,60,0.2) 0%, transparent 70%)' }}
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], x: [0, -25, 0], opacity: [0.06, 0.12, 0.06] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute top-[50%] left-[10%] w-[300px] h-[300px] rounded-full blur-[90px]"
                        style={{ background: 'radial-gradient(circle, rgba(255,180,60,0.15) 0%, transparent 70%)' }}
                    />
                    <motion.div
                        animate={{ y: [0, -25, 0], x: [0, 15, 0], opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
                        className="absolute top-[70%] right-[15%] w-[200px] h-[200px] rounded-full blur-[70px]"
                        style={{ background: 'radial-gradient(circle, rgba(230,80,50,0.12) 0%, transparent 70%)' }}
                    />

                    {/* ---- Light Rays from Sun ---- */}
                    <motion.div
                        animate={{ opacity: [0.04, 0.1, 0.04], rotate: [0, 2, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] right-[5%] w-[300px] h-[120vh] origin-top"
                        style={{ background: 'linear-gradient(180deg, rgba(255,180,80,0.12) 0%, transparent 60%)', transform: 'rotate(-15deg)' }}
                    />
                    <motion.div
                        animate={{ opacity: [0.03, 0.08, 0.03], rotate: [0, -1.5, 0] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -top-[10%] right-[20%] w-[200px] h-[100vh] origin-top"
                        style={{ background: 'linear-gradient(180deg, rgba(255,160,60,0.1) 0%, transparent 50%)', transform: 'rotate(-25deg)' }}
                    />
                    <motion.div
                        animate={{ opacity: [0.02, 0.06, 0.02] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                        className="absolute -top-[5%] right-[35%] w-[150px] h-[80vh] origin-top"
                        style={{ background: 'linear-gradient(180deg, rgba(255,200,100,0.08) 0%, transparent 45%)', transform: 'rotate(-35deg)' }}
                    />

                    {/* ---- Golden Dust Particles ---- */}
                    {[
                        { top: '8%', left: '15%', delay: 0, dur: 7, size: 3, color: 'rgba(255,180,60,0.5)' },
                        { top: '18%', left: '70%', delay: 1.5, dur: 9, size: 2.5, color: 'rgba(255,150,50,0.4)' },
                        { top: '30%', left: '40%', delay: 3, dur: 11, size: 3, color: 'rgba(255,200,80,0.45)' },
                        { top: '42%', left: '85%', delay: 0.8, dur: 8, size: 2, color: 'rgba(255,160,70,0.4)' },
                        { top: '52%', left: '25%', delay: 5, dur: 10, size: 3.5, color: 'rgba(255,140,50,0.45)' },
                        { top: '60%', left: '55%', delay: 2, dur: 6, size: 2, color: 'rgba(255,190,80,0.4)' },
                        { top: '72%', left: '10%', delay: 4, dur: 12, size: 2.5, color: 'rgba(255,170,60,0.4)' },
                        { top: '80%', left: '75%', delay: 1, dur: 8, size: 3, color: 'rgba(255,130,40,0.35)' },
                        { top: '25%', left: '92%', delay: 6, dur: 13, size: 2, color: 'rgba(255,200,100,0.4)' },
                        { top: '48%', left: '5%', delay: 3.5, dur: 9, size: 2.5, color: 'rgba(255,160,60,0.35)' },
                        { top: '65%', left: '45%', delay: 7, dur: 7, size: 2, color: 'rgba(255,180,80,0.5)' },
                        { top: '88%', left: '35%', delay: 2.5, dur: 10, size: 3, color: 'rgba(255,150,50,0.35)' },
                    ].map((p, i) => (
                        <motion.div
                            key={`dust-${i}`}
                            animate={{ y: [-12, 12, -12], opacity: [0.2, 0.6, 0.2] }}
                            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                            className="absolute rounded-full"
                            style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}` }}
                        />
                    ))}

                    {/* ---- Soft Horizontal Haze Lines ---- */}
                    <motion.div
                        animate={{ opacity: [0.03, 0.07, 0.03], x: [-20, 20, -20] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[35%] left-0 right-0 h-[1px]"
                        style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(255,180,100,0.12) 30%, rgba(255,160,80,0.08) 70%, transparent 95%)' }}
                    />
                    <motion.div
                        animate={{ opacity: [0.02, 0.06, 0.02], x: [15, -15, 15] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute top-[55%] left-0 right-0 h-[1px]"
                        style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(255,140,60,0.1) 35%, rgba(255,120,50,0.07) 65%, transparent 90%)' }}
                    />
                </div>

                {/* ========== DARK MODE: Night Sky ========== */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Deep space gradient overlay */}
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(15,25,60,0.4) 0%, transparent 60%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 80%, rgba(20,15,50,0.3) 0%, transparent 60%)' }} />

                    {/* Subtle moon glow - top right */}
                    <motion.div
                        animate={{ opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[8%] right-[15%] w-[300px] h-[300px] rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(200,210,255,0.12) 0%, rgba(150,170,220,0.04) 40%, transparent 65%)' }}
                    />

                    {/* Twinkling Stars - different sizes and blink speeds */}
                    {[
                        { top: '5%', left: '10%', delay: 0, dur: 3, size: 2 },
                        { top: '8%', left: '45%', delay: 1.5, dur: 4, size: 1.5 },
                        { top: '12%', left: '78%', delay: 0.8, dur: 2.5, size: 2.5 },
                        { top: '15%', left: '25%', delay: 2, dur: 5, size: 1 },
                        { top: '20%', left: '60%', delay: 0.5, dur: 3.5, size: 2 },
                        { top: '22%', left: '88%', delay: 3, dur: 4, size: 1.5 },
                        { top: '28%', left: '5%', delay: 1, dur: 3, size: 1 },
                        { top: '30%', left: '35%', delay: 2.5, dur: 5, size: 2 },
                        { top: '33%', left: '72%', delay: 0.3, dur: 2.8, size: 1.5 },
                        { top: '38%', left: '15%', delay: 4, dur: 4.5, size: 1 },
                        { top: '42%', left: '52%', delay: 1.2, dur: 3.2, size: 2.5 },
                        { top: '45%', left: '90%', delay: 2.8, dur: 3.8, size: 1 },
                        { top: '50%', left: '30%', delay: 0.7, dur: 4.2, size: 2 },
                        { top: '55%', left: '68%', delay: 3.5, dur: 2.6, size: 1.5 },
                        { top: '58%', left: '8%', delay: 1.8, dur: 5.5, size: 1 },
                        { top: '62%', left: '42%', delay: 0.2, dur: 3, size: 2 },
                        { top: '65%', left: '82%', delay: 2.2, dur: 4.8, size: 1.5 },
                        { top: '70%', left: '20%', delay: 4.5, dur: 3.5, size: 1 },
                        { top: '73%', left: '55%', delay: 1.5, dur: 4, size: 2.5 },
                        { top: '78%', left: '75%', delay: 0.9, dur: 2.5, size: 1 },
                        { top: '82%', left: '12%', delay: 3.2, dur: 5, size: 2 },
                        { top: '85%', left: '38%', delay: 2, dur: 3.8, size: 1.5 },
                        { top: '88%', left: '65%', delay: 0.6, dur: 4.5, size: 1 },
                        { top: '92%', left: '92%', delay: 1.3, dur: 3, size: 2 },
                        { top: '18%', left: '50%', delay: 3.8, dur: 6, size: 3 },
                        { top: '48%', left: '3%', delay: 2.4, dur: 4.2, size: 1.5 },
                        { top: '75%', left: '48%', delay: 0.4, dur: 3.6, size: 2 },
                    ].map((star, i) => (
                        <motion.div
                            key={`star-${i}`}
                            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: star.dur, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
                            className="absolute rounded-full bg-white"
                            style={{ top: star.top, left: star.left, width: star.size, height: star.size, boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(200,220,255,0.3)` }}
                        />
                    ))}

                    {/* Shooting Star 1 */}
                    <motion.div
                        animate={{ x: ['-5%', '40%'], y: ['-5%', '25%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 12, ease: "easeOut" }}
                        className="absolute top-[10%] left-[30%] w-[80px] h-[1px]"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)', transform: 'rotate(35deg)' }}
                    />

                    {/* Shooting Star 2 */}
                    <motion.div
                        animate={{ x: ['5%', '-35%'], y: ['-5%', '20%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 18, ease: "easeOut", delay: 8 }}
                        className="absolute top-[35%] right-[20%] w-[60px] h-[1px]"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,220,255,0.5), transparent)', transform: 'rotate(-30deg)' }}
                    />

                    {/* Nebula-like subtle color washes */}
                    <motion.div
                        animate={{ opacity: [0.03, 0.06, 0.03] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[10%] w-[500px] h-[400px] rounded-full blur-[150px]"
                        style={{ background: 'radial-gradient(circle, rgba(100,120,200,0.15) 0%, transparent 70%)' }}
                    />
                    <motion.div
                        animate={{ opacity: [0.02, 0.05, 0.02] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute bottom-[20%] right-[5%] w-[400px] h-[350px] rounded-full blur-[130px]"
                        style={{ background: 'radial-gradient(circle, rgba(120,80,160,0.1) 0%, transparent 70%)' }}
                    />
                </div>
            </div>

            <div className="w-full relative z-10 flex flex-col pt-0 pb-20">
                {/* Original Work Section (Selected Work) */}
                <div className="w-full">
                    <WorkSection />
                </div>

                {/* Experience Section */}
                <div className="w-full mt-24 sm:mt-44">
                    <ExperienceSection isDark={isDark} />
                </div>
            </div>
        </main>
    );
}
