"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#0A0A0A] py-20 md:py-28 overflow-hidden">
      
      {/* Top glowing rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#F5C518] uppercase">
              FAQ
            </span>
          </div>
          <h2
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
            }}
          >
            Questions? <span className="text-[#F5C518]">We Answer</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isActive = activeFaq === i;
            return (
              <div
                key={i}
                className="border rounded-xl bg-black/40 hover:border-white/20 transition-all duration-300 overflow-hidden"
                style={{ borderColor: isActive ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setActiveFaq(isActive ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between focus-visible:outline-none focus-visible:bg-white/5 transition-colors"
                >
                  <h3
                    className="font-bold text-sm md:text-base uppercase tracking-wider transition-colors duration-300"
                    style={{ color: isActive ? "#F5C518" : "#FFFFFF" }}
                  >
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 ml-4 p-1.5 rounded-full ${isActive ? 'bg-[#F5C518] text-black' : 'bg-white/5 text-white'} transition-colors duration-300`}>
                    {isActive ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-white/5 pt-4 text-xs md:text-sm text-white/60 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
