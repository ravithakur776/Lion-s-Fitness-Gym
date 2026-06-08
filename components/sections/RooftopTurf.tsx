"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CloudRain, ShieldCheck, Sun } from "lucide-react";

export function RooftopTurf() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.1]);

  // HUD card slide-ins
  const cardOpacity = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0.2, 0.6, 1], [100, 0, 0]);

  return (
    <section
      id="rooftop"
      ref={containerRef}
      className="relative bg-[#050505]"
      style={{ height: "200vh" }} // Extra scroll space
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* ─── Background Parallax Image ─── */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ scale }}>
          <Image
            src="/real-assets/11.jpg"
            alt="Exclusive Rooftop Turf - open-air arena at Lion's Fitness"
            fill
            quality={100}
            className="object-cover contrast-[1.12] brightness-[0.45]"
            priority
          />
          {/* Dark Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        </motion.div>

        {/* Dynamic HUD Grid Overlay */}
        <div className="absolute top-6 right-6 z-20 pointer-events-none font-mono text-[9px] tracking-[0.25em] text-[#F5C518] uppercase">
          // STATION: ELEVATED ARENA / SUB-LVL-4
        </div>

        {/* ─── Giant Stencil Text Layer (Parallax) ─── */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h2 
            className="text-center leading-[0.78] tracking-tighter text-transparent uppercase stroke-white/10"
            style={{ 
              fontFamily: "var(--font-bebas)", 
              fontSize: "clamp(5rem, 16vw, 16rem)",
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.08)"
            }}
          >
            ROOFTOP
            <br />
            <span className="text-white/5">ARENA</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-px bg-[#F5C518]" />
            <p className="text-[#F5C518] text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
              Mathura&apos;s Only Open-Air Arena
            </p>
            <div className="w-16 h-px bg-[#F5C518]" />
          </div>
        </motion.div>

        {/* ─── Foreground HUD Cards & Ticket Widget ─── */}
        <motion.div
          className="absolute inset-x-4 bottom-10 sm:bottom-16 z-20 max-w-5xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-8 pointer-events-none"
          style={{ opacity: cardOpacity, y: cardY }}
        >
          {/* Left: Interactive Turf Specifications Card */}
          <div className="w-full lg:w-[55%] flex flex-col text-left p-6 md:p-8 backdrop-blur-xl bg-black/65 border border-white/5 rounded-2xl pointer-events-auto">
            
            <span className="text-[9px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase mb-3">
              [ EXCLUSIVE COVENANT ]
            </span>
            
            <h3 
              className="text-white text-3xl md:text-5xl font-black leading-none mb-4 uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              TRAIN ABOVE <br className="hidden sm:inline"/> THE CHAOS.
            </h3>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
              Escape the basement and train under the sky. Our 4,000 sq ft elevated artificial turf is equipped for heavy sled pushes, power battle ropes, tire flips, and high-energy sunset conditioning.
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              
              <div className="flex flex-col items-start gap-1">
                <Sun className="text-[#F5C518] w-4 h-4" />
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider mt-1">
                  SUNSET SESSIONS
                </span>
                <span className="text-[9px] font-mono text-white/40">
                  Late Evening Runs
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <CloudRain className="text-[#F5C518] w-4 h-4" />
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider mt-1">
                  ALL-WEATHER
                </span>
                <span className="text-[9px] font-mono text-white/40">
                  Imported Drainage
                </span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <ShieldCheck className="text-[#F5C518] w-4 h-4" />
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider mt-1">
                  HIGH GRIP
                </span>
                <span className="text-[9px] font-mono text-white/40">
                  Heavy Sled Rated
                </span>
              </div>

            </div>
          </div>

          {/* Right: Graphic Barcode Entry Ticket Widget */}
          <div className="w-full lg:w-[40%] flex flex-col md:flex-row lg:flex-col items-stretch p-6 backdrop-blur-xl bg-black/85 border border-[#F5C518]/30 rounded-2xl gap-5 pointer-events-auto shadow-[0_20px_50px_rgba(245,197,24,0.15)] relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#F5C518] opacity-[0.03] rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col text-left flex-1">
              <h4 
                className="text-white text-xl font-bold uppercase tracking-wide mb-1"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                TURF SESSION PASS
              </h4>
              <p className="text-[10px] font-mono text-white/45 uppercase tracking-wider">
                Mathura elevated training card
              </p>

              {/* Styled Vector Barcode */}
              <div className="my-5 flex flex-col gap-1 items-center bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="w-full h-8 flex items-center justify-between opacity-80">
                  {/* Draw variable width bars */}
                  {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3, 1, 2, 2, 1, 3, 1, 4, 1, 2].map((width, i) => (
                    <div 
                      key={i} 
                      className="bg-white h-full" 
                      style={{ width: `${width}px` }} 
                    />
                  ))}
                </div>
                <span className="text-[7.5px] font-mono tracking-[0.4em] text-white/50 mt-1 uppercase">
                  *LIONS-TURF-MTR-2026*
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#F5C518] text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white shrink-0 self-center md:self-end lg:self-stretch w-full md:w-auto lg:w-full text-center"
            >
              <span>CLAIM FREE PASS</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
