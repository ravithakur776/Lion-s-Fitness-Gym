"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="about" className="relative bg-[#0A0A0A] py-24 md:py-36 overflow-hidden">
      
      {/* Dynamic Grid background */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ─── Left Side: Graphic Poster & Vikram Portrait ─── */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.8)] group">
            {/* Background Image of Coach Vikram Singh */}
            <Image
              src="/real-assets/1.jpg"
              alt="Head Coach Vikram Singh guiding athlete"
              fill
              quality={95}
              className="object-cover filter grayscale contrast-125 brightness-[0.45] transition-transform duration-700 scale-100 group-hover:scale-103"
            />
            
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Rotating ESTD Circular Seal Stamp */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none select-none">
              <svg 
                viewBox="0 0 100 100" 
                className="w-24 h-24 text-[#F5C518] fill-current"
                style={{
                  animation: "spin-circular 12s linear infinite"
                }}
              >
                <style>{`
                  @keyframes spin-circular {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[7.5px] font-mono tracking-[0.2em] font-black uppercase fill-current">
                  <textPath href="#circlePath">
                    • LION&apos;S FITNESS • ESTD 2021 • MATHURA
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Quote block Overlay */}
            <div className="absolute bottom-8 inset-x-6 z-20 text-left">
              <p 
                className="text-white/90 leading-tight mb-2 italic"
                style={{
                  fontFamily: "var(--font-caveat)",
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                }}
              >
                &ldquo;We don&apos;t build models here. We forge Lions. In Mathura, we train raw and remain humble.&rdquo;
              </p>
              <div className="w-10 h-px bg-[#F5C518] mb-2" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#F5C518] uppercase">
                Coach Vikram Singh — Founder
              </span>
            </div>

            {/* Play Tour trigger overlay in the center */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
              <motion.button
                onClick={() => setVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-[#F5C518] text-black flex items-center justify-center shadow-[0_0_30px_rgba(245,197,24,0.4)] hover:bg-white hover:scale-108 transition-all duration-300 pointer-events-auto"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play virtual tour video"
              >
                <Play size={20} fill="currentColor" className="ml-1" />
              </motion.button>
              <span className="text-white text-[10px] font-mono font-bold tracking-widest uppercase select-none drop-shadow-md">
                // Virtual Tour
              </span>
            </div>
          </div>

          {/* ─── Right Side: Editorial Narrative & Codes ─── */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // BRAND GENESIS & CODEX
              </span>
            </div>

            {/* Editorial Title */}
            <h2
              className="text-white uppercase leading-[0.88] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6.5vw, 5.8rem)",
              }}
            >
              NOT A GYM, <br />
              IT&apos;S AN <span className="text-[#F5C518]">IRON COVENANT</span>
            </h2>

            {/* Narrative Essay */}
            <div className="flex flex-col gap-6 text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              <p>
                Founded in 2021 by Head Coach Vikram Singh near Mathura Refinery, Lion&apos;s Fitness was established to challenge the sterile, commercialized fitness culture. We set out to create an uncompromising home for pure athletic preparation.
              </p>
              <p>
                No mirrors for selfies, no corporate pop soundtracks, no empty trends. We utilize biomechanical research, premium machinery, and the raw energy of collective willpower.
              </p>
            </div>

            {/* Core Code Blocks instead of Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 border-t border-white/5 pt-8">
              
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase">
                  [ PROTOCOL 01 ]
                </span>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">
                  BIOMECHANICAL ACCURACY
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  Every lift, squat, and movement is evaluated for joint alignment and loading efficiency.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase">
                  [ PROTOCOL 02 ]
                </span>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">
                  ATHLETE-LED COACHING
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  Trainers are active national powerlifters, bodybuilders, and certified specialists.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase">
                  [ PROTOCOL 03 ]
                </span>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">
                  METABOLIC STRATEGY
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  Programs combine raw resistance lifting with custom athletic macro scheduling.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase">
                  [ PROTOCOL 04 ]
                </span>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">
                  RAW GRIT BIOME
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  A high-energy, distraction-free room where members motivate members to breach plateaus.
                </p>
              </div>

            </div>

            {/* Signature Block */}
            <div className="flex items-center gap-6 border-t border-white/5 pt-8">
              <div className="text-left">
                <p 
                  className="text-[#F5C518] text-2xl font-bold tracking-wide select-none origin-left"
                  style={{
                    fontFamily: "var(--font-caveat)",
                    textTransform: "none",
                  }}
                >
                  Vikram Singh
                </p>
                <p className="text-[9px] font-mono tracking-[0.25em] text-white/40 uppercase mt-1">
                  Founder & Head Coach / Lion&apos;s Fitness
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ─── Video Tour Modal ─── */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(245,197,24,0.15)] bg-black">
            <button 
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-50 px-3 py-1.5 bg-white/10 border border-white/20 hover:bg-[#F5C518] hover:text-black transition-colors rounded text-[10px] font-mono font-bold uppercase tracking-wider text-white"
            >
              Close [ESC]
            </button>
            <iframe 
              src="/real-assets/17.vid.html" 
              className="w-full h-full border-none"
              title="Lion's Fitness Virtual Tour"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
}
