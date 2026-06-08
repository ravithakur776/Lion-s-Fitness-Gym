"use client";

import { motion } from "framer-motion";
import { Users, Dumbbell, Award, Flame, Star } from "lucide-react";

const statsList = [
  { label: "ACTIVE MEMBERS", value: "1500+", icon: Users },
  { label: "LION'S STANDARD", value: "ESTD 2021", icon: Star },
  { label: "CERTIFIED COACHES", value: "10+", icon: Dumbbell },
  { label: "MATHURA BIOME", value: "NH-2 ZONE", icon: Flame },
  { label: "YEARS LEGACY", value: "5+", icon: Award },
];

export function Stats() {
  // Duplicate array once to enable seamless infinite scroll looping
  const items = [...statsList, ...statsList];

  return (
    <div className="relative z-30 w-full overflow-hidden bg-black py-4 md:py-6">
      
      {/* ─── Skewed Brutalist Ticker Ribbon ─── */}
      <div className="relative w-full flex items-center bg-[#F5C518] py-4 transform -rotate-1 sm:-rotate-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Infinite Scroll Container */}
        <motion.div
          className="flex whitespace-nowrap gap-12 sm:gap-20 items-center pl-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            },
          }}
        >
          {items.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={`${stat.label}-${idx}`}
                className="flex items-center gap-4 text-black font-bold select-none cursor-default group"
              >
                {/* Icon */}
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center bg-black/5 group-hover:bg-black group-hover:text-[#F5C518] transition-colors duration-300">
                  <IconComponent size={14} className="stroke-[2.5]" />
                </div>

                {/* Stat Value */}
                <span
                  className="leading-none text-2xl sm:text-3xl tracking-tight uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {stat.value}
                </span>

                {/* Stat Label */}
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-black/85 uppercase">
                  {stat.label}
                </span>

                {/* Visual Separator */}
                <span className="ml-4 text-black/40 text-xs font-mono font-black select-none">
                  //
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Top & Bottom Border Accents */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-black/10" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-black/10" />
      </div>

    </div>
  );
}
