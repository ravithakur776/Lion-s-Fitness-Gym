"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { ArrowRight, Flame, BarChart2, Shield } from "lucide-react";

const programs = [
  {
    id: "strength",
    title: "Strength Protocol",
    image: "/real-assets/3.jpg",
    height: "h-[380px] lg:h-[460px]",
    intensity: "EXTREME",
    focus: "Hypertrophy & Power",
    coach: "Vikram Singh",
  },
  {
    id: "weight-loss",
    title: "Vaporize Fat",
    image: "/real-assets/6.jpg",
    height: "h-[440px] lg:h-[540px]",
    intensity: "HIGH",
    focus: "Metabolic Conditioning",
    coach: "Pooja Sharma",
  },
  {
    id: "muscle-gain",
    title: "Anabolic Build",
    image: "/real-assets/4.jpg",
    height: "h-[380px] lg:h-[460px]",
    intensity: "HIGH",
    focus: "Lean Mass Synthesis",
    coach: "Vikram Singh",
  },
  {
    id: "cardio",
    title: "HIIT Endurance",
    image: "/real-assets/5.jpg",
    height: "h-[440px] lg:h-[540px]",
    intensity: "EXTREME",
    focus: "Cardio V02 Max",
    coach: "Rahul C.",
  },
  {
    id: "zumba",
    title: "Aerobic Motion",
    image: "/real-assets/13.jpg",
    height: "h-[380px] lg:h-[460px]",
    intensity: "MEDIUM",
    focus: "Rhythm & Agility",
    coach: "Karan Tyagi",
  },
  {
    id: "personal",
    title: "Elite Coaching",
    image: "/real-assets/18.jpg",
    height: "h-[440px] lg:h-[540px]",
    intensity: "MAXIMUM",
    focus: "1-on-1 Biomechanics",
    coach: "Vikram Singh",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Programs() {
  return (
    <section id="programs" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Visual Accent Glows */}
      <div className="absolute left-[-10%] top-[30%] w-[50vw] h-[50vw] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(245,197,24,0.2) 0%, transparent 70%)" }}
      />
      <div className="absolute right-[-10%] bottom-[10%] w-[50vw] h-[50vw] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, rgba(245,197,24,0.2) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="text-left max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // SYSTEM TRAINING MODULES
              </span>
            </div>
            <h2
              className="text-white uppercase leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6.5vw, 6rem)",
              }}
            >
              CHOOSE YOUR <span className="text-[#F5C518]">PROTOCOL</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base mt-4 leading-relaxed">
              No generic routines. Every program represents an intense discipline designed for physical transformation. Select your path and initiate setup.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F5C518] text-black font-extrabold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(245,197,24,0.35)] shrink-0 self-start md:self-end"
          >
            <span>Initialize Pass</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Asymmetric Staggered Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className={`relative ${program.height} group overflow-hidden rounded-xl border border-white/5 hover:border-[#F5C518]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer`}
            >
              {/* Background Image with Zoom */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                quality={90}
                className="object-cover transition-transform duration-700 ease-out transform scale-[1.03] group-hover:scale-108 filter grayscale group-hover:grayscale-0 brightness-[0.45] group-hover:brightness-[0.35] contrast-[1.1]"
              />

              {/* Gold gradient overlay on active/hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" 
                aria-hidden="true"
              />

              {/* Decorative Corner Borders (Awwwards Style Draw lines) */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#F5C518]/60 group-hover:w-1/3 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#F5C518]/60 group-hover:h-1/3 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#F5C518]/60 group-hover:w-1/3 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#F5C518]/60 group-hover:h-1/3 transition-all duration-500" />

              {/* Core Content HUD */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
                
                {/* Top: Intensity Info */}
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-[#F5C518] bg-black/60 border border-[#F5C518]/30 px-2.5 py-1 rounded">
                    <Flame size={10} fill="currentColor" />
                    INTENSITY: {program.intensity}
                  </span>
                  <span className="text-[9px] font-mono text-white/30 tracking-widest">
                    // REG.0{program.id.length}
                  </span>
                </div>

                {/* Bottom: Dynamic Specs & CTA */}
                <div className="flex flex-col text-left">
                  
                  {/* Focus Badge */}
                  <span className="text-[9px] font-mono font-semibold tracking-[0.25em] text-[#F5C518] uppercase mb-2">
                    {program.focus}
                  </span>

                  {/* Program Title */}
                  <h3
                    className="text-white text-3xl font-black leading-none uppercase tracking-wide group-hover:text-[#F5C518] transition-colors"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {program.title}
                  </h3>

                  {/* Expanded HUD Section */}
                  <div className="h-0 opacity-0 group-hover:h-[60px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden flex flex-col gap-2.5 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                      <span className="flex items-center gap-1">
                        <BarChart2 size={10} />
                        COACH: {program.coach.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield size={10} />
                        PASS STATUS: AVAILABLE
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
