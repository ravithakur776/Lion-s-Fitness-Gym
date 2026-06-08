"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sun, Wind, Compass, Shield } from "lucide-react";

export function RooftopTurf() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background Parallax & Scale
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.12]);
  
  // Staggered Title Parallax (shifts up and fades out)
  const titleY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  // Foreground elements reveal (opacities and positions)
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.6, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.25, 0.6, 1], [80, 0, 0]);
  
  // Secondary image card slide-in (slides from right, slightly rotated)
  const cardX = useTransform(scrollYProgress, [0.2, 0.6, 1], ["60px", "0px", "0px"]);
  const cardRotate = useTransform(scrollYProgress, [0.2, 0.6], [6, -2]);

  return (
    <section
      id="rooftop"
      ref={containerRef}
      className="relative bg-[#020202]"
      style={{ height: "200vh" }} // Extra scroll height for sticky frame
    >
      
      {/* ─── Sticky Container ─── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* ─── Background Parallax Image ─── */}
        <motion.div className="absolute inset-0 w-full h-full z-0" style={{ scale: bgScale }}>
          <Image
            src="/real-assets/11.jpg"
            alt="Exclusive open-air rooftop turf at Lion's Fitness Mathura"
            fill
            quality={100}
            className="object-cover contrast-[1.15] brightness-[0.35]"
            priority
          />
          {/* Dark gradients for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-black/80" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#020202] to-transparent z-10" />
        </motion.div>

        {/* ─── Golden Hour Sunset Light Flare Overlay ─── */}
        <div
          className="absolute right-0 top-0 w-[60vw] h-[60vw] rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-35 z-10"
          style={{
            background: "radial-gradient(circle at top right, rgba(245,197,24,0.45) 0%, rgba(245,197,24,0.05) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Dynamic Station Tag */}
        <div className="absolute top-6 left-6 z-25 pointer-events-none font-mono text-[9px] tracking-[0.25em] text-[#F5C518] uppercase">
          // SYSTEM STATION: SKYLINE COLOSSEUM / LEVEL 4
        </div>

        {/* ─── Massive Parallax Stencil Header (Initial State) ─── */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none px-4"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 
            className="text-center leading-[0.78] tracking-tighter text-transparent uppercase stroke-white/10"
            style={{ 
              fontFamily: "var(--font-bebas)", 
              fontSize: "clamp(4.5rem, 15vw, 15rem)",
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.08)"
            }}
          >
            THE SKYLINE
            <br />
            <span
              className="inline-block transform rotate-[-4deg] text-[#F5C518] drop-shadow-[0_12px_30px_rgba(245,197,24,0.4)] px-3 py-1 origin-center"
              style={{
                fontFamily: "var(--font-caveat)",
                fontSize: "clamp(5rem, 16vw, 15rem)",
                textTransform: "none",
                letterSpacing: "0.02em",
                WebkitTextStroke: "none"
              }}
            >
              Arena
            </span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-px bg-[#F5C518]" />
            <p className="text-[#F5C518] text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
              Mathura Refinery Skyline views
            </p>
            <div className="w-16 h-px bg-[#F5C518]" />
          </div>
        </motion.div>

        {/* ─── Scrolled Content Canvas: Story & Collage ─── */}
        <motion.div
          className="absolute inset-x-4 lg:inset-x-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-20 pointer-events-none"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          
          {/* Left: Premium Storytelling & Specs Card */}
          <div className="w-full lg:w-[50%] flex flex-col text-left p-8 md:p-10 backdrop-blur-xl bg-black/60 border border-white/5 rounded-3xl pointer-events-auto shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            
            <span className="text-[9px] font-mono font-extrabold text-[#F5C518] tracking-widest uppercase mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full animate-pulse" />
              [ SIGNATURE ADVANTAGE ]
            </span>
            
            <h3 
              className="text-white text-4xl md:text-5xl font-black leading-none mb-6 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              THE OXYGEN BIOME: <br className="hidden sm:inline"/> TRAIN UNBOUND.
            </h3>
            
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
              Escape the oxygen-starved basement. Lion&apos;s 4,000 sq ft elevated turf introduces natural ventilation, metabolic sunshine loading, and breathtaking sunset refinery views. We push heavy sleds, swing battle ropes, and flip tractor tires directly under the sky. This is training in its most raw, performance-driven state.
            </p>

            {/* Unique advantages grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              
              <div className="flex flex-col items-start gap-1">
                <Wind className="text-[#F5C518] w-5 h-5 mb-1" />
                <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">
                  PURE OXYGEN STACK
                </h5>
                <p className="text-[#9e9e9e] text-[9.5px] font-mono leading-normal mt-0.5">
                  Accelerate VO2 Max output in open-air ventilation.
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <Sun className="text-[#F5C518] w-5 h-5 mb-1" />
                <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">
                  METABOLIC LIGHT
                </h5>
                <p className="text-[#9e9e9e] text-[9.5px] font-mono leading-normal mt-0.5">
                  Train under direct natural UV for optimal hormone synthesis.
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <Compass className="text-[#F5C518] w-5 h-5 mb-1" />
                <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">
                  100FT SLED LINE
                </h5>
                <p className="text-[#9e9e9e] text-[9.5px] font-mono leading-normal mt-0.5">
                  Heavy-duty high grip turf rated for elite loaded drags.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Floating Collage Image & Pass Ticket */}
          <div className="w-full lg:w-[45%] flex flex-col md:flex-row lg:flex-col gap-6 items-center lg:items-end justify-center pointer-events-auto">
            
            {/* Midground Collage image card */}
            <motion.div
              className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hidden sm:block shrink-0"
              style={{
                x: cardX,
                rotate: cardRotate
              }}
            >
              <Image
                src="/real-assets/15.jpg"
                alt="Loaded sled push on rooftop turf"
                fill
                quality={90}
                className="object-cover filter contrast-[1.12] brightness-[0.7] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 z-10 px-2 py-0.5 bg-[#F5C518] text-black font-mono text-[8px] font-bold uppercase rounded">
                ZONE: METABOLIC TURF
              </div>
            </motion.div>

            {/* Skyline Arena Ticket Entry pass */}
            <div className="w-full max-w-[340px] bg-black/85 border border-[#F5C518]/30 rounded-3xl p-6 shadow-[0_20px_50px_rgba(245,197,24,0.1)] relative overflow-hidden flex flex-col">
              
              {/* Backglow decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5C518]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start mb-4">
                <div className="text-left">
                  <h4 className="text-white text-lg font-black tracking-wide leading-none uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                    SKYLINE ENTRY PASS
                  </h4>
                  <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">
                    GATE: REF-NH2-BAD / MATHURA
                  </span>
                </div>
                <Shield className="text-[#F5C518] w-5 h-5 shrink-0" />
              </div>

              {/* Barcode SVG */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 flex flex-col gap-1 items-center mb-6">
                <div className="w-full h-8 flex items-center justify-between opacity-75">
                  {[1, 3, 1, 2, 4, 1, 3, 2, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3].map((width, i) => (
                    <div 
                      key={i} 
                      className="bg-white h-full" 
                      style={{ width: `${width}px` }} 
                    />
                  ))}
                </div>
                <span className="text-[7.5px] font-mono tracking-[0.3em] text-white/40 uppercase">
                  *LIONS-SKY-ARENA-PASS*
                </span>
              </div>

              <a
                href="#contact"
                className="group relative w-full overflow-hidden bg-[#F5C518] text-black py-4 font-black text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                <span>BOOK ARENA SESSION</span>
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
