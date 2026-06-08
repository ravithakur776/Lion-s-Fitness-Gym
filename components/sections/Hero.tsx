"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { ArrowRight, Play, Clock, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const textLineVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState("Closed");
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: number; delay: number; duration: number }[]>([]);

  // Generate particles only on client-side to prevent Next.js hydration mismatch
  useEffect(() => {
    const generated = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${35 + Math.random() * 60}%`, // floating around middle and lower half
      size: Math.random() * 2.5 + 1.2,
      delay: Math.random() * 8,
      duration: Math.random() * 14 + 10, // slow drift
    }));
    setParticles(generated);
  }, []);

  // Determine real-time open status for Mathura gym
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes();
      const currentTime = hours + mins / 60;

      // Morning: 5:00 AM - 10:00 AM (5 to 10)
      // Evening: 4:00 PM - 10:00 PM (16 to 22)
      const isMorning = currentTime >= 5 && currentTime < 10;
      const isEvening = currentTime >= 16 && currentTime < 22;

      if (isMorning || isEvening) {
        setIsOpen(true);
        setStatusText("Open Now");
      } else {
        setIsOpen(false);
        if (currentTime < 5) {
          setStatusText("Opens at 5 AM");
        } else if (currentTime >= 10 && currentTime < 16) {
          const diffHrs = Math.floor(16 - currentTime);
          const diffMins = Math.round((16 - currentTime - diffHrs) * 60);
          setStatusText(diffHrs > 0 ? `Opens in ${diffHrs}h` : `Opens in ${diffMins}m`);
        } else {
          setStatusText("Opens at 5 AM");
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#020202] flex flex-col justify-between min-h-screen pt-24 lg:pt-0"
      aria-label="Lion's Fitness Hero"
    >
      
      {/* ─── Inject Keyframe Animation Styles ─── */}
      <style>{`
        @keyframes drift-particle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(-160px) translateX(40px) scale(0.6);
            opacity: 0;
          }
        }
        @keyframes pulse-light {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.5;
          }
        }
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }
      `}</style>

      {/* ─── Background Cinematic Layer (Layer 1) ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/real-assets/16.jpg"
          alt="Lion's Fitness Interior Mathura"
          fill
          priority
          quality={100}
          className="object-cover object-center filter grayscale contrast-[1.25] brightness-[0.22]"
          sizes="100vw"
        />

        {/* Halo Backlighting / Lens Flare focused behind center-right athlete */}
        <div
          className="absolute right-[15%] top-[20%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,197,24,0.4) 0%, rgba(245,197,24,0.02) 65%, transparent 100%)",
            animation: "pulse-light 8s ease-in-out infinite"
          }}
          aria-hidden="true"
        />

        {/* Low-opacity mascot watermark */}
        <div className="absolute right-0 top-12 lg:-right-12 lg:-top-12 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[680px] lg:h-[680px] opacity-[0.12] pointer-events-none select-none mix-blend-screen z-10">
          <Image
            src="/real-assets/Lion's Fitness Logo.jpg"
            alt="Mascot silhouette overlay"
            fill
            className="object-contain filter sepia saturate-[1.8] brightness-[0.9] hue-rotate-[10deg]"
          />
        </div>

        {/* Vignettes for high-contrast visibility */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.95) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 z-10"
          style={{
            background: "linear-gradient(to top, #020202 0%, rgba(2,2,2,0.6) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ─── Golden Dust Particles Overlay (Layer 2) ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#F5C518]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationName: "drift-particle",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              boxShadow: "0 0 8px rgba(245,197,24,0.8)",
            }}
          />
        ))}
      </div>

      {/* ─── Main Content Canvas (Layer 3) ─── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full mt-4 lg:mt-12">
          
          {/* Left Side Column: Display Titles & CTA */}
          <motion.div
            className="w-full lg:w-[62%] text-left flex flex-col items-start"
            variants={contentVariants}
            initial="hidden"
            animate="show"
          >
            {/* Tagline code banner */}
            <motion.div
              variants={textLineVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full animate-ping" />
              <span className="text-xs font-bold tracking-[0.35em] text-[#F5C518] uppercase font-mono">
                // SYSTEM STATE: INITIALIZED
              </span>
            </motion.div>

            {/* Headline with 3D Depth Overlaps */}
            <motion.div variants={textLineVariants} className="relative z-30 mb-8 select-none">
              
              {/* Backing Giant Text */}
              <span 
                className="absolute -top-16 left-0 text-[10vw] font-black uppercase text-transparent tracking-tighter opacity-15 select-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
                  letterSpacing: "-0.02em",
                }}
              >
                MATHURA REF-NH2
              </span>

              {/* Main Typography Statement */}
              <h1
                className="text-white uppercase font-black leading-[0.8] tracking-tight relative z-25"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.8rem, 8.8vw, 8.5rem)",
                }}
              >
                TRAIN HARD.
                <br />
                STAY STRONG.
                <br />
                BE A{" "}
                <span
                  className="inline-block origin-left text-[#F5C518] drop-shadow-[0_12px_30px_rgba(245,197,24,0.45)]"
                  style={{
                    fontFamily: "var(--font-caveat)",
                    fontSize: "clamp(4.8rem, 11vw, 10.5rem)",
                    textTransform: "none",
                    letterSpacing: "0.02em",
                    animation: "float-gentle 6s ease-in-out infinite",
                  }}
                >
                  Lion.
                </span>
              </h1>
            </motion.div>

            {/* Story Paragraph */}
            <motion.p
              variants={textLineVariants}
              className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-10 text-left border-l-2 border-[#F5C518]/30 pl-5"
            >
              The ultimate athletic transformation facility in Mathura. Equipped with competition steel plates, bio-mechanical machinery, and expert coach alignment. Build your legacy.
            </motion.p>

            {/* CTAs & Urgency Indicators */}
            <motion.div
              variants={textLineVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 z-30 w-full sm:w-auto"
            >
              {/* Primary Pass pass booking */}
              <div className="flex flex-col gap-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-9 py-5 bg-[#F5C518] text-black font-extrabold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(245,197,24,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  <span>CLAIM TRIAL PASS</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                
                {/* Micro Conversion Banner */}
                <span className="text-[9px] font-mono text-white/30 tracking-wider text-center sm:text-left uppercase">
                  ✓ 14 PASSES LEFT FOR TODAY
                </span>
              </div>

              {/* Watch virtual tour play button */}
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-3.5 px-8 py-5 bg-black/40 text-white font-bold text-xs tracking-[0.2em] uppercase border border-white/10 hover:border-[#F5C518] hover:text-[#F5C518] backdrop-blur-md transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F5C518] transition-colors">
                  <Play size={8} fill="currentColor" className="ml-0.5" />
                </div>
                <span>WATCH VIRTUAL TOUR</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Side Column: Focal Point Midground Portrait Frame */}
          <motion.div
            className="w-full lg:w-[32%] relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            {/* The Cinematic Athlete Frame overlapping background headers */}
            <div className="relative w-[240px] sm:w-[280px] lg:w-full aspect-[3/4] border-2 border-[#F5C518]/30 rounded-2xl overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.9)] z-25 group">
              <Image
                src="/real-assets/19.jpg"
                alt="Strength Coaching - Vikram Singh lifting"
                fill
                priority
                quality={100}
                className="object-cover filter grayscale contrast-125 brightness-[0.55] transition-transform duration-700 scale-102 group-hover:scale-106"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[15%] w-full animate-scanline" style={{ animationDuration: "6s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
              
              {/* Overlay styling gradings */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              {/* Floating micro-HUD details */}
              <div className="absolute bottom-5 inset-x-5 flex justify-between items-end text-left z-20 pointer-events-none select-none font-mono">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-[#F5C518] tracking-widest uppercase mb-0.5">COACH IN ACTION</span>
                  <span className="text-[11px] font-black text-white uppercase tracking-wider">VIKRAM SINGH</span>
                </div>
                <span className="text-[8px] text-white/30 tracking-widest">[ 1RM-ALGN ]</span>
              </div>
            </div>

            {/* Glowing yellow border outline backplate */}
            <div className="absolute -inset-1 rounded-3xl border border-[#F5C518]/15 blur-sm z-0 pointer-events-none" />
          </motion.div>

        </div>

      </div>

      {/* ─── Bottom Floating HUD Dashboard (Layer 4) ─── */}
      <motion.div
        className="w-full relative z-30 border-t border-white/5 bg-black/75 backdrop-blur-xl py-6 hidden lg:block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8 text-left">
          
          {/* HUD Item 1: Active timings */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518] border border-[#F5C518]/25 shrink-0">
              <Clock size={16} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold tracking-widest text-[#F5C518] uppercase font-mono">OPERATIONAL REGISTRY</span>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${
                  isOpen ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' : 'bg-red-500/10 text-red-400 border border-red-500/25'
                }`}>
                  <span className={`w-1 h-1 rounded-full ${isOpen ? 'bg-emerald-400 animate-ping' : 'bg-red-400'}`} />
                  {statusText}
                </span>
              </div>
              <span className="text-xs font-semibold text-white/85 mt-0.5">5:00-10:00 AM | 4:00-10:00 PM</span>
            </div>
          </div>

          {/* HUD Divider */}
          <div className="w-[1px] h-8 bg-white/5" />

          {/* HUD Item 2: Mathura location */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518] border border-[#F5C518]/25 shrink-0">
              <MapPin size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-widest text-[#F5C518] uppercase font-mono">BAD MATHURA NH-2</span>
              <span className="text-xs font-medium text-white/70 mt-0.5 truncate max-w-sm">Krishna Town, Near Refinery Nagar, Mathura, UP</span>
            </div>
          </div>

          {/* HUD Divider */}
          <div className="w-[1px] h-8 bg-white/5" />

          {/* HUD Item 3: Hot Ring */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518] border border-[#F5C518]/25 shrink-0">
              <Phone size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-widest text-[#F5C518] uppercase font-mono">DIRECT INQUIRIES</span>
              <a href="tel:9528395833" className="text-xs font-extrabold text-white hover:text-[#F5C518] transition-colors mt-0.5">+91 95283 95833</a>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
