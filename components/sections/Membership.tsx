"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { Activity, ClipboardList, Shield, UserCheck, ArrowRight, Star } from "lucide-react";

const perks = [
  {
    icon: Activity,
    title: "FITNESS EVALUATION",
    desc: "Assess biomechanical limits",
  },
  {
    icon: UserCheck,
    title: "COACH CONSULTATION",
    desc: "1-on-1 strategy alignment",
  },
  {
    icon: ClipboardList,
    title: "CUSTOM LOAD SCHEDULING",
    desc: "Tailored recovery macro splits",
  },
  {
    icon: Shield,
    title: "LOCKER & ACCREDITATION",
    desc: "Secure private access",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Membership() {
  return (
    <section id="membership" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Golden Cap rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── Left Side: Headline & Custom Perk Badges (col-span-7) ─── */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // SEC-08 MEMBERSHIP DOCKET
              </span>
            </div>

            <h2
              className="text-white uppercase leading-[0.88] tracking-tighter mb-6"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6vw, 5.2rem)",
              }}
            >
              ACCESS THE BIOME. <br/>
              JOIN THE <span className="text-[#F5C518]">LION FAMILY</span>.
            </h2>
            
            <p className="text-[#bfbfbf] text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Initiate your membership registry. We don&apos;t sell access to mirrors or speakers. We open-source a highly calibrated training biome designed for raw physical results. Book your complimentary pass below.
            </p>

            {/* Custom Circular Perk Badges Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {perks.map((perk, idx) => {
                const IconComponent = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#F5C518]/25 transition-colors duration-300"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-9 h-9 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/25 text-[#F5C518] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,197,24,0.15)]">
                      <IconComponent size={16} />
                    </div>
                    
                    <div className="flex flex-col">
                      <h4 className="text-white font-extrabold text-[11px] tracking-widest font-mono uppercase mb-0.5">
                        {perk.title}
                      </h4>
                      <p className="text-white/45 text-xs">
                        {perk.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

          {/* ─── Right Side: Premium "Iron Pass" Member Card (col-span-5) ─── */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] aspect-[1.586/1] rounded-3xl overflow-hidden border border-[#F5C518]/30 hover:border-[#F5C518]/70 shadow-[0_30px_70px_rgba(0,0,0,0.8)] transition-all duration-500 group"
              style={{
                boxShadow: "0 25px 50px -12px rgba(245, 197, 24, 0.1)"
              }}
            >
              
              {/* Gym Image Backplate with High Grayscale Gradients */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/real-assets/16.jpg"
                  alt="Lion's member pass background texture"
                  fill
                  className="object-cover filter grayscale contrast-125 brightness-[0.28] transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/45 to-[#F5C518]/5" />
              </div>

              {/* HSL Gold Metallic Border Reflection Glow */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#F5C518]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

              {/* Pass Card Content HUD */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between text-left">
                
                {/* Header: Brand and Coordinates */}
                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                  <div className="flex flex-col">
                    <span className="text-white text-base font-black tracking-widest leading-none uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                      LION ACCESS PASS
                    </span>
                    <span className="text-[7.5px] font-mono text-white/35 uppercase tracking-widest mt-0.5">
                      MATHURA REF-NH2-BAD
                    </span>
                  </div>
                  {/* Miniature Shield Seal */}
                  <div className="w-7 h-7 rounded bg-[#F5C518]/10 border border-[#F5C518]/25 flex items-center justify-center text-[#F5C518]">
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>

                {/* Body: Membership Tier details */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[7.5px] font-mono text-[#F5C518] tracking-widest uppercase">
                        PASS TIER STATUS:
                      </span>
                      <span className="text-white text-2xl font-black leading-none uppercase tracking-wide" style={{ fontFamily: "var(--font-bebas)" }}>
                        COMPLIMENTARY
                      </span>
                    </div>
                    {/* Live countdown urgency badge */}
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-[7.5px] font-mono text-white/30 tracking-widest uppercase">SLOTS:</span>
                      <span className="text-[9px] font-mono font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                        14 PASSES LEFT
                      </span>
                    </div>
                  </div>

                  {/* SVG Barcode & Action Trigger */}
                  <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/5">
                    
                    {/* Tiny Barcode */}
                    <div className="flex flex-col gap-0.5 w-[50%] opacity-60">
                      <div className="w-full h-5 flex items-center justify-between">
                        {[1, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 1, 2, 2, 1, 3].map((width, i) => (
                          <div 
                            key={i} 
                            className="bg-white h-full" 
                            style={{ width: `${width}px` }} 
                          />
                        ))}
                      </div>
                      <span className="text-[6px] font-mono text-white/35 tracking-widest uppercase">
                        *LIONS-MTR-PASS*
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F5C518] hover:bg-white text-black font-extrabold text-[9px] tracking-widest uppercase rounded-lg transition-colors duration-300"
                    >
                      <span>SECURE SPOT</span>
                      <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
