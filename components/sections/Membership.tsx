"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, ClipboardList, Shield, UserCheck, ArrowRight } from "lucide-react";

const perks = [
  {
    icon: Activity,
    text: "Free Fitness Assessment",
  },
  {
    icon: UserCheck,
    text: "Expert Trainer Consultation",
  },
  {
    icon: ClipboardList,
    text: "Custom Workout Plan",
  },
  {
    icon: Shield,
    text: "Locker & Shower Facility",
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative bg-[#0A0A0A] py-16 md:py-20 overflow-hidden">
      
      {/* Horizontal glowing borders to cap the banner */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Container */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12 border border-[#F5C518]/20 bg-gradient-to-br from-[#121212] via-[#090909] to-[#050505]"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
        >
          {/* Real Gym Image Background Overlay for Texture & Depth */}
          <div className="absolute inset-0 z-0 opacity-[0.18]">
            <Image
              src="/real-assets/16.jpg"
              alt="Gym floor background texture"
              fill
              className="object-cover filter grayscale contrast-[1.3] brightness-[0.25]"
              quality={80}
            />
            {/* Inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black" />
          </div>
          
          {/* Subtle logo background */}
          <div className="absolute right-0 bottom-0 top-0 opacity-[0.03] pointer-events-none select-none w-1/3 z-10">
            <div className="relative w-full h-full">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-[#F5C518]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Block: Heading & Perk Badges */}
            <div className="w-full lg:w-3/5 text-left">
              <h2
                className="text-white uppercase leading-[0.95] mb-4"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                }}
              >
                Join the <span className="text-[#F5C518]">Lion&apos;s Fitness</span> Family Today!
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-8 max-w-xl">
                Book your Free trial and take the first step towards a stronger you!
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map((perk, idx) => {
                  const IconComponent = perk.icon;
                  return (
                    <motion.div
                      key={perk.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#F5C518] text-black flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(245,197,24,0.2)]">
                        <IconComponent size={14} />
                      </div>
                      <span className="text-white/80 font-bold text-xs md:text-sm tracking-wide">
                        {perk.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Block: CTA Form/Button Card */}
            <div className="w-full lg:w-2/5 max-w-md shrink-0">
              <a
                href="#contact"
                className="group block p-8 rounded-xl border border-dashed border-[#F5C518]/30 bg-black/60 hover:bg-black/90 hover:border-[#F5C518]/60 transition-all duration-300 text-center relative overflow-hidden"
              >
                {/* Background pulse highlight */}
                <div className="absolute inset-0 bg-[#F5C518]/5 group-hover:bg-[#F5C518]/10 transition-colors pointer-events-none" />
                
                <h3
                  className="text-white font-bold leading-none mb-2 text-2xl uppercase tracking-wider group-hover:text-[#F5C518] transition-colors"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Book Free Trial
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#F5C518] mb-6">
                  Limited Slots Available!
                </p>

                {/* Arrow Action */}
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5C518] text-black font-bold text-xs tracking-widest uppercase group-hover:bg-white transition-colors w-full rounded-lg">
                  <span>Secure Your Spot</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
