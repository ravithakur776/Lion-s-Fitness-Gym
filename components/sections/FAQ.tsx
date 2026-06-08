"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#020202] py-24 md:py-36 overflow-hidden">
      
      {/* Top cap dividing line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ─── Left Side: Sticky Display Column (col-span-5) ─── */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#F5C518] uppercase font-mono">
                // SEC-09 SUPPORT LOGS
              </span>
            </div>
            
            <h2
              className="text-white uppercase leading-[0.88] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 6.5vw, 5.8rem)",
              }}
            >
              QUESTIONS? <br/>
              <span className="text-[#F5C518]">WE ANSWER.</span>
            </h2>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Read through our baseline logs regarding training protocols, coordinates, and membership schedules. If your question is not resolved here, connect directly via the registry terminal below.
            </p>

            {/* Giant decorative numbering watermark */}
            <span 
              className="text-[12vw] font-black uppercase text-transparent tracking-tighter opacity-[0.03] select-none block leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.4)",
              }}
            >
              FAQS // 09
            </span>
          </div>

          {/* ─── Right Side: Monospace-Indexed Accordions (col-span-7) ─── */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {FAQS.map((faq, i) => {
              const isActive = activeFaq === i;
              const numStr = String(i + 1).padStart(2, "0");

              return (
                <div
                  key={i}
                  className="border rounded-2xl bg-black/45 hover:bg-black/60 transition-all duration-300 overflow-hidden text-left"
                  style={{ 
                    borderColor: isActive ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.05)",
                    boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.6)" : "none"
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isActive ? null : i)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between focus-visible:outline-none focus-visible:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4 md:gap-6 flex-1 pr-4">
                      
                      {/* Monospace Indexing */}
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#F5C518] opacity-70">
                        [{numStr}]
                      </span>

                      {/* Question Text */}
                      <h3
                        className="font-black text-sm md:text-base uppercase tracking-wider transition-colors duration-300 flex-1 leading-snug"
                        style={{ 
                          fontFamily: "var(--font-bebas)",
                          color: isActive ? "#F5C518" : "#FFFFFF" 
                        }}
                      >
                        {faq.question}
                      </h3>

                    </div>

                    {/* Styled Trigger Icon */}
                    <div className={`shrink-0 p-2 rounded-xl border ${isActive ? 'bg-[#F5C518] text-black border-[#F5C518]' : 'bg-white/5 text-white/50 border-white/5'} transition-all duration-300`}>
                      {isActive ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                    </div>
                  </button>

                  {/* Accordion Slide Animation */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-white/5 pt-5 ml-10 md:ml-12 text-xs md:text-sm text-white/60 leading-relaxed max-w-2xl">
                          <p className="border-l-2 border-[#F5C518]/30 pl-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
